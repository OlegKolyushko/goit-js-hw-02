const string = 'Curabitur ligula sapien, tincidunt non.';
// const string = 'Vestibulum facilisis, purus nec pulvinar iaculis.';
const stringLength = 40;
const arr = string.split(' ');
const length = string.split('');

const formatString = function(string){
    if( length.length <= stringLength){
        return string;
    } 
    else {
        const clipped = length.slice(0, 40);
        const finishedString = clipped.push('...');
        const stringWithPoints = clipped.join('');
        return stringWithPoints;
    }
};
console.log(formatString(string));

