BeerView = function (container, beer) {
    this.beersContainer = container
    this.beer = beer
}

BeerView.prototype.render = function () {
  const beerContainer = document.createElement('div')
  beerContainer.classList.add('beer')

  const name = this.createBeerName()
  beerContainer.appendChild(name)

  const tagLine = this.createBeerTagline()
  beerContainer.appendChild(tagLine)

  const description = this.createBeerDescription()
  beerContainer.appendChild(description)



this.beersContainer.appendChild(beerContainer)

};

BeerView.prototype.createBeerName = function () {
  const name = document.createElement('h3')
  name.classList.add('beer-name')
  name.textContent = this.beer.name
  return name
};

BeerView.prototype.createBeerTagline = function () {
  const tagLine = document.createElement('p')
  tagLine.classList.add('beer-tagLine')
  tagLine.textContent = this.beer.tagLine
  return tagLine
};

BeerView.prototype.createBeerDescription = function () {
  const description = document.createElement('p')
  description.classList.add('beer-description')
  description.textContent = `Description:${this.beer.description}`
  return description
};




module.exports = BeerView;
