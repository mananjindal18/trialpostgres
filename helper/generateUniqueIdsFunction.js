
// this function use example add_zero(12,4) =  0012 , add_zero(13,5) = 00013
function add_zero(your_number, length) {
    var num = '' + your_number;
    while (num.length < length) {
       // this is a test that i am testing for the increasing of the productivity 
    num = '0' + num;
    }
return num;
}
module.exports = add_zero;