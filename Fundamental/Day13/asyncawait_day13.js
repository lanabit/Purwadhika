const fruits = ['Anggur', 'Jeruk', 'Apel'];

function addData(fruit) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fruits.forEach((item) => {
        if(item.toLowerCase() === fruit.toLowerCase()){
          reject('Fruit already exist!')
        }
      })
      fruits.push(fruit);
      resolve();
    }, 1500)
  }) 
}

function showData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fruits)
    })
  }, 500)
}

async function Call(){
  try{
    await addData("Alpukat")
    await addData("alpukat")
    let res = await showData()
    console.log(res);
  } catch(error) {
    console.log(error)
  }
}

Call()