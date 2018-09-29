function ContainerResource(client){
  this.client = client;
}

ContainerResource.prototype = {
  bulkUpdate(data){
    return this.client.request.put('/containers', data);
  },
  create(data){
    return this.client.request.post('/containers', data);
  },
  get(id){
    return this.client.request.get(`/containers/${id}`)
  },
  update(id, data){
    return this.client.request.put(`/containers/${id}`, data);
  },
};

module.exports = ContainerResource
