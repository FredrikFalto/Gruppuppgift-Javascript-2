const products = [
  {
    id: null,
    image: "img/apple-granny-smith-klass1-2.jpeg",
    alt: "Äpple",
    title: "Äpple",
    text: "Granny Smith klass 1",
    desc: "Granny Smith är ett blankt äpple i klargrön färg med vitt, fast fruktkött som har frisk och syrlig smak. När äpplet blivit riktigt moget är fruktköttet mjukare och smaken mer söt. Granny Smith har lång hållbarhet och är ett bra dessertäpple som passar bra till allt från pajer och kompotter till att äta rårivet eller ugnsstekt.",
  },
  {
    id: null,
    image: "img/kexchoklad-60g-cloetta.jpeg",
    alt: "Kexchoklad",
    title: "Kexchoklad",
    text: "Kexchoklad",
    desc: "De goda kexchokladen består idag av tre lager frasiga chokladöverdragna rån som blev grunden till dess namn, Kexchoklad. Överdraget på rånen består av en ljuvlig mjölkchoklad, vilket skapar en utsökt kombination. Chokladen finns i olika förpackningar och storlekar. Kexchoklad passar perfekt för många olika tillfällen för att fylla på med energi i skidbacken, på jobbet eller varför inte njuta av den på en picknic. Förpackningens färger och former är välkänd i alla åldrar och det klassiska rutmönstret känner de flesta igen.",
  },
  {
    id: null,
    image: "img/pepsi-max-4x150cl-1.jpeg",
    alt: "Pepsi max",
    title: "Pepsi max",
    text: "Pepsi max 4x150 cl",
    desc: "Njut av den uppfriskande smaken av Pepsi Max, maximum taste no sugar. Perfekt som törstsläckare och idealisk till din favoritmat. Pepsi är ett av världens starkaste varumärken och Pepsi Max är ett av de mest sålda läskvarumärkena i det sockerfria läsksegmentet. Pepsi Max är en sockerfri cola med en bra balans mellan söta och syrliga toner. Njut av din Pepsi Max för dig själv eller tillsammans med vänner och familj. Pepsi Max är en läsk som passar både vegetarianer och veganer. Pepsi Max bör serveras väl kyld, gärna med is. Varför inte prova en smaksatt cola, såsom Pepsi Max Lime? Våra burkar och flaskor kan återvinnas, så glöm inte att panta!",
  },
  {
    id: null,
    image: "img/07340062411561_c1l1.jpeg",
    alt: "Nötfärs",
    title: "Nötfärs",
    text: "Nötfärs 12%",
    desc: "Nötfärs tillagar du köttfärssåser, Biff à la Lindström och lasagne. För att inte tala om hamburgare av alla de slag. Till köttbullar, färsbiffar och köttfärslimpa passar finmalen färs bäst.",
  },
  {
    id: null,
    image: "img/kokosmjolk-250ml-santa-maria.jpeg",
    alt: "Kokosmjölk",
    title: "Kokosmjölk",
    text: "Kokosmjölk 250ml",
    desc: "Kokosmjölk från Santa Maria. Kokosmjölk är gjord av pressat kokosfruktkött. Används med fördel i asiatiska grytor.",
  },
  {
    id: null,
    image: "img/oatly-ikaffe.jpeg",
    alt: "iKaffe",
    title: "iKaffe",
    text: "Oatly iKaffe 3%",
    desc: "Havredryck att ha i kaffet och som går utmärkt att skumma. Oatly har tagit fram denna dryck för alla baristas där ute.",
  },
  {
    id: null,
    image: "img/spaghetti-1-8kg-barilla.jpeg",
    alt: "Spaghetti",
    title: "Spaghetti",
    text: "Barilla Spaghetti 1,8kg",
    desc: "Pasta Spaghetti i storpack från Barilla är Italiens mest klassiska pastasort i en förpackning på 1,8 kilo. Spaghetti pasta har sitt ursprung från Neapel där Antonio Vivani 1842 döpte den till Spaghetti eftersom han tyckte att den såg ut som små snören. Detta är en lång pasta som från början var ännu längre innan den kortades ner från ursprungliga 50 centimeter till dagens mer praktiska 25 centimeter. Barillas Spaghetti n.5 är en durumvetepasta som med sin traditionella karaktär är ett måste i köket.",
  },
  {
    id: null,
    image: "img/fryst-lax.jpeg",
    alt: "Laxbitar fryst",
    title: "Laxbitar fryst",
    text: "4x100g Fisherman",
    desc: "Mindre bitar av odlad norsk lax. Bra till sallader, pasta och gratänger.",
  },
];

const root = document.getElementById("root");
products.map((product, i) => {
  product.id = i;
  root.innerHTML += `
  
  <div class="col-lg-3 col-md-4 mt-3">
    <div class="card">
      <img
        class="card-img-top"
        src="${product.image}"
        alt="${product.alt}"
      />
      <div class="card-body">
        <h4 class="card-title">${product.title}</h4>
        <p class="card-text">${product.text}</p>
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <a class="btn btn-success ms-auto me-1 buyProduct">Buy</a>
        <a class="btn border-info ms-auto me-1 detailsProduct">Details</a>
      </div>
    </div>


  `;
});

const modalBg = document.getElementById("modalBg");
const shoppingCartList = document.getElementById("productList");
const shoppingCardListProducts = document.getElementById(
  "shoppingCardListProducts"
);
const shoppingCart = document.getElementById("shoppingCart");
const shopingCartCounter = document.getElementById("shoppingCartCounter");
const productList = [];

function test() {
  const buyProducts = document.querySelectorAll(".buyProduct");
  const detailsProduct = document.querySelectorAll(".detailsProduct");
  const selected = document.querySelectorAll("select");
  buyProducts.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      let boughtItem = Object.assign([], products[i]);
      boughtItem.number = selected[i].value;
      productList.push(boughtItem);
      console.log(productList);
      shoppingCartCounter.innerHTML = productList.length;
      shoppingCartListProducts.innerHTML = "";
      productList.forEach((product) => {
        shoppingCartListProducts.innerHTML += `<p>${product.title} - ${product.number}</p>`;
      });
    });
  });
  detailsProduct.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      console.log(products[i].desc);
      shoppingCartList.style.display = "block";
      modalBg.style.display = "block";
      document.body.style.overflow = "hidden";
      shoppingCartListProducts.innerHTML = `<p>${products[i].desc}</p>`;
    });
  });
}

shoppingCart.addEventListener("click", () => {
  shoppingCartListProducts.innerHTML = "";
  productList.forEach((product) => {
    shoppingCartListProducts.innerHTML += `<p>${product.title} - ${product.number} enheter</p>`;
  });
  let displayValue = getComputedStyle(shoppingCartList).display;
  let displayValueModal = getComputedStyle(modalBg).display;
  displayValue == "block"
    ? ((shoppingCartList.style.display = "none"),
      (document.body.style.overflow = "scroll"))
    : ((shoppingCartList.style.display = "block"),
      (document.body.style.overflow = "hidden"));
  modalBg.style.display = "block";
  displayValueModal == "block"
    ? ((modalBg.style.display = "none"),
      (document.body.style.overflow = "hidden"))
    : (modalBg.style.display = "block");
});
modalBg.addEventListener("click", () => {
  shoppingCartList.style.display = "none";
  modalBg.style.display = "none";
  document.body.style.overflow = "scroll";
});
test();

let searchField = document.getElementById("searchProducts");
searchField.addEventListener("keyup", () => {
  let result = products.filter((product) =>
    product.title.toLowerCase().includes(searchField.value.toLowerCase())
  );
  root.innerHTML = "";
  result.forEach((product) => {
    root.innerHTML += `<div class="col-lg-3 col-md-4 mt-3">
    <div class="card">
      <img
        class="card-img-top"
        src="${product.image}"
        alt="${product.alt}"
      />
      <div class="card-body">
        <h4 class="card-title">${product.title}</h4>
        <p class="card-text">${product.text}</p>
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <a class="btn btn-success ms-auto me-1 buyProduct">Buy</a>
        <a class="btn border-info ms-auto me-1 detailsProduct">Details</a>
      </div>
    </div>`;
  });
  test();
});
