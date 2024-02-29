export const FixPage = (
  isFixed: boolean,
  elementRef: React.RefObject<HTMLElement>
) => {
  if (isFixed && elementRef.current) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.paddingRight = '9px';
  } else {
    document.documentElement.style.overflow = '';
    document.body.style.paddingRight = '';
  }
};
