function triangle(){
  var a = parseInt(document.form1.first.value);
  var b = parseInt(document.form1.second.value);
  var c = parseInt(document.form1.third.value);
  var form = document.getElementById('form1');
  var text;
  if( a+b>c && a+c>b && b+c>a ){
    if(a==b && b==c && a==c){
      text = "The values you entered will make an equilateral triangle.";
    }else if (a!=b && b!=c && a!=c) {
      text = "The values you entered will make a scalene triangle.";
    }else{
      text = "The values you entered will make an isosceles triangle.";
    }
  }else{
    text = "The values you entered will not make a triangle. Try other values please. Make sure the sum of any two sides are not equal to or less than the third remaining side.";
  }
  form.reset();
  document.getElementById("newp").innerHTML = text;
}
