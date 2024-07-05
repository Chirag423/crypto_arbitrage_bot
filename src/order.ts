import axios from 'axios';
import * as crypto from 'crypto';


export class WazirXOrder {
    private apiKey: string;
    private apiSecret: string;
    private symbol: string;
    private side: string;
    private type: string = 'limit';
    private price: string;
    private quantity: string;
    private recvWindow: number = 5000;
    private timestamp: number;
    private clientOrderId: string = 'clientOrderIdSample123'; // optional
  
    constructor(apiKey: string, apiSecret: string, symbol: string, side: string, price: string, quantity: string) {
      this.apiKey = apiKey;
      this.apiSecret = apiSecret;
      this.symbol = symbol;
      this.side = side;
      this.price = price;
      this.quantity = quantity;
      this.timestamp = Date.now();
    }
  
    private generateSignature(queryString: string): string {
      return crypto.createHmac('sha256', this.apiSecret).update(queryString).digest('hex');
    }
  
    public async placeOrder() {
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
        const response = await axios.post('https://api.wazirx.com/sapi/v1/order', new URLSearchParams(orderData as any).toString(), { headers });
        console.log('Order placed successfully:', response.data);
        return 1;
      } catch (error) {
        console.error('Error placing order:', error);
      }
    }
  }