var random ;

//random = Math.random();//between 0 and 1
//random = Math.random()*6;//between 0 and a*x
//random = Math.floor(Math.random()*6);//between 0-(a*x - 1)(integer)
//random = Math.floor(Math.random()*6)+1;//between 1-(a*x)(integer)
function getRandomnum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
random = getRandomnum(1,6);
console.log(random);