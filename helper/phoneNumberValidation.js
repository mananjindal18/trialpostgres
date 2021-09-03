module.exports.isPhoneNumberValid = (number)=> { 
    return (/^-?[\d.]+(?:e-?\d+)?$/.test(number)  &&  number.toString().length==10); 
} 