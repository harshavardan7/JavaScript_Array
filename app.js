let numbers=[];
function getArray(){
    const input=document.getElementById("arrayinput").value;
    numbers=input.split(",").map((num)=>parseFloat(num.trim())).filter((num)=>!isNaN(num));
}
function displayResult(text){
    document.getElementById("result").innerText=text;
}
//sortArray
function sortArray(){
    getArray();
    displayResult("Ascending Sorted : "+numbers.sort((a,b)=>a-b));
}
//reverse
function reverse(){
    getArray();
    displayResult("Reverse : "+numbers.reverse((a,b)=>a-b));
}
//findEven
function findEven(){
    getArray();
    displayResult("Evens : "+numbers.filter((num)=>num%2===0));
}
//findOdd
function findOdd(){
    getArray();
    displayResult("Odd : "+numbers.filter((num)=>num%2!=0));
}
//findPrimes
function findPrimes(){
    getArray();
    function isPrime(num){
        if(num<2)return false;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0) return false
        }
        return true
    }
    displayResult("Primes : "+numbers.filter(isPrime));
}
//findMax
function findMax(){
    getArray();
    const max=Math.max(...numbers);
    displayResult("Maximum : "+max);
}
//findMin
function findMin(){
      getArray();
    const min=Math.min(...numbers);
    displayResult("Minimum : "+min);
}
//findSum
function findSum(){
    getArray();
    const sum=numbers.reduce((total,num)=>total+num,0);
    displayResult("Sum : "+sum);
}
//average
function average(){
    getArray();
    const sum=numbers.reduce((total,num)=>total+num,0);
    const avg=sum/numbers.length;
    displayResult("Average : "+avg);
}
//RemoveDuplicates
function RemoveDuplicates(){
    getArray();
    const rdupli =numbers.filter((value,index)=>numbers.indexOf(value)===index);
    displayResult("RemoveDuplicates : "+rdupli);
}
//Duplicates
function Duplicates(){
    getArray();
    let dupli = [];

numbers.reduce((acc, curr) => {
    if (acc.indexOf(curr) === -1 && numbers.indexOf(curr) !== numbers.lastIndexOf(curr)) {
        acc.push(curr);
    }
    return acc;
}, dupli);

    displayResult("Duplicates : "+dupli);
}
//median
function findMedian(){
    getArray();
      const mid = Math.floor(numbers.length / 2);
 
    displayResult("Median : "+mid);
}
//mode
function findMode(){
    getArray();
    var mid = []
i = 0
max = 0
while (i<numbers.length){

   if (numbers[i]==numbers[i+1]){
       mid = numbers[i] 
   i += 1
    }else{
      i +=1
      }
 }      
    displayResult("Mode : "+mid);
}

//square num
function squareNumber(){
    getArray();
    const sum=numbers.reduce((total,num)=>total+num,0);
    displayResult("Sum : "+sum);
}