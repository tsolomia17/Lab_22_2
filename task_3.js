//Функція пошуку найбільшого спільного дільника
function NSD(a, b)
{
    if (b > 0)
    {
        let k = a % b;
        return NSD(b, k);
    }
    else
        return a < 0 ? -a : a;

}

console.log("Найбільший спільний дільник 150 і 36 = " + NSD(150, 36));
console.log("Найбільший спільний дільник 21 і 42 = " + NSD(21, 42));
console.log("Найбільший спільний дільник 18 і 9 = " + NSD(18, 9));