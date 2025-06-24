const sentence = "The quick brown fox jumps over the lazy dog";


let word = sentence.split(" ");
let longest = "";

for(let i = 0; i < word.length; i++){
    if(word[i].length > longest.length){
        longest = word[i];

    }
}
console.log(`The longest word is: ${longest}`);

