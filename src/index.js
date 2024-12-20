import "./styles.css";
import "./images/restaurant.jpg";
import { aboutTab } from "./tabs/aboutTab.js";
import { servicesTab } from "./tabs/servicesTab.js";
import { addTabClickEvent } from "./events/addTabClickEvent.js";

aboutTab.createAboutTab();
servicesTab.createServicesTab();

addTabClickEvent();
