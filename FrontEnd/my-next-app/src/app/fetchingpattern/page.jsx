/*
// PARALLEL FETCHING PATTERN

const onFetchUsers = async() =>{
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

const onFetchProducts = async() => {
    try {
        let res = await fetch('http://localhost:5000/products', {
            method: 'GET',
            cache: 'no-store'
        })
        await new Promise(r => setTimeout(r, 5000))
        res = await res.json()
        
        return res
    } catch (error) {
        console.log(error)
    }
}

const FetchingPatternPage = async() => {
  const users = await onFetchUsers()
  const posts = await onFetchProducts()

  return(
      <div>
          <h1>
              Fetching Pattern Page 
          </h1>
          <h5
              className="bg-red-500"
          >
              {JSON.stringify(posts).slice(0,100)}
          </h5>
          <h5
              className="bg-gray-100"
          >
              {JSON.stringify(users)}
          </h5>
      </div>
  )
}

export default FetchingPatternPage
*/

import { Suspense } from 'react'
import UserComponent from './userComponent'

const onFetchPosts = async() => {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            cache: 'no-store'
        })
        res = await res.json()
        
        return res
    } catch (error) {
        console.log(error)
    }
}

export default async function FetchingPatternPage(){

    const posts = await onFetchPosts()
    

    return(
        <div>
            <h1>
                Fetching Pattern Page 
            </h1>
            <h5
                className="bg-red-500"
            >
                {JSON.stringify(posts).slice(0, 100)}
            </h5>
            <Suspense fallback={'<h1>Loading...</h1>'}>
                <UserComponent/>
            </Suspense>
        </div>
    )
}

/*
// const onFetchPosts = async() => {
//     try {
//         let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'GET',
//             cache: 'no-store'
//         })
//         res = await res.json()

        
//         return res
//     } catch (error) {
//         console.log(error)
//     }
// }

// const onFetchUsers = async() => {
//     try {
//         let res = await fetch('https://jsonplaceholder.typicode.com/users', {
//             method: 'GET',
//             cache: 'no-store'
//         })
//         await new Promise(r => setTimeout(r, 10000))
//         res = await res.json()
        
//         return res
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default async function FetchingPatternPage(){

//     const posts = await onFetchPosts()
//     const users = await onFetchUsers()

//     return(
//         <div>
//             <h1>
//                 Fetching Pattern Page 
//             </h1>
//             <h5
//                 className="bg-red-500"
//             >
//                 {JSON.stringify(posts).slice(0, 100)}
//             </h5>
//             <h5
//                 className="bg-gray-100"
//             >
//                 {JSON.stringify(users).slice(0, 100)}
//             </h5>
//         </div>
//     )
// }

import { Suspense } from 'react'
import UserComponent from "./UserComponent"

const onFetchPosts = async() => {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            cache: 'no-store'
        })
        res = await res.json()
        
        return res
    } catch (error) {
        console.log(error)
    }
}

export default async function FetchingPatternPage(){

    const posts = await onFetchPosts()
    

    return(
        <div>
            <h1>
                Fetching Pattern Page 
            </h1>
            <h5
                className="bg-red-500"
            >
                {JSON.stringify(posts).slice(0, 100)}
            </h5>
            <Suspense fallback={'<h1>Loading...</h1>'}>
                <UserComponent />
            </Suspense>
        </div>
    )
}
*/