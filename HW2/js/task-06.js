let input;
const numbers = [];
let total = 0;
do{
    input = prompt('Введите число');
    if(input === null){
        break;
    }
    if(!Number.isNaN(Number(input))){
        numbers.push(input);
    }
}while(input !== null)
const summa = function(result){
    let sum = 0;
    for( let i = 0; i < result.length; i += 1){
        sum += Number(result[i]);
    }
    return sum;
}
console.log(summa(numbers));
