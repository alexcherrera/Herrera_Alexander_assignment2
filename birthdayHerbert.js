//Start variables:                                                                               
//Stating variables:                                                                             
//(String)Name of the boy                                                                        
var boyName;
boyName = "Herbert";
//(Number)When the boy can buy a pet                                                             
var ageStart;
//(Array)Time with each animal                                                                   
var timeSpent;

//Variable values:                                                                               
boyName = "Herbert";
ageStart = 12;
timeSpent = [10,15,20,30];


//1st Function (Procedure)                                                                       
var welcome = function() {
//Argument Conditional                                                                           
    if(boyName == "Herbert") {
	console.log("A boy by the name of " + boyName + " wanted to buy a pet for his birthday.");
    } else {
	alert("Wrong Name");
    }

}
//2nd Function (Boolean)                                                                                             
    var agePolicy = function(policy) {
	//Stating variables:                                                                                                 
        var boyBirthAge;//How old the boy turned                                                                     
        var ageOlder;//That the boy is older than 12                                                                 
        var ageAllowed;
        var storedPolicy;
//Display message of the age policy                                                                                  
// console.log("The store owner has a policy, to buy a pet the customer has to be " + ageStart + " years old."); 
//Variable Values:                                                                                                   
        boyBirthAge = 15;
        ageOlder = true;
        truePolicy = "The store owner has a policy, to buy a pet the customer has to be " + ageStart + " years old.";
        ageAllowed = "Once the owner saw that " + boyName + " was older than " + ageStart + " years old";
        //      storedPolicy = policy;                                                                               
//Display message of the age policy & Comparison                                                                     
        if (policy === true ) {
            //  console.log(truePolicy);                                                                             
        } else {
                console.log("The own said sorry " + boyName + " but you do not meet the age requirement of " + ageStart + " years old.");
        }
        return truePolicy;

    }
welcome();
agePolicy();                                                                                                       

var ageCheck = agePolicy(true);
console.log(ageCheck);