function SearchResource(client){
  this.client = client;
}

SearchResource.prototype = {
  list(entity, params){
    return this.client.request(`/search/${entity}`, params);
  },
};

module.exports = SearchResource;
