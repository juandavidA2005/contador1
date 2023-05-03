let increment= 0;

let show = document.querySelector('.show');

let cuerpo = document.querySelector('.container')
document.addEventListener('click', (e) => {
    console.log(e)
   
    if(e.target.matches('#Decrease')){
        increment--;
        show.innerHTML = increment;
cuerpo.style.backgroundcolor = 'rgb,(240,128,128)'


    }
    

    
})


