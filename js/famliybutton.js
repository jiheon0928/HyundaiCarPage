export const famliysite = () => {
  const famliybutton = document.querySelector(".company_copyright_button2");
  const famliysite = document.querySelector(".cooperation_list");

  famliybutton.addEventListener("click", () => {
    famliysite.style.display =
      famliysite.style.display === "none" ? "flex" : "none";
  });
};
