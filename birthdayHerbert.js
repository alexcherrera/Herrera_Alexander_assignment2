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

welcome();