// var city="pune"6
// var result=`I live in ${city}`
// console.log(result.)
//a=100
//b=12
// if (a>b)
// {
//     console.log(`${a} is greater than ${b}`)
// }
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }
// var fruit="mango"
// switch(fruit)
// {
//     case 'mango' : console.log(" orange_yellow")
//     break
//     case 'banana' : console.log("yellow")
//     break
//     default: console.log("no color")
// }
// a=10
// b=8
// switch (a>b)
// {
//     case true :for (var a=1;a<=10;a++)
//     {
//         console.log(3*a+5)
//     }
//     break
//     default : var i
//     for (i=1;i<=10;i++)
//     {
//         console.log(i)
//     }
// }

// var i
// for (i=1;i<=10;i++)
// {
//     if (i%2==0){continue}
//     console.log(i)
// }
// var per=
// {
//     firstName:"pushpendra"

// }
// for (var x in per){
//     console.log(x)

// }
// var n= 'hello'
// for (var x of n){console.log(x)}
// function addNum(){
//     var a= 6+7
//    console.log(a)
// }
// // var c= addNum()
// console.log(addNum())
// var newnum=10
// function squ(){
//     num=15
//     console.log(num*num)
//     console.log(newnum*newnum)
// }
// squ(newnum)
// console.log(squ())
// function dis(){
//     console.log(arguments)
//     console.log(argument[1])
// }
// //dis('sdvgfsd','ggg')
// console.log(dis('hhrhrhh','hrethrthrhrh'))
// let a=window.confirm("higjf")
// console.log(a)
// var a=['bfdbdb','hhb','fghnffnfn','ffnf']
// a.pop()
// a.push('fghfhdfhffnfndfndfndfn')
// a.splice(2,2,'hello')
// console.log(a)
// console.log(Math.random()*10)
// var a= document.querySelectorAll(".form-inline my-2 my-lg-0")
// console.log(document.forms)
// console.log(document.getElementById("parent"))
// console.log(document.body)
// var div = document.getElementsByClassName("container")
// console.log(div)
// console.log(div.length)
// console.log("gdhhhhh")

// var Dnew = document.createElement('div')
// Dnew.className="helloooooo"
// Dnew.id="idddd"
// var text=document.createTextNode("ffgffhjf")

// var par=document.createElement('p')

// par.className="para"
// par.id="bxckhgdkjhgjkhfgjdh"
// // par.
// Dnew.appendChild(par)

// document.body.appendChild(Dnew)

// var ul= document.createElement('ul')
// ul.id="cars"

// var nodes=[]
// var li= document.createElement('li')
// li.id="dzire"
// li.innerText="dzire"
// li.className="carss"
// ul.appendChild(li)

// var li= document.createElement('li')
// li.id="dzire"
// li.innerText="dzire"
// li.className="carss"
// ul.appendChild(li)

// var li= document.createElement('li')
// li.id="dzire"
// li.innerText="dzire"
// li.className="carss"
// ul.appendChild(li)

// var li= document.createElement('li')
// li.id="dzire"
// li.innerText="dzire"
// li.className="carss"
// ul.appendChild(li)

// document.body.appendChild(ul)

// var dv= document.querySelector('#old')
// document.body.insertBefore(Dnew,dv)

// var cars=['dzire','creta','honda','nano','safari']
// var nodes=[]

// cars.forEach(createUL)
// var ul=document.createElement('ul')
// ul.id="cars1"

// function createUL(value){
//     var li= document.createElement('li')
//     li.innerText=value
//     nodes.push(li)

// }
// console.log(nodes)
// ul.append(...nodes)

// document.body.appendChild(ul)

// // var a= document.getElementById('cars')
// // console.log(a)
// // a.remove();

// function rev(str){
//     var arr=str.split('')
//     arr.reverse()
//     console.log(arr)
// str=arr.join('')
//     return str
// }
// var result=rev("hellohiibye")
// console.log(result)

// function revstr(str)
// {
//     var result=''
//     for(var i=str.length;i>0;i--)
//     {
//         result= result+ str[i-1]
//     }
//     return result
// }
// var res=revstr('helllo')
// console.log(res)

// while(true)
//  {
//     var ranNum=Math.trunc(Math.random()*10)
//     console.log(ranNum)
//     if (ranNum==5){
//         console.log("Its 5 now")
//         break;
//     }

// }

// var arr=[];
// for(var i=0,t=10;i<t;i++)
// {
//     arr.push(Math.floor(Math.random()*10))
// }
// console.log(arr)
// let no=arr.join("");
// console.log(no)

// function createNo(arr)
// {
//     var no='(xxx) xxx-xxxx';
//     arr.forEach(item => {
//         no =no.replace('x',item);
//     });
//     return no;
// }
// var nuuu=createNo(arr)
// console.log(nuuu)

//Genrate Mobile Number
// var arr1=[];
// for(var i=0,t=1;i<t;i++)
// {
//     arr1.push(Math.floor(Math.random()*900)+100)
//     arr1.push(Math.floor(Math.random()*900)+100)
//     arr1.push(Math.floor(Math.random()*9000)+1000)
// }
// console.log(arr1)
// var mobno=arr1.join("")
// console.log(mobno)

// function createNo(numbers){
//     var format="(xxx)-xxx xxxx";

//     for (var i=0;i<numbers.length;i++)
//     {
//         format=format.replace('x',numbers[i]);
//     }
//     return format;
// }
// var a=createNo("9881467285")
// console.log(a)

// function createNo(mobno){
//     var format="(xxx)-xxx xxxx";

//     for (var i=0;i<mobno.length;i++)
//     {
//         format=format.replace('x',mobno[i]);
//     }
//     return format;
// }
// var a=createNo(mobno)
// console.log(a)

// var fruits_arr=['apple','mango','grapes','orange','cherry']

// function checkValue(value,arr)
// {
//     status='Not Exits';
//     console.log(fruits_arr.indexOf(value),value)
//     for (var i=0;i<arr.length;i++)
//     {
//         var FruitName= arr[i];
//         if (FruitName==value)
//         {
//            var status='Exits';
//             console.log(fruits_arr.indexOf(value),value);
//             break;
//         }

//     }
//     return status;
// }
// console.log(fruits_arr)

// var a = checkValue('mngo',fruits_arr)
// console.log(a)

// var a = checkValue('mango',fruits_arr)
// console.log(a)

// var a = checkValue('Mango',fruits_arr)
// console.log(a)

// var a = checkValue('orange',fruits_arr)
// console.log(a)

// function incre(num)
// {
//     console.log(num)
//     var newnum= num++
//     if(newnum<10)
//    {
//        incre(num)
//     }
// }
// incre(1)

// function a(dec){
//     return (dec>>>0).toString(2)
// }
// console.log(a(10))

// function number2binary(x)
// {
//     var d='';
//     var bin='';
//     for (var i=x;i>0;)
//     {
//         d=(i%2,toString())
//         bin= d+bin
//         i=parseInt(i/2)
//     }
//     console.log(bin)
// }
// number2binary(100)

// function c2b(x)
// {
//     var bin=''
//     var rim=''
//     var i=1
//     while(x>0)
//     {
//         rim=x%2;
//         x=parseInt(x/2);
//         bin=bin+rim*i;

//     }
//     console.log(bin)
// }
// c2b(50)
// function c2b(x)
// {
//     var bin
//     if (x==0)
//     { return 0;}
//     else
//     {
//         var a=((x%2) +10 * c2b(parseInt(x/2)))
//         return a;
//     }
// }
// c2b(5)

//find hcf
// function HCF(num1,num2)
// {
//     var hcf;
//     for (i=1;i<=num1 && i<=num2;i++)
//     {
//         if(num1%i==0 && num2%i==0)
//         hcf=i;
//     }
//     console.log(hcf)
// }
// HCF(18,12)

// function prime(num1,num2)
// {
//     for(let i=num1;i<=num2;i++)
//     {
//         var x=0;
//         for(let j=2;j<=i;j++)
//         {
//             if(i%j==0)
//             {
//                 x=1;
//                 break;
//             }
//         }
//         if(i>1 && x==0)
//         {
//             console.log(i)
//         }
//     }
// }
// prime(1,50)

// program to print prime numbers between the two numbers

// take input from the user
// 55

// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }

// program to find the LCM of two integers

// take input
// const num1 = prompt('Enter a first positive integer: ');
// const num2 = prompt('Enter a second positive integer: ');

// // higher number among number1 and number2 is stored in min
// let min = (num1 > num2) ? num1 : num2;

// // while loop
// while (true) {
//     if (min % num1 == 0 && min % num2 == 0) {
//         console.log(`The LCM of ${num1} and ${num2} is ${min}`);
//         break;
//     }
//     min++;
// }

// function secLarge(arr)
// {
//   var sort=arr.sort((a,b) => a-b);
//   return sort[arr.length-2];
// }
// var arr =[12,35,1,10,34,1]

// console.log(secLarge(arr));

// var arr =[12, 35, 1, 10, 34, 1]
// function prime(arr)
// {
//   return "The prime numbers in array are:" + arr.filter((number)=>{
//     for (var i=2;i<=Math.sqrt(number);i++)
//     {
//       if (number%i===0)
//       return false;
//     }
//     return true;
//   })
// }
// console.log(prime(arr))

// function range(x)
// {
//     for (var num=0;num<x;num++)
//     {
//         if (num%3==0)
//         {console.log("Number divisible by 3 are:"+num)}
//         else if (num%5==0)
//         {console.log("Number divisible by 5 are:"+num)}
//         if (num%3==0 && num%5==0)
//         console.log("Number divisible by both 3 and 5:"+num+"");
//     }

// }
// range(50)



// function Even(x)
// {
//     for (var num1=1;num1<x;num1++)
//     {
//         if (num1%2==0)
//         {
//             console.log("Even numbers are:"+ num1)
//         }
//     }
// }
// Even(20)



// function reverse_given_number(n)
// {
//     var rev=0,rem
//     while(n>0)
//     {
//         rem=n%10;
//         rev=rev*10 +rem;
//         n=Math.floor(n/10);
//     }
//     console.log(rev)
// }
// reverse_given_number(384561)

// var a=[30,45,90,12,35]
// var newa=a.map(square_root)
// function square_root(n)
// {
//     var result=Math.tan(n*Math.PI/180)
//     return result
// }
// console.log(newa)



// Tocheck_palindrome

// function check( str )
// {
// 	var j = str.length -1;
// 	for( var i = 0 ; i < j/2 ;i++)
// 	{
// 	var x = str[i] ;     //forward character
// 	var y = str[j-i];   //backward character
// 	if( x != y)
// 	{
// 		console.log(`${test}  string is not palindrome` )
// 		return false;
// 	}
// 	}
// 	console.log(`${test}  string is palindrome `)
// 	return true;

// }

// // function is_palindrome( str )
// // {
// // 	let ans = check(str);
// // 	if( ans == true )
// // 	{
// // 	console.log("passed string is palindrome ");
// // 	}
// // 	else
// // 	{
// // 	console.log("passed string not a palindrome");
// // 	}
// // }
// let test = "maddam";
// check(test);



// javascript program to check if there exists a pair
// in array whose sum results in x.

// function check(A, size, x) 
// {
//   for (i = 0; i < size - 1; i++) {
//     for (j = i + 1; j < size; j++) {
//       if (A[i] + A[j] == x) {
//         console.log(
//           "Pair with a given sum " + x + " is [" + A[i] + ", " + A[j] + "]");
//         // var arrrr=A[i].concat(A[j])
//         // console.log(arrrr)
//         return true;
//       }
//     }
//   }

//   return false;
// }

// var A = [0, -1, 2, -3, 1];
// var x = -2;
// var size = A.length;

// if (check(A, size, x)) {
//   console.log("Valid pair exists");
// } else {
//   console.log("No valid pair exists for " + x);
// }



// var arr=[1, 21, 3, 14, 5, 60, 7, 6]
// console.log(arr)

// function twoSum(arr, x) {
//   var new_arr = [];

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === x) {
//         new_arr.push(arr[i], arr[j]);
//         console.log(
//             "Pair with a given sum " + x + " is [" + arr[i] + ", " + arr[j] + "]");
//             // return new_arr;
//       }
//     }
//   }
//   return new_arr;
// }

// twoSum([1, 21, 3, 14, 5, 60, 7, 6], 81);






var arr = [1,21,3,14,5,60,7,6];
var sum = 81;
 
function check(arr, sum) 
{
  var new_arr= []
  console.log(new_arr)
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) 
      {
        new_arr.push(arr[i], arr[j]);
        console.log(
          "Pair with a given sum " + sum + " is [" + arr[i] + ", " + arr[j] + "]");
        // var arrrr=arr[i].concat(arr[j])
        // console.log(arrrr)
        return true;
      }
    }
  }
  // console.log(new_arr)

  return false;
}

if (check(arr, sum)) {
  console.log("Valid pair exists");
  // console.log(new_arr)
  
} else {
  console.log("No valid pair exists for " + sum);
}








function testfocus(textbox)
{
  textbox.style.backgroundColor='red'
}
function testblur(textbox)
{
  textbox.style.backgroundColor='yellow'
}
function validate(textbox)
{console.log("validatedk")}
function Double(textbox)
{console.log("double clicked")}

