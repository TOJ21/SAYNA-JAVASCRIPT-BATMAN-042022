    //menu
    let menu = document.querySelectorAll('a');
    menu.forEach(function(a){
        a.addEventListener('mouseover',()=>{
            a.style.textDecoration = 'underline';
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