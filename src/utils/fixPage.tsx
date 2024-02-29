export const FixPage = (isFixed: boolean) => {
  if (isFixed) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.paddingRight = '9px';
  } else {
    document.documentElement.style.overflow = '';
    document.body.style.paddingRight = '';
  }
};
