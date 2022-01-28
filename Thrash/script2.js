//PEXELS.COM API KEY FOR PICTURES

const auth = "563492ad6f91700001000001de5264a08d1d4d0f9bc8d7282feafd64";
const next = document.querySelector(".next");
const input = document.querySelector("input");
const searchbutton = document.querySelector(".searchbutton");

let pagenr = 1;
let search = false;
//this function makes us allowed to research inside pexels.com
let query = "";

input.addEventListener("input", (e) => {
  e.preventDefault();
  query = e.target.value;
});


//1
async function curatedPhotos(pagenr) {

  //Link From pexels.com curated Photos
  const data = await fetch(`https://api.pexels.com/v1/curated?per_page=15&page=${pagenr}`,
    {
      method: "Get",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },

    }
  );
  const result = await data.json();
  result.photos.forEach(photo => {
    const pic = document.createElement("div");
    pic.innerHTML = `<img src=${photo.src.large} >
   <p>Photo : ${photo.photographer}</p>
   <a href=${photo.src.large}>Download</a>
   `;
    document.querySelector(".gallery").appendChild(pic);

  });
}

//2 we just copied code number one and changed to searchPhotos (15 pic in page)

async function searchPhotos(query, pagenr) {
  //Link From pexels.com curated Photos

  const data = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=100`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },

    }
  );
  const result = await data.json();
  result.photos.forEach((photo) => {
    const pic = document.createElement("div");
    pic.innerHTML = `<img src=${photo.src.large}>
   <p>Photo : ${photo.photographer}</p>
   <a href=${photo.src.large}>Download</a>
   `;
    document.querySelector(".gallery").appendChild(pic);
  });
}

searchbutton.addEventListener("click", () => {
  if (input.value === "") return;
  clear();
  search = true;
  searchPhotos(query, pagenr);
});
function clear() {
  input.value = "";
  document.querySelector(".gallery").innerHTML = "";
  pagenr = 1;
}


//This to acces the next btn for go to the next page

next.addEventListener("click", () => {
  if (!search) {
    pagenr++;
    curatedPhotos(pagenr);

  } else {

    if (query.value === "") return;
    pagenr++;
    searchPhotos(query, pagenr)
  }
});
curatedPhotos(pagenr);