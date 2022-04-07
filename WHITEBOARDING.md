dino1 = { 
  name: Tyrannosaurus rex,
  period: Mesozoic,
  diet: carnivore,
  walksOnFourLegs: false,
  yearDiscovered: 1902,
  popularity: 999
}

dino2 = { 
  name: Brachiosaurus,
  period: Jurassic,
  diet: herbivore,
  walksOnFourLegs: true,
  yearDiscovered: 1900,
  popularity: 959
}

dino3 = { 
  name: Parasaurolophus,
  period: Cretaceous,
  diet: herbivore,
  walksOnFourLegs: true,
  yearDiscovered: 1922,
  popularity: 500
}

dino4 = { 
  name: Stegosaurus,
  period: Jurassic,
  diet: herbivore,
  walksOnFourLegs: true,
  yearDiscovered: 1876,
  popularity: 903
}
//////////
parameters period, diet, [array of dinos]
Given: "Jurassic", "herbivore", [ dino1, dino2, dino3, dino4 ]
Return: [ dino2, dino4 ]

our client, has an encyclopedia of dinosaurs [ dino1, dino2, dino3, dino4 ]
search function. that will tell her which dinosaurs are jurassic, that have an herbivore diet.
she doesn't want to know all dinosaurs from the jurassic
or all dinosaurs that are herbivores.
she just wants to know which ones are from the jurassic AND herbivores.



P:
-function "dino"; return an array of the dino object filtered by the user's parameters.

-sorts by: period and diet of dinosaur object


const dinoObj = [dino1, dino2, dino3, dino4];
let userHerb = "dino2" 
let userJurs = "dino4"

function dinoList(period, diet, array of dino){
dinoList.forEach(function(element) {
  return() 

1-array of obj. of dino object.
2-Loop the array above
3-branching/conditionals
4-If the conditions of parameters are met (herb,jur)
5-break out the active of looping around the array
6-return dino objects
7-else condtions not met
8-break loop
9-return n/a to user 

}

function sortDino(period, diet, array) {
  let outputArray = [];
  array.forEach(function(element){
    if(element.period === period && element.diet === diet) {
      outputArray.push(element);
    }
  });
  return outputArray;
}

we take an array of user data, loop through the array and check each element for two conditions the period needs to equal parameter jurassic and the diet needs to equal the parameter herbivore. if those conditions are met, add it to a new array. once the loop is finished, return our newarray to the user.


