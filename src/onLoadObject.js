export const onLoadObject = (function () {
  const content = document.querySelector("#content");

  function loadImg() {
    const imgContainer = document.createElement("div");
    imgContainer.id = "restaurantImgContainer";

    const img = document.createElement("img");
    img.id = "restaurantImg";
    img.src = "./images/restaurant.jpg";
    img.alt = "restauraunt.img";

    imgContainer.appendChild(img);
    content.appendChild(imgContainer);
  }

  function loadHeader() {
    const headerContainer = document.createElement("div");
    headerContainer.id = "contentHeaderContainer";

    const header = document.createElement("h1");
    header.id = "contentHeader";
    header.textContent = "Restaurant";

    headerContainer.appendChild(header);
    content.appendChild(headerContainer);
  }

  function loadParagraph() {
    const informationContainer = document.createElement("div");
    informationContainer.id = "contentInformationContainer";

    const paragraph = document.createElement("p");
    paragraph.id = "contentText";
    paragraph.textContent = "The restaurant is amazing";

    informationContainer.appendChild(paragraph);
    content.appendChild(informationContainer);
  }

  return { loadImg, loadHeader, loadParagraph };
})();
