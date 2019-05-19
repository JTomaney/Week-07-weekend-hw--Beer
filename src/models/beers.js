const PubSub = require(`../helpers/pub_sub.js`)
const RequestHelper = require(`../helpers/request_helper.js`)

const Beers = function (url) {
  this.url = url
}

Beers.prototype.getData = function () {
  const request = new RequestHelper(this.url)
  request.get()
  .then( (data ) => {
    this.beers = data
    PubSub.publish('Beers:beers-data-ready', this.beers);
    // const regions = this.getRegionNames(this.munros)
    // PubSub.publish('Munros:unique-regions', regions)
  })

};

module.exports = Beers;
