
import WebSocket from 'ws';
import {BTC,bidask} from './array';


export class WebSocketClient {
    private ws: WebSocket;
    private endpoint: string = 'wss://stream.wazirx.com/stream';

    constructor(streams: string[]) {
        
        this.ws = new WebSocket(this.endpoint);

        
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

    public sendMessage(message: object): void {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(message));
        } else {
            console.log('WebSocket is not open.');
        }
    }

    public close(): void {
        this.ws.close();
    }
}


export function rawData (data:string){

    let jsonData = data;
    let obj = JSON.parse(jsonData);
    
    let ask = obj.data.a;

    let bid = obj.data.b;

    if (ask!== undefined && bid !== undefined){
        let s = obj.data.s;
        passData(s,ask,bid);
    };

};

export function passData(s: string, a:string[][], b:string[][]){
    let smallBid: bidask={
        ask: a[0].map(Number),
        bid: b[0].map(Number)
    };
    new BTC(s,smallBid);

};
