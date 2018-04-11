const app = function(){
  const url = 'https://api.punkapi.com/v2/beers'
  makeRequest(url, requestComplete)


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
    const beerName = document.createElement("li");
    beerName.innerText = beer.name;
    const beerPhoto = document.createElement("img");
    beerPhoto.src = beer.image_url;
    ul.appendChild(beerName);
    ul.appendChild(beerPhoto);
    // debugger;
  });

};




window.addEventListener('load', app);
