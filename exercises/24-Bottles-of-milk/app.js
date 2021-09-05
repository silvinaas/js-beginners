// Your code here:
function bottlesOfMilk(num, num2) {
    let partOfTheSong = "";
    for (let i = 0; i < 2; i++) {
        partOfTheSong = (num + " bottles of milk on the wall, " + num + " bottles of milk. Take one down and pass it around, " + num2 + " bottles of milk on the wall. ")
 
    }
    return partOfTheSong;
} 

function song(){
    entireSong = bottlesOfMilk(99, 98) + bottlesOfMilk (98,97) + "1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall." + "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.";
return entireSong;
}

console.log (song());
