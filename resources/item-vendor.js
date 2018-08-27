function ItemVendorResource(client){
  this.client = client;
}

ItemVendorResource.prototype = {
  create(data){
    this.client.request.post(`/itemVendor/updates`, {
      data,
    });
  },
  get(itemNumber){
    this.client.request.get(`/itemVendor/${itemNumber}`);
  },
  getByVendor(itemNumber, tradingPartner){
    this.client.request.get(`/itemVendor/${itemNumber}/${tradingPartner}`);
  },
};

module.exports = ItemVendorResource;