class Formation{

    static numFormations = 0;
    static homeTeam = 0;
    static homeSize = 0;
    static awayTeam = 0;
    static awaySize = 0;
    static ball = 0;

    constructor(formationText, team = "home"){
        this.formationText = formationText;
        this.team = team;
        //this.displayFormation(formationText);
    }

    updateFormation(formationText){
        this.formationText = formationText;
        this.formationTextArray = formationText.split("-");
        this.uniquePositions = this.formationTextArray.length;
    }

    displayCenterCircle(){
        if (Formation.awayTeam < 1) return;
        if (Formation.numFormations < 2) return;
        if (document.querySelector("center-circle") != null) return;
        let body = document.getElementsByTagName("body")[0];
        let centerCircle = document.createElement("div");
        centerCircle.id = "center-circle";
        body.appendChild(centerCircle);
        if (Formation.homeSize == 3 ){ //&& Formation.awaySize == 3
            //centerCircle.style.left = "2.75px";
            centerCircle.style.top = "625px";
        }
        /*else if (homeFormationSize == 1 && awayFormationSize == 2){
            centerCircle.style.left = "-1px";
            centerCircle.style.top = "622px";

        }
        else if (homeFormationSize == 2 && awayFormationSize == 2){
            centerCircle.style.left = "-2.25px";
            centerCircle.style.top = "750px";
        }*/
        else{
            centerCircle.style.top = "750px";
        }
       
        $("#center-circle").draggable();
    }

    displayClearCenterCircle(){
        let centerCircle = document.querySelector('#center-circle');
        if (centerCircle == null){
            return;
        }
        centerCircle.remove();
    }

    displayBall(){
        if (Formation.ball == 1){
            return;
        }
        let ballDiv = document.createElement("div");
        ballDiv.id = "ball";
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(ballDiv);
        $("#ball").draggable();
        Formation.ball += 1;
    }

    displayClearBall(){
        let ballDiv = document.querySelector('#ball');
        if (ballDiv == null){
            return;
        }
        ballDiv.remove();
        Formation.ball -= 1;
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
        Formation.numFormations+=1;

        this.updateFormation(formationText);

        let shirtNum = 0;
        let numDefenders = 0;
        let numMidfielders = 0;
        let numDMidfielders = 0;
        let numAMidfielders = 0;
        let numStrikers = 0;

        if (this.team == "home"){
            Formation.homeSize = this.formationTextArray.length;
            const homeFormation = document.createElement("div");
            homeFormation.classList.add('home-formation');

            if (Formation.homeTeam == 1 && Formation.awayTeam ==1){
                let awayForm = document.querySelector('.away-formation');
                this.displayClearHome();
                this.displayClearCenterCircle();
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
            gks.style.borderBottom = "solid white";
            gk.style.backgroundColor = "yellow";

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
                        defender.classList.add('Defender-Home');
                        defenders.appendChild(defender);
                        defender.innerText = shirtNum;
                          
                        defender.setAttribute("contenteditable", "true");
                        defender.setAttribute("id", "home" + String(shirtNum));
                        shirtNum += 1;
                        defender.style.backgroundColor = colorHome.value;
                    }  
                
                
                    midfielders.classList.add('Midfielders');
                    homeFormation.appendChild(midfielders);
            
                    for (let index = 0; index < numMidfielders; index++) {
                        const midfielder = document.createElement("div");
                        midfielder.classList.add('Midfielder');
                        midfielder.classList.add('Midfielder-Home');
                        midfielders.appendChild(midfielder);
                        midfielder.innerText = shirtNum;  
                        
                        midfielder.setAttribute("contenteditable", "true");
                        midfielder.setAttribute("id", "home" + String(shirtNum));
                        shirtNum += 1;
                        midfielder.style.backgroundColor = colorHome.value;
                    }
            
                
                    strikers.classList.add('Strikers');
                    homeFormation.appendChild(strikers);
            
                    for (let index = 0; index < numStrikers; index++) {
                        const striker = document.createElement("div");
                        striker.classList.add('Striker');
                        striker.classList.add('Striker-Home');
                        strikers.appendChild(striker);
                        striker.innerText = shirtNum; 
                        
                        striker.setAttribute("contenteditable", "true");
                        striker.setAttribute("id", "home" + String(shirtNum));
                        shirtNum += 1;
                        striker.style.backgroundColor = colorHome.value;
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
                        defender.classList.add('Defender-Home');
                        defenders.appendChild(defender);
                        defender.innerText = shirtNum;
                          
                        defender.setAttribute("contenteditable", "true");
                        defender.setAttribute("id", "home" + String(shirtNum));
                        shirtNum += 1;
                        defender.style.backgroundColor = colorHome.value;
                    }  
                
               
                    midfielders.classList.add('Midfielders');
                    homeFormation.appendChild(midfielders);
            
                    for (let index = 0; index < numDMidfielders; index++) {
                        const midfielder = document.createElement("div");
                        midfielder.classList.add('Midfielder');
                        midfielder.classList.add('Midfielder-Home');
                        midfielders.appendChild(midfielder);
                        midfielder.innerText = shirtNum;  
                        
                        midfielder.setAttribute("contenteditable", "true");
                        midfielder.setAttribute("id", "home" + String(shirtNum));
                        shirtNum += 1;
                        midfielder.style.backgroundColor = colorHome.value;
                    }

                    const aMidfielders = document.createElement("div");
                    aMidfielders.classList.add('Midfielders');
                    homeFormation.appendChild(aMidfielders);
            
                    for (let index = 0; index < numAMidfielders; index++) {
                        const aMidfielder = document.createElement("div");
                        aMidfielder.classList.add('Midfielder');
                        aMidfielder.classList.add('Midfielder-Home');
                        aMidfielders.appendChild(aMidfielder);
                        aMidfielder.innerText = shirtNum;  
                        
                        aMidfielder.setAttribute("contenteditable", "true");
                        aMidfielder.setAttribute("id", "home" + String(shirtNum));
                        shirtNum += 1;
                        aMidfielder.style.backgroundColor = colorHome.value;
                    }
            
                
                    strikers.classList.add('Strikers');
                    homeFormation.appendChild(strikers);
            
                    for (let index = 0; index < numStrikers; index++) {
                        const striker = document.createElement("div");
                        striker.classList.add('Striker');
                        striker.classList.add('Striker-Home');
                        strikers.appendChild(striker);
                        striker.innerText = shirtNum; 
                        
                        striker.setAttribute("contenteditable", "true");
                        striker.setAttribute("id", "home" + String(shirtNum));
                        shirtNum += 1;
                        striker.style.backgroundColor = colorHome.value;
                    }

                    break;

                    default:
                        break;

            }
            Formation.homeTeam+=1;
            if (Formation.homeTeam == 1) this.displayCenterCircle();
        }

        else {
            if (Formation.awayTeam == 1){
                this.displayClearAway();
                this.displayClearCenterCircle();
            }
            Formation.awaySize = this.formationTextArray.length;

            const awayFormation = document.createElement("div");
            awayFormation.classList.add('away-formation');
            formationContainer.appendChild(awayFormation);

            const strikers = document.createElement("div");
            const midfielders = document.createElement("div");
            const defenders = document.createElement("div");
            const gks = document.createElement("div");
            gks.style.borderTop = "solid white";

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
                        striker.classList.add('Striker-Away');
                        strikers.appendChild(striker);
                        striker.innerText = shirtNum; 
                        
                        striker.setAttribute("contenteditable", "true");
                        striker.setAttribute("id", "away" + String(shirtNum));
                        shirtNum -= 1;
                        striker.style.backgroundColor = colorAway.value;
                    }

                    midfielders.classList.add('Midfielders');
                    awayFormation.appendChild(midfielders);
            
                    for (let index = 0; index < numMidfielders; index++) {
                        const midfielder = document.createElement("div");
                        midfielder.classList.add('Midfielder');
                        midfielder.classList.add('Midfielder-Away');
                        midfielders.appendChild(midfielder);
                        midfielder.innerText = shirtNum;  
                        
                        midfielder.setAttribute("contenteditable", "true");
                        midfielder.setAttribute("id", "away" + String(shirtNum));
                        shirtNum -= 1;
                        midfielder.style.backgroundColor = colorAway.value;
                    }

                    defenders.classList.add('Defenders');
                    awayFormation.appendChild(defenders);

                    for (let index = 0; index < numDefenders; index++) {
                        const defender = document.createElement("div");
                        defender.classList.add('Defender');
                        defender.classList.add('Defender-Away');
                        defenders.appendChild(defender);
                        defender.innerText = shirtNum;
                        
                        defender.setAttribute("contenteditable", "true");
                        defender.setAttribute("id", "away" + String(shirtNum));
                        shirtNum -= 1; 
                        defender.style.backgroundColor = colorAway.value;
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
                        striker.classList.add('Striker-Away');
                        strikers.appendChild(striker);
                        striker.innerText = shirtNum; 
                        striker.setAttribute("contenteditable", "true");
                        striker.setAttribute("id", "away" + String(shirtNum));
                        shirtNum -= 1; 
                        striker.style.backgroundColor = colorAway.value;
                    }

                    const aMidfielders = document.createElement("div");
                    aMidfielders.classList.add('Midfielders');
                    awayFormation.appendChild(aMidfielders);
            
                    for (let index = 0; index < numAMidfielders; index++) {
                        const aMidfielder = document.createElement("div");
                        aMidfielder.classList.add('Midfielder');
                        aMidfielder.classList.add('Midfielder-Away');
                        aMidfielders.appendChild(aMidfielder);
                        aMidfielder.innerText = shirtNum;  
                        
                        aMidfielder.setAttribute("contenteditable", "true");
                        aMidfielder.setAttribute("id", "away" + String(shirtNum));
                        shirtNum -= 1;
                        aMidfielder.style.backgroundColor = colorAway.value;
                    }

                    midfielders.classList.add('Midfielders');
                    awayFormation.appendChild(midfielders);
            
                    for (let index = 0; index < numDMidfielders; index++) {
                        const midfielder = document.createElement("div");
                        midfielder.classList.add('Midfielder');
                        midfielder.classList.add('Midfielder-Away');
                        midfielders.appendChild(midfielder);
                        midfielder.innerText = shirtNum;  
                        
                        midfielder.setAttribute("contenteditable", "true");
                        midfielder.setAttribute("id", "away" + String(shirtNum));
                        shirtNum -= 1;
                        midfielder.style.backgroundColor = colorAway.value;
                    }

                    defenders.classList.add('Defenders');
                    awayFormation.appendChild(defenders);

                    for (let index = 0; index < numDefenders; index++) {
                        const defender = document.createElement("div");
                        defender.classList.add('Defender');
                        defender.classList.add('Defender-Away');
                        defenders.appendChild(defender);
                        defender.innerText = shirtNum;
                          
                        defender.setAttribute("contenteditable", "true");
                        defender.setAttribute("id", "away" + String(shirtNum));
                        shirtNum -= 1;
                        defender.style.backgroundColor = colorAway.value;
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
            gk.style.backgroundColor = "purple";
            Formation.awayTeam+=1;
            this.displayCenterCircle();
        }
       
        this.displayBall();
        $(".Goalkeeper").draggable();
        $(".Defender").draggable();
        $(".Midfielder").draggable();
        $(".Striker").draggable();
    }

}

const formationContainer = document.querySelector(".formation");
const clearButton = document.querySelector(".clear");
const formationList = document.querySelectorAll("option");

let inputHome = document.getElementsByName("formation-home")[0];
let inputAway = document.getElementsByName("formation-away")[0];
let colorHome = document.querySelector("#color-home");
let colorAway = document.querySelector("#color-away");
let defaultHome = "#0000ff"; //blue
let defaultAway = "#ff0000"; //red
colorHome.value = defaultHome;
colorAway.value = defaultAway;
colorHome.select();
colorAway.select();
//$("#center-circle").draggable();


let homeFormationText;
let awayFormationText;
let formationText;// = "4-4-2;

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


colorHome.addEventListener("change", updateHomeColor);

function updateHomeColor(event){
    if (document.querySelector('.Defenders')!= null){
        let defenders = document.querySelectorAll('.Defender-Home');
        let midfielders = document.querySelectorAll('.Midfielder-Home');
        let strikers =  document.querySelectorAll('.Striker-Home');

        defenders.forEach(defender =>{
            defender.style.backgroundColor = event.target.value;
        })

        midfielders.forEach(midfielder => {
            midfielder.style.backgroundColor = event.target.value;
        })

        strikers.forEach(striker => {
            striker.style.backgroundColor = event.target.value;
        })
    }
}

colorAway.addEventListener("change", updateAwayColor);

function updateAwayColor(event){
    if (document.querySelector('.Defenders')!= null){
        let defenders = document.querySelectorAll('.Defender-Away');
        let midfielders = document.querySelectorAll('.Midfielder-Away');
        let strikers =  document.querySelectorAll('.Striker-Away');

        defenders.forEach(defender =>{
            defender.style.backgroundColor = event.target.value;
        })

        midfielders.forEach(midfielder => {
            midfielder.style.backgroundColor = event.target.value;
        })

        strikers.forEach(striker => {
            striker.style.backgroundColor = event.target.value;
        })
    }
}


function displayClear(){
    homeFormation.displayClearHome();
    awayFormation.displayClearAway();
    homeFormation.displayClearBall();
}





