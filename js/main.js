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
   let userHeight = pineValues.height.value;
   let userCharacter = pineValues.character.value;

    if (userHeight == "" || userCharacter == "") {
        alert('Please enter a height and character');
    };
});
















