"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setflag = exports.sell = exports.buy = exports.tradebbs = exports.tradebss = exports.c4 = exports.c3 = exports.c2 = exports.compare = exports.update = exports.BTC = exports.flag = void 0;
const array_data_1 = require("./array_data");
const conversion_values_1 = require("./conversion_values");
;
exports.flag = true;
class BTC {
    constructor(m, data) {
        if (data.bid[0] !== array_data_1.tradingPairs[m][0].bid[0] || data.ask[0] !== array_data_1.tradingPairs[m][0].ask[0]) {
            update(m, data);
        }
        ;
    }
}
exports.BTC = BTC;
;
//function to update array
function update(u, udata) {
    array_data_1.tradingPairs[u][0] = udata;
    if (exports.flag === true) {
        compare(u);
    }
}
exports.update = update;
;
//function to compare values
function compare(s) {
    let mark1 = array_data_1.tradingPairs[s][1].inr;
    let mark1s = String(mark1);
    let mark2 = array_data_1.tradingPairs[s][1].usdt;
    let mark2s = String(mark2);
    let mark3 = array_data_1.tradingPairs[s][1].btc;
    let mark3s = String(mark3);
    let mark4 = array_data_1.tradingPairs[s][1].wrx;
    let mark4s = String(mark4);
    if (mark1s !== "undefined" && mark2s !== "undefined" && mark3s === "undefined" && mark4s === "undefined") {
        c2(mark1s, mark2s);
    }
    ;
    if (mark1s !== "undefined" && mark2s !== "undefined" && mark3s !== "undefined" && mark4s === "undefined") {
        c3(mark1s, mark2s, mark3s);
    }
    ;
    if (mark1s !== "undefined" && mark2s !== "undefined" && mark3s === "undefined" && mark4s !== "undefined") {
        c3(mark1s, mark2s, mark4s);
    }
    ;
    if (mark1s !== "undefined" && mark2s !== "undefined" && mark3s !== "undefined" && mark4s !== "undefined") {
        c4(mark1s, mark2s, mark3s, mark4s);
    }
    ;
}
exports.compare = compare;
;
function c2(m1, m2) {
    if (array_data_1.tradingPairs[m1][0].ask[1] !== 0 && array_data_1.tradingPairs[m1][0].bid[0] !== 0 && array_data_1.tradingPairs[m2][0].ask[0] !== 0 && array_data_1.tradingPairs[m2][0].bid[0]) {
        const usdtinr_ask = conversion_values_1.tradingPairs2['usdtinr'].ask[0];
        const usdtinr_bid = conversion_values_1.tradingPairs2['usdtinr'].bid[0];
        const m1_inr_ask = array_data_1.tradingPairs[m1][0].ask[0];
        const m1_inr_bid = array_data_1.tradingPairs[m1][0].bid[0];
        const m2_inr_ask = array_data_1.tradingPairs[m2][0].ask[0] * usdtinr_ask;
        const m2_inr_bid = array_data_1.tradingPairs[m2][0].bid[0] * usdtinr_bid;
        const m2b_m1a = m2_inr_bid - m1_inr_ask;
        const m1b_m2a = m1_inr_bid - m2_inr_ask;
        let largestVariable = 'm2b_m1a';
        let largestValue = m2b_m1a;
        if (m1b_m2a > largestValue) {
            largestValue = m1b_m2a;
            largestVariable = 'm1b_m2a';
        }
        ;
        if ((largestValue / m1_inr_ask) * 100 > 3.5) {
            if (largestVariable === 'm2b_m1a') {
                tradebss(m1, m2, 'usdtinr');
            }
            ;
            if (largestVariable === 'm1b_m2a') {
                tradebbs(m1, m2, 'usdtinr');
            }
            ;
        }
        ;
    }
    ;
}
exports.c2 = c2;
;
function c3(m1, m2, m3) {
    if (array_data_1.tradingPairs[m1][0].ask[1] !== 0 && array_data_1.tradingPairs[m1][0].bid[0] !== 0 && array_data_1.tradingPairs[m2][0].ask[0] !== 0 && array_data_1.tradingPairs[m2][0].bid[0] && array_data_1.tradingPairs[m3][0].ask[1] !== 0 && array_data_1.tradingPairs[m3][0].bid[0] !== 0) {
        const usdtinr_ask = conversion_values_1.tradingPairs2['usdtinr'].ask[0];
        const usdtinr_bid = conversion_values_1.tradingPairs2['usdtinr'].bid[0];
        const btcinr_ask = conversion_values_1.tradingPairs2['btcinr'].ask[0];
        const btcinr_bid = conversion_values_1.tradingPairs2['btcinr'].bid[0];
        const wrxinr_ask = conversion_values_1.tradingPairs2['wrxinr'].ask[0];
        const wrxinr_bid = conversion_values_1.tradingPairs2['wrxinr'].bid[0];
        const m1_inr_ask = array_data_1.tradingPairs[m1][0].ask[0];
        const m1_inr_bid = array_data_1.tradingPairs[m1][0].bid[0];
        const m2_inr_ask = array_data_1.tradingPairs[m2][0].ask[0] * usdtinr_ask;
        const m2_inr_bid = array_data_1.tradingPairs[m2][0].bid[0] * usdtinr_bid;
        let m3_inr_ask = Infinity;
        let m3_inr_bid = -Infinity;
        let market = '';
        if (m3.slice(-3) === "btc") {
            market = 'btcinr';
            m3_inr_ask = array_data_1.tradingPairs[m3][0].ask[0] * btcinr_ask;
            m3_inr_bid = array_data_1.tradingPairs[m3][0].bid[0] * btcinr_bid;
        }
        ;
        if (m3.slice(-3) === 'wrx') {
            market = 'wrxinr';
            m3_inr_ask = array_data_1.tradingPairs[m3][0].ask[0] * wrxinr_ask;
            m3_inr_bid = array_data_1.tradingPairs[m3][0].bid[0] * wrxinr_bid;
        }
        ;
        const m2b_m1a = m2_inr_bid - m1_inr_ask;
        const m1b_m2a = m1_inr_bid - m2_inr_ask;
        const m3b_m1a = m3_inr_bid - m1_inr_ask;
        const m1b_m3a = m1_inr_bid - m3_inr_ask;
        let largestVariable = 'm2b_m1a';
        let largestValue = m2b_m1a;
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
        if ((largestValue / m1_inr_ask) * 100 > 3.5) {
            if (largestVariable === 'm2b_m1a') {
                tradebss(m1, m2, 'usdtinr');
            }
            ;
            if (largestVariable === 'm1b_m2a') {
                tradebbs(m1, m2, 'usdtinr');
            }
            ;
            if (largestVariable === 'm3b_m1a') {
                tradebss(m1, m3, market);
            }
            ;
            if (largestVariable === 'm1b_m3a') {
                tradebbs(m1, m3, market);
            }
            ;
        }
        ;
    }
    ;
}
exports.c3 = c3;
;
function c4(m1, m2, m3, m4) {
    if (array_data_1.tradingPairs[m1][0].ask[1] !== 0 && array_data_1.tradingPairs[m1][0].bid[0] !== 0 && array_data_1.tradingPairs[m2][0].ask[0] !== 0 && array_data_1.tradingPairs[m2][0].bid[0] && array_data_1.tradingPairs[m3][0].ask[1] !== 0 && array_data_1.tradingPairs[m3][0].bid[0] !== 0 && array_data_1.tradingPairs[m4][0].ask[1] !== 0 && array_data_1.tradingPairs[m4][0].bid[0] !== 0) {
        const usdtinr_ask = conversion_values_1.tradingPairs2['usdtinr'].ask[0];
        const usdtinr_bid = conversion_values_1.tradingPairs2['usdtinr'].bid[0];
        const btcinr_ask = conversion_values_1.tradingPairs2['btcinr'].ask[0];
        const btcinr_bid = conversion_values_1.tradingPairs2['btcinr'].bid[0];
        const wrxinr_ask = conversion_values_1.tradingPairs2['wrxinr'].ask[0];
        const wrxinr_bid = conversion_values_1.tradingPairs2['wrxinr'].bid[0];
        const m1_inr_ask = array_data_1.tradingPairs[m1][0].ask[0];
        const m1_inr_bid = array_data_1.tradingPairs[m1][0].bid[0];
        const m2_inr_ask = array_data_1.tradingPairs[m2][0].ask[0] * usdtinr_ask;
        const m2_inr_bid = array_data_1.tradingPairs[m2][0].bid[0] * usdtinr_bid;
        const m3_inr_ask = array_data_1.tradingPairs[m3][0].ask[0] * btcinr_ask;
        const m3_inr_bid = array_data_1.tradingPairs[m3][0].bid[0] * btcinr_bid;
        const m4_inr_ask = array_data_1.tradingPairs[m4][0].ask[0] * wrxinr_ask;
        const m4_inr_bid = array_data_1.tradingPairs[m4][0].bid[0] * wrxinr_bid;
        const m2b_m1a = m2_inr_bid - m1_inr_ask;
        const m1b_m2a = m1_inr_bid - m2_inr_ask;
        const m3b_m1a = m3_inr_bid - m1_inr_ask;
        const m1b_m3a = m1_inr_bid - m3_inr_ask;
        const m4b_m1a = m4_inr_bid - m1_inr_ask;
        const m1b_m4a = m1_inr_bid - m4_inr_ask;
        let largestVariable = 'm2b_m1a';
        let largestValue = m2b_m1a;
        if (m1b_m2a > largestValue) {
            largestValue = m1b_m2a;
            largestVariable = 'm1b_m2a';
        }
        ;
        if (m3b_m1a > largestValue) {
            largestValue = m3b_m1a;
            largestVariable = 'm3b_m1a';
        }
        ;
        if (m1b_m3a > largestValue) {
            largestValue = m1b_m3a;
            largestVariable = 'm1b_m3a';
        }
        ;
        if (m4b_m1a > largestValue) {
            largestValue = m4b_m1a;
            largestVariable = 'm4b_m1a';
        }
        ;
        if (m1b_m4a > largestValue) {
            largestValue = m1b_m4a;
            largestVariable = 'm1b_m4a';
        }
        ;
        if ((largestValue / m1_inr_ask) * 100 > 3.5) {
            if (largestVariable === 'm2b_m1a') {
                tradebss(m1, m2, 'usdtinr');
            }
            ;
            if (largestVariable === 'm1b_m2a') {
                tradebbs(m1, m2, 'usdtinr');
            }
            ;
            if (largestVariable === 'm3b_m1a') {
                tradebss(m1, m3, 'btcinr');
            }
            ;
            if (largestVariable === 'm1b_m3a') {
                tradebbs(m1, m3, 'btcinr');
            }
            ;
            if (largestVariable === 'm4b_m1a') {
                tradebss(m1, m4, 'wrxinr');
            }
            ;
            if (largestVariable === 'm1b_m4a') {
                tradebbs(m1, m4, 'wrxinr');
            }
            ;
        }
        ;
    }
    ;
}
exports.c4 = c4;
;
function tradebss(m1, m2, market) {
    return __awaiter(this, void 0, void 0, function* () {
        const m3 = market;
        const m1_price = array_data_1.tradingPairs[m1][0].ask[0];
        const m2_price = array_data_1.tradingPairs[m2][0].bid[0];
        const m1_quantity = array_data_1.tradingPairs[m1][0].ask[1];
        const m2_quantity = array_data_1.tradingPairs[m2][0].bid[1];
        const m3_price = conversion_values_1.tradingPairs2[m3].bid[0];
        const m3_quantity = conversion_values_1.tradingPairs2[m3].bid[1];
        const min_cost = Math.min(m1_price * m1_quantity, m2_price * m2_quantity * m3_price, m3_price * m3_quantity);
        const m1_buy_quantity = min_cost / m1_price;
        const m2_sell_quantity = min_cost / m2_price / m3_price;
        const m3_sell_quantity = min_cost / m3_quantity;
        buy(m1, m1_price, m1_buy_quantity);
        sell(m2, m2_price, m2_sell_quantity);
        sell(m2, m3_price, m3_sell_quantity);
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
    });
}
exports.tradebss = tradebss;
;
function tradebbs(m1, m2, market) {
    return __awaiter(this, void 0, void 0, function* () {
        const m3 = market;
        const m1_price = array_data_1.tradingPairs[m1][0].bid[0];
        const m2_price = array_data_1.tradingPairs[m2][0].ask[0];
        const m1_quantity = array_data_1.tradingPairs[m1][0].bid[1];
        const m2_quantity = array_data_1.tradingPairs[m2][0].ask[1];
        const m3_price = conversion_values_1.tradingPairs2[m3].ask[0];
        const m3_quantity = conversion_values_1.tradingPairs2[m3].ask[1];
        const min_cost = Math.min(m1_price * m1_quantity, m2_price * m2_quantity * m3_price, m3_price * m3_quantity);
        const m1_sell_quantity = min_cost / m1_price;
        const m2_buy_quantity = min_cost / m2_price / m3_price;
        const m3_buy_quantity = min_cost / m3_quantity;
        buy(m3, m3_price, m3_buy_quantity);
        buy(m2, m2_price, m2_buy_quantity);
        sell(m1, m1_price, m1_sell_quantity);
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
    });
}
exports.tradebbs = tradebbs;
;
// function to place buy order
function buy(symbol, price, quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        const sbuy = 'buy';
        const sPrice = price.toString();
        const sQuantity = quantity.toString();
        // const order = new WazirXOrder(key,secretKey,symbol,'buy',sPrice,sQuantity);
        // const a = await order.placeOrder();
        // if(a=== 1){
        //   return 1;
        // };
        console.log(sbuy, symbol, price, quantity);
        return 1;
    });
}
exports.buy = buy;
;
// function to place sell order
function sell(symbol, price, quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        const ssell = 'sell';
        const sPrice = price.toString();
        const sQuantity = quantity.toString();
        // const order = new WazirXOrder(key,secretKey,symbol,'sell',sPrice,sQuantity);
        // const a = await order.placeOrder();
        // if(a=== 1){
        //  return 1;
        // };
        console.log(ssell, symbol, price, quantity);
        return 1;
    });
}
exports.sell = sell;
;
function setflag() {
    exports.flag = false;
    setTimeout(() => {
        exports.flag = true;
    }, 1000);
}
exports.setflag = setflag;
;
//# sourceMappingURL=array.js.map