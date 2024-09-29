//Joke Generation >>>>>>>>>>>>>>>>
const jokeURL = "https://official-joke-api.appspot.com/random_joke";
const jokeElement = document.createElement("p");
const punchLineElement = document.createElement("p")
const jokesection = document.querySelector(".jokecontent");
const getjokeelement = document.querySelector("#getjokebtn");
const punchLineLabel = document.createElement("span");
const punchLineText = document.createElement("span");

const getJoke = async () => {
    let resp = await fetch(jokeURL)
    console.log(resp);
    let joke = await resp.json(resp);
    jokesection.appendChild(jokeElement);
    jokeElement.innerText = joke.setup;

    punchLineLabel.innerText = "Punchline : ";
    punchLineLabel.style.color = "black";
    punchLineLabel.style.fontWeight = "bold";
    punchLineLabel.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";

    punchLineText.innerText = joke.punchline
    punchLineText.style.color = "White";
    punchLineText.style.fontWeight = "bold";
    punchLineText.style.fontStyle = "italic";

    punchLineElement.appendChild(punchLineLabel);
    punchLineElement.appendChild(punchLineText);

    jokesection.appendChild(punchLineElement);
    jokeElement.style.marginBottom = "0.8rem";
    jokesection.style.display = "inline-block";

    getjokeelement.innerHTML = "Click again to get new";
    jokesection.scrollIntoView({ behavior: "smooth", block: "start" });
    jokesection.focus();
}

const generateJoke = () => {
    getJoke();
    setInterval(getJoke, 20000);
}
//getjokeelement.addEventListener("click", generateJoke);//This is for generating new joke automatically for every 20 sec
getjokeelement.addEventListener("click", getJoke);//Generates a new joke for each time we click on button
//-----------------------------------------------------------------------------------