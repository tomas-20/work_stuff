//Team ApesTogetherStrong :: Joshua Kloepfer, Yaying Liang Li
//SoftDev pd1
//K29 -- Clicky clicky events
//2022-02-08


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO"); //console prints this out
console.log("factorial 5 is " + fact(5));
console.log("fibonacci 5 is " + fib(5));
console.log("gcd of 125 and 25 is " + gcd(125, 25));

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) { //access this func by doing o.func(<num>)
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};
//addItem() returns undefined, and adds an item to end of list w/ text="undefined"
//items newly added are colored black (no color in class="xxx" yet)


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};
//index out of bounds error looks like this: Uncaught TypeError: listitems[n] is undefined

//paints items red IF they are not already colored (ie. black --> red)
//does this by adding "red" to the class of the element
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};
//red(5) returns undefined, but the above painting fxning still occurs


//index is even, paint red
//index is odd, paint blue
//if element is already painted (has stuff in class="xxx"), won't change
var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//diff btwn "var fact = function(n)" and "function fact(n)"?
//fact acts ~ to var; need to assign it before you can reference it
function fact(n) { //1, 1, 2, 6, 24, 120
  if (n <= 1) {
    return 1;
  }
  else {
    return n * fact(n-1);
  }
};

function fib(n) { //0, 1, 1, 2, 3, 5, 8
  if (n==0) {
    return 0;
  }
  else if (n <= 2) {
    return 1;
  }
  else {
    return fib(n-1) + fib(n-2);
  }
};

function gcd(a, b) {
  if (a == b) return a; //gcd of same number is that number

  small = Math.max(a,b)/2; //can also sqrt it!
  var ans = 1; //1 goes into every number
  for (let i = 1; i <= small; i++) {
    if (a % i == 0 && b % i == 0) { //a is divisible by i and b is divisible by i
      ans = i;
    }
  }
  return ans;
};

var elemento = document.getElementById("b");

var change = function() {
  elemento.classList.add("green");
};

elemento.addEventListener("click", change);


var fibitem = document.getElementById("div1");
var facitem = document.getElementById("div2");
var gcditem = document.getElementById("div3");

var fibchange = function() {
  let num = Math.floor(Math.random()*100) +1; //random number [0,100]
  console.log(num);
  fibitem.innerHTML = fib(num);
};
var facchange = function() {
  let num = Math.floor(Math.random()*100) +1;
  facitem.innerHTML = fact(num);
};
var gcdchange = function() {
  let num1 = Math.floor(Math.random()*100) +1;
  let num2 = Math.floor(Math.random()*100) +1;
  gcditem.innerHTML = gcd(num1, num2);
};

fibitem.addEventListener("click", fibchange);
facitem.addEventListener("click", facchange);
gcditem.addEventListener("click", gcdchange);
