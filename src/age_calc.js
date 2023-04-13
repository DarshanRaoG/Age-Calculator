
function ageCalc(){
    let dd = document.getElementById("day").value;
    let mm = document.getElementById("month").value;
    let yy = document.getElementById("year").value;
   // console.log(dd+" "+mm+" "+yy);

    const now = new Date();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();



    if((yy > year) || yy<0 || dd<1 || mm<1 || dd>31 || mm>12 || yy<1200)
    {    alert('Enter a valid date!');
         return;
    }
    
    else  if(mm==2 && dd>28 && yy%4!=0)
    {   
        alert('Enter a valid date!');
        return;
    }else if(mm==4 ||mm==6 ||mm==9 ||mm==11)
    {
        if(dd > 30){
            alert('Enter a valid date!');
            return;
        }
    }

    year = year - yy;
    month = month - mm + 1;
    date = date - dd;


    //console.log(date+" "+month+" "+year);

    let temp;
    if(month<0)
    {
        year--;
        month=Math.abs(month);
        temp=month;
        month=12-month;
    }
    if(date<0)
    {
        if(month>0){
            month--;
        }
        else{
            year--;
            month=11;
        }

        date=Math.abs(date);
            if(temp==2 && yy%4!=0)
                date=28-date;
            else if(temp==4 || temp==6 ||temp==9 ||temp==11)
                date=30-date;
            else if(temp==2 && yy%4==0)
                date=29-date;
            else
                date=31-date;
    }



    //console.log(date+" "+month+" "+year);
    
    let y = document.getElementById("year1");
    let m = document.getElementById("month1");
    let d = document.getElementById("day1");

    for(let i=0;i<=year;i++){
        delayTask(y,i);
    }
    for(let i=0;i<=month;i++){
        delayTask(m,i);
    }
    for(let i=0;i<=date;i++){
        delayTask(d,i);
    }
    
}

function delayTask(element,i){
    setTimeout(function(){
        element.textContent = i;
    },120*i)
}

