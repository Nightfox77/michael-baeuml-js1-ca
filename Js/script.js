const url = 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json';
const container = document.querySelector(".container");
const box = document.querySelector(".box");
async function getData() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        container.innerHTML = "";
        
        for (let i = 0; i < result.length; i++) {
            if (!result[i].homeworld) {
                result[i].homeworld = "Unknown";
            }
            if (!result[i].born) {
                result[i].born = "Unknown";
            }
            if (!result[i].died) {
                result[i].died = "Unknown";
            }
            container.innerHTML += `<a href="details.html?id=${result[i].id}" class="box">
                                        <img src=${result[i].image}  alt="Picture of:"${result[i].name}>
                                        <h3>${result[i].name}</h3>
                                        <p>Home: ${result[i].homeworld}</p>
                                        <p>Species: ${result[i].species}</p>
                                        <p>Born in the year: ${result[i].born}</p>
                                        <p>Died in the year: ${result[i].died}</p>
                                    </a>`;
            } 
    } catch(error) {
        container.innerHTML =`<p>An error has accured. Please try again later!!</p>`
    }
}
getData();

    


