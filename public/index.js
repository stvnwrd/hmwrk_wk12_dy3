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
    beerName.innerText = `Name: ${beer.name}`
    const beerPhoto = document.createElement("img");
    beerPhoto.src = beer.image_url;

    const yeast = document.createElement("li")
    yeast.innerText = `Yeast: ${beer.ingredients.yeast}`;
    ul.appendChild(beerName);

    const hopHeader = document.createElement("li");
    hopHeader.innerText = 'Hops:';
    ul.appendChild(hopHeader);

    beer.ingredients.hops.forEach(function(hopType, index){
      // debugger;
      let hop = document.createElement('li')
      hop.innerText = `-   ${hopType.name}`;
      ul.appendChild(hop)
    })

    ul.appendChild(yeast);
    ul.appendChild(beerPhoto);
  });

};



window.addEventListener('load', app);
