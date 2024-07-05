import {tradingPairs } from "./array_data";
import { tradingPairs2 } from "./conversion_values";
// import {WazirXOrder} from './order';
// import {key,secretKey} from './config';

export interface bidask {
    bid : number[];
    ask : number[];
};

export let flag = true;


export class BTC {
  
  constructor(m: string, data: bidask) {
    
    if (data.bid[0] !== tradingPairs[m][0].bid[0] || data.ask[0] !== tradingPairs[m][0].ask[0] ){

      update(m,data);

    };
    
  }

};


//function to update array
export function update (u: string, udata: bidask){

  tradingPairs[u][0] = udata;
  if (flag===true){
    compare(u);
  }
  
};


//function to compare values
export function compare (s: string) {

  let mark1 = tradingPairs[s][1].inr;
  let mark1s = String(mark1);
  let mark2 = tradingPairs[s][1].usdt;
  let mark2s = String(mark2);
  let mark3 = tradingPairs[s][1].btc;
  let mark3s = String(mark3);
  let mark4 = tradingPairs[s][1].wrx;
  let mark4s = String(mark4);

  if (mark1s !== "undefined" && mark2s !== "undefined"&& mark3s === "undefined" && mark4s ==="undefined"){

    c2(mark1s,mark2s);

  };

  if (mark1s !== "undefined" && mark2s !== "undefined"&& mark3s !== "undefined" && mark4s ==="undefined"){

    c3(mark1s,mark2s,mark3s);

  };

  if (mark1s !== "undefined" && mark2s !== "undefined"&& mark3s === "undefined" && mark4s !=="undefined"){

    c3(mark1s,mark2s,mark4s);

  };
  
  if (mark1s !== "undefined" && mark2s !== "undefined"&& mark3s !== "undefined" && mark4s !=="undefined"){

    c4(mark1s,mark2s,mark3s,mark4s);

  };

};


export function c2 (m1:string, m2:string){

  if (tradingPairs[m1][0].ask[1]!==0 && tradingPairs[m1][0].bid[0]!==0 && tradingPairs[m2][0].ask[0]!==0 && tradingPairs[m2][0].bid[0]){

    const usdtinr_ask : number = tradingPairs2['usdtinr'].ask[0];
    const usdtinr_bid : number = tradingPairs2['usdtinr'].bid[0];

    const m1_inr_ask = tradingPairs[m1][0].ask[0];
    const m1_inr_bid = tradingPairs[m1][0].bid[0];
    const m2_inr_ask = tradingPairs[m2][0].ask[0] * usdtinr_ask;
    const m2_inr_bid = tradingPairs[m2][0].bid[0] * usdtinr_bid;

    const m2b_m1a = m2_inr_bid - m1_inr_ask;
    const m1b_m2a = m1_inr_bid - m2_inr_ask;

    let largestVariable: string = 'm2b_m1a';
    let largestValue: number = m2b_m1a;

    if (m1b_m2a > largestValue) {
      largestValue = m1b_m2a;
      largestVariable = 'm1b_m2a';
    };

    if ((largestValue/m1_inr_ask)*100>3.5){

      if (largestVariable === 'm2b_m1a'){
        tradebss(m1, m2, 'usdtinr');
      };

      if (largestVariable === 'm1b_m2a'){
        tradebbs(m1, m2,'usdtinr');
      };

    };

  };

};

export function c3 (m1:string, m2 : string, m3: string) {

  if (tradingPairs[m1][0].ask[1]!==0 && tradingPairs[m1][0].bid[0]!==0 && tradingPairs[m2][0].ask[0]!==0 && tradingPairs[m2][0].bid[0] && tradingPairs[m3][0].ask[1]!==0 && tradingPairs[m3][0].bid[0]!==0){
    
    const usdtinr_ask : number = tradingPairs2['usdtinr'].ask[0];
    const usdtinr_bid : number = tradingPairs2['usdtinr'].bid[0];
    const btcinr_ask : number = tradingPairs2['btcinr'].ask[0];
    const btcinr_bid : number = tradingPairs2['btcinr'].bid[0];
    const wrxinr_ask : number = tradingPairs2['wrxinr'].ask[0];
    const wrxinr_bid : number = tradingPairs2['wrxinr'].bid[0];
  
  
    const m1_inr_ask = tradingPairs[m1][0].ask[0];
    const m1_inr_bid = tradingPairs[m1][0].bid[0];
    const m2_inr_ask = tradingPairs[m2][0].ask[0] * usdtinr_ask;
    const m2_inr_bid = tradingPairs[m2][0].bid[0]* usdtinr_bid;
    let m3_inr_ask : number = Infinity; 
    let m3_inr_bid : number = -Infinity;
    let market = '';
  
    if (m3.slice(-3) === "btc"){
      market = 'btcinr';
      m3_inr_ask = tradingPairs[m3][0].ask[0]*btcinr_ask;
      m3_inr_bid = tradingPairs[m3][0].bid[0]*btcinr_bid;
    };
  
    if (m3.slice(-3)=== 'wrx'){
      market = 'wrxinr';
      m3_inr_ask = tradingPairs[m3][0].ask[0]*wrxinr_ask;
      m3_inr_bid = tradingPairs[m3][0].bid[0]*wrxinr_bid;
    };
  
    const m2b_m1a = m2_inr_bid - m1_inr_ask;
    const m1b_m2a = m1_inr_bid - m2_inr_ask;
    const m3b_m1a = m3_inr_bid - m1_inr_ask;
    const m1b_m3a = m1_inr_bid - m3_inr_ask;
  
    let largestVariable: string = 'm2b_m1a';
    let largestValue: number = m2b_m1a;
  
    if (m1b_m2a > largestValue) {
      largestValue = m1b_m2a;
      largestVariable = 'm1b_m2a';
    }
  
    if (m3b_m1a > largestValue) {
        largestValue = m3b_m1a;
        largestVariable = 'm3b_m1a';
    }
  
    if (m1b_m3a > largestValue) {
        largestValue = m1b_m3a;
        largestVariable = 'm1b_m3a';
    }
  
    if ((largestValue/m1_inr_ask)*100>3.5) {
  
      if (largestVariable === 'm2b_m1a'){
        tradebss(m1, m2,'usdtinr');
      };
  
      if (largestVariable === 'm1b_m2a'){
        tradebbs(m1, m2, 'usdtinr');
      };
  
      if (largestVariable === 'm3b_m1a'){
        tradebss(m1, m3,market);
      };
  
      if (largestVariable === 'm1b_m3a'){
        tradebbs(m1, m3, market);
      };
  
    };

  };

};

export function c4(m1:string, m2: string, m3: string, m4:string){

  if (tradingPairs[m1][0].ask[1]!==0 && tradingPairs[m1][0].bid[0]!==0 && tradingPairs[m2][0].ask[0]!==0 && tradingPairs[m2][0].bid[0] && tradingPairs[m3][0].ask[1]!==0 && tradingPairs[m3][0].bid[0]!==0 && tradingPairs[m4][0].ask[1]!==0 && tradingPairs[m4][0].bid[0]!==0){

    const usdtinr_ask : number = tradingPairs2['usdtinr'].ask[0];
    const usdtinr_bid : number = tradingPairs2['usdtinr'].bid[0];
    const btcinr_ask : number = tradingPairs2['btcinr'].ask[0];
    const btcinr_bid : number = tradingPairs2['btcinr'].bid[0];
    const wrxinr_ask : number = tradingPairs2['wrxinr'].ask[0];
    const wrxinr_bid : number = tradingPairs2['wrxinr'].bid[0];
  
    const m1_inr_ask = tradingPairs[m1][0].ask[0];
    const m1_inr_bid = tradingPairs[m1][0].bid[0];
    const m2_inr_ask = tradingPairs[m2][0].ask[0] * usdtinr_ask;
    const m2_inr_bid = tradingPairs[m2][0].bid[0] * usdtinr_bid;
    const m3_inr_ask = tradingPairs[m3][0].ask[0] * btcinr_ask;
    const m3_inr_bid = tradingPairs[m3][0].bid[0] * btcinr_bid;
    const m4_inr_ask = tradingPairs[m4][0].ask[0] * wrxinr_ask;
    const m4_inr_bid = tradingPairs[m4][0].bid[0] * wrxinr_bid;
  
    const m2b_m1a = m2_inr_bid - m1_inr_ask;
    const m1b_m2a = m1_inr_bid - m2_inr_ask;
    const m3b_m1a = m3_inr_bid - m1_inr_ask;
    const m1b_m3a = m1_inr_bid - m3_inr_ask;
    const m4b_m1a = m4_inr_bid - m1_inr_ask;
    const m1b_m4a = m1_inr_bid - m4_inr_ask;
  
    let largestVariable: string = 'm2b_m1a';
    let largestValue: number = m2b_m1a;
  
    if (m1b_m2a > largestValue) {
        largestValue = m1b_m2a;
        largestVariable = 'm1b_m2a';
    };
  
    if (m3b_m1a > largestValue) {
        largestValue = m3b_m1a;
        largestVariable = 'm3b_m1a';
    };
  
    if (m1b_m3a > largestValue) {
        largestValue = m1b_m3a;
        largestVariable = 'm1b_m3a';
    };
  
    if (m4b_m1a > largestValue) {
        largestValue = m4b_m1a;
        largestVariable = 'm4b_m1a';
    };
  
    if (m1b_m4a > largestValue) {
        largestValue = m1b_m4a;
        largestVariable = 'm1b_m4a';
    };
  
    if ((largestValue/m1_inr_ask)*100>3.5) {
  
      if (largestVariable === 'm2b_m1a'){
        tradebss(m1, m2, 'usdtinr');
      };
  
      if (largestVariable === 'm1b_m2a'){
        tradebbs(m1, m2,'usdtinr');
      };
  
      if (largestVariable === 'm3b_m1a'){
        tradebss(m1, m3,'btcinr');
      };
  
      if (largestVariable === 'm1b_m3a'){
        tradebbs(m1, m3, 'btcinr');
      };
  
      if (largestVariable === 'm4b_m1a'){
        tradebss(m1, m4, 'wrxinr');
      };
  
      if (largestVariable === 'm1b_m4a'){
        tradebbs(m1, m4, 'wrxinr');
      };
  
    };

  };
 
};

export async function tradebss (m1: string, m2 : string , market :string){

  const m3 = market;
  const m1_price = tradingPairs[m1][0].ask[0];
  const m2_price = tradingPairs[m2][0].bid[0];
  const m1_quantity = tradingPairs[m1][0].ask[1];
  const m2_quantity = tradingPairs[m2][0].bid[1];


  const m3_price = tradingPairs2[m3].bid[0];
  const m3_quantity = tradingPairs2[m3].bid[1];

  const min_cost = Math.min(m1_price*m1_quantity,m2_price*m2_quantity*m3_price, m3_price*m3_quantity);

  const m1_buy_quantity = min_cost/m1_price;
  const m2_sell_quantity = min_cost/m2_price/m3_price;
  const m3_sell_quantity = min_cost/m3_quantity;

  buy(m1,m1_price,m1_buy_quantity);
  sell(m2,m2_price,m2_sell_quantity);
  sell(m2,m3_price,m3_sell_quantity);

  // const buy_m1 =await buy(m1,m1_price,m1_buy_quantity);
  // let sell_m2 = 0;
  // setTimeout(()=>{
  //   if (buy_m1 === 1){
  //     sell_m2 = Number(sell(m2,m2_price,m2_sell_quantity));
  //   }    
  // },50);
  // setTimeout(()=>{
  //   if (sell_m2 === 1){
  //     sell(m2,m3_price,m3_sell_quantity);
  //   }    
  // },100);

};

export async function tradebbs(m1: string, m2 : string, market :string ){

  const m3 : string = market;
  const m1_price = tradingPairs[m1][0].bid[0];
  const m2_price = tradingPairs[m2][0].ask[0];
  const m1_quantity = tradingPairs[m1][0].bid[1];
  const m2_quantity = tradingPairs[m2][0].ask[1];


  const m3_price = tradingPairs2[m3].ask[0];
  const m3_quantity = tradingPairs2[m3].ask[1];

  const min_cost = Math.min(m1_price*m1_quantity,m2_price*m2_quantity*m3_price, m3_price*m3_quantity);

  const m1_sell_quantity = min_cost/m1_price;
  const m2_buy_quantity = min_cost/m2_price/m3_price;
  const m3_buy_quantity = min_cost/m3_quantity;

  buy(m3,m3_price,m3_buy_quantity);
  buy(m2,m2_price,m2_buy_quantity);
  sell(m1,m1_price,m1_sell_quantity);

  // const buy_m3 =await buy(m3,m3_price,m3_buy_quantity);
  // let buy_m2 = 0;
  // setTimeout(()=>{
  //   if (buy_m3 === 1){
  //     buy_m2 = Number(buy(m2,m2_price,m2_buy_quantity));
  //   }    
  // },50);
  // setTimeout(()=>{
  //   if (buy_m2 === 1){
  //     sell(m1,m1_price,m1_sell_quantity);
  //   }    
  // },100);

};


// function to place buy order
export async function buy(symbol:string,price:number, quantity:number){
  const sbuy ='buy';
  const sPrice = price.toString();
  const sQuantity = quantity.toString();
  // const order = new WazirXOrder(key,secretKey,symbol,'buy',sPrice,sQuantity);
  // const a = await order.placeOrder();
  // if(a=== 1){
  //   return 1;
  // };

  console.log(sbuy,symbol,price,quantity);
  return 1;
};


// function to place sell order
export async function sell(symbol:string,price:number, quantity:number){

  const ssell ='sell';
  const sPrice = price.toString();
  const sQuantity = quantity.toString();
  // const order = new WazirXOrder(key,secretKey,symbol,'sell',sPrice,sQuantity);
  // const a = await order.placeOrder();
  // if(a=== 1){
  //  return 1;
  // };

  console.log(ssell,symbol,price,quantity);
  return 1;

};

export function setflag (){
  flag = false;
  setTimeout(()=>{
    flag = true;
  },1000);
};

