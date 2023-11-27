function solve(A, B) {
  // for(let i=1; i<B; i++){
  //     if(((A%B) * i) % B == 1){
  //         return i;
  //     }
  // }

  //The above solution would not work for big mod values

  let p = B - 2;
  //fermit's theorum: A^(B-1) % B = 1
  /*
            Explanation

            given B is prime | B > 1 | gcd(A, B) == 1
            
            (A^-1 % B) * A^-1 % B = 1 * (A^-1 % B) - mul both sides
            A^B-2 % M = A^1 % B -- inverse modulo

            Fast power works in this scenario too.
        */

  return Number(primeModInv(A, B, p));
}

function primeModInv(A, B, p) {
  let ans = 0;

  if (p === 0) {
    ans = 1;
    return ans;
  }
  let half = BigInt(primeModInv(A, B, Math.floor(p / 2))) % BigInt(B);

  if (p % 2 === 0) {
    ans = BigInt(half) * BigInt(half);
  } else {
    ans = BigInt(A) * BigInt(half) * BigInt(half);
  }

  return ans % BigInt(B);
}

/*
BigInt can be removed for normal cases.
*/
