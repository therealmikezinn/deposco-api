function TradingPartnerResource(client){
  this.client = client;
}

TradingPartnerResource.prototype = {
  create(data){
    return this.client.request.post('/tradingPartners', {
      data,
    })
  },
  get(partnerCode, params){
    return this.client.request.get(`/tradingPartners/${partnerCode}`, {
      params,
    });
  },
  list(params){
    return this.client.request.get(`/tradingPartners`, {
      params,
    });
  },
  update(data){
    return this.client.request.post('/tradingPartners/updates', {
      data,
    })
  },
};

module.exports = TradingPartnerResource;