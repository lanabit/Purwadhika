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
  FullTimePokok = 100_000;
  FullTimeEkstra = 50_000;
  constructor(name, total){
    super(name, total);
    this.gajitotal = (this.gaji(this.FullTimePokok,this.FullTimeEkstra)).toLocaleString("id-ID",{style: "currency", currency: "IDR"});
  }

  
}

class PartTime extends Employee{
  partTimePokok = 50_000;
  partTimeEkstra = 35_000;
  constructor(name, total){
    super(name, total);
    this.gajitotal = (this.gaji(this.partTimePokok,this.partTimeEkstra)).toLocaleString("id-ID",{style: "currency", currency: "IDR"});
  }
}

const personA = new FullTime("Abigail",8);
const personB = new PartTime("Deru",4)
console.log(personA, personB);