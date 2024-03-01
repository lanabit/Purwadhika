const kota = ["surabaya","solo","semarang","palimanan","cikopo"];

const data = {
  '0': {
    mobil: 275_500,
    truk: 310_500,
    bus: 290_000
  },
  '1': {
    mobil: 22_500,
    truk: 31_500,
    bus: 28_000
  },
  '2': {
    mobil: 250_000,
    truk: 275_000,
    bus: 255_000,
  },
  '3': {
    mobil: 275_000,
    truk: 310_500,
    bus: 290_500
  }
};

function tariff(kendaraan, masuk, keluar){
  const container = [];
  let tariff = 0;
  let arr = [kota.indexOf(masuk),kota.indexOf(keluar)];
  arr.sort();
  for(let i = arr[0]; i < arr[1]; i++){
    container.push(i);
  }

  for(let x of container) {
    tariff += parseInt(data[x][kendaraan]);
  }

  return tariff.toLocaleString("id-ID", {style: "currency", currency: "IDR"});
}

function pickTransport(num){
  if(num == 1) return "mobil";
  if(num == 2) return "truk";
  if(num == 3) return "bus";
  else {
    return num = prompt("Pilih jenis kendaraan:\n1. Mobil\n2. Truk\n3. Bus");
  }
}

let inputKendaraan = prompt("Pilih jenis kendaraan:\n1. Mobil\n2. Truk\n3. Bus\n4. Quit");
let inputMasuk = prompt("Input ruas toll masuk:").toLowerCase();
let inputKeluar = prompt("Input ruas toll keluar:").toLowerCase();

let alertText = `Kendaraan: ${pickTransport(inputKendaraan)}\nTol Masuk: ${inputMasuk}\nTol Keluar: ${inputKeluar}\nTariff: ${tariff(pickTransport(inputKendaraan),inputMasuk,inputKeluar)}`
alert(alertText)