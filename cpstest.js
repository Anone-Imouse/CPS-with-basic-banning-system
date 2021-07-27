function summonPopup(elem){
  if(!elem){
    return;
  }
  
elem.classList.add('popup')
elem.classList.remove('futurePopup')
  
  setTimeout(function() {
elem.classList.remove('popup');
elem.classList.add('futurePopup')
  },8500)
}
function dataAttr(str,i = null){
  
 return i === null ? document.querySelectorAll('[data-'+str+']') : document.querySelectorAll('[data-'+str+']')[i]
}

if('banned' in localStorage){
   close()
}
    dataAttr('click',0).onclick = function(e){
        e.target.onclick = null
        
      var clicks = 0;
    
      var time = 4
   
      let int = setInterval(() => {
      if(time > 1){
      dataAttr('time',0).textContent = time+' seconds left.'
      time--
      }
       else if(time > 0){
        dataAttr('time',0).textContent = '1 second left.'
           time--
       }
      else{
         if(dataAttr('time',0)){
        dataAttr('time',0).parentElement.remove()
         }
        }
      },1000)
      
    function handleClick(){
    clicks++
            
    dataAttr('num',0).textContent = 'Clicks: '+clicks

dataAttr('click',0).onkeyup = function(e){
        if(e.code.toLowerCase() === 'space'){
         clicks--
        }
    }
    }

    setTimeout(() => {
dataAttr('click',0).removeEventListener('click',handleClick)

        dataAttr('click',0).textContent = 'Time\'s Up!'
        
dataAttr('future',0).textContent = 'Done!'
        
        summonPopup(dataAttr('future',0))

let CPS = clicks/5

if(CPS >= 10){
    localStorage.setItem('banned',true)

        dataAttr('future',0).textContent = 'You\'re a cheater!'
        
        summonPopup(dataAttr('future',0))
    
   close()
}
        
if('highscore' in localStorage){
  if(+localStorage.getItem('highscore') >= 10){
    localStorage.setItem('banned',true);

      dataAttr('future',0).textContent =   'I see that you cheated to get your highscore #banned.'
        
        summonPopup(dataAttr('future',0))
          
    close()
  }
   else if(CPS > +localStorage.getItem('highscore')){
 localStorage.setItem('highscore',CPS)
    dataAttr('future',0).textContent = 'New Highscore: '+CPS
        
        summonPopup(dataAttr('future',0))
       
       document.body.innerHTML += "<br/><br/><button id='refresh' onclick='location.reload()'>Refresh the Page!</button>"
}
    else{
        dataAttr('future',0).textContent = 'Your score is '+CPS
        
        summonPopup(dataAttr('future',0))

              document.body.innerHTML += "<br/><br/><button id='refresh' onclick='location.reload()'>Refresh the Page!</button>"
    }
}
else{
    dataAttr('future',0).textContent = 'Your score is '+CPS
        
        summonPopup(dataAttr('future',0));
    
    localStorage.setItem('highscore',CPS)
           document.body.innerHTML += "<br/><br/><button id='refresh' onclick='location.reload()'>Refresh the Page!</button>"
}
},5000)
        dataAttr('click',0).addEventListener('click',handleClick)
document.addEventListener('keypress',function(e){
    if((e.code.toLowerCase() === 'space' || e.code.toLowerCase() === 'enter') && !e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey){
     e.preventDefault()
    }  
})
}
