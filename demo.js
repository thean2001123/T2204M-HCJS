var x;
x = 10;
x = "hello world";
x = true;

var y=20;
y = y +5;
y = y + "hello"; // string -> 25hello
y = y + 10; // 25hello10
y = y + "t2204m"; // 25hello10t2204m

if(x == true){
  y = y + "hello";
}else{
  y = y + "xin chao";
}
for(var i=0;i<10;i++){
  console.log("i="+i);
}

var arr = [];
arr[0] = 2;
arr[1] = "hello";
arr[2] = true;
arr[3] = [1,2,3,4];
arr[3][4] = ["hello","abc"];


var ary = [];
for(var i=0;i<10;i++){
  ary[i]= 2*i + 1;
}
ary[10] = 21;
ary.push(21);
ary.push(23);
ary.push(25);
for(var i=0;i< ary.length;i++){
  console.log(arr[i]);
}

function tinhtong(a,b){
  //console.log(a+b);
  return a+b;
}

function checkPrime(n){
  if(n<2) return false;
  if(n==2 || n==3) return true;
  for(var i=2;i<=n/2;i++){
    if(n%i==0) return false;
  }
  return true;
}

// ham hay dung
//alert("anhdz");
//var kq = confirm("Ban chac chan muon nop bai");// boolean
//console.log(kq);
// for (var i=0;i<5;i++)
// {
//   var str = prompt("Nhap ten 5 nguoi" + i);// string
//   console.log(str);
// }
// str = parseInt(str);
// console.log(str+10);
// viet chuong trinh yc nguoi dung nhap vao 1 so duong

// setTimeout(function (){
  // alert("Demo Time out");
// },5000);

// var t=0;
// var xyz = setInterval(function (){
//   console.log("t="+t);
//   t++;
//   if(t>=5){
//     clearInterval(xyz);
//   }
// },3000);

// viet dong ho so dem nguoc 10p
// var s = 0;
// var p = 10;
// console.log("Time:", p, s)
// var time = setInterval(function () {
//   // console.log("Time:",p,s)
//   if(s==0){
//     p--;
//     s=60;
//   }
//   console.log("Time:", p, s)
//   s--;
//   if(p==0){
//     clearInterval(time);
//   }
// },1000);
//
// function start()
// {
//   // Code
// }
//
// function stop(){
//   clearTimeout(timeout);
// }



var m = 10, s = 0;
var xyz = setInterval(function (){
  var min = m>=10?m:"0"+m;
  var sec = s>=10?s:"0"+s;
  console.log(min+":"+sec);
  s--;
  if(s<0){
    s=59;
    m--;
  }
  if(m<0) clearInterval(xyz);
},1000);



