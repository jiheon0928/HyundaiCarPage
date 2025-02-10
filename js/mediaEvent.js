export const setupScrollHandler = () => {
  let lastScrollTop = 0;
  const header = document.querySelector("#header");
  const navsWrap = document.querySelector(".navs__wrap");
  const searchWrap = document.querySelector(".search__wrap");

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    console.log(currentScroll);
    const isScrolling = currentScroll > lastScrollTop;

    header.style.transform = `translateY(${isScrolling ? "-100%" : "0%"})`;

    navsWrap.style.top = searchWrap.style.top = isScrolling
      ? `${window.visualViewport.offsetTop}px`
      : "80px";

    lastScrollTop = Math.max(currentScroll, 0);
  });
};
