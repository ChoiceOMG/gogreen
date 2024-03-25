export const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

export const validatePhoneNumber = (phoneNumber: string) => {
  const regex = /^\+?[\d\-\(\)]{1,20}$/;
  return regex.test(phoneNumber);
};

export const validateCreditCardNumber = (number: string) => {
  const regex =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/; // Простая проверка на валидный номер кредитной карты
  return regex.test(number);
};

export const validateExpiryDate = (expiryDate: string): boolean => {
  const currentYear = new Date().getFullYear().toString().substr(-2); // Получаем последние две цифры текущего года
  const regex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/; // Регулярное выражение для формата MM/YY

  if (!expiryDate.match(regex)) {
    return false;
  }

  const month = expiryDate.split('/')[0];
  const year = expiryDate.split('/')[1];

  if (parseInt(month) > 12 || parseInt(month) < 1) {
    return false;
  }

  if (parseInt(year) < parseInt(currentYear)) {
    return false;
  }

  return true;
};
