/* 
3 jam pertama -> 10.000 
jam berikutnya -> 1.500/jam

input = jam (1-12), AM or PM
proses = durasi, perkalian sisa jam 
*/
/*
//CARA PROSES DURASI
masuk 8 AM
keluar 10 AM => durasi 2 jam
keluar 2 PM => 2 + 12 => 14 => 14-8 = > durasi 6 jam 
keluar 8 PM => 8 + 12 => 20 => 20 - 8 => durasi 12 jam
keluar 12 PM -> durasi 4 jam;

masuk 11 PM 
keluar 1 AM => 1 + 12 => 13 - 11 => 2 jam
keluar 2 AM => 2 + 12 => 14 - 11 => 3 jam

masuk 8 AM
keluar 2 AM => 2 + 12 => 14 - 10 => 4 jam + 12 => 16

masuk 12 PM 
keluar 10 PM => 10 + 12 => 22 - 12 => 10 jam  

let masuk = 8;
let masuk_tag = 'AM'
let keluar = 10;
let keluar_tag = "PM"
let result;
if(masuk_tag == keluar_tag && masuk < keluar) {
  result = keluar - masuk;
}else if (masuk_tag == keluar_tag && masuk > keluar) {
  result = keluar - masuk + 24;
}else if (masuk_tag !== keluar_tag) {
  if(keluar !== 12 && keluar_tag == 'PM') {

  }
}
*/

/* class ParkingApp {
  #data1 = [];
  #data2 = [];
  constructor(str1,str2) {
    this.#data1 = str1.split(' ') //pakai regex
    this.#data2 = str2.split(' ')
    this.time1 = this.convert(this.#data1);
    this.time2 = this.convert(this.#data2);
    this.duration = this.duration(); 
  }

  convert(arr) {
    let hour = arr[0]
    const indicator = arr[1]
    if(indicator == 'PM' && hour < 12) {
      return Number(hour) + 12;
    }else if((indicator == 'AM' && hour < 12) || (indicator == 'PM' && hour == 12)) {
      return Number(hour);
    }else{
      return 0;
    }
  }

  duration() {
    if (this.time2 > this.time1) {
      return this.time2 - this.time1
    }
    return (24 - this.time1) + this.time2
  }
}

let car1 = new ParkingApp('12 PM','1 PM')
console.log(car1)
 */

                  "8 PM", "9 PM"
function duration(masuk, keluar){
  const jam_masuk = masuk.split(' '); // "8 PM" => ["8","PM"] 
  
  // 12 PM => 12 SIANG 
  //  1 PM => 13 SIANG -> 1 + 12   
  //  8 PM => 20 MALEM -> 8 + 12
  // 11 PM => 23 MALEM -> 11+ 12  
  // 12 PM => 24 X => 12

  // 8 AM => 8 PAGI
  // 2 AM => 2 PAGI
  // 1 - 11 AM -> pagi
  // 12 AM -> TENGAH MALEM => 12 
  if(jam_masuk[1] == 'PM' && jam_masuk[0] < 12) {
    jam_masuk[0] = Number(jam_masuk[0]) + 12;
  }else if(jam_masuk[1] == 'AM' && jam_masuk[0] < 12) {
    jam_masuk[0] = Number(jam_masuk[0]);
  }else if(jam_masuk[1] == 'PM' && jam_masuk[0] == 12) {
    jam_masuk[0] = Number(jam_masuk[0]);
  }else if(jam_masuk[1] == 'AM' && jam_masuk[0] == 12){
    jam_masuk[0] = 0;
  }

  console.log("jam_masuk:",jam_masuk[0])

  const jam_keluar = keluar.split(' '); // "9 PM" => ["9","PM"]
  if(jam_keluar[1] == 'PM' && jam_keluar[0] < 12) {
    jam_keluar[0] = Number(jam_keluar[0]) + 12;
  }else if(jam_keluar[1] == 'AM' && jam_keluar[0] < 12) {
    jam_keluar[0] = Number(jam_keluar[0]);
  }else if(jam_keluar[1] == 'PM' && jam_keluar[0] == 12) {
    jam_keluar[0] = Number(jam_keluar[0]);
  }else{
    jam_keluar[0] = 0;
  }
  console.log("jam_keluar:",jam_keluar[0])
      // MASUK JAM 9PM => 21 | KELUAR JAM 2AM => 2
  if (jam_keluar[0] > jam_masuk[0]) {
    return jam_keluar[0] - jam_masuk[0] // 1 JAM
  }else if (jam_keluar[0] < jam_masuk[0]) {
    return (24 - jam_masuk[0]) + jam_keluar[0]
    // 12 jam => 0 12, 1, 12bangun jam 6, makan jam 12, pulang 4
    // 24 jam => 0 ... 24 bangun jam 6, makan jam 12, pulang 16
    // 
  }
}

function parkingPrice(n) {
  let result = 0;
  if(n <= 3) {
    result += 10000;
  }else{
    console.log(n)
    result = (n - 3) * 1500 + 10000;
  }
  return result
}

console.log(parkingPrice(duration("11 PM","10 PM")))
