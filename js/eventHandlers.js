import { toggleDisplay } from "./utils.js";

export const setupLinkEvents = (linkUrlList) => {
  [...linkUrlList].forEach((v) => {
    document
      .querySelector("#" + v.id)
      ?.addEventListener("click", () => open(v.url));
  });
};

export const setupSearchToggle = () => {
  const searchIcon = document.querySelector("#searchIcon");
  const searchWrap = document.querySelector(".search__wrap");
  const navsWrap = document.querySelector(".navs__wrap");
  const closeBtn = document.querySelector("#close_btn");

  searchIcon.addEventListener("click", () => {
    const isHidden = searchWrap.style.display === "none";
    toggleDisplay(searchWrap, isHidden);
    toggleDisplay(navsWrap, !isHidden);
  });

  closeBtn.addEventListener("click", () => {
    toggleDisplay(searchWrap, false);
    toggleDisplay(navsWrap, true);
  });
};

export const setupClickDetailButton = () => {
  const DetailButton = document.querySelector(".Detail_button");
  const header = document.querySelector("#header");
  const navsWrap = document.querySelector(".navs__wrap");
  const searchWrap = document.querySelector(".search__wrap");

  DetailButton.addEventListener("click", () => {
    if (window.innerWidth <= 480) {
      header.style.transform = "translateY(-100%)";
      navsWrap.style.top = searchWrap.style.top = "0px";
    } else {
      header.style.transform = "translateY(0%)";
      navsWrap.style.top = searchWrap.style.top = "80px";
    }
  });
};
