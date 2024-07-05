"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passData = exports.rawData = exports.WebSocketClient2 = void 0;
const ws_1 = __importDefault(require("ws"));
const conversion_values_1 = require("./conversion_values");
class WebSocketClient2 {
    constructor(streams) {
        this.endpoint = 'wss://stream.wazirx.com/stream';
        this.ws = new ws_1.default(this.endpoint);
        this.ws.on('open', () => {
            console.log('Connected to the server.');
            const message = {
                event: 'subscribe',
                streams: streams
            };
            this.ws.send(JSON.stringify(message));
        });
        this.ws.on('message', (data) => {
            //console.log(data.toString());
            let rData = data.toString();
            rawData(rData);
        });
        this.ws.on('error', (error) => {
            console.error('WebSocket error:', error);
        });
        this.ws.on('close', () => {
            console.log('WebSocket connection closed.');
        });
    }
    sendMessage(message) {
        if (this.ws.readyState === ws_1.default.OPEN) {
            this.ws.send(JSON.stringify(message));
        }
        else {
            console.log('WebSocket is not open.');
        }
    }
    close() {
        this.ws.close();
    }
}
exports.WebSocketClient2 = WebSocketClient2;
function rawData(data) {
    let jsonData = data;
    let obj = JSON.parse(jsonData);
    let ask = obj.data.a;
    let bid = obj.data.b;
    if (ask !== undefined && bid !== undefined) {
        let s = obj.data.s;
        passData(s, ask, bid);
    }
    ;
}
exports.rawData = rawData;
;
function passData(s, a, b) {
    let smallBid = {
        ask: a[0].map(Number),
        bid: b[0].map(Number)
    };
    new conversion_values_1.BTC2(s, smallBid);
}
exports.passData = passData;
;
//# sourceMappingURL=websocket2.js.map