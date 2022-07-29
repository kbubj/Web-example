function change_day_night(button){
    let target = document.querySelector('body');
    if(button.value === 'day'){
        target.style.backgroundColor='black'; 
        target.style.color='white';
        button.value = 'night';
    }else{
        target.style.backgroundColor='white'; 
        target.style.color='black';
        button.value = 'day';
    }
    return 0;
}