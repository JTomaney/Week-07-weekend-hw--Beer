BeerView = function (container, beer) {
    this.beersContainer = container
    this.beer = beer
}

BeerView.prototype.render = function () {
  const beerContainer = document.createElement('div')
  beerContainer.classList.add('beer')

  const name = this.createBeerName()
  beerContainer.appendChild(name)

  // const meaning = this.createMunroMeaning()
  // beerContainer.appendChild(meaning)
  //
  // const height = this.createMunroHeight()
  // beerContainer.appendChild(height)



this.beersContainer.appendChild(beerContainer)

};

BeerView.prototype.createBeerName = function () {
  const name = document.createElement('h3')
  name.classList.add('beer-name')
  name.textContent = this.beer.name
  return name
};

// BeerView.prototype.createMunroMeaning = function () {
//   const meaning = document.createElement('p')
//   meaning.classList.add('beer-meaning')
//   meaning.textContent = this.beer.meaning
//   return meaning
// };
//
// BeerView.prototype.createMunroHeight = function () {
//   const height = document.createElement('p')
//   height.classList.add('beer-height')
//   height.textContent = `Height (m):${this.beer.height}`
//   return height
// };




module.exports = BeerView;
