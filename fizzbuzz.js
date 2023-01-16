//console.log(1);
//console.log(2);

function fizzBuzz () {
    for ( let i = 1; i <= 105; i++){
        let fizzyAnswer = "";
        let defAnswer = i;
        let fizzy = false;
        if ( i  % 3 == 0 ){ 
            fizzyAnswer += "fizz";
            fizzy = true;
        } 
        if (i % 5 == 0 ) {
            fizzyAnswer += "buzz"; 
            fizzy = true;}  
        if (i % 7 == 0) {
            fizzyAnswer += "bang";
            fizzy = true;} 
        console.log(fizzy? fizzyAnswer: defAnswer);
        }
    };
}

fizzBuzz();




