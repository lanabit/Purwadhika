class Employee {
  constructor(name, total){ //name, totalWorkingTime
    this.nama = name;
    this.jamKerja = 6;
    this.jamEkstra = 0;
    (total <= 6) ? this.jamKerja = total : this.jamEkstra = total%6;
  }

  gaji(a,b) {
    return (this.jamKerja * a) + (this.jamEkstra * b)}
}

class FullTime extends Employee{
  constructor(name, total){
    super(name, total);
    this.gajitotal = (this.gaji(100000,50000)).toLocaleString("id-ID",{style: "currency", currency: "IDR"});
  }

  
}

class PartTime extends Employee{
  constructor(name, total){
    super(name, total);
    this.gajitotal = (this.gaji(50000,35000)).toLocaleString("id-ID",{style: "currency", currency: "IDR"});
  }
}

const personA = new FullTime("Abigail",8);
const personB = new PartTime("Deru",4)
console.log(personA, personB);