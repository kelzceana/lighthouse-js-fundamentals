const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
//while loop
var i =0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

// for loop
for(var j=0; j<ingredients.length; j++){
  console.log(ingredients[j]);
}

//reverse loop
for(var x = ingredients.length - 1; x >=0 ; x--){
  console.log(ingredients[x])
}