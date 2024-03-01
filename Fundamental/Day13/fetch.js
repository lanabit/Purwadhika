async function getResponse() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const movies = await response.json(); //konversi dari json ke js
    if(response.status === 404) throw new Error('Error')
    console.log(movies);
  } catch (err) {
    console.log(err)
  }
}

getResponse();
