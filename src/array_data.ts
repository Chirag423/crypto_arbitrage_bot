export interface bidask {
    bid : number[];
    ask : number[];
};

export interface pairs {
  usdt?: string;
  btc?: string;
  wrx?: string;
  inr?: string;
};


export let tradingPairs: Record<string,[bidask,pairs]> = {

  // btcusdt: [{bid:[0,0],ask:[0,0]},{usdt: "btcusdt", inr :"btcinr"}],
  // btcinr: [{bid:[0,0],ask:[0,0]},{usdt: "btcusdt", inr :"btcinr"}],
  // btcwrx: [{bid:[0,0],ask:[0,0]},{usdt: "btcusdt", inr :"btcinr"}]

  xrpinr:[{bid:[0,0],ask:[0,0]},{usdt:'xrpusdt',inr:'xrpinr',btc:'xrpbtc',wrx:'xrpwrx'}],
  xrpusdt:[{bid:[0,0],ask:[0,0]},{usdt:'xrpusdt',inr:'xrpinr',btc:'xrpbtc',wrx:'xrpwrx'}],
  xrpbtc:[{bid:[0,0],ask:[0,0]},{usdt:'xrpusdt',inr:'xrpinr',btc:'xrpbtc',wrx:'xrpwrx'}],
  xrpwrx:[{bid:[0,0],ask:[0,0]},{usdt:'xrpusdt',inr:'xrpinr',btc:'xrpbtc',wrx:'xrpwrx'}],
  
  shibinr:[{bid:[0,0],ask:[0,0]},{inr:'shibinr',usdt:'shibusdt',wrx:'shibwrx'}],
  shibusdt:[{bid:[0,0],ask:[0,0]},{inr:'shibinr',usdt:'shibusdt',wrx:'shibwrx'}],
  shibwrx:[{bid:[0,0],ask:[0,0]},{inr:'shibinr',usdt:'shibusdt',wrx:'shibwrx'}],

  trxinr:[{bid:[0,0],ask:[0,0]},{inr:'trxinr',usdt:'trxusdt',btc:'trxbtc',wrx:'trxwrx'}],
  trxusdt:[{bid:[0,0],ask:[0,0]},{inr:'trxinr',usdt:'trxusdt',btc:'trxbtc',wrx:'trxwrx'}],
  trxbtc:[{bid:[0,0],ask:[0,0]},{inr:'trxinr',usdt:'trxusdt',btc:'trxbtc',wrx:'trxwrx'}],
  trxwrx:[{bid:[0,0],ask:[0,0]},{inr:'trxinr',usdt:'trxusdt',btc:'trxbtc',wrx:'trxwrx'}],



};