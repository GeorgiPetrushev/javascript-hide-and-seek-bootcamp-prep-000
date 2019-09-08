
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
 return document.querySelector('#nested .target');
}


function increaseRankBy(n){
  const numInc= document.getElementById('app').querySelectorAll('ul.ranked-list')

  for (let i = 0; i < numInc.length; i++){
    numInc[i].innerHTML = parseInt(numInc[i].innerHTML) + n
    }
}