function InventoryResource(client){
  this.client = client;
}

InventoryResource.prototype = {
  get(params){
    return this.client.request.get('/inventory/full', params);
  },
  getByLocation(facilityNumber, locationNumber){
    return this.client.request.get(`/inventory/facility/${facilityNumber}/location/${locationNumber}`);
  },
};

module.exports = InventoryResource;
