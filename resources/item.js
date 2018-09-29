function ItemResource(client){
  this.client = client;
}

ItemResource.prototype = {
  create(data){
    this.client.request.post('/items', {
      data,
    });
  },
  get(itemNumber){
    return this.client.request.get(`/items/${itemNumber}`);
  },
  getItemByBusinessUnit(businessUnit, itemNumber){
    return this.client.request.get(`/items/${businessUnit}/${itemNumber}`);
  },
  getAtps(){
    return this.client.request.get(`/items/atps`);
  },
  getAtpsByTradingPartner(tradingPartnerCode){
    return this.client.request.get(`/items/atpsByTP/${tradingPartnerCode}`);
  },
  getAtpsByItem(itemNumber){
    return this.client.request.get(`/items/${itemNumber}/atp`);
  },
  getAtpsByItemAndBusinessUnit(businessUnit, itemNumber){
    return this.client.request.get(`/items/${businessUnit}/${itemNumber}/atps`);
  },
  getBoqty(itemNumber){
    return this.client.request.get(`/items/${itemNumber}/boqty`);
  },
  getPoqty(itemNumber){
    return this.client.request.get(`/items/${itemNumber}/poqty`);
  },
  getFcqty(itemNumber){
    return this.client.request.get(`/items/${itemNumber}/fcqty`);
  },
  getScqty(itemNumber){
    return this.client.request.get(`/items/${itemNumber}/scqty`);
  },
  getTotals(itemNumber){
    return this.client.request.get(`/items/${itemNumber}/totals`);
  },
  getReserveQty(itemNumber){
    return this.client.request.get(`/items/${itemNumber}/reserveqty`);
  },
  getAtpsByDateRange(params){
    return this.client.request.get(`/items/atpsByDateRange`, {
      params,
    });
  },
  update(itemNumber, data){
    this.client.request.put(`/items/${itemNumber}`, {
      data,
    });
  },
  updatePacks(itemNumber, data){
    this.client.request.put(`/items/${itemNumber}/packs`, {
      data,
    });
  },
  updatePacksByBusinessUnit(businessUnit, itemNumber, data){
    this.client.request.put(`/items/${businessUnit}/${itemNumber}/packs`, {
      data,
    });
  },
  updateItemUpcs(itemNumber, data){
    this.client.request.put(`/items/${itemNumber}/upcs`, {
      data,
    })
  },
  updateItemUpcsByBusinessUnit(businessUnit,itemNumber, data){
    this.client.request.put(`/items/${businessUnit}/${itemNumber}/upcs`, {
      data,
    });
  },
};

module.exports = ItemResource;

