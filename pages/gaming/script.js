// selection all champion chards
const championCard = document.getElementsByClassName("champion");
//setting their width

if(championCard.length < 4){
  for(let i = 0; i< championCard.length; i++){
    championCard[i].style.width = `${100/championCard.length}%`;
  }
}
else {
  for(let i = 0; i< championCard.length; i++){
    championCard[i].style.width = `15%`;
  }
}
console.log(championCard);