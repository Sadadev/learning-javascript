/*let namE= 'Sada';

let  score= 78;

score+=10;

console.log (score);*/

//ARRAYS

/*const heroes = [];
heroes[0] = 'superman';
heroes[1] = 'batman';
heroes[2] = 'spiderman';
heroes [4] = 'captain america';*/

let avengers = ['captain america', 'iron man', 'spiderman', 'Thor', 'Hulk'];

//delete avengers[2]; To delete an item from the array

//assigning multiple values at the same time
/*const [x,y] = [2,3];

const statement=   'The values of x and y are'

console.log(statement + ' ' + x + ' ' + 'and'+ ' ' + y);*/

//console.log(avengers.length) to find the lenght of an array 

//avengers.length= 7; to extend the length of an array 

//avengers.pop(); to remove the last item of an array

//avengers.shift(); this removes the first item of an array

//avengers.push('black panther'); To add a new item to the end of the list 

//avengers.unshift('black widow');  This adds a new item to the front of the array

/*avengers = avengers.concat(['hawkeye','black widow']); to concactinate two arrays
or
avengers = [...avengers, ...['hawkeye','black widow'] ];*/

//avengers.reverse(); To reverse the order of an array

//avengers.sort(); To sort the order of an array  

//MAPS

/*const romanNumerals = new Map();
romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV');*/

//romanNumerals.get() to  get  the value based on  the key
//romanNumerals.has(2) to check if a particular value is in the map

//const heroes= new Map([['peter parker','spiderman'],['tony Stark','Ironman']]);
//heroes.delete('peter parker');  to delete a value from the map
//heroes.clear('peter parker');  to remove all values from the map
//Array.from(heroes); To convert a map to  an array

//LOGIC
/*const age= 14

if (age > 18){
    console.log('Welcome User')
} else{
    console.log('Sorry,  Not old enough!!!')
}
    */

//const n = 2;
//n%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number'); using tenary operator

//using else if statement
/*if(n === 4){
    console.log('You rolled a 4');
}
else  if (n === 5){
    console.log('You rolled a 5');
}
else if (n === 5){
    console.log('You rolled a 6');
}
else if (n<4){
    console.log('You rolled a number less than 4');
}
    */

//LOOPS
//while  loop
//let bottles= 10;

/*while (bottles > 0){
    console.log('There were ' + bottles + ' green bottles hanging on the wall. one bottle fell and now there are only ' + (bottles-1) + ' green bottles left on the wall');
    bottles--;
}*/

//do while loop
/*do {
    console.log('There were ' + bottles + ' green bottles hanging on the wall. one bottle fell and now there are only ' + (bottles-1) + ' green bottles left on the wall');
    bottles--;
} while(bottles>0);*/

//for loop
/*for(let bottles=10; bottles>0; bottles--){
    console.log('There were ' + bottles + ' green bottles hanging on the wall. one bottle fell and now there are only ' + (bottles-1) + ' green bottles left on the wall');
    
}*/

//looping arrays: A for-of loop will be used  for looping arrays
for(const value of avengers){
    console.log(value)
}


//console.log(Array.from(heroes));
