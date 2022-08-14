const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
	return document.getElementById(`hole${index}`);
}

for(let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  console.log(hole);

  hole.onclick = function() {
    if(hole.className.includes('hole_has-mole')){
      dead.textContent = +dead.textContent + 1;
    } else {
      lost.textContent = +lost.textContent + 1;
    }

    if(dead.textContent == 10){
      alert('Вы выиграли!')
    	dead.textContent = 0;
    	lost.textContent = 0;
    };

    if(lost.textContent == 5){
      alert('Вы проиграли...')
    	dead.textContent = 0;
    	lost.textContent = 0;
    }
  }
}
