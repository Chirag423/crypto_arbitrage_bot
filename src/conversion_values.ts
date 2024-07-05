import {bidask} from './array_data';


export let tradingPairs2: Record<string,bidask> = {

    usdtinr : {bid:[0,0], ask:[0,0]},
    btcinr : {bid:[0,0],ask:[0,0]},
    wrxinr : {bid:[0,0],ask:[0,0]}

};

export class BTC2 {
  
    constructor(m: string, data: bidask) {
      
      if (data.bid[0] !== tradingPairs2[m].bid[0] || data.ask[0] !== tradingPairs2[m].ask[0] ){
  
        update(m,data);
  
      };
      
    }
  
  };
  
  
  //function to update array
export function update (u: string, udata: bidask){
  
  tradingPairs2[u] = udata;
    
};

