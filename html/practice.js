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

//Q.1   Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

// Tocheck_palindrome if input is string

// function check(str) {
//   var j = str.length - 1;
//   for (var i = 0; i < j / 2; i++) {
//     var x = str[i]; //forward character
//     var y = str[j - i]; //backward character
//     if (x != y) {
//       console.log(`${test}  string is not palindrome`);
//       return false;
//     }
//   }
//   console.log(`${test}  string is palindrome `);
//   return true;
// }
// let test = "-121";
// check(test);

//*******Q1****** */
// // Tocheck_palindrome if input is number

// function checkNumIsPalindrome(num) {
//   var rem,
//     temp=num,
//     final ='';

//   while (num > 0) {
//     rem =num % 10;
//     num = parseInt(num / 10);
//     final = final * 10 + rem;
//   }
//   if (final == temp) {
//     console.log(`${temp} reads as ${final} from left to right from right to left. Therfore ${temp} is an palindrome`)
//     return true
//   }
//   else {
//     console.log(`From left to right, it reads ${temp}.From right to left ,it becomes ${final}.Therfore ${temp} is not a palindrome`)
//     return false
//   }

// }
// checkNumIsPalindrome(1231)

// Q.2. Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// function removeDuplicates(nums){
// // {var nums=[0,0,1,1,2,2,3,3,6,6,6]
//     // Length of the updated array
//     let count = 0;
//     // Loop for all the elements in the array
//     for (let i = 0; i < nums.length; i++) {
//         // If the current element is equal to the next element, we skip
//         if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
//             continue;
//         }
//         // We will update the array in place
//         nums[count] = nums[i];
//         count++;
//     }
//     return count;
// };
// console.log(removeDuplicates([0,0,1,1,2,2,3,3]))

// function getUnique(array) {
//     var l = array.length,
//         i, j,
//         unique = [];

//     for (i = 0; i < l; i++) {
//         for (j = 0; j < l; j++) {
//             if (i === j) {
//                 continue;
//             }
//             if (array[i] === array[j]) {
//                 break;
//             }
//         }
//         if (j === l) {
//             unique.push(array[i]);
//         }
//     }
//     return unique;
// }

// console.log(getUnique([0,0,1,1,2,2,2,3,4,]));

//  const removeDuplicates = function(nums) {

//     for(let i = 0; i < nums.length;){
//         if(nums[i] === nums[++i]){
//            nums.splice(i, 1)
//         }
//       }
//       return nums;
//    };

//    console.log(removeDuplicates([1, 1, 2,2,3,3,3,4]));
//    console.log(removeDuplicates([1, 2]));

//   function removeDuplicates(nums) {
//     var nums=[0,0,1,1,2,2,3,3,4]
//     if (nums.length == 0) return 0;
//     let k = 0;
//     for (let value of nums) {
//         if (value != nums[k]) {
//             nums[++k] = value;
//         }
//     }
//     return k + 1;
// };

// console.log(removeDuplicates())

// function removeDuplicates(arr, n) {
//   // Return, if array is empty  or contains a single element
//   if (n == 0 || n == 1)
//   {
//     return n;
//   }

//   var temp = new Array(n);
//   console.log(temp);

//   // Start traversing elements
//   var j = 0;
//   for (var i = 0; i < n - 1; i++)
//     // If current element is not equal to next element then store that
//     // current element

//     if (arr[i] != arr[i + 1]) temp[j++] = arr[i];

//   // Store the last element as whether  it is unique or repeated, it hasn't
//   // stored previously

//   temp[j++] = arr[n - 1];

//   // Modify original array
//   for (var i = 0; i < j; i++) {
//     arr[i] = temp[i];
//   }
// }

// var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// var n = arr.length;

// // removeDuplicates() returns new size of
// // array.
// var n = removeDuplicates(arr, n);
// console.log(n);

// function removeDuplicates(nums) {
//       		var n = nums.length;
// 		if(n == 0) {return n;}

// 		var i = 0;
// 		for (var j = 0; j <= n-1; j++) {
// 			if (nums[i] != nums[j]) {

// 				i++;
// 				nums[i] = nums[j];
// 			}
// 		}
// 		return i + 1;
//     }
// removeDuplicates([0,0,1,1,2,2,3,3,4])
// console.log(removeDuplicates([0,0,1,1,2,2,3,3,4]))

//*Q3****
// function checkLenOfWord(s) {
//     var str = s.trim();
//     var len = str.length;
//     var i = len - 1;
//     while (i >= 0 && str[i] !== ' ')
//     i--;
//     return len - 1 - i;
//   };
// let s='The last word is moon'
// console.log(s)
// console.log('Length of last word is: '+ checkLenOfWord(s))

//Q4

//

// function StockPicker(arr) {

//     var max_profit = 0;
//     var buy_price = 0;
//     var sell_price = 0;

//     // this allows our loop to keep iterating the buying
//     // price until a cheap stock price is found
//     var change_buy_index = true;

//     // loop through list of stock prices once
//     for (var i = 0; i < arr.length-1; i++)
//     {

//       // selling price is the next element in list
//       sell_price = arr[i+1];

//       // if we have not found a suitable cheap buying price yet
//       // we set the buying price equal to the current element
//       if (change_buy_index)
//        {
//            buy_price = arr[i];
//        }

//       // if the selling price is less than the buying price
//       // we know we cannot make a profit so we continue to the
//       // next element in the list which will be the new buying price
//       if (sell_price < buy_price)
//       {
//         change_buy_index = true;
//         continue;
//       }

//       // if the selling price is greater than the buying price
//       // we check to see if these two indices give us a better
//       // profit then what we currently have
//       else {
//         var temp_profit = sell_price - buy_price;
//         if (temp_profit > max_profit)
//         {
//              max_profit = temp_profit;
//         }
//         change_buy_index = false;
//       }

//     }

//     return max_profit;

//   }
//   console.log(StockPicker([7,1,5,3,6,4]))
//   console.log(StockPicker([7,6,4,3,1]))
//   console.log(StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15]))

//*******Q5*********

// let arr1=[1,2,3],arr2=[4,5,6]
// function addList(arr1,arr2)
// {
//     var new_arr=[];
//     var j=0;
//     for(var i=0;i<arr1.length;i++)
//     {
//         new_arr[j]=arr1[i];
//         new_arr[j+1]=arr2[i]
//         j+=2
//     }
//     console.log(new_arr)
// }
// addList(arr1,arr2)

//*****Q6**********
// function maxSum(n)
// {
//     var max='';
//     for(var i=0; i<n.length; i++)
// {
//    var sum;
//    for (var j=i; j<n.length;j++)
//    {
//        sum = sum+max[j];
//    }
// if(sum>max)
// {
//    max = sum;
// }
// }
// return max;

// }

//  maxSum([-5, 4, 6, -3, 4, 1])

//  function LSS(list) {
//     const len = list.length;
//     let max = -Number.MAX_VALUE;
//     let sum = 0;
//     for (let i = 0; i < len; i++) {
//       sum = 0;
//       for (let j = i; j < len; j++) {
//         sum += list[j];
//         if (sum > max) {
//           max = sum;
//         }
//       }
//     }

//     return max;
//   }
// console.log(LSS([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(LSS([1]))
// console.log(LSS([5,4,-1,7,8]))

//**********OOPS POLYMORPRISM**** */

// var game = function () {}
//       game.prototype.select = function()
//    {
//       return " i love games and sports"
//    }
//    var cricket = function() {}
//    cricket.prototype = Object.create(game.prototype);
//    cricket.prototype.select = function()                     {
//       return "i love cricket"
//    }
//    var tennis = function() {}
//    tennis.prototype = Object.create(game.prototype);
//    tennis.prototype.select = function()
//    {
//       return "i love tennis"
//    }
//    var football = function() {}
//    football.prototype = Object.create(game.prototype);
//    var games = [new game(), new cricket(), new tennis()];
//    games.forEach(function(game){
//       console.log(game.select());

//    });

// var shape = function () {};
// shape.prototype.select = function () {
//   return "Area of all different shapes";
// };

// var circle = function () {};
// circle.prototype = Object.create(shape.prototype);
// circle.prototype.select = function (r)
// {
//   var AC = Math.PI * r ** 2;
//   var area_cir = "Area of circle is " + AC;
//   return area_cir;
// };
// var rectangle = function () {};
// rectangle.prototype = Object.create(shape.prototype);
// rectangle.prototype.select = function (l, b)
// {
//   var AR = l * b;
//   var area_rec = "Area of rectangle is " + AR;
//   return area_rec;
// };
// var square = function () {};
// square.prototype = Object.create(shape.prototype);
// square.prototype.select = function (s)
// {
//   var AS = s * s;
//   var area_squ = "Area of square is " + AS;
//   return area_squ;
// };

// var triangle = function () {};
// triangle.prototype = Object.create(shape.prototype);
// triangle.prototype.select = function (b, h)
// {
//   var AT = 0.5 * b * h;
//   var area_tri = "Area of triangle is " + AT;
//   return area_tri;
// };

// var Shapes = [
//   new shape(),
//   new circle(),
//   new rectangle(),
//   new square(),
//   new triangle(),
// ];

// Shapes.forEach(function (shape) {
//   console.log(shape.select());
// });

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

// var arr = [1,21,3,14,5,60,7,6];
// var sum = 81;

// function check(arr, sum)
// {
//   var new_arr= []
//   for (i = 0; i < arr.length - 1; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == sum)
//       {
//         new_arr.push(arr[i], arr[j]);
//         console.log(
//           "Pair with a given sum " + sum + " is [" + arr[i] + ", " + arr[j] + "]");
//         // var arrrr=arr[i].concat(arr[j])
//         // console.log(arrrr)
//         return true;
//       }
//     }
//   }
//   // console.log(new_arr)

//   return false;
// }

// if (check(arr, sum)) {
//   console.log("Valid pair exists");
//   // console.log(new_arr)

// } else {
//   console.log("No valid pair exists for " + sum);
//

// let arr=['Ananat', 'Pinky', 'Preeti', 'Vineet']

// // let n1= arr[0]
// // let n2= arr[1]
// // let n3= arr[2]

// // let [,,n1,n2]= arr

// let student={
//     firstName: 'Gunjan',
//     lastName: 'Madan',
//     city:'Delhi',
//     age: 20
// }

// // let fName= student.firstName
// // let lName= student.lastName
// // let cty= student.city

// let {firstName, lastName, city, age=18}=  student
// console.log(firstName)
// console.log(lastName)
// console.log(city)
// console.log(age)

// //Created a variable with different name from the property of object
// let {city:newCity}= student
// //console.log(fName)
// console.log(newCity)

// // Javascript Closure
// console.clear()

// function counter(){
//     let count=0

//     function add(){
//         return count+=1
//     }
//     return add
// }

// var c= counter()

// //Create a function where you can increment, decrement or change
// function count(){
//     let c=0

//     function changeBy(val){
//         c+= val
//         return c
//     }

//     return {
//         increment: function(){
//             changeBy(1)
//         },

//         decrement: function(){
//             changeBy(-1)
//         },

//         currValue: function(){
//             return c
//         }
//     }

// }

// var myCounter= count()

// console.log(myCounter.increment())
// console.log(myCounter.increment())
// console.log(myCounter.increment())
// console.log(myCounter.decrement())
// console.log(myCounter.currValue())

// //************************************************************ */

// //OOPS  -- Object Oriented Programming

// // Objects

// // Encapsulation -- Binding all related entities together

// // Abstraction -- Hiding all the details and only exposing the required things

// // Inheritence -- Parent class.. children wil inherit..
// //Eg. HTMLElement  will have properties like innerHTML, innerTExt or methods like onclick
// // inherit textbox, select, radio

// // Polymorphism -- multiple forms ... behavior which is being chosen at run time

// let emplName= 'dfds'
// let empID= 'I1'
// let empDesignation ='Dev'
// let empRating= 'A'

// function calculateSalary(empID,empDesignation,empRating){

// }

// // let emp1={
// //     empName: 'sdfs',
// //     empID: 'DF1',
// //     calSalary= function(){

// //     }
// // }

// console.clear()

// //Factory Function
// function employee(empId, empName, empDesg){

//     return {
//         empId,
//         empName,
//         empDesg,
//         displayDetails: function(){
//             console.log(`Employee details are ${this.Id}`)
//         },

//         calculateSalary: function(){
//             return 10000;
//         }
//     }

// }

// const e1= employee(1,'Hritik','Manager')
// console.log(e1)
// e1.displayDetails()
// e1.calculateSalary()

// const e2= employee(2,'Gunjan', 'Developer')
// console.log(e2)
// e2.displayDetails()

// //Create a factory function for students in class
// //Add properties: name, rollnumber, section,
// //Add method: DisplayDetails(),

// //Constructor Function
// function Person(name, age){

//     this.name= name,
//     this.age= age

//     this.displayDetails= function(){
//         console.log("Details are " +this.name)
//     }

// }

// let per1= new Person('Bandu', 23)

// console.log(per1.name)
// per1.displayDetails()

// let per2= new Person('Sonil', 23)

// //Create a constructor function for Car.
// //Add properties like color, modelno., brandName,
// //Add methods like DisplayDetails , calculatemileage()
// //Create four objects of it

// //*************Prototype******************

// let myArr=[1,2,34,670]

// let myObj={id:'32r4'}

// Person.prototype.city=''
// console.clear()
// per1.city='Delhi'
// //console.log(per1.city)

// console.log(per2.city)
// console.log(per1)
// console.log(myObj.__proto__)

// **********************Getters and setters**************

// student={
//     firstName:'Nitin',
//     lastName:'Arora',
//     dept:'finance',
//     id:'12',

//     get fullName(){
//         return this.firstName + ' ' + this.lastName
//     },

//     get deptID(){
//         return this.dept +' ' + this.id
//     },

//     set setId(val){
//         this.id= val
//     },

//     fullName: function(){
//         return this.firstName + ' ' + this.lastName
//     }
// }

// console.log(student.fullName())
// student.setId=11

// //Inheritence-- Prototypal Inheritence / Classical Inheritence

// employee= {
//     name: 'Gunjan',
//     id:12,
//     displayDetails: function(){
//         console.log("Details are " +this.name)
//     }

// }

// let newEmp= {}

// newEmp.__proto__= employee      //DEPRECATED

// let financeEmp= Object.create(employee)

// financeEmp.accessdata = function (){

// }

// let hrEmp= Object.create(employee, {dept:{value: 'HR'}})

// //***************Classes ******************

// class user{
//     constructor(argName, argCity, argEmail){
//         this.name= argName,
//         this.city= argCity,
//         this.email= argEmail
//     }
//     displayDetails(){
//         console.log('The name of person is ' + this.name)
//         console.log('City is ',this.city)
//     }
// }

// let user1= new user('Gunjan','Delhi','abc@gmail.com')

// user1.displayDetails()

// class finUser extends user{
//     constructor(argName, argCity, argEmail, argFinID){
//         super(argName,argCity,argEmail)
//         this.finID= argFinID
//     }

//     updateFinances(){
//         console.log('Data has been updated')
//     }
// }

// let finanUser1= new finUser('Eva','Hyd','adc@gm.com','FI1')
// finanUser1.updateFinances()
// finanUser1.displayDetails()

// //*****************hoisting******************
// x=10
// console.log(x)

// "use strict";
// y=111
// console.log(y)

// var students = [
// {
// id: 5,
// name: "Luke Skywalker",
// theoryScore: 98,
// practicalScore: 56,
// isAdmin: true,
// },
// {
// id: 82,
// name: "Sabine Wren",
// theoryScore: 73,
// practicalScore: 99,
// isAdmin: false,
// },
// {
// id: 22,
// name: "Zeb Orellios",
// theoryScore: 20,
// practicalScore: 59,
// isAdmin: false,
// },
// {
// id: 15,
// name: "Ezra Bridger",
// theoryScore: 43,
// practicalScore: 67,
// isAdmin: true,
// },
// {
// id: 11,
// name: "Caleb Dume",
// theoryScore: 71,
// practicalScore: 85,
// isAdmin: true,
// },
// ];

// let secA=students.filter(student =>student.isAdmin)
// console.log(secA)
// let comb_score=students.map(score=>score.practicalScore +score.theoryScore)
// console.log(comb_score)
// let final_score=comb_score.reduce((total,pre)=>total+=pre)
// console.log(final_score)

// "use strict";

// x=23
// console.log(x)

// //*************Spread Operator and Rest Operator**********

// let arr=['Apple', 'Mango', "Banana"]

// let newArr= [...arr]            //copying to another array

// console.log(newArr)

// let arrNewFruits=['Cherries', 'Kiwi']

// let comb= [...arr,...arrNewFruits]
// console.log(comb)

// function getFruits(f1,f2,f3){
//     console.log(`${f1} ${f2} ${f3}`)
// }

// getFruits(arr[0], arr[1],arr[2])
// getFruits(...arr)

// //***********Rest Operator*********

// function collectFruits(...fruits){              //Rest operator
//     console.log(fruits.length)
// }

// collectFruits(...arr)               //Spread Operator

// function multiplyByNum(multiplier, ...num){
//     return num.map(n=>n*multiplier)
// }

// let nums=[3,34,5,24,3]
// let res= multiplyByNum(4, ...nums)

// console.log(res)

// //**************Destructuring ***************
// let person1=['Delhi', 'Sonia', 20, 'Developer']
// let person2=['Delhi', 'Nitin',32, 'Manager']

// let[city,nme,...rem]= person1
// console.log(rem)

// let test=[['Abhishek', 20],['Vinit',13]]

// let[[n1,a1],[n2,a2]]= test

// console.log(n1+" " +n2)

// //**************Javascript Hoisting***********

// x=10

// var x=10

// function counter()
// {
//     let count=0
//     function add()
//     {
//         return count+=1
//     }
//     return add

// }
// var c=counter()
// console.log(c())

// // ********Factory Function************
// function students (rollNo,stdname,sec)
// {
//     return{
//         RollNo:rollNo,
//         Std_Name:stdname,
//         Section:sec,
//         Details: function(){
//             console.log(`Students details are ${this.Std_Name}`)
//         },
//     }
// }

// const std1=students(33,'Rohan','A')
// console.log(std1)
// console.log(std1.Details())
// const std2=students(13,'Rakesh','c')
// console.log(std2)
//

// //************ */ Constructor Function**********

// function Cars (){
//     this.name='BMW',
//     this.mobel=547487456,
//     this.color='black',
//     this.Details= function(){
//         console.log("Cars details are"+this.name)
//     }
// }
// let car1=new Cars
// console.log(car1.name)
// car1.Details()

// class Cars {
//     constructor(name, model, color) {
//         this.name = name,
//             this.model = model,
//             this.color = color,
//             this.Details = function () {
//                 console.log("Cars details are" + this.name)
//             }
//     }
// }
// let car1=new Cars ('BMW',6565,'black')
// console.log(car1.name)
// car1.Details()

// *********IMPORT AND EXPORT************

// import {calculateSI,simpleInterest,bnkTest as test1,area1,area2}  from './mathFun.js'
// // import * as hello from './mathFun.js'  //alias --import all function as hello(some name)
// console.log(calculateSI(150,50,5))
// console.log(simpleInterest(12,5))
// test1()
// console.log(area1(5))
// console.log(area2(110))

//Create a module with functions to calculate area of square, rectangle, circle
//(e.g. area.js)

//Export this module and import in another js file.(e.g. script.js)
// Call functions from script.js and log the areas on console.

//  *********************Classes***********************
// class Cars
// {
//     constructor(name,color,model)
//     {
//         this.name=name,
//         this.color=color,
//         this.model=model
//     }
//     displayDetails(){
//         console.log('car name and color is '+this.name+"&"+this.color)
//         console.log('car model no is'+this.model)
//     }
// }
// let Car1=new Cars('BMW','BLACK','748782548')
// console.log(Car1)
// // Car1.displayDetails()

// //******to add new property to existing class**********

// class finCar extends Cars{
//     constructor(name,color,model,user){
//         super(name,color,model)
//         this.user=user
//     }
// }
// let finUser= new finCar('audi','pink','5646','hrello')
// console.log(finUser)

//************polyporprism********** */

// class Shape {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class circle extends Shape {
//   constructor(name, radius) {
//     super(name);
//     this.radius = radius;
//   }
//   display_Area(radius) {
//     let area = Math.PI * this.radius ** 2;
//     console.log(`Area of ${this.name} is ` + area);
//     return area
//   }
// }
// class rectangle extends Shape {
//   constructor(name,length, breath) {
//     super(name);
//     this.length = length;
//     this.breath = breath;
//   }
//   display_Area(length, breath) {
//     let area = this.length * this.breath;
//     console.log(`Area of ${this.name} is ` + area);
//     return area
//   }
// }
// class triangle extends Shape {
//   constructor(name,base, height) {
//     super(name);
//     this.base = base;
//     this.height = height;
//   }
//   display_Area(base, height) {
//     let area = 0.5 * this.base * this.height;
//     console.log(`Area of ${this.name} is ` + area);
//     return area
//   }
// }
// class square extends Shape {
//   constructor(name,side) {
//     super(name);
//     this.side=side;
//   }
//   display_Area(side) {
//     let area = this.side**2
//     console.log(`Area of ${this.name} is ` + area);
//     return area
//   }
// }

// //  Calulate cumulative(sum of all area) area of all shape
// function allShapes(arrShape){
//   let cummArea=0;
//   for (Shape of arrShape){
//     let Area =Shape.display_Area()
//     cummArea+=Area
//   }
//   return cummArea
// }

// let arr=[]
// console.log(arr)
// let a = new circle("Circle",7);
// let b = new rectangle("Rectangle",7, 5);
// let c = new triangle("Triangle",7, 5);
// let d = new square("Square",7);
// // console.log(a.display_Area())
// arr.push(a,b,c,d)

// function InvArea(){
// for (var i=0;i<=arr.length;i++){
//   return (`Area of ${arr[i].name} is ${arr[i].display_Area()}`)
//   }
// }
// // console.log(InvArea())

// // console.log(arr[0].display_Area())
// let cummulative_area=allShapes(arr)
// console.log("Cummulative area of all shapes is",cummulative_area)

// class Hyundai{
//     constructor (model, colour, mileage){
//         this.model= model
//         this.colour= colour
//         this.mileage= mileage
//     }

//     displayDetails(){
//         console.log("Model of the car is ", this.model)
//     }
// }

// class i20 extends Hyundai{
//     constructor(model, colour, mileage){
//         super(model, colour, mileage)
//     }

//     displayDetails(length){
//         console.log("this is the child class" + length)
//     }
// }

// class creta extends Hyundai{
//     constructor(model, colour, mileage){
//         super(model, colour, mileage)
//     }
// }

// let i20_1= new i20('x1','black', 12)
// let c_1= new creta('c1','white', 17)

// i20_1.displayDetails(10)

// let empId=10

// class Employee{
//     constructor(empID, empName, dept=''){
//         this.empID= empID
//         this.empName= empName
//         this.dept= dept
//     }
//     calculateSalary(band='B'){
//         //Logic to calculate salary
//         return (band + '25000')
//     }
// }

// class FinEmp extends Employee{
//     constructor(empID, empName, dept, yrsOfExp, band){
//         super(empID, empName, dept)     //Call the constructor of parent class
//         this.yrsOfExp= yrsOfExp
//         this.band= band
//     }

//     calculateSalary(){
//         //Get 50000 + salary of base employee

//         let inteSal= super.calculateSalary(this.band)
//         return (inteSal+ '50000')
//     }
// }

// let probEmp1= new Employee(1,'test')
// let probEmp2= new Employee(2,'Sonam')

// console.log(probEmp2.empName)
// let sal= probEmp1.calculateSalary('A')
// console.log(sal)

// let finEm= new FinEmp(11,'fin','FN',8, 'A')
// let sal1=finEm.calculateSalary()
// console.log(sal1)

// //************Callback functions****************

// let arr=[10,102,34]
// arr.map(test)
// // console.clear()
// function test(){
//     console.log('test')
// }

// function anFunc(){
//     console.log('another function')
// }

// function welcome(name, call)
// {
//     console.log('Welcome '+name)
//     call()

// }

// welcome('Gunjan',test)

// welcome('Preeti', anFunc)

// function calculate(typeofshape, cal, ...args)       //args is rest operator
// {
//     //Some Logic written here
//     return cal(args)
// }

// function areaSq(a){
//     return a*a
// }

// function areaRect(args){
//     let l= args[0]
//     let b= args[1]
//     return l*b
// }

// function areaCircle(args)
// {
//     let ra= args[0]
//     let a = Math.PI*ra*ra
//     return a
// }

// let a= calculate('circle',areaCircle,12)
// console.log(a)

// //**************sync Javascript**************
// const stream= (videoURL)=>{

//     // streaming        //5 sec
//     console.log('Video streamed')
// }

// const fileDW = (url) =>{

//     //downloading data
//     console.log('Data downloaded')
// }

// const print= ()=>{
//     console.log('Printing')
// }

// stream()
// fileDW()
// print()
// console.clear()

// //****************Async*******************
// const stream1= (videoURL)=>{
//    setTimeout(()=>{
//        console.log('streaming')
//    }, 10000)
//     // streaming        //10 sec
// }

// const fileReq =() =>{
//     setTimeout(()=>{
//         console.log('file downloading')
//     }, 2000)
// }

// stream1()
// fileReq()
// console.log("Post stream")

// //event loop, call/message queue

// //************************Callback Hell**********

// function getUserName(callback){
//     callback({myName: 'Gunjan'}, getUserCity)
// }

// function getUserEmail(data,callback){
//     callback({...data, email:'test@gmail.com'}, getUserCountry)
// }

// function getUserCity(data,callback){
//     callback({...data, city:'Delhi'}, printInfo)
// }

// function getUserCountry(data,callback){
//     callback({...data, country:'India'})
// }

// function printInfo(data){
//     console.log(data)
// }

// getUserName(getUserEmail)

// let arr1= [10,20,30,40]

// arr1=[...arr1, 50,60]

// console.log(arr1)

// //***********Promises**************************

// var promise = new Promise((resolve, reject) => {
//   let x = "hello",
//     y = "hello";
//   if (x == y) resolve("Promise Solved");
//   else reject("Promise Rejected");
// });
// promise
//   .then(function () {
//     console.log("Success, You are a GEEK");
//     for (var i = 0; i <= 10; i++) {
//       console.log(i);
//     }
//   })
//   .catch(function () {
//     console.log("Some error has occurred");
//   });

// let promise= new Promise((resolve, reject)=>{
//     //Logic will be here
//     if(true)
//         resolve('Success Message')
//     else
//         reject('Failed')
// }).then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data)})

//Same calls using promises
// console.clear()
// function getUserName(){
//     return new Promise((resolve, reject)=>{
//         let data ={myName: 'Gunjan'}
//         resolve(data)
//     })
// }

// function getUserEmail(data){
//     return new Promise((resolve,reject)=>{
//         resolve({...data, email: 'test@gmail.com'})
//     })
// }

// function getUserCity(data){
//     return new Promise((resolve,reject)=>{
//         resolve({...data, city: 'Delhi'})
//     })
// }
// function printInfo(data){
//   console.log(data)
// }

// getUserName()
//     .then((data)=>{getUserEmail(data)})
//     .then((data)=>{getUserCity(data)})
//     .then((data)=>{printInfo(data)})
//     .catch((data)=>{console.log(data)})

//***********Pormise Assignment */

// Promise.resolve(3).then((value) => console.log(value));

// const promise1 = new Promise((resolve, reject) => {
//     // if(!true)
//     // resolve(3);
//     // else
//     reject("Boo!");
// });

// // promise1.then((value) => {
// //   console.log(value);
// // });
// promise1.catch((value) => {
//   console.log(value);
// });

// const promise2 = new Promise((resolve, reject) => {
//     if(true)
//     resolve('Sucusses');
//     else
//     reject('Failed');
// });

// promise2.then((value) => {
//   console.log(value);
// });
// promise2.catch((value) => {
//   console.log(value);
// });

// const promise3 = new Promise((resolve,reject) => {
//     setTimeout (()=>{
//         resolve('Sucess');
//         console.log('Promise Executed/Resolved.');
//     },2000);
// });

//************Prototype Assignment********* */

// let Basket = new Array();

// class myBasket {
//   constructor() {}

//   addToBasket(name, price, quantity) {
//     let a = new Object();
//     a.itemName = name;
//     a.itemPrice = price;
//     a.itemQuantity = quantity;
//     Basket.push(a);
//   }

//   getBasketValue() {
//     let sum = 0;
//     for (let i = 0; i < Basket.length; i++) {
//       let y = Basket[i].itemPrice * Basket[i].itemQuantity;
//       sum = sum + y;
//     }
//     console.log("Value of your cart is" ,sum);
//   }

//   items() {
//       console.log("List of Product in the your Cart are as follows:")
//     for (let i = 0; i < Basket.length; i++) {
//       console.log("Product Name: "+Basket[i].itemName+"  "+"Qnt "+ Basket[i].itemQuantity);
//     }
//   }

//   //     items(){
//   //     for(let i of Basket){
//   //         console.log(i.itemName)
//   //     }
//   // }

//   getBasketClear() {
//     Basket.length = 0;
//   }
// }

// let myCart = new myBasket();
// myCart.addToBasket("Icecream", 30, 5);

// myCart.addToBasket("Pizza", 129, 2);

// myCart.addToBasket("Sprit", 14, 1);

// myCart.addToBasket("Takos", 30, 2);

// let x = myCart.getBasketValue();

// myCart.items();

// console.log(Basket);





// rotate a square matrix in clockwise direction 90 degree




// var N = 3;

// function rotate90Clockwise(a) {
//   // let new_arr=[]
//   for (var i = 0; i < parseInt(N / 2); i++) {
//     for (var j = i; j < N - i - 1; j++) {
//       // Swap elements of each cycle
//       // in clockwise direction
//       var temp = a[i][j];
//       a[i][j] = a[N - 1 - j][i];
//       a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j];
//       a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i];
//       a[j][N - 1 - i] = temp;
//     }
//   }
// }

// function printMatrix(arr) {
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) document.write(arr[i][j] + " ");
//     document.write("<br/>");
//     // new_arr.push(arr[i][j])
//   }
// }

// var arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// document.write(arr, "</br>");
// rotate90Clockwise(arr);
// printMatrix(arr);

// function rotate(matrix) {
//   // function statement
//   const N = matrix.length - 1; // use a constant
//   // use arrow functions and nested map;
//   const result = matrix.map((row, i) => row.map((val, j) => matrix[N - j][i]));
//   matrix.length = 0; // hold original array reference
//   matrix.push(...result); // Spread operator
//   return matrix;
// }
// var arr = [
//   [1, 2, 3],
//   [4,5,6],
//   [7,8,9],
// ];
// // console.log(arr);
// console.log(rotate(arr));

// function rotate(matrix) {
//     let result = [];
//     for(let i = 0; i < matrix[0].length; i++) {
//         let row = matrix.map(e => e[i]).reverse();
//         result.push(row);
//     }
//     return result;
// };
// var arr = [
//     [1, 2, 3],
//     [4,5,6],
//     [7,8,9],
//   ];
//   console.log(arr);
//   console.log(rotate(arr));
function rotate(matrix) {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]).reverse();
        result.push(row);
    }
    return result;
};
var arr = [
    [1, 2, 3],
    [4,5,6],
    
  ];
  console.log(arr);
  console.log(rotate(arr));
