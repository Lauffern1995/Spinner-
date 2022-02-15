const sentence = ('|/-\\||/-\\||/-\\||/-\\|'); // setting loop animation 
let spintimer = 0;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${sentence[i]} `); // carrage return console so each character of string is not printed in succession 
  }, spintimer);
  spintimer += 200;
}
setTimeout(() => {
  console.log('\r');
}, spintimer += 200);
  

