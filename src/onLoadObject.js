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

  function loadHeader() {}

  function loadParagraph() {}

  return { loadImg, loadHeader, loadParagraph };
})();
