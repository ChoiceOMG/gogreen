export const FixPage = (
  isFixed: boolean,
  elementRef: React.RefObject<HTMLElement>
) => {
  if (isFixed && elementRef.current) {
    const windowHeight = window.innerHeight;
    const elementHeight = elementRef.current.offsetHeight;
    const elementTopPosition =
      elementRef.current.getBoundingClientRect().top + window.scrollY;
    const centeredPosition =
      elementTopPosition + elementHeight / 2 - windowHeight / 2;

    window.scrollTo({
      top: centeredPosition,
      behavior: 'auto'
    });
    document.documentElement.style.overflow = 'hidden';
    document.body.style.paddingRight = '9px';
  } else {
    document.documentElement.style.overflow = '';
    document.body.style.paddingRight = '';
  }
};
