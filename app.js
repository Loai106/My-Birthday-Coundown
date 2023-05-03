const days= document.getElementById('days');
const hours= document.getElementById('hours');
const secounds = document.getElementById('seconds');
const minutes= document.getElementById('minutes');



const currentYear = new Date().getFullYear();
const birthDay = new Date(`June 10 ${currentYear} 00:00:00`);


function updateCountdown(){

    let now = new Date();

    const ms = birthDay - now;

    //dayes left 
    const daysLeft = Math.floor(ms / (1000*24*60*60));
    let millisocendsLeft =ms % (24*60*60*1000); 
    const hoursLeft = Math.floor(millisocendsLeft / (60*60*1000));
    millisocendsLeft = millisocendsLeft % (60*60*1000);
    const minutesLeft = Math.floor(millisocendsLeft / (60*1000));
    millisocendsLeft = millisocendsLeft % (60*1000);
    const secoundsLeft = Math.floor(millisocendsLeft / 1000);

    //updating the UI 
    days.innerHTML =  daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft;
    secounds.innerHTML = secoundsLeft;
    
}

setInterval(updateCountdown,1000);