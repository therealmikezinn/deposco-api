function EntityImageResource(client){
  this.client = client;
}

EntityImageResource.prototype = {
  create(data){
    this.client.request.post('/images', {
      data,
    });
  },
};

module.exports = EntityImageResource;