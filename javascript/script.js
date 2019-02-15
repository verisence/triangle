function triangle(){
  var a = parseInt(document.form1.first.value);
  var b = parseInt(document.form1.second.value);
  var c = parseInt(document.form1.third.value);
  var form = document.getElementById('form1');
  if( a+b>c && a+c>b && b+c>a ){
    if(a==b && b==c && a==c){
      alert("the values you entered will make an equilateral triangle.");
    }else if (a!=b && b!=c && a!=c) {
      alert("the values you entered will make a scalene triangle.");
    }else{
      alert("the values you entered will make an isosceles triangle.");
    }
  }else{
    alert("Don't");
  }
}
