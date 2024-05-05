console.log(`For Loop Chapter Started`);
console.log('Answer 01');
for (let i = 0; i <=10; i++) {
    console.log(i);
    
}

console.log('Answer 02');
for (let i = 1; i <= 20; i++) {
    if (i%2==0) {
        console.log(i);
    }
    
}


console.log('Answer 03');
for (let i = 1; i <= 19; i +=2) {
   console.log(i);
    
}


console.log('Answer 04');
for (let i = 1; i <= 10; i++) {
    console.log(`7 X ${i} = ${7*i}`);
    
}


console.log('Answer 05');
let CountSum = 0
for (let i = 1; i <= 100; i++) {
    
    CountSum += i
}
console.log(CountSum);


console.log('Answer 06');
let NumberArray = [2,5,1,9,13,35,6,86,23,5,32,5,24,67,64];
let LargestNumberInArray = NumberArray[0]
for (let i = 0; i < NumberArray.length; i++) {
    if (NumberArray[i] > LargestNumberInArray) {
        LargestNumberInArray = NumberArray[i]
    }
    
}
console.log(LargestNumberInArray);


console.log('Answer 07');
NumberArray = [2,5,1,9,13,35,6,86,23,5,32,5,24,67,64]
let smallestNumberInArray = NumberArray[0];
for (let i = 0; i < NumberArray.length; i++) {
    if (NumberArray[i] < smallestNumberInArray) {
        smallestNumberInArray = NumberArray[i]
    }
    
}
console.log(smallestNumberInArray);
console.log(`For Loop Chapter Ended`);

console.log('Nested For Loop Started');
console.log('Answer 01');


for (let i = 8; i <= 10; i++) {
    console.log(`Table Of ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i*j}`);
    }
    
}


// console.log('Answer 02');
// for (let i = 10; i <= 99; i++) {
//     for (let j = 10; j <= 99; j++) {
//         console.log(i, j);
//     }
// }


// console.log('Answer 03');
// for (let i = 100; i <= 999; i++) {
//     for (let j = 100; j <= 999; j++) {
//         console.log(i,j);
        
//     }
    
// }
console.log('Nested For Loop Ended')
console.log('Finding String Segment Chapter Started');
console.log('Answer 01');
let userString = 'Paksitan'
console.log(userString.charAt(0));

console.log('Answer 02');
userString = 'Pakistan'
console.log(userString.charAt(userString.length-1));



console.log('Answer 03');
userString = 'Pakistan'
console.log(userString.charAt(3));

console.log('Answer 04');
userString = 'Hello How Are You? Are You Fine?';
let newString = userString.slice(3,8);
console.log(newString);



console.log('Answer 05');
newString = userString.slice(3)
console.log(newString);

console.log('Answer 06');
newString = userString.slice(7)
console.log(newString);

console.log('Answer 07');
newString = userString.slice(7,11)
console.log(newString);


console.log('Finding String Segment Chapter Ended');
console.log( "strings: finding a character at a location Chapter Started");
console.log('Answer 01');
userString = 'Hello'
console.log(userString.charAt(0));


console.log('Answer 02');
console.log(userString.charAt(userString.length-1));

console.log( "strings: finding a character at a location Chapter Ended");
console.log(' strings: replacing characters started');
console.log('Answer 01');
userString = 'Where are you going Ahmad Aslam?'
let replaceString = userString.replace('a','b')
console.log(replaceString);

console.log('Answer 02');
replaceString = userString.toLowerCase().replaceAll(/a/g,'b')
console.log(replaceString);

console.log('Answer 03');
userString = 'Hello Ahmad Hello Hamza'
replaceString = userString.toLowerCase().replace('hello' ,'hi')
console.log(replaceString);


console.log('Answer 04');
replaceString = userString.toLowerCase().replaceAll(/hello/g,'hi')
console.log(replaceString);



console.log(' strings: replacing characters ending');


console.log('rounding numbers chapter started');


console.log('Answer 01');
let userNumber = 24.7
let roundOffNumber = Math.round(userNumber)
console.log(roundOffNumber);


console.log('Answer 02');
userNumber = 24.7
roundOffNumber = Math.round(userNumber)
console.log(roundOffNumber);

console.log('Answer 03');

userNumber = 24.1
roundOffNumber = Math.ceil(userNumber)
console.log(roundOffNumber);

console.log('Answer 04');
userNumber = 24.1
roundOffNumber = Math.floor(userNumber)
console.log(roundOffNumber);


console.log('Answer 05');
userNumber = 24.1
roundOffNumber = Math.round(userNumber)
console.log(roundOffNumber);
let numtoString = roundOffNumber.toString()
console.log(typeof numtoString);



console.log('rounding numbers chapter ended');



console.log('Generating Random Number Sarted');
console.log('Answer 01');
let randomNumber = Math.round(Math.random()*20)
if (randomNumber < 10) {
    
    console.log(randomNumber+10);
}else{
    console.log(randomNumber);
}


console.log('Answer 02');
randomNumber = Math.round(Math.random()*(30-20+1)+20)
console.log(randomNumber);

console.log('Answer 03');
randomNumber = Math.round(Math.random()*(40-30+1)+30)
console.log(randomNumber);


console.log('Answer 04');
randomNumber = Math.floor(Math.random()*(50-40+1)+40)
console.log(randomNumber);


console.log('Answer 06');
randomNumber = Math.floor(Math.random()*(150-100+1)+100)
// console.log(randomNumber);

let prefix
for (let i = 7; i <= 24; i++) {
    let now = new Date(`7 Feb ${i}`)
    now = now.toString()
    if (now.slice(0,3) == 'Wed') {
        if (i < 10) {
            prefix = 200
        }else{
            prefix = 20
        }
        console.log(`${prefix}${i}`);
    }
   
}




