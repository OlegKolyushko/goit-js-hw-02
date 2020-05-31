const message = 'Get best sale offers now!';
// const message = 'JavaScript weekly newsletter';
const checkForSpam = function(message) {
    const arr = message.split(' ');
    if (arr.includes('sale', 'spam')){
        return true;
    } else {
        return false;
    }
  };
  console.log(checkForSpam(message));
