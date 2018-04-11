const app = function(){
  const url = 'https://api.punkapi.com/v2/beers'
  makeRequest(url, requestComplete)

  // let jsonString = localStorage.getItem('currentBeer');
  //
  //
}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

const requestComplete = function() {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  populateList(beers)

}

const populateList = function(beers) {
  const ul = document.getElementById("beer-list");

  beers.forEach(beer => {
    const li = document.createElement("li");
    li.innerText = beer.name;
    ul.appendChild(li);
  });

};




window.addEventListener('load', app);
