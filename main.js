AOS.init();
const I_am = [
  "python developer",
  "app developer",
  "tech enthusiast",
  "3D printing enthusiast",
  "linux enthusiast",
  "AI&ML enthusiast",
];

let index = 0;

function startTyping() {
  const typer = new TypeIt(".typing", {
    speed: 45,
    deleteSpeed: 45,
    loop: true,
    waitUntilVisible: true
  })

  for(const str of I_am){
    typer.type(str).pause(1500).delete();
  }
  typer.go();
}

startTyping();


