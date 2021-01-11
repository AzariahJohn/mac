const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++){
  text.innerHTML += '<span class="edit">' + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  setTimeout(function () {
    const span = text.querySelectorAll('span.edit')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
      complete();
      return;
    }
  }, 2600);
}

function complete(){
  clearInterval(timer);
  timer = null;
}
