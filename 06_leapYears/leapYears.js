const leapYears = function(year) {
    if (year%4 === 0){
        console.log('yes');
        if (year%100 === 0){
            console.log('yes2');
            return (year % 400 === 0 ? true : false);
        }
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
