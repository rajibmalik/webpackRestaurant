import { sectionData } from "./data/aboutTabData";
export const aboutTab = (function () {
  const content = document.querySelector("#content");

  function createAboutTab() {
    const aboutTabContainer = document.createElement("div");
    aboutTabContainer.id = "aboutTabContainer";

    const header = createHeader();
    const aboutSection = createSections();

    aboutTabContainer.appendChild(header);
    aboutTabContainer.appendChild(aboutSection);
    content.appendChild(aboutTabContainer);
  }

  function createHeader() {
    const headerContainer = document.createElement("div");
    headerContainer.id = "headerContainer";

    const header = document.createElement("h1");
    header.id = "aboutHeader";
    header.textContent = "About Us";

    headerContainer.appendChild(header);

    return headerContainer;

    // content.appendChild(headerContainer);
  }

  function createSections() {
    const aboutSectionContainer = document.createElement("div");
    aboutSectionContainer.id = "abouSectionContainer";

    for (let i = 0; i < sectionData.length; i++) {
      const person = sectionData[i];
      const aboutSection = createSection(
        person.name,
        person.title,
        person.number,
        person.email
      );
      aboutSectionContainer.appendChild(aboutSection);
    }
    return aboutSectionContainer;
    // content.appendChild(aboutSectionContainer);
  }

  function createSection(name, title, number, email) {
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("aboutSection");

    const sectionHeaderContainer = document.createElement("div");
    sectionHeaderContainer.classList.add("aboutSectionHeaderContainer");

    const sectionHeader = document.createElement("h3");
    sectionHeader.textContent = name;
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

    return sectionContainer;
    // content.appendChild(sectionContainer);
  }

  return { createAboutTab, createHeader, createSections };
})();
