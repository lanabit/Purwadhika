// check if two objects are equal

function areEquals(obj1, obj2) {
  for (const key in obj1) {
    if(/* !obj2.hasOwnProperty(key) || */ obj2[key] !== obj1[key]) return false
  }
  return true;
}

console.log(areEquals({a: 1},{a: 1}));

//returns intersect property

function intersection(obj1,obj2,obj3 = {}){
  for (const key in obj1) {
    if(obj2[key] == obj1[key]) obj3[key] = obj2[key];
  }
  return obj3;
}

console.log(intersection({a: 1, b: 2},{a: 1, b: 2}))

// merging two arrays of object w/o duplicates

function merger(arr1,arr2){
  const arr3 = arr1.concat(arr2);
  const props = Object.keys(...arr3);

  const resultArr = arr3.filter((item, index, self) => {
    return (
      index === self.findIndex((t) => props.every((key)=>t[key] === item[key]))
    );
  });
  return resultArr;
}

const arr1 = [
  {name: 'student1', email: 'student1@mail.com'},
  {name: 'student2', email: 'student2@mail.com'}
]
const arr2 = [
  {name: 'student1', email: 'student1@mail.com'},
  {name: 'student3', email: 'student3@mail.com'}
]
console.log(merger(arr1,arr2))

// switch key to value, returns array of object

function switcher(arr){
  const entries = [];
  for(let i of arr){
    const obj = Object.entries(i);
    for(let j of obj) {
      let temp = j[0];
      j[0] = j[1];
      j[1] = temp
    }
    entries.push(Object.fromEntries(obj));
  }
  return entries;
}

console.log(switcher([{name:'David', age:20},{color:'Red'}]))

// recursive factorial

function factorial(n) {
  if(n == 1) {
    return 1;
  } else {
    return n * factorial(n-1)
  }
}
console.log(factorial(5))