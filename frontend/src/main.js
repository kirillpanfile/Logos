import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/style.scss";

//? Components
import components from "./components/UI";

if (process.env.NODE_ENV === "development") {
  console.log("%c Development Mode", "color: #ff0000; font-size: 20px;");
}

//* Create app
const app = createApp(App);

//* Register components
components.forEach((component) => {
  app.component(component.name, component);
});

//* Mount app
app.use(store).use(router).mount("#app");
