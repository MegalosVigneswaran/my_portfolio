AOS.init();
const I_am = [
  "python developer",
  "linux enthusiast",
  "AI/ML enthusiast",
];

let index = 0;

function startTyping() {
  const typer = new TypeIt(".typing", {
    speed: 80,
    deleteSpeed: 80,
    loop: true,
    waitUntilVisible: true
  })

  for(const str of I_am){
    typer.type(str).pause(1500).delete();
  }
  typer.go();
}

startTyping();

