console.log("Ascending order\n")
function printAscendingPattern(n){
let pattern = "";
for(let i = 0; i < n; i++){
    pattern = pattern + "*";
    console.log(pattern);
    }
}
printAscendingPattern(5);

console.log("\n\nDescending orde\n")

function printDescendingPattern(n) {
  for (let i = n; i > 0; i--) {
    let pattern = '';
    for (let j = 0; j < i; j++) {
      pattern += '*';
    }
    console.log(pattern);
  }
}
printDescendingPattern(5);