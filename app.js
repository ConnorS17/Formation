class Formation{

    constructor(formationText){
        this.formationText = formationText;

    }
}

const formationContainer = document.querySelector(".formation");
const clearButton = document.querySelector(".clear");
const fourFourTwoButton = document.querySelector(".four-four-two");

clearButton.addEventListener("click", displayClear );

fourFourTwoButton.addEventListener("click", displayFourFourTwo);


function displayFourFourTwo(){
    
    const gks = document.createElement("div");
    gks.classList.add('Goalkeepers');
    formationContainer.appendChild(gks);
    const gk = document.createElement("div");
    gk.classList.add('Goalkeeper');
    gks.appendChild(gk);
    gk.innerText = 1;
    gk.setAttribute("contenteditable", "true");
    
    const defenders = document.createElement("div");
    defenders.classList.add('Defenders');
    formationContainer.appendChild(defenders);

    for (let index = 2; index < 6; index++) {
        const defender = document.createElement("div");
        defender.classList.add('Defender');
        defenders.appendChild(defender);

        
        defender.innerText = index;  
        defender.setAttribute("contenteditable", "true");
    } 

    

    const midfielders = document.createElement("div");
    midfielders.classList.add('Midfielders');
    formationContainer.appendChild(midfielders);

    for (let index = 6; index < 10; index++) {
        const midfielder = document.createElement("div");
        midfielder.classList.add('Midfielder');
        midfielders.appendChild(midfielder);
       
        midfielder.innerText = index;  
        midfielder.setAttribute("contenteditable", "true");
    }

    

    const strikers = document.createElement("div");
    strikers.classList.add('Strikers');
    formationContainer.appendChild(strikers);

    for (let index = 10; index < 12; index++) {
        const striker = document.createElement("div");
        striker.classList.add('Striker');
        strikers.appendChild(striker);
        
        striker.innerText = index; 
        striker.setAttribute("contenteditable", "true");
    }
}

function displayClear(){
    let delG = document.querySelector('.Goalkeepers');
    let delD = document.querySelector('.Defenders');
    let delM = document.querySelector('.Midfielders');
    let delA = document.querySelector('.Strikers');

    delG.remove();
    delD.remove();
    delM.remove();
    delA.remove();

}