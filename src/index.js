import "./styles.css";
import "./images/restaurant.jpg";
import { onLoadObject } from "./onLoadObject.js";
import { aboutTab } from "./tabs/aboutTab.js";
import { addTabClickEvent } from "./events/addTabClickEvent.js";

onLoadObject.loadImg();
onLoadObject.loadHeader();
onLoadObject.loadParagraph();

aboutTab.createAboutTab();
addTabClickEvent();
