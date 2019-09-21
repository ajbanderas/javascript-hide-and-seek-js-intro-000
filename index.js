
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n){
  var li = document.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < li.length; i++){
    li[i].innerHTML = parseInt(li[i].innerHTML) + n;
  }
}

function deepestChild(){
  var nodeList = document.querySelector('div#grand-node');
  var next = 0
    while(nodeList){
      next = nodeList.querySelector('div')
      nodeList = next.querySelector('div')
      if(next.innerHTML === 'boo!'){
        return next
      }
    }
  return next
}