import "core-js/stable";
import "regenerator-runtime/runtime";

import "./styles/global.scss";
import "./styles/media.scss";

import { router } from "./routes";

const search = document.getElementById("search");
const lupa = document.getElementById("lupa");

const main = () => {
  let query = {
    name: search.value,
  };
  router(query);
};

window.addEventListener("load", router);
window.addEventListener("hashchange", () => {
  main();
  window.scrollTo(0, 0);
});
lupa.addEventListener("click", main);

search.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    main();
  }
});
