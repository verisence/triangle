function triangle(a,b,c){
  var a = 12;
  var b = 12;
  var c = 14;
  if( a+b<=c || a+c<=b || b+c<=a ){
    alert("the values you entered will not make a triangle.");
  }else if(a==b==c){
    alert("the values you entered make an equilateral triangle.");
  }else if( a==b && b!=c || a==c && a!=b || b==c && b!=a ){
    alert("the values you entered make an isosceles triangle.");
  }else if (a!=b!=c) {
    alert("the values you entered make a scalene triangle.");
  }else{
    alert("Please enter valid values. That is, positive numbers. Avoid letters and special characters");
  }
}
triangle();
