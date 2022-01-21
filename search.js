const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('container');
let searchQuery = '';
const APP_ID = '0afafdc7'; //API ID
const APP_key = '160d4b731396746f446124e1a7bbe0af'; //API KEY
const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}&to=20`;  //Path

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI(){
    const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}`;  //Path
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results){
    const generateHTML = '';
    results.map(result =>{
        generateHTML +=
        `
        <div class="item">
    <img src="./img/inspiration.jpeg" alt="">
    <div class="flex-container">
        <h1 class="title">This is a recipe</h1>
        <a class="view-button" href="#">View Recipe</a>
    </div>
    <p class="item-data">Calories: 120</p>
</div>
        `
    })
}
