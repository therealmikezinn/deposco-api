function ShipmentResource(client){
  this.client = client;
}

ShipmentResource.prototype = {
  create(data){
    return this.client.request.put('/shipments', {
      data,
    });
  },
  createByBusinessUnit(businessUnit, data){
    return this.client.request.put(`/shipments/${businessUnit}`, {
      data,
    });
  },
  get(businessUnit){
    return this.client.request.get(`/shipments/${businessUnit}`);
  },
  getByBusinessUnit(businessUnit, shipmentNumber){
    return this.client.request.get(`/shipments/${businessUnit}/${shipmentNumber}`);
  },
};

module.exports = ShipmentResource;