const message = 'Proin sociis natoque et magnis parturient montes mus';
const pricePerWord = 30;

const calculateEngravingPrice = function(message, pricePerWord) {
    const words = message.split(' ');

    const price = words.length * pricePerWord;
    return price;
};

console.log(calculateEngravingPrice(message, pricePerWord));
