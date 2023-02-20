const secondHand=document.querySelector('.second-hand');
const MinHand=document.querySelector('.min-hand');
const HourHand=document.querySelector('.hour-hand');
function setDate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const secondsDegrees=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
    const mins=now.getMinutes();
    const MinsDegrees=mins*6+90;
    MinHand.style.transform=`rotate(${MinsDegrees}deg)`;
    const hours=now.getHours();
    var HoursDegrees;
    if(hours>12){
        HoursDegrees=(90-(12-hours%12));
    }else{
        HoursDegrees=90+hours*6
    }
    HourHand.style.transform=`rotate(${HoursDegrees}deg)`;
    
}

setInterval(setDate,1000);