const parallex = document.querySelectorAll('.parallex') ;
let axis = {
    xAxis : 0 ,
    yAxis : 0 ,
}


    window.addEventListener('mousemove',(e)=>{
        axis.xAxis = e.clientX - window.innerWidth / 2;
        axis.yAxis = e.clientY - window.innerHeight / 2 ; 
        parallex.forEach((el)=>{
            let speedx = el.dataset.speedx ;
            let speedy = el.dataset.speedy ;
            el.style.transform = `translateX(calc(-50% + ${-axis.xAxis * speedx}px)) 
            translateY(calc(-50% + ${axis.yAxis*speedy}px)) 
            `
        })
    })
