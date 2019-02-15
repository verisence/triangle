var a = 12;
var b = 24;
var c = 12;


if( a+b<=c || a+c<=b || b+c<=a ){
  alert("the values you entered");
}else if(a=b=c){
  alert("the values you entered make an equilateral triangle");
}else if( a=b!=c || a=c!=b || b=c!a ){
  alert("the values you entered make an isosceles triangle");
}
