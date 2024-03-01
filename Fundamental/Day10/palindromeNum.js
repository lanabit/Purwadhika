var kthPalindrome = function(queries, intLength) {
  const start = '1';
  let a = start.padEnd(intLength, '0').split('')
  a = a.map((x)=> Number(x))
  a[a.length-1] = 1
  const result = [];
  result.push(a.join(''))
  const isEven = intLength%2 === 0;
  
  if(isEven){
      let z = a.length/2
      let counter = 1;
      while(a[0] < 9){
        do{
          a[z]++;
          a[z - counter] = a[z]
          result.push(a.join(''));
        } while(a[z] < 9)
        z++
        counter += 2
      }
   }else{
          const mid = a.length/2;
          let z = a.length/2
          let counter = 1;
          let x;
          while(a[0] < 9){
            if(z === mid) {
              do{
              a[z]++;
              result.push(a.join(''));
              } while (a[z] < 9)
            } else {
                  do{
                    a[z]++;
                    a[z - counter] = a[z]
                    result.push(a.join(''));
                   }while (a[z] < 9)
                }
                z++
                counter += 2;
            }
      }
  return queries.map((x)=>result[x-1])
};

console.log(kthPalindrome([1,2,3], 3))