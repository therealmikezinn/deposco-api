function UserResource(client){
  this.client = client;
}

UserResource.prototype = {
  create(data){
    return this.client.request.put('/users', {
      data,
    });
  },
  get(username){
    return this.client.request.get(`/users/${username}`);
  },
  list(){
    return this.client.request.get('/users');
  },
  update(data){
    return this.client.request.post('/users', {
      data,
    });
  },
};

module.exports = UserResource;