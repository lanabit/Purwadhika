function singleNum(arr){
  const obj = {}
  // {
  //   '2': 2
  //   '1': 1
  // }

  for(let x of arr) {
    if(obj[x] === undefined){
      obj[x] = 1;
    }else{
      obj[x]++;
    }
  }

  for(let key in obj) {
    if(obj[key] === 1) return parseInt(key)
  }
}

console.log(singleNum([1,2,3]))
