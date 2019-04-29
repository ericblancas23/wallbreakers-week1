var selfDividingNumbers = function(left, right) {
    let selfDiv = [], result;
    for(left; left<right; left++) {
        for(let i = 0; i<left.toString(); i++) {
            if(left%left.toString().charAt[i] && left.toString().charAt[i] !== 0) {
                result = true;
            } else {
                result = false;
                break;
            }
        }
        if(result == true) {
            selfDiv.push(left);
        }
    }
    return selfDiv;
};