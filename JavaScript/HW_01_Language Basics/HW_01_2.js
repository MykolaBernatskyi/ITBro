let markParametr = {mass:prompt("Введіть вагу Марка в кг"), higher:prompt("Введіть зріст Марка в метрах, через - \".\"")};
let joneParametr = {mass:prompt("Введіть вагу Джона в кг"), higher:prompt("Введіть зріст Джона в метрах, через - \".\"")};
let bodyMassIndex = (bmi) => Math.round(bmi.mass/bmi.higher**2);
let markBodyMassIndex = bodyMassIndex (markParametr);
let joneBodyMassIndex = bodyMassIndex (joneParametr);
(markBodyMassIndex > joneBodyMassIndex) ?
    alert(`ІМТ Марка (${markBodyMassIndex}) вищий за Джона (${joneBodyMassIndex})!`):
    alert(`ІМТ Марка (${markBodyMassIndex}) нищий за Джона (${joneBodyMassIndex})!`);
