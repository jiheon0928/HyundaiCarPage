const companyList = document.querySelector(".info_container_mobile_open");
const companyListbutton = document.querySelector(
  ".info_container_mobile_button"
);

export const footeropenbutton = () => {
  companyListbutton.addEventListener("click", () => {
    companyList.style.display =
      companyList.style.display == "block" ? "none" : "block";
    if (companyListbutton.style.transform === "rotate(180deg)") {
      companyListbutton.style.transform = "rotate(0deg)";
    } else {
      companyListbutton.style.transform = "rotate(180deg)";
    }
  });
};
