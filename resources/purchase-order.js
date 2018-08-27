function PurchaseOrderResource(client){
  this.client = client;
}

PurchaseOrderResource.prototype = {
  create(data){
    this.client.request.post(`/orders`, {
      data,
    });
  },
  createOrUpdate(data){
    this.client.request.post(`/orders/updates`, {
      data,
    });
  },
  createSingle(orderNumber, data){
    this.client.request.put(`/orders/Purchase Order/${orderNumber}`, {
      data,
    });
  },
  get(orderNumber){
    this.client.request.get(`/orders/Purchase Order/${orderNumber}`);
  },
};

module.exports = PurchaseOrderResource;