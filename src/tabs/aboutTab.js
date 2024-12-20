import { sectionData } from "./data/aboutTabData";
export const aboutTab = (function () {
  const content = document.querySelector("#content");

  function createHeader() {
    const headerContainer = document.createElement("div");
    headerContainer.id = "headerContainer";

    const header = document.createElement("h1");
    header.id = "aboutHeader";
    header.textContent = "About Us";

    headerContainer.appendChild(header);
    content.appendChild(headerContainer);
  }

  function createSections() {
    for (let i = 0; i < sectionData.length; i++) {
      createSection([sectionData[i].person]);
      createSection([sectionData[i].title]);
      createSection([sectionData[i].number]);
      createSection([sectionData[i].email]);
    }
  }

  function createSection(person, title, number, email) {
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("aboutSection");

    const sectionHeaderContainer = document.createElement("div");
    sectionHeaderContainer.classList.add("aboutSectionHeaderContainer");

    const sectionHeader = document.createElement("h3");
    sectionHeader.textContent = person;
    sectionHeader.classList.add("aboutSectionHeader");

    const informationContainer = document.createElement("div");
    informationContainer.classList.add("aboutSectionInformationContainer");

    const role = document.createElement("p");
    role.textContent = title;

    const contact = document.createElement("p");
    contact.textContent = number;

    const address = document.createElement("p");
    address.textContent = email;

    sectionHeaderContainer.appendChild(sectionHeader);
    informationContainer.appendChild(role);
    informationContainer.appendChild(contact);
    informationContainer.appendChild(address);
    sectionContainer.appendChild(sectionHeaderContainer);
    sectionContainer.appendChild(informationContainer);
    content.appendChild(sectionContainer);
  }

  return { createHeader, createSections };
})();
