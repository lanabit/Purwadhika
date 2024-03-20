const onFetchPosts = async() =>{
  try {
    let res = await fetch('http://localhost:5000/users',{
      method: 'get',
      cache: 'no-store'
    })
    res = await res.json()
    return res
  } catch (error) {
    console.log(error)
  }
}

const FetchingPage = async() => {
  const products = await onFetchPosts()
  console.log(products)
  return(
    <div>
      FETCHING PAGE
      {products?.map((x,i) => {
        return(
          <div key={i}>
            {x.username}
          </div>
        )
      })}
    </div>
  )
}

export default FetchingPage