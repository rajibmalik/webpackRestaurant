import { aboutTab } from "../tabs/aboutTab.js";
import { servicesTab } from "../tabs/servicesTab.js";

export function addTabClickEvent() {
  const tabBtns = document.querySelectorAll(".tabButton");
  const content = document.querySelector("#content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      content.innerHTML = "";

      if (btn.id === "aboutButton") {
        console.log("click");
        content.appendChild(aboutTab.createAboutTab());
      } else if (btn.id === "servicesButton") {
        content.appendChild(servicesTab.createServicesTab());
      }
    });
  });
}
