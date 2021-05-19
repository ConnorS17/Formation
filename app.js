class Formation{

    static numFormations = 0;
    static homeTeam = 0;
    static awayTeam = 0;

    constructor(formationText, team = "home"){
        this.formationText = formationText;
        
        this.team = team;
        
        
        this.uniquePositions = null;
        

    }

    updateFormation(formationText){
        this.formationText = formationText;
        this.formationTextArray = formationText.split("-");
        this.uniquePositions = this.formationTextArray.length;
    }

    displayClearHome(){
        let delHomeFormation = document.querySelector('.home-formation');
        if (delHomeFormation == null){
            return;
        }
        delHomeFormation.remove();
        Formation.numFormations -= 1;
        Formation.homeTeam -= 1;
    }

    displayClearAway(){
        let delAwayFormation = document.querySelector('.away-formation');
        if (delAwayFormation == null){
            return;
        }
        delAwayFormation.remove();
        Formation.numFormations -= 1;
        Formation.awayTeam -= 1;
    }


    

    displayFormation(formationText){
        console.log(Formation.homeTeam, Formation.awayTeam);

        this.updateFormation(formationText);

        let shirtNum = 0;
        let numDefenders = 0;
        let numMidfielders = 0;
        let numDMidfielders = 0;
        let numAMidfielders = 0;
        let numStrikers = 0;

        if (this.team == "home"){
            const homeFormation = document.createElement("div");
            homeFormation.classList.add('home-formation');

            if (Formation.homeTeam == 1 && Formation.awayTeam ==1){
                let awayForm = document.querySelector('.away-formation');
                this.displayClearHome();
                awayForm.before(homeFormation);
            }

            else if (Formation.awayTeam == 1) {
                let awayForm = document.querySelector('.away-formation');
                awayForm.before(homeFormation);
            }

            else if (Formation.homeTeam == 1){
                this.displayClearHome();
                formationContainer.appendChild(homeFormation);
            }

            else{
                formationContainer.appendChild(homeFormation);
            }

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
            shirtNum = 2;

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
            Formation.homeTeam+=1;

        }

        else {
            if (Formation.awayTeam == 1){
                this.displayClearAway();
            }

            const awayFormation = document.createElement("div");
            awayFormation.classList.add('away-formation');
            formationContainer.appendChild(awayFormation);

            const strikers = document.createElement("div");
            const midfielders = document.createElement("div");
            const defenders = document.createElement("div");
            const gks = document.createElement("div");

            shirtNum = 11;
            

            switch (this.uniquePositions) {
                case 3:
                    numDefenders = parseInt(this.formationTextArray[0]);
                    numMidfielders = parseInt(this.formationTextArray[1]);
                    numStrikers = parseInt(this.formationTextArray[2]);

                    strikers.classList.add('Strikers');
                    awayFormation.appendChild(strikers);
            
                    for (let index = 0; index < numStrikers; index++) {
                        const striker = document.createElement("div");
                        striker.classList.add('Striker');
                        strikers.appendChild(striker);
                        striker.innerText = shirtNum; 
                        shirtNum -= 1;
                        striker.setAttribute("contenteditable", "true");
                    }

                    midfielders.classList.add('Midfielders');
                    awayFormation.appendChild(midfielders);
            
                    for (let index = 0; index < numMidfielders; index++) {
                        const midfielder = document.createElement("div");
                        midfielder.classList.add('Midfielder');
                        midfielders.appendChild(midfielder);
                        midfielder.innerText = shirtNum;  
                        shirtNum -= 1;
                        midfielder.setAttribute("contenteditable", "true");
                    }

                    defenders.classList.add('Defenders');
                    awayFormation.appendChild(defenders);

                    for (let index = 0; index < numDefenders; index++) {
                        const defender = document.createElement("div");
                        defender.classList.add('Defender');
                        defenders.appendChild(defender);
                        defender.innerText = shirtNum;
                        shirtNum -= 1;  
                        defender.setAttribute("contenteditable", "true");
                    }  
                    break;

                case 4:
                    numDefenders = parseInt(this.formationTextArray[0]);
                    numDMidfielders = parseInt(this.formationTextArray[1]);
                    numAMidfielders = parseInt(this.formationTextArray[2]);
                    numStrikers = parseInt(this.formationTextArray[3]);

                    strikers.classList.add('Strikers');
                    awayFormation.appendChild(strikers);
            
                    for (let index = 0; index < numStrikers; index++) {
                        const striker = document.createElement("div");
                        striker.classList.add('Striker');
                        strikers.appendChild(striker);
                        striker.innerText = shirtNum; 
                        shirtNum -= 1;
                        striker.setAttribute("contenteditable", "true");
                    }

                    const aMidfielders = document.createElement("div");
                    aMidfielders.classList.add('Midfielders');
                    awayFormation.appendChild(aMidfielders);
            
                    for (let index = 0; index < numAMidfielders; index++) {
                        const aMidfielder = document.createElement("div");
                        aMidfielder.classList.add('Midfielder');
                        aMidfielders.appendChild(aMidfielder);
                        aMidfielder.innerText = shirtNum;  
                        shirtNum -= 1;
                        aMidfielder.setAttribute("contenteditable", "true");
                    }

                    midfielders.classList.add('Midfielders');
                    awayFormation.appendChild(midfielders);
            
                    for (let index = 0; index < numDMidfielders; index++) {
                        const midfielder = document.createElement("div");
                        midfielder.classList.add('Midfielder');
                        midfielders.appendChild(midfielder);
                        midfielder.innerText = shirtNum;  
                        shirtNum -= 1;
                        midfielder.setAttribute("contenteditable", "true");
                    }

                    defenders.classList.add('Defenders');
                    awayFormation.appendChild(defenders);

                    for (let index = 0; index < numDefenders; index++) {
                        const defender = document.createElement("div");
                        defender.classList.add('Defender');
                        defenders.appendChild(defender);
                        defender.innerText = shirtNum;
                        shirtNum -= 1;  
                        defender.setAttribute("contenteditable", "true");
                    }  

                    break;

                default:
                    break;
            }

            gks.classList.add('Goalkeepers');
            awayFormation.appendChild(gks);
            const gk = document.createElement("div");
            gk.classList.add('Goalkeeper');
            gks.appendChild(gk);
            gk.innerText = 1;
            gk.setAttribute("contenteditable", "true");
            Formation.awayTeam+=1;
        }
        Formation.numFormations+=1;
    }


}

const formationContainer = document.querySelector(".formation");
const clearButton = document.querySelector(".clear");
const formationList = document.querySelectorAll("option");

let inputHome = document.getElementsByName("formation-home")[0];
let inputAway = document.getElementsByName("formation-away")[0];


let homeFormationText;
let awayFormationText;
let formationText;

//const formation = new Formation(homeFormationText, awayFormationText);

const homeFormation = new Formation(formationText);
const awayFormation = new Formation(formationText,"away");


clearButton.addEventListener("click", displayClear);

inputHome.addEventListener("input", () => {
    formationText = inputHome.value;
    console.log(formationText);
    if (formationText.length < 5) return;
    homeFormation.displayFormation(formationText);
})

inputAway.addEventListener("input", () => {
    formationText = inputAway.value;
    console.log(formationText);
    if (formationText.length < 5) return;
    awayFormation.displayFormation(formationText);
    
})


function displayClear(){
    homeFormation.displayClearHome();
    awayFormation.displayClearAway();
    /*let delHomeFormation = document.querySelector('.home-formation');
    let delAwayFormation = document.querySelector('.away-formation');
    if (delHomeFormation == null && delAwayFormation == null){
        return;
    }
    else if(delHomeFormation == null){
        delAwayFormation.remove();
    }
    else if(delAwayFormation == null){
        delHomeFormation.remove();
    } 
    else {
        delHomeFormation.remove();
        delAwayFormation.remove();
    }*/
}




