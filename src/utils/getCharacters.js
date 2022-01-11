/* 

{
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}


*/

export const getCharacters = async (page = 0, name = "") => {
  const API = `https://rickandmortyapi.com/api/character/?page=${page}`;
  let res = await fetch(API + `&name=${name}`);
  let error = false;
  if (res.status === 404) {
    res = await fetch(API);
    data = await res.json();
    error = true;
    return { data, error };
  }

  let data = await res.json();
  return { data, error };
};

export const getCharacter = async (id) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};
