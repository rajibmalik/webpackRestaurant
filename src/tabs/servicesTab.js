import { servicesData } from "./data/servicesTabData";

export const servicesTab = (function () {
  function createServicesTab() {
    const servicesTabContainer = document.createElement("div");
    servicesTabContainer.id = "servicesTabContainer";

    const header = createHeader();
    const servicesSections = createSections();

    servicesTabContainer.appendChild(header);
    servicesTabContainer.appendChild(servicesSections);

    return servicesTabContainer;
  }

  function createHeader() {
    const headerContainer = document.createElement("div");
    headerContainer.id = "servicesHeaderContainer";

    const header = document.createElement("h1");
    header.id = "servicesHeader";
    header.textContent = "Services";

    headerContainer.appendChild(header);

    return headerContainer;
  }

  function createSections() {
    const data = servicesData;
    const servicesSectionContainer = document.createElement("div");
    servicesSectionContainer.id = "servicesSectionContainer";

    data.forEach((service) => {
      console.log("YO");
      const section = createSection(service.service, service.text);
      servicesSectionContainer.appendChild(section);
    });

    return servicesSectionContainer;
  }

  function createSection(service, text) {
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("servicesSection");

    const servicesHeaderContainer = document.createElement("div");
    servicesHeaderContainer.classList.add("servicesSectionHeaderContainer");

    const servicesHeader = document.createElement("h3");
    servicesHeader.textContent = "Services";
    servicesHeader.classList.add("serviceSectionHeader");

    const informationContainer = document.createElement("div");
    informationContainer.classList.add("servicesInformationContainer");

    const informationHeader = document.createElement("h3");
    informationHeader.classList.add("servicesSectionInformationHeader");
    informationHeader.textContent = service;

    const information = document.createElement("p");
    information.classList.add("servicesSectionInformation");
    information.textContent = text;

    servicesHeaderContainer.appendChild(servicesHeader);
    informationContainer.appendChild(informationHeader);
    informationContainer.appendChild(information);
    sectionContainer.appendChild(servicesHeaderContainer);
    sectionContainer.appendChild(informationContainer);

    return sectionContainer;
  }

  return { createServicesTab };
})();
