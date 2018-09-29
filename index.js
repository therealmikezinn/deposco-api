const axios = require('axios');

const {
  defaults,
} = require('lodash');

DeposcoClient.defaults = {
  environment: 'sandbox',
};

DeposcoClient.generateApiUrl = ({
    environment,
    tenantCode,
}) => {
  return environment === 'sandbox'
    ? `https://${tenantCode}-ua.deposco.com/integration/${tenantCode}`
    : `https://${tenantCode}.deposco.com/integration/${tenantCode}`;
};

DeposcoClient.resources = {
  container: require('./resources/container'),
  cube: require('./resources/cube'),
  customerOrder: require('./resources/customer-order'),
  entityImage: require('./resources/entity-image'),
  inventory: require('./resources/inventory'),
  item: require('./resources/item'),
  itemReceipt: require('./resources/item-receipt'),
  itemVendor: require('./resources/item-vendor'),
  priceList: require('./resources/price-list'),
  purchaseOrder: require('./resources/purchase-order'),
  receiptAdvice: require('./resources/receipt-advice'),
  salesOrder: require('./resources/sales-order'),
  search: require('./resources/search'),
  shipment: require('./resources/shipment'),
  tradingPartner: require('./resources/trading-partner'),
  tradingPartnerSite: require('./resources/trading-partner-site'),
  user: require('./resources/user'),
};

function DeposcoClient(options){
  if(!(this instanceof DeposcoClient)){
    return new DeposcoClient(options);
  }

  defaults(options, DeposcoClient.defaults);

  this.request = axios.create({
    baseURL: DeposcoClient.generateApiUrl(options),
    headers: {
      Accept: 'application/json',
    },
    auth: {
      username: options.username,
      password: options.password,
    },
  });

  this.init();
}

DeposcoClient.prototype = {
  init(){
    Object.keys(DeposcoClient.resources).forEach(resource => {
      console.log(resource);
      DeposcoClient.prototype[resource] =  new DeposcoClient.resources[resource](this);
    });
  },
};

module.exports = DeposcoClient;
