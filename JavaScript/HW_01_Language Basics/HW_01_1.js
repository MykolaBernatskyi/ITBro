// let markParametr = {mass:prompt("Введіть вагу Марка в кг"), higher:prompt("Введіть зріст Марка в метрах, через - \".\"")};
// let joneParametr = {mass:prompt("Введіть вагу Джона в кг"), higher:prompt("Введіть зріст Джона в метрах, через - \".\"")};

// let markParametr = {mass:78, higher:1.68};
// let joneParametr = {mass:92, higher:1.88};

let markParametr = {mass:95, higher:1.88};
let joneParametr = {mass:85, higher:1.76};

let bodyMassIndex = (bmi) => Math.round(bmi.mass/bmi.higher**2);
let markBodyMassIndex = bodyMassIndex (markParametr);
let joneBodyMassIndex = bodyMassIndex (joneParametr);

alert(`ІМТ Марка ${markBodyMassIndex}`);
alert(`ІМТ Джона ${joneBodyMassIndex}`);

let markHigherBMI = false;

(markBodyMassIndex > joneBodyMassIndex)? markHigherBMI=true:markHigherBMI=false;
alert(`markHigherBMI (${markHigherBMI})`);
