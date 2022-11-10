
/*Jag har skrivit mina kommentarer i --> /* //Sanna */

/*Koden här nedanför används för att komma åt JSON-objekten med all information från.jsondokumentet
XMLHttpRequest avänds för att data ska kunna skickas mellan en server och webbsida.*/ 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var menu = JSON.parse(xhttp.responseText);
       console.log(menu.meals); 

        printMenu(menu.meals);
    }
};
xhttp.open("GET", "object.json", true);
xhttp.send();

/*När man klickar på knappen "1.Sortera" med id:T submit aktiveras denna funktionen. */
document.getElementById('submit').onclick = function() {
    var radios = document.getElementsByName("prisKnapp");
    var selected = Array.from(radios).find(radio => radio.checked);
    console.log(selected.value);
    /*Funktionen kontrollerar vilken knapp som är ikryssad genom att gå igenom alla knappar med namn "prisKnapp" med en if-sats
     (i detta fall 2 stycken.) Knappen för att sortera med stigande prise thar fått värde angivet till 1. Därför
     kommer  funktionen SortAscending() köras igång när den är iklickad. och är den inte det kommer SortDescending()
     aktiveras och rätterna sorteras istället efter högsta-> lägstapris. )*/
    if(selected.value == 1){
        SortAscending();
    }
    else{
        SortDescending();
    }
};

const menuDiv = document.querySelector("#menu-container");

/*Här är funktionerna för att sortera ut de olika allergenerna och även längre ner i dokumentet proteinet*/

let OnOffSwitchForGluten = false;
function filterGluten(){

    const glutenDivs = document.querySelectorAll('.gluten');
    /*Alla rätter som innehåller gluten väljs*/


    if (OnOffSwitchForGluten === false) {

        /*Foreach går igenom alla rätter och kontrollerar om de är innehåller gluten*/
        glutenDivs.forEach((div) => {

            div.classList.toggle("glutenlocked");
            console.log(div);
            div.style.display = "none";
            /*Om rätten innehåller gluten döljs rätten med style.display= none*/
            

        })

        OnOffSwitchForGluten = true;
    }
    else {
        /*Annars visas rätten på menyn*/
        glutenDivs.forEach((div) => {
            
            
            div.classList.toggle("glutenlocked");
            
            console.log(div);
            checkIfLockedAndReturnDisplay(div);
            
            
        })

        OnOffSwitchForGluten = false;

    }
}

/*Funktionen körs närman bockar ur en vald allergen eller protein, då kommer rätterna som innehåller allergenen/proteinet visas igen*/ 
function checkIfLockedAndReturnDisplay (div){

    

            const string = String(div.outerHTML);
            const locked = string.search('locked');

            if (locked === -1){
    return div.style.display = "block"}
    
}
/*Kommenterar inte separat på alla allergener och val av protein då funktionerna är desamma som gluten som jag förklarat*/

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



P




                                                               

function SortAscending(){
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'object.json')
        xhttp.onload = function(){
            var menu = JSON.parse(xhttp.responseText);

            removeElementByClass("mealCard"); 

                /*Sortering av rätterna och skriver ut dem i sorterad ordning från dyrare till billigare*/
            var menuSortedAscending = menu.meals.sort((a, b) => {
                    return a.price - b.price;
            });

            printMenu(menuSortedAscending);


        }
        xhttp.send();
        }

function SortDescending(){
    /*Hämtar info om rätterna ifrån json-objekten */
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'object.json')
        xhttp.onload = function(){
            var menu = JSON.parse(xhttp.responseText);
            /*Tar bort rätterna som nu ligger synliga på sidan */
            removeElementByClass("mealCard"); 

            /*Sortering av rätterna och skriver ut dem i sorterad ordning från billigare till dyrare med funktionen printMenu*/
            var menuSortedAscending = menu.meals.sort((a, b) => {
                    return b.price - a.price;
                });

            printMenu(menuSortedAscending);


        }
        xhttp.send();
        }



        /*Funktion som tar bort divarna alltså rätterna som inte ska synas beroende på vilket val
        användaren har gjort. T.ex när rätterna sorteras utefter pris används först den här funktionen för att ta bort alla
        rätter från sidan till att börja med. */
        
        function removeElementByClass(className)
        {
            const elements = document.getElementsByClassName(className); 
            while(elements.length > 0){ 
                elements[0].parentNode.removeChild(elements[0]);
            }
        }


        /*Den här funktionen hämtar menyns innehåll från json-dokumentet och lägger till en ruta/div för varje rätt i menyn
        (mealCard)*/
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
