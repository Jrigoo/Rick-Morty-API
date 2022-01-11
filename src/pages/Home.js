import { getCharacters } from "../utils/getCharacters";
import { getPagesNum } from "../utils/getPagesNum";

import { Error } from "../templates/Error";

const Home = async (query) => {
  const header = document.getElementById("header");
  header.style.display = "flex";

  const statusColor = {
    Alive: "#32CD32",
    unknown: "#008B8B",
    Dead: "#DC143C",
  };

  const { name } = query || "";
  const page = parseInt(location.hash.split("page=")[1]) || 1;

  const { data, error } = await getCharacters(page, name);

  const characters = data.results;
  const totalPages = data.info.pages;
  const pages = getPagesNum(page, totalPages);
  const _dots = totalPages > 10 ? (page < totalPages / 2 ? "" : "...") : "";
  const dots_ = totalPages > 10 ? (page > totalPages / 2 ? "" : "...") : "";
  const lastNumPage = totalPages === 1 ? "" : totalPages;

  const view = /* html */ `
    ${error ? Error() : ""}
    <div class="characters">
      ${characters
        .map(
          (ch) => /* html */ `
          <div class="character">
            <a href="#/${ch.id}">
              <img src="${ch.image}" alt="${ch.name}"/>
              <article class="character__info">
                <h1 class="character__info--name">${ch.name}</h1>
                <p class="character__info--location"><b>From </b> ${
                  ch.origin.name
                }</p>
                <div class="character__info--status">
                  <div class="statusIndicator" style="background-color: ${
                    statusColor[ch.status]
                  }"></div> 
                  <p>${ch.status} - ${ch.species}</p>
                </div>
              </article>
            </a>
          </div>`
        )
        .join("")}
        <div class="pages">
          <a href="#/?page=1"}>1</a>
          <p>${_dots}</p>
          ${pages
            .map((idx) => {
              if (page === idx) {
                return `<a href="#/?page=${idx}" id="currentPage">${idx}</a>`;
              } else {
                return `<a href="#/?page=${idx}">${idx}</a>`;
              }
            })
            .join("")}

          <p>${dots_}</p>
          <a href="#/?page=${lastNumPage}" }>${lastNumPage}</a>
        </div>
    </div>
    `;
  return view;
};

export { Home };
