import { Character } from "../pages/Character";
import { Home } from "../pages/Home";
import { Error404 } from "../pages/Error404";

import { getHash } from "../utils/getHash";
import { resolve } from "../utils/resolve";

const routes = {
  "/": Home,
  "/:id": Character,
};

export const router = async (query = "") => {
  const app = document.getElementById("app");

  let hash = getHash();
  let route = resolve(hash);

  let render = routes[route] ? routes[route] : Error404;
  app.innerHTML = await render(query);
};
