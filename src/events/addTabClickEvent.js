import { aboutTab } from "../tabs/aboutTab";

export function addTabClickEvent() {
  const aboutBtn = document.querySelector("#aboutButton");
  const homeBtn = document.querySelector("#homeButton");
  const menuBtn = document.querySelector("#menuButton");
  const tabBtns = document.querySelectorAll(".tabButton");
  const aboutTabContainer = document.querySelector("#aboutTabContainer");
  const servicesTabContainer = document.querySelector("#servicesTabContainer");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((btn) => {
        aboutTabContainer.classList.remove("active");
      });

      if (btn.id === "aboutButton") {
        aboutTabContainer.classList.add("active");
      } else if (btn.id === "servicesButton") {
        servicesTabContainer.classList.add("active");
      }
    });
  });
}
