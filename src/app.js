const Beers = require(`./models/beers.js`)
const BeerListView = require(`./views/beer_list_view.js`)

document.addEventListener(`DOMContentLoaded`, () => {

  beerListContainer = document.querySelector(`#beer-list`)
  const beerListView = new BeerListView(beerListContainer)
  beerListView.bindEvents()

  const beers = new Beers(`https://api.punkapi.com/v2/beers`)
  beers.getData()

})
