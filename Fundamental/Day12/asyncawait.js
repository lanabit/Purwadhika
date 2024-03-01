
function deleteData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      numbers.pop()
      resolve(numbers);
    },2000)
  })
}

function showData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numbers)
    },1000)
  })
}

async function Main() {
  try {
    await deleteData()
    await deleteData()
    await deleteData()
    const res = await showData()
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

const numbers = [1,2,3,4,5,6]

Main()