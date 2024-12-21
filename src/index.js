import "./styles.css";
import "./images/restaurant.jpg";
import { homeTab } from "./tabs/homeTab.js";
import { addTabClickEvent } from "./events/addTabClickEvent.js";

const content = document.querySelector("#content");
content.appendChild(homeTab.createHomeTab());

addTabClickEvent();
