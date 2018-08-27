function SalesOrderResource(client){
  this.client = client;
}

SalesOrderResource.prototype = {
  create(data){
    return this.client.request.post('/orders', {
      data
    });
  },
  bulkUpdate(data){
    return this.client.request.post('/orders/updates', {
      data
    });
  },
  get(id){
    return this.client.request.get(`/orders/Sales Order/${id}`);
  },
  update(id, data){
    return this.client.request.put(`/orders/Sales Order/${id}`, {
      data
    });
  },
};

module.exports = SalesOrderResource;
