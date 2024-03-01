//uppercase each element
function uppercaseEach(str){
  let temp = str.split('');
  const cont = [];
  for(let i = 0; i < temp.length; i++){
    let temp2 = [...temp]
    temp2[i] = temp[i].toUpperCase();
    cont.push(temp2.join(''))
  }
  return cont;
}

console.log(uppercaseEach("abc"));

//repeat char
function repeatChar(str){
  let temp = str.split('');
  let result = [];
  for(let i = 0; i < temp.length; i++) {
    let add = temp[i];
    const elementTemp = [] 
    for(let j = 0; j <= i; j++){
      elementTemp.push(add);
    }
    result.push(elementTemp.join(''))
  }

  return result.map((x)=> x.split('')[0].toUpperCase() + x.slice(1))
}

console.log(repeatChar("abc"))