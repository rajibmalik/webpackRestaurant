import officePhoto from "../images/officePhoto.jpeg";

export const homeTab = (function () {
  function createHomeTab() {
    const homeTabContainer = document.createElement("div");
    homeTabContainer.id = "homeTabContainer";

    const header = createHeader();
    const section = createSection();

    homeTabContainer.appendChild(header);
    homeTabContainer.appendChild(section);

    return homeTabContainer;
  }

  function createHeader() {
    const headerContainer = document.createElement("div");
    headerContainer.id = "homeHeaderContainer";

    const header = document.createElement("h1");
    header.id = "homeHeader";
    header.textContent = "Dunder Mifflin";

    headerContainer.appendChild(header);

    return headerContainer;
  }

  function createSection() {
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("homeSection");

    const sectionHeaderContainer = document.createElement("div");
    sectionHeaderContainer.classList.add("homeSectionHeaderContainer");

    const sectionHeader = document.createElement("h3");
    sectionHeader.classList.add("homeSectionHeader");
    sectionHeader.textContent = "The people person's paper people";

    const informationContainer = document.createElement("div");
    informationContainer.classList.add("homeInformationContainer");

    const information = document.createElement("p");
    information.classList.add("homeInformation");
    information.textContent = `Proudly serving Scranton and beyond with the finest paper products.
       Whether you need reams for your business or cardstock for your crafts
       we're the best and only paper company you will ever need.`;

    sectionHeaderContainer.appendChild(sectionHeader);
    informationContainer.appendChild(information);

    sectionContainer.appendChild(sectionHeaderContainer);
    sectionContainer.appendChild(informationContainer);

    return sectionContainer;
  }

  return { createHomeTab };
})();
