let catVoice = "Miaow";
let dogVoise = "Woof";
let birdVoise = "Peet peet";

const animalsVoice = {
  catVoice,
  dogVoise,
  birdVoise,
  log() {
    console.log(this);
  },
};

const animalsVoice1 = {
  catVoice: "JH",
  dogVoise: "MK",
  birdVoise: "Pini",
  log() {
    console.log(this);
  },
};
// animalsVoice.log()
// animalsVoice1.log()

// const logFfomaGlobal = animalsVoice1.log

// logFfomaGlobal()

// console.log(this);

const anotherLogin = animalsVoice.log.bind(animalsVoice1)

anotherLogin()