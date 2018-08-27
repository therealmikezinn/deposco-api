function ItemReceiptResource(client){
  this.client = client;
}

ItemReceiptResource.prototype = {
  get(receiptNumber){
    return this.client.request.get(`/receiptlines/${receiptNumber}`)
  },
  getByBusinessUnit(businessUnit, receiptNumber){
    return this.client.request.get(`/receiptlines/${businessUnit}/${receiptNumber}`)
  },
  getByOrderItemAndPack(orderNumber, itemNumber, packType, packQty){
    return this.client.request.get(`/receiptlines/${orderNumber}/${itemNumber}/${packType}/${packQty}`)
  },
  getByBusinessUnitOrderItemAndPack(businessUnit,orderNumber,itemNumber, packType, packQty){
    return this.client.request.get(`/receiptlines/${businessUnit}/${orderNumber}/${itemNumber}/${packType}/${packQty}`)
  },
  update(data){
    return this.client.request.put(`/receiptlines`, {
      data,
    });
  },
  updateByBusinessUnit(businessUnit, data){
    return this.client.request.put(`/receiptlines/${businessUnit}`, {
      data,
    });
  }
};

module.exports = ItemReceiptResource;