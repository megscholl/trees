// console.log("hey girl");

let treeHeight = document.getElementById("userHeight");
let treeCharacter = document.getElementById("userChar")

let pineValues = {
    height: treeHeight,
    character: treeCharacter
};


document.getElementById("growTree").addEventListener("click", function(e) {
   e.preventDefault();

   console.log("Tree Height: ", pineValues.height.value);
   console.log("Tree Character: ", pineValues.character.value);

    if (pineValues.height.value == "" ||    pineValues.character.value == "") {
        alert('Please enter a height and character');
    };

    
    var treeGrow = (pineValues.height.value * 2) -1; //
     for (var i = 1; i <= treeGrow; i += 2){
         
         var space = " ";
         let space2 = space.repeat(pineValues.height.value - i / 2);
         let grow = (pineValues.character.value).repeat(i);

    console.log(space2, grow);
}});
