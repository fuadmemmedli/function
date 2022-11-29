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