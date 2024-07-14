function calculate(){
    let year,month,day;
    let currentDay=parseInt(cd.value.slice(8,10),10);
    let currentMonth=parseInt(cd.value.slice(5,7),10);
    let currentYear=parseInt(cd.value.slice(0,4),10);

    let birthDay=parseInt(dob.value.slice(8,10),10);
    let birthMonth=parseInt(dob.value.slice(5,7),10);
    let birthYear=parseInt(dob.value.slice(0,4),10);

    if(currentDay>=birthDay){
        day=currentDay-birthDay;
    }
    else{
        day=currentDay+new Date(currentYear,currentMonth).getDate()-birthDay;
        currentMonth--;
    }
    if(currentMonth>=birthMonth){
        month=currentMonth-birthMonth;
    }
    else{
        month=currentMonth+12-birthMonth;
        currentYear--;
    }
    year=currentYear-birthYear;
    if(year<0){
        ageText.innerHTML="Wrong input.."
    }
    else{
        ageText.innerHTML=year+" years, "+month+" months, "+day+" days ";
    }
}