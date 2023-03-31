const url = 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json';
const container = document.querySelector(".container");
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
                                        <img src=${result[i].image} onerror="this.onerror=null; this.src='Images\Defaultpic.jpg';" alt="Picture of:"${result[i].name}>
                                        <h3 class="personName">${result[i].name}</h3>
                                        <p>Home: ${result[i].homeworld}</p>
                                        <p>Species: ${result[i].species}</p>
                                        <p>Born in the year: ${result[i].born}</p>
                                        <p>Died in the year: ${result[i].died}</p>
                                    </a>`;
                                    
            }
            
        const personBoxes = document.querySelectorAll(".box");
        const personNames = document.querySelectorAll(".personName");
        for ( let i = 0; i < personBoxes.length; i++) {
            const personBox = personBoxes[i];
            const personName = personNames[i];
            
            personBox.onmouseover = function() {
                personName.style.color = "rgb(255, 217, 0)";
            }
            personBox.onmouseout = function() {
                personName.style.color = "";
            }
        }
    } catch(error) {
        container.innerHTML =`<p>An error has accured. Please try again later!!</p>`
    } finally {
        console.log(`May the force be with you...`);
    }
                    
}
getData();

