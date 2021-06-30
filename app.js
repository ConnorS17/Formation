class Formation{

    static numFormations = 0;
    static homeTeam = 0;
    static homeSize = 0;
    static awayTeam = 0;
    static awaySize = 0;

    constructor(formationText, team = "home"){
        this.formationText = formationText;
        this.team = team;
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
    //add path functionality
    path(){
        let defenders = document.querySelectorAll('.Defender');
        let midfielders = document.querySelectorAll('.Midfielder');
        let strikers = document.querySelectorAll('.Striker');
        
        defenders.forEach(defender => {
            defender.onmousedown = function(){
                pressed = true;
                offset(defender);
                interval = true;
                loop = setInterval(function(){
                    offset(defender);
                    if (pathToggle) document.body.appendChild(createLine(xI,yI,xF,yF));
                }, 500);
            }

            defender.onmouseup = function(){
                pressed = false;
                interval = false;
                clearInterval(loop);
            }
        });

        midfielders.forEach(midfielder => {
            midfielder.onmousedown = function(){
                pressed = true;
                offset(midfielder);
                interval = true;
                loop = setInterval(function(){
                    offset(midfielder);
                    if (pathToggle) document.body.appendChild(createLine(xI,yI,xF,yF));
                }, 500);
            }
            
            midfielder.onmouseup = function(){
                pressed = false;
                interval = false;
                clearInterval(loop);
            }
        });

        strikers.forEach(striker => {
            striker.onmousedown = function(){
                pressed = true;
                offset(striker);
                interval = true;
                loop = setInterval(function(){
                    offset(striker);
                    if (pathToggle) document.body.appendChild(createLine(xI,yI,xF,yF));
                }, 500);
            }
            
            striker.onmouseup = function(){
                pressed = false;
                interval = false;
                clearInterval(loop);
            }
        });
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
            // if statements to make sure home team is above away team on screen
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
            gk.style.backgroundColor = "yellow";

            const defenders = document.createElement("div");
            const midfielders = document.createElement("div");
            const strikers = document.createElement("div");
            shirtNum = 2;
            //for each unique position, iterate accordingly through all the players to display them 
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
        }

        else {
            if (Formation.awayTeam == 1){
                this.displayClearAway();
            }
            Formation.awaySize = this.formationTextArray.length;

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
            
        }
        //make all players draggable and add path capability
        $(".Goalkeeper").draggable();
        $(".Defender").draggable();
        $(".Midfielder").draggable();
        $(".Striker").draggable();
        this.path();
    }

}

// initialize variables, and get html elements
const formationContainer = document.querySelector(".formation");
const clearButton = document.querySelector(".clear");
const pathButton = document.querySelector("#path-button");
const textButton = document.querySelector("#text-box-button");
const textClearButton = document.querySelector("#text-box-clear");
pathButton.style.backgroundColor = "red";
const pathClearButton = document.querySelector("#path-clear-button");
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
$("#ball").draggable();
let formationText;// = "4-4-2;

// create two formations (home and away)
const homeFormation = new Formation(formationText);
const awayFormation = new Formation(formationText,"away");


// event listeners for formation selecting
inputHome.addEventListener("input", () => {
    formationText = inputHome.value;
    console.log(formationText);
    if (formationText.length < 5) return; // guard so incorrect formations do not appear
    homeFormation.displayFormation(formationText); //display formation on screen
})

inputAway.addEventListener("input", () => {
    formationText = inputAway.value;
    console.log(formationText);
    if (formationText.length < 5) return;
    awayFormation.displayFormation(formationText);
})

// color selecting implementation
colorHome.addEventListener("change", updateHomeColor);

function updateHomeColor(event){
    if (document.querySelector('.Defenders')!= null){
        let defenders = document.querySelectorAll('.Defender-Home');
        let midfielders = document.querySelectorAll('.Midfielder-Home');
        let strikers =  document.querySelectorAll('.Striker-Home');

        defenders.forEach(defender =>{
            defender.style.color = "#ffffff";
            if(event.target.value.includes("#ffffff")) defender.style.color = "#000000"; // no white on white
            defender.style.backgroundColor = event.target.value;
        })

        midfielders.forEach(midfielder => {
            midfielder.style.color = "#ffffff";
            if(event.target.value.includes("#ffffff")) midfielder.style.color = "#000000";
            midfielder.style.backgroundColor = event.target.value;
        })

        strikers.forEach(striker => {
            striker.style.color = "#ffffff";
            if(event.target.value.includes("#ffffff")) striker.style.color = "#000000";
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
            defender.style.color = "#ffffff";
            if(event.target.value.includes("#ffffff")) defender.style.color = "#000000";
            defender.style.backgroundColor = event.target.value;
        })

        midfielders.forEach(midfielder => {
            midfielder.style.color = "#ffffff";
            if(event.target.value.includes("#ffffff")) midfielder.style.color = "#000000";
            midfielder.style.backgroundColor = event.target.value;
        })

        strikers.forEach(striker => {
            striker.style.color = "#ffffff";
            if(event.target.value.includes("#ffffff")) striker.style.color = "#000000";
            striker.style.backgroundColor = event.target.value;
        })
    }
}

//clear button implementation
clearButton.addEventListener("click", displayClear);

function displayClear(){
    homeFormation.displayClearHome();
    awayFormation.displayClearAway();
    removePath();
    removeTextBox();
}

//text box
textButton.addEventListener("click",insertTextBox);

function insertTextBox(){
    const textBox = document.createElement('div');
    textBox.classList.add('text-box');
    document.body.appendChild(textBox);
    textBox.setAttribute("contenteditable", "true");
    $(".text-box").draggable();
}

textClearButton.addEventListener("click",removeTextBox);

function removeTextBox(){
    let boxes = document.querySelectorAll('.text-box');
    if (boxes == null) return;
    boxes.forEach(box => box.remove());
}

// path animations
let pressed = false;
let interval = false;
let pathToggle = false;
var loop; //for setInterval and clearInterval
let xI ; //initial x coord
let xF ; //final x coord
let yI ; //initial y coord
let yF ; //final y coord

// turn paths on or off
pathButton.addEventListener("click", pathSwitch);

function pathSwitch(){
    if (pathToggle) {
        pathToggle = false;
        pathButton.innerText = "Path: OFF";
        pathButton.style.backgroundColor = "red";
    }
    else{
        pathToggle = true;
        pathButton.innerText = "Path: ON";
        pathButton.style.backgroundColor = "green";
    }
}

// delete paths
pathClearButton.addEventListener("click",removePath);

function removePath(){
    let lines = document.querySelectorAll('.path');
    if (lines == null) return;
    lines.forEach(line => line.remove());
}

//path implementation

//update coordinates
function offset(e) {
    let rect = e.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (pressed && interval){
        xI = xF;
        yI = yF;
        xF = rect.left + scrollLeft + 35; //+35 since initial position is top left corner, width/height 70px
        yF = rect.top + scrollTop + 35;
    }
    else if (pressed) {
        xI = rect.left + scrollLeft + 35;
        yI = rect.top + scrollTop + 35;
        xF = xI;
        yF = yI;
    }
    else return;
}

//display lines for path
function createLineElement(x, y, length, angle) {
    let line = document.createElement("div");
    line.classList.add('path');
    let styles ='width: ' + length + 'px; '
               + '-moz-transform: rotate(' + angle + 'rad); '
               + '-webkit-transform: rotate(' + angle + 'rad); '
               + '-o-transform: rotate(' + angle + 'rad); '  
               + '-ms-transform: rotate(' + angle + 'rad); '  
               + 'top: ' + y + 'px; '
               + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles);  
    return line;
}

function createLine(x1, y1, x2, y2) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);
    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;
    var x = sx - c / 2,
        y = sy;
    var alpha = Math.PI - Math.atan2(-b, a);
    return createLineElement(x, y, c, alpha);
}