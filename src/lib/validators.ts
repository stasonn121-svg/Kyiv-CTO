export function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (trimmed.length < 2) return "Ім'я має містити щонайменше 2 символи";
  if (trimmed.length > 100) return "Ім'я занадто довге";
  return null;
}

export function validatePhone(phone: string): string | null {
  const digits = phone.replace(/[\s\-\(\)\+]/g, "");
  if (!/^\d{10,13}$/.test(digits)) {
    return "Невірний формат телефону";
  }
  return null;
}

export function sanitize(text: string): string {
  return text
    .trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .slice(0, 1000);
}
