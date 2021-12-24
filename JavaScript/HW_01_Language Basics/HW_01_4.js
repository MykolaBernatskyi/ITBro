let bil = prompt("Please, enter the bill value!");
//let tip = 60;

function finalValue(bilValue){
    let rez;
    rez = 0;
    (bilValue >= 50) && (bilValue <= 300) ? rez = 0.2*bil : rez = 0.15*bil;
    return rez;
}
let tip = finalValue(bil);
let totalCoast = parseFloat(bil) + parseFloat(finalValue(bil));
console.log(`The bill was ${bil}, the tip was ${tip}, and the total value ${totalCoast}`);
alert(`The bill was ${bil}, the tip was ${tip}, and the total value ${totalCoast}`);

