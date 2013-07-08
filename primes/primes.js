#!/usr/bin/env node

var fs = require('fs');
var outfile = "primes.txt";

function addNextPrime(primes) {

  var start = primes[primes.length - 1] + 1;
 
  while(!isPrime(start, primes))
    start++;
 
  primes.push(start);
 
}
 
function isPrime(num, primes) {
 
  for (var i=0; i < primes.length; i++) {
 
    var prime = primes[i];
       
    if (num % prime === 0)
      return false;
   
    if (Math.pow(prime, 2) > num)
      break;
 
  }
 
  return true;
 
}
 
var primes = [2];
 
while (primes.length < 100) {
 
    addNextPrime(primes);
 
}
 
fs.writeFileSync(outfile, primes.join(','));
