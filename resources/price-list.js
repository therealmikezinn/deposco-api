function PriceListResource(client){
  this.client = client;
}

PriceListResource.prototype = {
  create(businessUnit, data){
    this.client.request.post(`/pricelists/${businessUnit}`, data);
  },
  get(businessUnit){
    this.client.request.get(`/pricelists/${businessUnit}`);
  },
  getByTradingPartner(businessUnit, tradingPartner){
    this.client.request.get(`/pricelists/${businessUnit}/${tradingPartner}`);
  },
  getByFacility(businessUnit, facility){
    this.client.request.get(`/pricelists/${businessUnit}/${facility}`);
  },
  getByTradingPartnerAndItem(businessUnit, tradingPartner, item){
    this.client.request.get(`/pricelists/${businessUnit}/${tradingPartner}/${item}`);
  },
  getByFacilityAndItem(businessUnit, facility, item){
    this.client.request.get(`/pricelists/${businessUnit}/${facility}/${item}`);
  },
  update(businessUnit, priceListCode, data){
    this.client.request.put(`/pricelists/${businessUnit}/${priceListCode}`, data);
  },
};

module.exports = PriceListResource;
