//console.log(1);
//console.log(2);

function fizzBuzz () {
    for ( let i = 1; i <= 100; i++){
        let fizzyAnswer = "";
        let defAnswer = i;
        let fizzy = false;
        if ( i  % 3 == 0 ){ 
            fizzyAnswer += "fizz";
        } 
        if (i % 5 == 0 ) {
            fizzyAnswer += "buzz"; 
            fizzy == true;}  
        if (i % 7 == 0) {
            fizzyAnswer += "bang";
            fizzy == true;} 
        return console.log(fizzy ? fizzyAnswer: defAnswer);

    };
}

fizzBuzz();




