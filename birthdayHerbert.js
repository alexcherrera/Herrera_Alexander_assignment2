//Start Variables:                                                                               
//Stating Variables:                                                                             
//(String)Name of the boy                                                                        
var boyName;
//(String)Not met the age console.log 
var rejectAge;
//(Number)When the boy can buy a pet                                                             
var ageStart;
//(Array)Time with each animal                                                                   
var timeSpent;
//Variable Values:                                                                               
boyName = "Herbert";
ageStart = 12;
timeSpent = [10,15,20,30];
rejectAge = boyName + " didn't know the store has a policy, to buy a pet the customer has to be " + ageStart + " years old.";

//1st Function (Procedure)                                                                       
var welcome = function() {
//Argument Conditional                                                                           
    if(boyName === "Herbert") {
	console.log("A boy by the name of " + boyName + " wanted to buy a pet for his birthday.");
    } else {
	console.log("Wrong Name");
    }
};

welcome();

//2nd Function (Boolean)                                                                                             
    var agePolicy = function() {
//Stating variables:                                                                                                 
        var boyBirthAge;//How old the boy turned                                                                     
        var ageOlder;//That the boy is older than 12                                                                 
        var storedPolicy;
//Variable Values:                                                                                                   
        truePolicy = boyName + " knew the store has a policy, to buy a pet the customer has to be atleast " + ageStart + " years old.";
	ageOlder = true;
//Display message of the age policy & comparison                                                                     
        if (ageOlder === true) {
	    // console.log(truePolicy);                                                                             
        } else {       
	    console.log(rejectAge);
	}
	return truePolicy;
    };

agePolicy();
var ageCheck = agePolicy();
console.log(ageCheck);

//3rd Function (Number)                                                                                          
	var allowed = function() {
//Stating Variables:
	var ageAllowed;//Statement for console.log
        var boyBirthAge;//How old the boy turned 
        var ageOlder;//That the boy is older than 12
	var mathAge;//The difference from the ages
//Variable Values:
	boyBirthAge = 15;
        ageOlder = true;
//While Loop
        while (boyBirthAge > ageStart) {
	    mathAge = boyBirthAge - ageStart;
	    if (mathAge === 3) {
		ageAllowed = "Once the owner saw that " + boyName + " was older than " + ageStart + " years old he allowed " + boyName + " to look at the pets.";
		console.log(ageAllowed);  
	    } else {
      	   	console.log("The owner said sorry " + boyName + " but you do not meet the age requirement, you have " + mathAge + " years old.");
	    }
	    return mathAge;
	}
	};

allowed();                                                                                          

//4th Function(Sting)
var dispAnimal = function() {
//Stating Varaibles:
    var seeAnim;//(String)See animals
    var animSec;//(String)Animal sections
    var amouTime;//(String)Amount ime
//Variable Values:
    seeAnim = "went to the back of the store ";
    animSec = "types of animals that were sepearted into areas";
    amouTime = " spent more time in some areas compared to ";
    console.log("When " + boyName + " got permission to go see the animals he " + seeAnim + " to see all the " + animSec + ".");
    console.log( boyName + amouTime + "the other areas.");
    return seeAnim;
    return animSec;
    return amouTime;
};
dispAnimal();

//5th Function (Array) 
var areaTimSec = function () {
//Stating Variables:
	var animSec;//(Array)Animal Sections
	var secIndex;//(Number)Section Number
	var numAnim;//(Boolean)
	var secType;//Section type of animals
//Variable Values: 
	animSec = ["Dogs", "Cats", "Birds", "Fishes"];
	secIndex = 0;
	numAnim = true;
	disIndex = 0;
       	disIndex2 = 0;
	animals = "";
	for(secIndex; secIndex < animSec.length; secIndex++) {
	    secType = animSec[secIndex];
	
     	if(numAnim) {
	    if(secIndex != animSec.length-1)
	    animals+=animSec[secIndex]+" ";
	    else 
	    animals+=animSec[secIndex];
	    }
	
	}
	
	animals="The sections of animals were "+animals+"."; 
console.log(animals + " The pet he picked was a dog. ");
       
};
areaTimSec();
