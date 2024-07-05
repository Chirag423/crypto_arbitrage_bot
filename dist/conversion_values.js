"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.BTC2 = exports.tradingPairs2 = void 0;
exports.tradingPairs2 = {
    usdtinr: { bid: [0, 0], ask: [0, 0] },
    btcinr: { bid: [0, 0], ask: [0, 0] },
    wrxinr: { bid: [0, 0], ask: [0, 0] }
};
class BTC2 {
    constructor(m, data) {
        if (data.bid[0] !== exports.tradingPairs2[m].bid[0] || data.ask[0] !== exports.tradingPairs2[m].ask[0]) {
            update(m, data);
        }
        ;
    }
}
exports.BTC2 = BTC2;
;
//function to update array
function update(u, udata) {
    exports.tradingPairs2[u] = udata;
}
exports.update = update;
;
//# sourceMappingURL=conversion_values.js.map