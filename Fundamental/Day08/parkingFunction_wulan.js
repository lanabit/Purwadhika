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
    // 12 jam => 0 12, 1, 12bangun jam 7, makan jam 12, pulang jam 7 => kalo gw bilang jam 7, bisa jam 7 pagi atau jam 7 malem
    // 24 jam => 0 ... 24 bangun jam 7, makan jam 12, pulang 19 => semakin larut angkanya semakin besar. kalau gw bilang jam 7, pasti pagi. kalau jam 19, pasti jam 7 malam maksudnya.
    // refer ke ilustrasi waktu sebagai garis linear
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
