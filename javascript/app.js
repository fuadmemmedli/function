    
    function BMI(m,h){
    let bmi = m / Math.pow(h,2);
    let result;
    if (bmi < 18.5) {
        result = "az ceki";
    } else if (18.5 < bmi && bmi < 24.9) {
        result = "normal ceki";
    } else if (25 < bmi && bmi < 29.9) {
        result = "artiq ceki";
    } else {
        result = "obez";
    }
    return result;
}





  function fullName (){
    return "Fuad Memmedli"
  }
  console.log("1-", fullName());




  function fullName2(name = 'Fuad', surname = 'Memmedli'){
    return name + " " + surname;
  }
 console.log("2-", fullName2());




 function perimetr(en,uzunlug){
    console.log((en+uzunlug)*2);
 }
 perimetr(3,4)





