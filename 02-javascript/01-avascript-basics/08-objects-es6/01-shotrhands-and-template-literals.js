let catVoice = "Miaow";
let dogVoise = "Woof";
let birdVoise = "Peet peet";

let songName = "Halleluja"
let song = "The cat sings " + songName
let modernSong = `The cat sings ${songName} and bird sings ${birdVoise}`

console.log(modernSong);


const animalsVoice = {
  catVoice,
  dogVoise,
  birdVoise,
  print() {
    console.log("This is an obj about animals voices", song);
  },
};

console.log(animalsVoice.print());
