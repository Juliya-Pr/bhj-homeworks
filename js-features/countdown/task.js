const time = document.getElementById("timer");
const countdown = setInterval (function(){
  time.textContent--;
  if(time.textContent == '0'){
    clearInterval(countdown);
    alert('Вы победили в конкурсе!');
  }
}, 1000)
