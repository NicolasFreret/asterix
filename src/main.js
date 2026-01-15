import './assets/css/style.scss';

(function(){

    const header = document?.querySelector('header'),
    nav = header?.querySelector('nav'),
    hbg = header?.querySelector('.hbg'),
    subs = nav.querySelectorAll('ul li:has(.sub-menu)')

    let isSet = false

    if(hbg){
        hbg.addEventListener('click', e=>{
            e.preventDefault()
            let res = header.classList.toggle('open')
            nav.setAttribute('aria-expanded', res)

        })
    }

    // let y = 0
    // if(getComputedStyle(document.body).getPropertyValue('--mobile') == '1' && !y){
    //     y = 1
    //     subs.forEach(n=>{
    //         n.addEventListener('click',e=>{
    //             e.preventDefault()
    //             alert('klklk')
    //         })
    //     })

    // }


    function o(_fn,_options={}){

        const options = {
            element: ".watch",
            obsOptions:{rootMargin:"-200px"},
            ..._options
        }
        const observer = new IntersectionObserver(entries=>{
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    _fn(entry.target, observer)

                    entry.target.classList.add('isView')
                    observer.unobserve(entry.target)
                }
            })
        },{rootMargin: options.obsOptions.rootMargin})

        const imgs =  document?.querySelectorAll(options.element)
        if(imgs){
                imgs.forEach(img=>{
                    observer.observe(img)
                })
        }
    }
   

    
    o( (entry, o) =>{
        entry.src = entry.dataset.src
    })
  



})()
