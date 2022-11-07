var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var menu = JSON.parse(xhttp.responseText);
       console.log(menu.meals); //loggar det som ligger is meny-items.js

        printMenu(menu.meals);
    }
};
xhttp.open("GET", "object.json", true);
xhttp.send();

//funktion för submit knapp för prissortering

document.getElementById('submit').onclick = function() {
    var radios = document.getElementsByName("prisKnapp");
    var selected = Array.from(radios).find(radio => radio.checked);
    console.log(selected.value);
    if(selected.value == 1){
        SortAscending();
    }
    else{
        SortDescending();
    }
};

const menuDiv = document.querySelector("#menu-container");

//funktioner för allergier

let OnOffSwitchForGluten = false;
function filterGluten(){

    const glutenDivs = document.querySelectorAll('.gluten');
    


    if (OnOffSwitchForGluten === false) {

        glutenDivs.forEach((div) => {

            div.classList.toggle("glutenlocked");
            console.log(div);
            div.style.display = "none";
            

        })

        OnOffSwitchForGluten = true;
    }
    else {

        glutenDivs.forEach((div) => {
            
            
            div.classList.toggle("glutenlocked");
            
            console.log(div);
            checkIfLockedAndReturnDisplay(div);
            
            
        })

        OnOffSwitchForGluten = false;

    }
}


function checkIfLockedAndReturnDisplay (div){

    

            const string = String(div.outerHTML);
            const locked = string.search('locked');

            if (locked === -1){
    return div.style.display = "block"}
    
}

let OnOffSwitchForLactose = false;
function filterLactose(){

    const lactoseDivs = document.querySelectorAll('.lactose');


    if (OnOffSwitchForLactose === false) {

        lactoseDivs.forEach((div) => {

            div.classList.toggle("lactoselocked");
            div.style.display = "none";
            console.log(div);
            
        })

        OnOffSwitchForLactose = true;
    }
    else {

        lactoseDivs.forEach((div) => {

            div.classList.toggle("lactoselocked");
            console.log(div);
            checkIfLockedAndReturnDisplay(div);
            
        })

        OnOffSwitchForLactose = false;

    }

}


let OnOffSwitchForEgg = false;
function filterEgg(){

    const eggDivs = document.querySelectorAll('.egg');


    if (OnOffSwitchForEgg === false) {

        eggDivs.forEach((div) => {

            div.classList.toggle("egglocked");
            div.style.display = "none";
            console.log(div);
            
        })

        OnOffSwitchForEgg = true;
    }
    else {

        eggDivs.forEach((div) => {

            div.classList.toggle("egglocked");
            console.log(div);
            checkIfLockedAndReturnDisplay(div);
            
        })

        OnOffSwitchForEgg = false;

    }

}




let OnOffSwitchForSeafood = false;
function filterSeafood(){

    const seafoodDivs = document.querySelectorAll('.seafood');


    if (OnOffSwitchForSeafood === false) {

        seafoodDivs.forEach((div) => {

            div.classList.toggle("seafoodlocked");
            div.style.display = "none";
            console.log(div);
            
        })

        OnOffSwitchForSeafood = true;
    }
    else {

        seafoodDivs.forEach((div) => {

            div.classList.toggle("seafoodlocked");
            console.log(div);
            checkIfLockedAndReturnDisplay(div);
            
        })

        OnOffSwitchForSeafood = false;

    }

}

let OnOffSwitchForFishSeafood = false;
function selectFishSeafood(){

    const generalDivs = document.querySelectorAll('.mealCard');
    

    if (OnOffSwitchForFishSeafood === false) {

        generalDivs.forEach((div) => {

			const string = String(div.outerHTML);
            const fishseafoodClass = string.search('fish/seafood');

				if (fishseafoodClass === -1){
		
				
				div.classList.add("generallocked");
				console.log(div);
				div.style.display = "none";
			}
            

        })

        OnOffSwitchForFishSeafood = true;
    }
    else {

        generalDivs.forEach((div) => {
            
			const string = String(div.outerHTML);
            const fishseafoodClass = string.search('fish/seafood');

				if (fishseafoodClass === -1){
		
				
				div.classList.remove("generallocked");
				
				console.log(div);
				checkIfLockedAndReturnDisplay(div);

			}
				
            
        })

        OnOffSwitchForFishSeafood = false;

    }

}

let OnOffSwitchForBeef = false;
function selectBeef(){

    const generalDivs = document.querySelectorAll('.mealCard');
    

    if (OnOffSwitchForBeef === false) {

        generalDivs.forEach((div) => {

			const string = String(div.outerHTML);
            const beefClass = string.search('beef');

				if (beefClass === -1){
		
				
				div.classList.add("generallocked");
				console.log(div);
				div.style.display = "none";
			}
            

        })

        OnOffSwitchForBeef = true;
    }
    else {

        generalDivs.forEach((div) => {
            
			const string = String(div.outerHTML);
            const beefClass = string.search('beef');

				if (beefClass === -1){
		
				
				div.classList.remove("generallocked");
				
				console.log(div);
				checkIfLockedAndReturnDisplay(div);

			}
				
            
        })

        OnOffSwitchForBeef = false;

    }

}

let OnOffSwitchForPork = false;
function selectPork(){

    const generalDivs = document.querySelectorAll('.mealCard');
    

    if (OnOffSwitchForPork === false) {

        generalDivs.forEach((div) => {

			const string = String(div.outerHTML);
            const porkClass = string.search('pork');

				if (porkClass === -1){
		
				
				div.classList.add("generallocked");
				console.log(div);
				div.style.display = "none";
			}
            

        })

        OnOffSwitchForPork = true;
    }
    else {

        generalDivs.forEach((div) => {
            
			const string = String(div.outerHTML);
            const porkClass = string.search('pork');

				if (porkClass === -1){
		
				
				div.classList.remove("generallocked");
				console.log(div);
				checkIfLockedAndReturnDisplay(div);

			}
				
            
        })

        OnOffSwitchForPork = false;

    }

}

let OnOffSwitchForChicken = false;
function selectChicken(){

    const generalDivs = document.querySelectorAll('.mealCard');
    

    if (OnOffSwitchForChicken === false) {

        generalDivs.forEach((div) => {

			const string = String(div.outerHTML);
            const chickenClass = string.search('chicken');

				if (chickenClass === -1){
		
				
				div.classList.add("generallocked");
				console.log(div);
				div.style.display = "none";
			}
           

        })

        OnOffSwitchForChicken = true;
    }
    else {

        generalDivs.forEach((div) => {
            
			const string = String(div.outerHTML);
            const chickenClass = string.search('chicken');

				if (chickenClass === -1){
		
				
				div.classList.remove("generallocked");
				
				console.log(div);
				checkIfLockedAndReturnDisplay(div);

			}
				
            
        })

        OnOffSwitchForChicken = false;

    }

}


let OnOffSwitchForVegetarian = false;
function selectVegetarian(){

    const generalDivs = document.querySelectorAll('.mealCard');
    

    if (OnOffSwitchForVegetarian === false) {

        generalDivs.forEach((div) => {

			const string = String(div.outerHTML);
            const vegetarianClass = string.search('vegetarian');

				if (vegetarianClass === -1){
		
				
				div.classList.add("generallocked");
				console.log(div);
				div.style.display = "none";
			}
            

        })

        OnOffSwitchForVegetarian = true;
    }
    else {

        generalDivs.forEach((div) => {
            
			const string = String(div.outerHTML);
            const vegetarianClass = string.search('vegetarian');

				if (vegetarianClass === -1){
		
				
				div.classList.remove("generallocked");
				
				console.log(div);
				checkIfLockedAndReturnDisplay(div);

			}
				
            
        })

        OnOffSwitchForVegetarian = false;

    }

}




//filter för prissortering

function SortAscending(){
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'object.json')
        xhttp.onload = function(){
            var menu = JSON.parse(xhttp.responseText);

            removeElementByClass("mealCard"); 

            var menuSortedAscending = menu.meals.sort((a, b) => {
                    return a.price - b.price;
            });

            printMenu(menuSortedAscending);


        }
        xhttp.send();
        }

function SortDescending(){
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'object.json')
        xhttp.onload = function(){
            var menu = JSON.parse(xhttp.responseText);

            removeElementByClass("mealCard"); 

            var menuSortedAscending = menu.meals.sort((a, b) => {
                    return b.price - a.price;
                });

            printMenu(menuSortedAscending);


        }
        xhttp.send();
        }




        function removeElementByClass(className)
        {
            const elements = document.getElementsByClassName(className);
            while(elements.length > 0){
                elements[0].parentNode.removeChild(elements[0]);
            }
        }

//funktion för att printa kort

        function printMenu(menu)
        {         
            for(var i = 0; i < menu.length; i++)
            {

                var menuContainer = document.getElementById("menu-container");
                var mealCard = document.createElement("div");
                mealCard.classList.add("mealCard");
                mealCard.classList.add(menu[i].alergies[0],menu[i].alergies[1], menu[i].meatType);
                menuContainer.appendChild(mealCard);

                mealCard.innerHTML = 
                `
                <div class="container-fluid">
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row no-gutters">
                      <div class="col-md-4">
                        <img src="${menu[i].image}" class="card-img" alt="${menu[i].name}">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${menu[i].name}</h5>
                          <p class="card-text">${menu[i].description}</p>
                          <p class="card-text">${menu[i].price}kr</p>
                        </div>
                      </div>
                    </div>
                  </div>
                `;

            }
        }
