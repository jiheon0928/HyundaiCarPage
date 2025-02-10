export function blackbutton() {
  const button = document.querySelector(".company_copyright_button");
  const copyrightList = document.querySelector(".company_copyright_list");

  button.addEventListener("click", () => {
    copyrightList.style.display =
      copyrightList.style.display === "none" ? "flex" : "none";
  });
}
