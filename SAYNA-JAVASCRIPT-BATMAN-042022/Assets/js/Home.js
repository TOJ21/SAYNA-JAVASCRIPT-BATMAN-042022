    //menu
let menu = document.querySelectorAll('a');
menu.forEach(function(a){
    a.addEventListener('mouseover',()=>{
        a.style.textDecoration = 'underline';
            menu[a].style.color = 'white';
    });
    a.addEventListener('mouseout',()=>{
        a.style.textDecoration = '';
    })
})   

    //logos
    let footericones = document.getElementsByClassName('footer-icones');

for(let a = 0; a<footericones.length;a++){
footericones[a].addEventListener('mouseover',()=>{
    footericones[a].style.color = '#C4C4C4'});
footericones[a].addEventListener('mouseout',()=>{
    footericones[a].style.color = 'white'});
}

    //diaporama
    const diapo = document.querySelectorAll(".phot1");
    const nextimage = 1000;
    // counter
    let image = 0;
    diapo[image].style.display="block";
    setInterval(slidesimage,nextimage);
    function slidesimage(){
        diapo[image].style.display="none";
        image = (image + 1) % diapo.length;
        diapo[image].style.display="block";
    }

    const diapoquote = document.querySelectorAll(".quote");
    const nextquote = 3000;
    // counter
    let quotetext = 0;
    diapoquote[quotetext].style.display="block";
    setInterval(slidesquote,nextquote);
    function slidesquote(){
        diapoquote[quotetext].style.display="none";
        quotetext = (quotetext + 1) % diapoquote.length;
        diapoquote[quotetext].style.display="block";
    }