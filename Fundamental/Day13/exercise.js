//promise function untuk melakukan penambahan data ke sebuah array. 
//waktu utk menambah data 2 s (asumsi)
/*
const result = [];

function addData(i){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    result.push(i)
    resolve(result);
  },500)
  })
}

async function Main() {
  try {
    for(let i of dataToAdd){
      let resA = await addData(i)
      console.log(resA)
    }
  } catch (error) {
    console.log(error)
  }
}

const dataToAdd = [1,2,3,4];

Main();
*/
//buat sebuah promise func utk register user ke dalam array of object
//lakukan validasi utk field uname, email, password dan confirm password dg ketentuan:
//UNAME : - check if already exist - minimum char 6
//EMAIL : - check email if alr exiist - have @
//PASS & CONFIRM PASS : check if both have the same val

const users = []
let temp = {}

function usernameCheck(username){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username.length < 6) {
        reject("Minimum username char length is 6.");
      }else if(users.forEach(x => x.username === username)){
        reject("Username already exists.");
      }else{
        resolve(["username", username]);
      }
    },50)
  })
}

function emailCheck(email){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!email.includes('@')){
        reject("Email must include \"@\".");
      }else if(users.forEach(x => x.email === email)){
        reject("Email already exists.");
      }else{
        resolve(["email", email]);
      }
    },50)
  })
}

function passwordCheck(pass,confirm){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(pass !== confirm){
        reject("Password doesn't match.");
      }else {
        resolve(["pass", pass]);
      }
    },100)
  })
}

function showUser(){
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve(users)
    })
  },100)
}

function addUser(username, email, pass, confirm){
  let a = usernameCheck(username);
  let b = emailCheck(email);
  let c = passwordCheck(pass, confirm);
  let z = Object.fromEntries([a,b,c]);
  users.push(z)
}

addUser("wulantsabita","wlntsbt@ymail.com","123492490","123492490")

async function Call() {
  try{
    let await await showUser()
  }
}