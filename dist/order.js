"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WazirXOrder = void 0;
const axios_1 = __importDefault(require("axios"));
const crypto = __importStar(require("crypto"));
class WazirXOrder {
    constructor(apiKey, apiSecret, symbol, side, price, quantity) {
        this.type = 'limit';
        this.recvWindow = 5000;
        this.clientOrderId = 'clientOrderIdSample123'; // optional
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.symbol = symbol;
        this.side = side;
        this.price = price;
        this.quantity = quantity;
        this.timestamp = Date.now();
    }
    generateSignature(queryString) {
        return crypto.createHmac('sha256', this.apiSecret).update(queryString).digest('hex');
    }
    placeOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = `symbol=${this.symbol}&side=${this.side}&type=${this.type}&price=${this.price}&quantity=${this.quantity}&recvWindow=${this.recvWindow}&timestamp=${this.timestamp}`;
            const signature = this.generateSignature(queryString);
            const orderData = {
                symbol: this.symbol,
                side: this.side,
                type: this.type,
                price: this.price,
                quantity: this.quantity,
                recvWindow: this.recvWindow,
                timestamp: this.timestamp,
                signature: signature,
                clientOrderId: this.clientOrderId
            };
            const headers = {
                'X-Api-Key': this.apiKey,
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            try {
                const response = yield axios_1.default.post('https://api.wazirx.com/sapi/v1/order', new URLSearchParams(orderData).toString(), { headers });
                console.log('Order placed successfully:', response.data);
                return 1;
            }
            catch (error) {
                console.error('Error placing order:', error);
            }
        });
    }
}
exports.WazirXOrder = WazirXOrder;
//# sourceMappingURL=order.js.map