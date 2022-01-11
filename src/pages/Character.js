import { getCharacter } from "../utils/getCharacters";
import { getHash } from "../utils/getHash";

export const Character = async () => {
  const header = document.getElementById("header");
  header.style.display = "none";

  const id = getHash();
  const { image, name, episode, status, species, gender, origin, location } =
    await getCharacter(id);

  const statusColor = {
    Alive: "#32CD32",
    unknown: "#008B8B",
    Dead: "#DC143C",
  };

  const view = /* html */ `
      <div class="characInner">
        <img src="${image}" alt="${name}">
        <article class="characInner__info">
          <h1 class="characInner__info--name">${name}</h1>
          <div class="characInner__info--status">
            <div class="statusIndicator" style="background-color: ${statusColor[status]}"></div> 
            <p>${status} - ${species}</p>
          </div>
          <h2 class="characInner__info--item"><b>Episodes:</b> ${episode.length}</h2>
          <h2 class="characInner__info--item"><b>Gender:</b> ${gender}</h2> 
          <h2 class="characInner__info--item"><b>Origin:</b> ${origin.name}</h2>
          <h2 class="characInner__info--item"><b>Last Location:</b> ${location.name}</h2> 
        </article>
      </div>
    `;
  return view;
};
