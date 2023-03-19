const url = 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json';
const container = document.querySelector(".container");
const box = document.querySelector(".box");

async function getApi() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        container.innerHTML = "";
        for (let i = 0; i < result.length; i++) {
            const affiliation = result[i].affiliations;
            
            if (affiliation.length === 0) {
                continue;
                } 
            if (!result[i].homeworld) {
                continue;
            }
            container.innerHTML += `<a href="details.html?id=${result[i].id}" class="box">
                                        <img src=${result[i].image}  alt="Picture of:"${result[i].name}>
                                        <h3>${result[i].name}</h3>
                                        <span>Home: ${result[i].homeworld}</span>
                                        <p>Known affiliations:<br>${affiliation}</p>
                                    </a>`;
            } 
    } catch(error) {
        container.innerHTML =`<p>An error has accured. Please try again later!!</p>`
    }
}
getApi();
box.onClick = console.log(Event.target.value) ;
    


