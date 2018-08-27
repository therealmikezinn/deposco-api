function CubeResource(client){
  this.client = client;
}

CubeResource.prototype = {
  create(data){
    return this.client.request.post('/cube', {
      data,
    });
  },
  get(businessUnit, orderNumber){
    return this.client.request.get(`/cube/${businessUnit}/${orderNumber}`)
  },
};

module.exports = CubeResource;