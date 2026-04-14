import { NextRequest, NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { CATEGORIES } from "@/lib/portfolio";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const WEBHOOK_SECRET = process.env.TELEGRAM_WEBHOOK_SECRET;

interface TelegramPhoto {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size?: number;
}

interface TelegramMessage {
  message_id: number;
  from?: { id: number; first_name: string };
  chat: { id: number; type: string };
  photo?: TelegramPhoto[];
  caption?: string;
}

interface TelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
}

export async function POST(request: NextRequest) {
  // Verify webhook secret
  if (WEBHOOK_SECRET) {
    const secret = request.headers.get("X-Telegram-Bot-Api-Secret-Token");
    if (secret !== WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const update: TelegramUpdate = await request.json();
  const message = update.message;

  if (!message?.photo || !BOT_TOKEN) {
    return NextResponse.json({ ok: true });
  }

  // Get the largest photo
  const photo = message.photo[message.photo.length - 1];
  const caption = message.caption ?? "";

  // Parse category from hashtag in caption
  const hashtagMatch = caption.match(/#(\S+)/);
  const hashtag = hashtagMatch?.[1]?.toLowerCase() ?? "";
  const category = CATEGORIES[hashtag];

  if (!category) {
    const available = Object.keys(CATEGORIES).map((k) => `#${k}`).join(", ");
    await sendTelegramMessage(
      message.chat.id,
      `❌ Вкажіть категорію хештегом у підписі до фото.\n\nДоступні: ${available}`
    );
    return NextResponse.json({ ok: true });
  }

  // Remove hashtag from caption for display
  const cleanCaption = caption.replace(/#\S+/g, "").trim();

  try {
    // Get file URL from Telegram
    const fileRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${photo.file_id}`
    );
    const fileData = await fileRes.json();
    const filePath = fileData.result?.file_path;

    if (!filePath) {
      await sendTelegramMessage(message.chat.id, "❌ Не вдалося отримати файл.");
      return NextResponse.json({ ok: true });
    }

    const fileUrl = `https://api.telegram.org/file/bot${BOT_TOKEN}/${filePath}`;

    // Upload to Cloudinary
    const url = await uploadToCloudinary(fileUrl, category, cleanCaption);

    await sendTelegramMessage(
      message.chat.id,
      `✅ Фото додано до портфоліо!\n\n📁 Категорія: ${hashtag}\n📝 Підпис: ${cleanCaption || "—"}\n🔗 ${url}`
    );
  } catch (error) {
    console.error("[Webhook] Upload error:", error);
    await sendTelegramMessage(message.chat.id, "❌ Помилка при завантаженні фото.");
  }

  return NextResponse.json({ ok: true });
}

async function sendTelegramMessage(chatId: number, text: string) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}
