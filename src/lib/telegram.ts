const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export interface ContactFormData {
  name: string;
  phone: string;
  car?: string;
  service?: string;
  message?: string;
}

export async function sendToTelegram(data: ContactFormData): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("[Telegram] TELEGRAM_BOT_TOKEN або TELEGRAM_CHAT_ID не налаштовані");
    return false;
  }

  const lines = [
    "🔔 *Нова заявка з сайту*",
    "",
    `👤 *Ім'я:* ${esc(data.name)}`,
    `📞 *Телефон:* ${esc(data.phone)}`,
    data.car ? `🚗 *Авто:* ${esc(data.car)}` : null,
    data.service ? `🔧 *Послуга:* ${esc(data.service)}` : null,
    data.message ? `\n💬 *Повідомлення:*\n${esc(data.message)}` : null,
    "",
    `🕐 ${esc(new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" }))}`,
  ];

  const text = lines.filter(Boolean).join("\n");

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "MarkdownV2",
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("[Telegram] Помилка відправки:", res.status, err);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[Telegram] Мережева помилка:", error);
    return false;
  }
}

/** Escape спецсимволів MarkdownV2 */
function esc(text: string): string {
  return text.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, "\\$1");
}
