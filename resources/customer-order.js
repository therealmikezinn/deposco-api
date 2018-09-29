function CustomerOrderResource(client){
  this.client = client;
}

CustomerOrderResource.prototype = {
  get(businessUnit, requestId){
    return this.client.request.get(`/import/${businessUnit}/status/${requestId}`)
  },
  update(businessUnit, orderNumber, data){
    return this.client.request.put(`/import/${businessUnit}/customerOrder/${orderNumber}`, data);
  },
};

module.exports = CustomerOrderResource;
