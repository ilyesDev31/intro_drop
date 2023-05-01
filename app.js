const burger = document.querySelector('.burger');
const ul = document.querySelector('ul');
const extraMenu = document.querySelectorAll('.extra-menu');
const principale = document.querySelectorAll('.principal');

burger.addEventListener('click', function(){
    toggleActive(this)
    toggleActive(ul);
    removeActive(principale)
    removeActive(extraMenu);
    removeActive(document.querySelectorAll("svg.down"));
    document.querySelectorAll("svg.up").forEach(a => a.classList.add('active'));
})

extraMenu.forEach((extra , index)=>{
    extra.addEventListener('click', function(){
        principale[Math.abs(index-1)].classList.remove('active');
        extraMenu[Math.abs(index-1)].classList.remove('active');
        let svg = Array.from(this.querySelectorAll('svg')).filter(a => a.classList.contains('arrow'));
        let svg2 =Array.from(extraMenu[Math.abs(index-1)].querySelectorAll('svg')).filter(a => a.classList.contains('arrow'))
        removeActive(svg);
        removeActive(svg2);
        svg2[0].classList.add('active');
        svg[0].classList.add('active');
        if(!this.classList.contains('active')){
            removeActive(svg)
            svg[1].classList.add('active');
        }else{
            removeActive(svg);
            svg[0].classList.add('active');
        }
        toggleActive(this);
        principale[index].classList.toggle('active');
    })
})


function toggleActive(ele){
    ele.classList.toggle('active');
}
function removeActive(ele){
ele.forEach(el =>{
    el.classList.remove('active');
});
}

    window.addEventListener("resize", function(){
        if(window.innerWidth > 730){
            removeActive(extraMenu);
            removeActive(principale);
            burger.classList.remove('active');
            ul.classList.remove('active');
           }
    })