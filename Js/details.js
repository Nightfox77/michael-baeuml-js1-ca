const container = document.querySelector(".container");
const headName = document.querySelector("h1");
const title = document.querySelector("title");
const url = 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/'
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")
const finalUrl = url + id +".json";

async function getDetail() {
    try {
    const response = await fetch(finalUrl);
    const result = await response.json();
    if (!result.bornLocation) {
        result.bornLocation = "Unknown";
    }
    title.innerHTML = result.name ;
    headName.innerHTML = result.name;
    container.innerHTML = `<div class=finalbox>
                                <img src=${result.image}>
                                <h3>${result.name}</h3>
                                <span>Born: ${result.bornLocation}</span>
                                <span>Home: ${result.homeworld}</span>
                                <a href=${result.wiki}>Go to Wikipedia for more information...</a>
                            </div>`
} catch(error) {
    container.innerHTML = `<p>An error has accured. Please try again later!!</p>`
}
}
getDetail();