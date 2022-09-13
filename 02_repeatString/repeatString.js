const repeatString = function(string, numRepeats) {
    let repString = '';
    if (numRepeats < 0){
        return 'ERROR';
    }

    for (let i=0; i<numRepeats; i++){
        repString += string;
    }
    return repString;
};

// Do not edit below this line
module.exports = repeatString;
