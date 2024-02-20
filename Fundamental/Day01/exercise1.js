let data = 628133978973; //number

// create a program to hide last 3 digits of phone number 081..xxx string type
let changeString = String(data);
let output = changeString.slice(0, changeString.length-3);
console.log(output+'xxx');

// 1. write a code to find area of rectangle
function rectangleArea(l,w) {
  return l*w;
};

console.log("rectangle area:",rectangleArea(5,3));

// 2. write a code to find perimeter of rectangle
function rectanglePerimeter(l,w) {
  return 2*l + 2*w;
};

console.log("rectangle perimeter:",rectanglePerimeter(5,3));

// 3. write a code to find diameter, circumference and area of a circle (r as input)
function circleMeasurements(r) {
  let diameter = 2*r;
  let circumference = 2*Math.PI*r;
  let area = Math.PI*Math.pow(r,2);
  let output = `diameter = ${diameter}, circumference = ${circumference}, area = ${area}`;
  return output;
};

console.log(circleMeasurements(5));

// 4. write a code to find angles of triangle if two angles are given
function triangleAngle(a,b) {
  return 180-a-b;
};

console.log("rectangleArea",triangleAngle(80,65));

// 5. write a code to get difference btw dates in days 
function twoDatesDifference(string1,string2) {
  let month1 = string1.slice(5,7);
  let month2 = string2.slice(5,7);
  let diff;
  if(month1 !== month2) {
      month1 = Number(month1);
      month2 = Number(month2);
      diff = Math.abs(month1 - month2)*30;
  }
  let day1 = string1.slice(string1.length-2);
  let day2 = string2.slice(string2.length-2);  
  diff = Math.abs(Number(day1)-Number(day2));
  return diff;
}

console.log("how many days apart:", twoDatesDifference('2022-01-20','2022-01-22'));

// 5. alternative method 
function dateDiff(a,b) {
  let date1 = new Date(a);
  let date2 = new Date(b);
  let time1 = date1.getTime();
  let time2 = date2.getTime();
  let timeElapsed = Math.abs(time1 - time2);
  timeElapsed = ((timeElapsed/1000)/3600)/24;
  return timeElapsed;
}

console.log("how many days apart (2):", dateDiff('2022-01-20','2022-01-22'));

// 6. write a code to convert days to years,months, and days.
function daysToYMD(days) {
  days = 400
  let year = Math.floor(days/365);
  let month = Math.floor((days%365)/30);
  let day = Math.floor ((days%365)%30);
  let output = `${year} years, ${month} months, ${day} days`;
  return output;
};



console.log(daysToYMD(400));


