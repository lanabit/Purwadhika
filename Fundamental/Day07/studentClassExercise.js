class StudentData {
  #email = '';
  #dob = '';

  constructor(name, email, dob, score) {
    this.name = name;
    this.#email = email;
    this.score = score;
    this.#dob = dob;
  }

  get getAge() {
    return Math.floor(Math.abs(new Date(this.#dob).getTime() - new Date())/(1000*3600*24*365));
  }
}

function studData(arr){
  const studentObjects = [];

  for (let i of arr) {
    const [name, email, dob, score] = i;
    let a = new StudentData(name, email, dob, score);
    a.age = a.getAge;
    studentObjects.push(a);
  }
  
  console.log(studentObjects);

  let highestScore = 0;
  let lowestScore = 10000;
  let avgScore = 0;
  let oldest = 0;
  let youngest = 10000;
  let avgAge = 0;

  for (let i of studentObjects) {
    avgScore += i.score;
    avgAge += i.age;
    if(i.score > highestScore) {
      highestScore = i.score;
    }
    if(i.score < lowestScore) {
      lowestScore = i.score
    }
    if(i.age > oldest) {
      oldest = i.age;
    }
    if(i.age < youngest) {
      youngest = i.age;
    }
  }

  const finalScore = {
    highestScore: highestScore,
    lowestScore: lowestScore,
    avgScore: avgScore/studentObjects.length,
    oldest: oldest,
    youngest: youngest,
    avgAge: Number((avgAge/studentObjects.length).toFixed(2))
  }

  return finalScore;
}

const data = [['wulan','wlntsbt@gmail.com','2000/03/28',78],['hanief','hanief@yahoo.co.uk','2002/01/17',82],['iqbal','balebalebale@gmail.com','1998/04/17',80],['barrent','barrentbigboss@gmail.com','2001/01/17',100]];
console.log(studData(data));