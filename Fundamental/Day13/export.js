//EXPORT

const name = 'Ryan'
const hobby = 'Ngoding'
const zodiak = "Virgo"

//default : 1 export
// module.exports = name;


//name : many export
// module.exports = {
//   hobby, zodiak
// }

//or 

//module.exports = {
//   exportName: name,
//   exportZodiak: zodiak
// }

function printHello(user){
  return `Hello, ${user}`;
}

function output() {
  console.log('Any output')
}

module.exports = {
  printHello, output
}