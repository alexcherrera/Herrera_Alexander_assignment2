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
        truePolicy = boyName + " knew the store has a policy, to buy a pet the customer has to be " + ageStart + " years old.";
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
	var mathAge;
//Variable Values:
//	ageAllowed = "Once the owner saw that " + boyName + " was older than " + ageStart + " years old";
	boyBirthAge = 15;
        ageOlder = true;
	//	mathAge = boyBirthAge - ageStart;
//While Loop
        while (boyBirthAge > ageStart) {
	    mathAge = boyBirthAge - ageStart;
	    if (mathAge === 3) {
      	    //ageStart++;
	    ageAllowed = "Once the owner saw that " + boyName + " was older than " + ageStart + " years old he allowed" + boyName + " to look at the pets.";
	    console.log(ageAllowed);  
	    } else {
		
	    // while (!boyBirthAge > ageStart) {
	console.log("The owner said sorry " + boyName + " but you do not meet the age requirement, you have " + mathAge + " years old.");
	    }
	    return mathAge;
	}

	};

//Calling Functions
//welcome();
//agePolicy();     
allowed();                                                                                             

//var ageCheck = agePolicy();
//console.log(ageCheck);
	//	var checkAllowed = allowed(