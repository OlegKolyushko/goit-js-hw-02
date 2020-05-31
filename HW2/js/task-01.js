const names = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
let number = 1;
const logItems = function(array) {
    for(let i = 0; i < array.length; i += 1 ) {
        const name = names[i];
        number = i + 1;
        console.log(`${number} - ${name}`); 
    }
}

logItems(names);
  