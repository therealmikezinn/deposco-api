function TradingPartnerSite(client){
  this.client = client;
}

TradingPartnerSite.prototype = {
  create(data){
    this.client.request.post('/tradingPartnerSite', {
      data,
    });
  },
  get(tpCode){
    return this.client.request.get(`/tradingPartnerSite/${tpCode}`);
  },
  getBySite(tpCode, siteCode){
    return this.client.request.get(`/tradingPartnerSite/${tpCode}/${siteCode}`);
  },
  list(){
    return this.client.request.get(`/tradingPartnerSite`)
  },
};

module.exports = TradingPartnerSite;