//Функція, що повертає кількість днів для заданого місяця та року
function daysInMonthMy(month, year)
{
    if (month<=0){
        return 0;
    }
    if (month>12){
        return 0;
    }
    if(month>=8){
        month++;

    }
    if(month===2){
        if(year%100===0){
            if(year%400===0){
                return 29;
            }
            return 28;
        }
        return year % 4 === 0 ? 29 : 28;
    }
    if(month%2===0){
        return 30;
    }
    return 31;
}

console.log("Кількість днів в 3 місяці 2004 року = " + daysInMonthMy(3, 2004));
console.log("Кількість днів в 2 місяці 2010 року = " + daysInMonthMy(2, 2010));
console.log("Кількість днів в 2 місяці 100 року = " + daysInMonthMy(2, 100));
console.log("Кількість днів в 9 місяці 1998 року = " + daysInMonthMy(9, 1998));
console.log("Кількість днів в 4 місяці 1974 року = " + daysInMonthMy(4, 1974));