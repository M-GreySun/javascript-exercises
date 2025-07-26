const palindromes = function (string) {
    
    let bot=0; 
    let top= string.length-1;
    string=string.toLowerCase();
    
    while(bot<top){
        if(/[a-zA-A0-9]/.test(string[bot])&&
                /[a-zA-A0-9]/.test(string[top]) && 
                string[bot]!==string[top]){
            return false;
        }
        else if (!/[a-zA-A0-9]/.test(string[bot])){
            bot++;
        }
        else if(!/[a-zA-A0-9]/.test(string[top])){
            top--;
        }
        else{
            bot++;
            top--;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
