function ReceiptAdviceResource(client){
  this.client = client;
}

ReceiptAdviceResource.prototype = {
  get(){
    return this.client.request.get(`/receiptadvices`);
  },
  getByBusinessUnit(businessUnit){
    return this.client.request.get(`/receiptadvices/${businessUnit}`);
  },
};

module.exports = ReceiptAdviceResource;