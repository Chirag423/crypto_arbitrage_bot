import { WebSocketClient } from "./websocket";
import { WebSocketClient2 } from "./websocket2";

const stream2 = ['usdtinr@depth','btcinr@depth','wrxinr@depth'];

const streams = ['xrpinr@depth','xrpusdt@depth','xrpbtc@depth','xrpwrx@depth','shibinr@depth','shibusdt@depth','shibwrx@depth','trxinr@depth','trxusdt@depth','trxbtc@depth','trxwrx@depth'];

new WebSocketClient2(stream2) ;
setInterval(()=>{
    new WebSocketClient2(stream2) ;
},1801000);

setTimeout(()=> {

    new WebSocketClient(streams);
    
    setInterval(()=>{

        new WebSocketClient(streams);

    },1801000);

}, 5000);
