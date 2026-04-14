import { NextRequest, NextResponse } from "next/server";
import { sendToTelegram } from "@/lib/telegram";
import { validateName, validatePhone, sanitize } from "@/lib/validators";
import { isRateLimited } from "@/lib/rate-limit";

interface ContactRequestBody {
  name: string;
  phone: string;
  car?: string;
  service?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? request.headers.get("x-real-ip")
    ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Забагато запитів. Спробуйте через хвилину." },
      { status: 429 }
    );
  }

  let body: ContactRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Невірний формат запиту" },
      { status: 400 }
    );
  }

  const name = sanitize(body.name || "");
  const phone = sanitize(body.phone || "");
  const car = body.car ? sanitize(body.car) : undefined;
  const service = body.service ? sanitize(body.service) : undefined;
  const message = body.message ? sanitize(body.message) : undefined;

  const nameError = validateName(name);
  if (nameError) {
    return NextResponse.json({ error: nameError }, { status: 400 });
  }

  const phoneError = validatePhone(phone);
  if (phoneError) {
    return NextResponse.json({ error: phoneError }, { status: 400 });
  }

  const sent = await sendToTelegram({ name, phone, car, service, message });

  if (!sent) {
    return NextResponse.json(
      { error: "Не вдалося відправити заявку. Спробуйте пізніше або зателефонуйте нам." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
