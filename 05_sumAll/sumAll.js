function errorsPresent(num1, num2){
    if (num1 < 0 || num2 < 0){
        return true;
    } else if (typeof(num1) !== "number" && typeof(num1) !== "bigint"){
        return true;
    } else if (typeof(num2) !== "number" && typeof(num2) !== "bigint") {
        return true;
    } else {
        return false;
    }
}

const sumAll = function(num1, num2) {
    if (errorsPresent(num1, num2)) return 'ERROR';

    let smallest = num1;
    let largest = num2;
    if (num1 > num2){
        smallest = num2;
        largest = num1;
    }

    

    let sum=0;
    for (let i=smallest; i<=largest; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
