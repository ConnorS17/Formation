class Formation{

    constructor(formationText){
        this.formationText = formationText;
        
        this.uniquePositions = null;
        this.defenders = null;
        this.midfielders = null;
        this.strikers = null;
        this.insideForwards = null;
        this.defensiveMidfielders = null;
        this.team = '';

    }

    updateFormation(formationButtonText){
        this.formationText = formationButtonText;
        this.formationTextArray = formationButtonText.split("-");
        this.uniquePositions = this.formationTextArray.length;
    }

    displayFormation(formationButtonText){
        this.updateFormation(formationButtonText);
        let shirtNum = 2;
        let numDefenders = 0;
        let numMidfielders = 0;
        let numDMidfielders = 0;
        let numAMidfielders = 0;
        let numStrikers = 0;

        const homeFormation = document.createElement("div");
        homeFormation.classList.add('home-formation');
        formationContainer.appendChild(homeFormation);

        const gks = document.createElement("div");
        gks.classList.add('Goalkeepers');
        homeFormation.appendChild(gks);
        const gk = document.createElement("div");
        gk.classList.add('Goalkeeper');
        gks.appendChild(gk);
        gk.innerText = 1;
        gk.setAttribute("contenteditable", "true");

        const defenders = document.createElement("div");
        const midfielders = document.createElement("div");
        const strikers = document.createElement("div");

        switch (this.uniquePositions) {
            case 3:
                numDefenders = parseInt(this.formationTextArray[0]);
                numMidfielders = parseInt(this.formationTextArray[1]);
                numStrikers = parseInt(this.formationTextArray[2]);
                
                
                defenders.classList.add('Defenders');
                homeFormation.appendChild(defenders);

                for (let index = 0; index < numDefenders; index++) {
                    const defender = document.createElement("div");
                    defender.classList.add('Defender');
                    defenders.appendChild(defender);
                    defender.innerText = shirtNum;
                    shirtNum += 1;  
                    defender.setAttribute("contenteditable", "true");
                }  
                
                
                midfielders.classList.add('Midfielders');
                homeFormation.appendChild(midfielders);
            
                for (let index = 0; index < numMidfielders; index++) {
                    const midfielder = document.createElement("div");
                    midfielder.classList.add('Midfielder');
                    midfielders.appendChild(midfielder);
                    midfielder.innerText = shirtNum;  
                    shirtNum += 1;
                    midfielder.setAttribute("contenteditable", "true");
                }
            
                
                strikers.classList.add('Strikers');
                homeFormation.appendChild(strikers);
            
                for (let index = 0; index < numStrikers; index++) {
                    const striker = document.createElement("div");
                    striker.classList.add('Striker');
                    strikers.appendChild(striker);
                    striker.innerText = shirtNum; 
                    shirtNum += 1;
                    striker.setAttribute("contenteditable", "true");
                }

                break;

            case 4:
                numDefenders = parseInt(this.formationTextArray[0]);
                numDMidfielders = parseInt(this.formationTextArray[1]);
                numAMidfielders = parseInt(this.formationTextArray[2]);
                numStrikers = parseInt(this.formationTextArray[3]);
                
                
                defenders.classList.add('Defenders');
                homeFormation.appendChild(defenders);

                for (let index = 0; index < numDefenders; index++) {
                const defender = document.createElement("div");
                defender.classList.add('Defender');
                defenders.appendChild(defender);
                defender.innerText = shirtNum;
                shirtNum += 1;  
                defender.setAttribute("contenteditable", "true");
                }  
                
               
                midfielders.classList.add('Midfielders');
                homeFormation.appendChild(midfielders);
            
                for (let index = 0; index < numDMidfielders; index++) {
                const midfielder = document.createElement("div");
                midfielder.classList.add('Midfielder');
                midfielders.appendChild(midfielder);
                midfielder.innerText = shirtNum;  
                shirtNum += 1;
                midfielder.setAttribute("contenteditable", "true");
                }

                const aMidfielders = document.createElement("div");
                aMidfielders.classList.add('Midfielders');
                homeFormation.appendChild(aMidfielders);
            
                for (let index = 0; index < numAMidfielders; index++) {
                const aMidfielder = document.createElement("div");
                aMidfielder.classList.add('Midfielder');
                aMidfielders.appendChild(aMidfielder);
                aMidfielder.innerText = shirtNum;  
                shirtNum += 1;
                aMidfielder.setAttribute("contenteditable", "true");
                }
            
                
                strikers.classList.add('Strikers');
                homeFormation.appendChild(strikers);
            
                for (let index = 0; index < numStrikers; index++) {
                    const striker = document.createElement("div");
                    striker.classList.add('Striker');
                    strikers.appendChild(striker);
                    striker.innerText = shirtNum; 
                    shirtNum += 1;
                    striker.setAttribute("contenteditable", "true");
                }

                break;

                default:
                    console.log("uh oh");

        }

    }


}

const formationContainer = document.querySelector(".formation");
const clearButton = document.querySelector(".clear");
const formationButtons = document.querySelectorAll(".formation-button");

let formationText ;
const formation = new Formation(formationText);

clearButton.addEventListener("click", displayClear);



formationButtons.forEach(button => {
    button.addEventListener("click", () => {
        formation.displayFormation(button.innerText)
    })
})

function displayClear(){
    /*let delG = document.querySelector('.Goalkeepers');
    let delD = document.querySelector('.Defenders');
    let delM = document.querySelector('.Midfielders');
    let delA = document.querySelector('.Strikers');

    delG.remove();
    delD.remove();
    delM.remove();
    delA.remove();*/

    let delFormation = document.querySelector('.home-formation');
    delFormation.remove();
}


//fourFourTwoButton.addEventListener("click", displayFourFourTwo);
//fourFourTwoButton.addEventListener("click", updateFormation(fourFourTwoButton));

//function updateFormation(button){
   // textArray = button.innerText.split("-");
    //formationTextArray = textArray;

//}



/*function displayFourFourTwo(){
    
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
}*/

