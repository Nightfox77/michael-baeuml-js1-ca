const container = document.querySelector(".container");
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
    title.innerHTML = result.name ;
    
    container.innerHTML = `<div class=finalbox>
                                <img src=${result.image}>
                                <h3>${result.name}</h3>
                                <ul class=affiliations><h4>Known affiliations:</h4></ul>
                                <a href=${result.wiki}>Go to Wikipedia for more information...</a>
                            </div>`
    const affiliations = document.querySelector(".affiliations");
    const listAffiliation = result.affiliations;

    for ( let i = 0; i < listAffiliation.length; i++) {
        affiliations.innerHTML += `<li>${listAffiliation[i]}</li>`;
    }
    
} catch(error) {
    container.innerHTML = `<p>An error has accured. Please try again later!!</p>`
} finally {
    console.log(`May the force be with you...`);
}
}
getDetail();
