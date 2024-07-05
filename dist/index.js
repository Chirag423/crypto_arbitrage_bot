"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const websocket_1 = require("./websocket");
const websocket2_1 = require("./websocket2");
const stream2 = ['usdtinr@depth', 'btcinr@depth', 'wrxinr@depth'];
const streams = ['xrpinr@depth', 'xrpusdt@depth', 'xrpbtc@depth', 'xrpwrx@depth', 'shibinr@depth', 'shibusdt@depth', 'shibwrx@depth', 'trxinr@depth', 'trxusdt@depth', 'trxbtc@depth', 'trxwrx@depth'];
new websocket2_1.WebSocketClient2(stream2);
setInterval(() => {
    new websocket2_1.WebSocketClient2(stream2);
}, 1801000);
setTimeout(() => {
    new websocket_1.WebSocketClient(streams);
    setInterval(() => {
        new websocket_1.WebSocketClient(streams);
    }, 1801000);
}, 5000);
//# sourceMappingURL=index.js.map