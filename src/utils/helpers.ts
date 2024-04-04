export function formatPhoneNumber(phoneNumber: string): string {
  let cleaned = phoneNumber.replace(/\D/g, '');

  if (cleaned.startsWith('1')) {
    cleaned = cleaned.substring(1);
  }

  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '+1' + match[1] + match[2] + match[3];
  }

  return phoneNumber;
}
