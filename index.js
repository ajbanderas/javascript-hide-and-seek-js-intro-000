
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
  var node = document.querySelector('div#grand-node');
    while(node){
      if(node.innerHTML === 'boo!'){
        return node
      }
      node = node.querySelector('div')
    }
  return null
}