import './assets/css/style.scss';

(function(){

    const header = document?.querySelector('header'),
    nav = header?.querySelector('nav'),
    hbg = header?.querySelector('.hbg')

    if(hbg){
        hbg.addEventListener('click', e=>{
            e.preventDefault()
            let res = header.classList.toggle('open')
            nav.setAttribute('aria-expanded', res)
        })
    }


})()
