export function formatPhoneNumber(phoneNumber: string): string | null {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const formattedNumber = match[1] + match[2] + match[3] + match[4];
    return formattedNumber.startsWith('1')
      ? '+' + formattedNumber
      : '+1' + formattedNumber;
  }
  return null;
}
