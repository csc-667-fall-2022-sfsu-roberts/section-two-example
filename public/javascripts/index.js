(()=>{var Ae=Object.defineProperty;var _e=(s,e)=>{for(var t in e)Ae(s,t,{get:e[t],enumerable:!0})};var d=Object.create(null);d.open="0";d.close="1";d.ping="2";d.pong="3";d.message="4";d.upgrade="5";d.noop="6";var T=Object.create(null);Object.keys(d).forEach(s=>{T[d[s]]=s});var ee={type:"error",data:"parser error"};var Te=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Re=typeof ArrayBuffer=="function",Oe=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Be=({type:s,data:e},t,r)=>Te&&e instanceof Blob?t?r(e):te(e,r):Re&&(e instanceof ArrayBuffer||Oe(e))?t?r(e):te(new Blob([e]),r):r(d[s]+(e||"")),te=(s,e)=>{let t=new FileReader;return t.onload=function(){let r=t.result.split(",")[1];e("b"+r)},t.readAsDataURL(s)},q=Be;var se="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",R=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<se.length;s++)R[se.charCodeAt(s)]=s;var re=s=>{let e=s.length*.75,t=s.length,r,i=0,n,o,a,m;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);let A=new ArrayBuffer(e),w=new Uint8Array(A);for(r=0;r<t;r+=4)n=R[s.charCodeAt(r)],o=R[s.charCodeAt(r+1)],a=R[s.charCodeAt(r+2)],m=R[s.charCodeAt(r+3)],w[i++]=n<<2|o>>4,w[i++]=(o&15)<<4|a>>2,w[i++]=(a&3)<<6|m&63;return A};var Ce=typeof ArrayBuffer=="function",Se=(s,e)=>{if(typeof s!="string")return{type:"message",data:ie(s,e)};let t=s.charAt(0);return t==="b"?{type:"message",data:Ne(s.substring(1),e)}:T[t]?s.length>1?{type:T[t],data:s.substring(1)}:{type:T[t]}:ee},Ne=(s,e)=>{if(Ce){let t=re(s);return ie(t,e)}else return{base64:!0,data:s}},ie=(s,e)=>{switch(e){case"blob":return s instanceof ArrayBuffer?new Blob([s]):s;case"arraybuffer":default:return s}},D=Se;var ne=String.fromCharCode(30),oe=(s,e)=>{let t=s.length,r=new Array(t),i=0;s.forEach((n,o)=>{q(n,!1,a=>{r[o]=a,++i===t&&e(r.join(ne))})})},ce=(s,e)=>{let t=s.split(ne),r=[];for(let i=0;i<t.length;i++){let n=D(t[i],e);if(r.push(n),n.type==="error")break}return r},Y=4;function h(s){if(s)return Le(s)}function Le(s){for(var e in h.prototype)s[e]=h.prototype[e];return s}h.prototype.on=h.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};h.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};h.prototype.off=h.prototype.removeListener=h.prototype.removeAllListeners=h.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var r,i=0;i<t.length;i++)if(r=t[i],r===e||r.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+s],this};h.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,i=t.length;r<i;++r)t[r].apply(this,e)}return this};h.prototype.emitReserved=h.prototype.emit;h.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};h.prototype.hasListeners=function(s){return!!this.listeners(s).length};var p=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function I(s,...e){return e.reduce((t,r)=>(s.hasOwnProperty(r)&&(t[r]=s[r]),t),{})}var Pe=setTimeout,qe=clearTimeout;function y(s,e){e.useNativeTimers?(s.setTimeoutFn=Pe.bind(p),s.clearTimeoutFn=qe.bind(p)):(s.setTimeoutFn=setTimeout.bind(p),s.clearTimeoutFn=clearTimeout.bind(p))}var De=1.33;function he(s){return typeof s=="string"?Ie(s):Math.ceil((s.byteLength||s.size)*De)}function Ie(s){let e=0,t=0;for(let r=0,i=s.length;r<i;r++)e=s.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}var z=class extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}},g=class extends h{constructor(e){super(),this.writable=!1,y(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,t,r){return super.emitReserved("error",new z(e,t,r)),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){let t=D(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}};var pe="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),W=64,Fe={},ae=0,F=0,fe;function le(s){let e="";do e=pe[s%W]+e,s=Math.floor(s/W);while(s>0);return e}function V(){let s=le(+new Date);return s!==fe?(ae=0,fe=s):s+"."+le(ae++)}for(;F<W;F++)Fe[pe[F]]=F;function M(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function ue(s){let e={},t=s.split("&");for(let r=0,i=t.length;r<i;r++){let n=t[r].split("=");e[decodeURIComponent(n[0])]=decodeURIComponent(n[1])}return e}var de=!1;try{de=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}var me=de;function X(s){let e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||me))return new XMLHttpRequest}catch{}if(!e)try{return new p[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Ve(){}var Me=function(){return new X({xdomain:!1}).responseType!=null}(),U=class extends g{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){let r=location.protocol==="https:",i=location.port;i||(i=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port,this.xs=e.secure!==r}let t=e&&e.forceBase64;this.supportsBinary=Me&&!t}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";let t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){let t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};ce(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){let e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,oe(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{},t=this.opts.secure?"https":"http",r="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=V()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port);let i=M(e),n=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(n?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(i.length?"?"+i:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new u(this.uri(),e)}doWrite(e,t){let r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(i,n)=>{this.onError("xhr post error",i,n)})}doPoll(){let e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}},u=class extends h{constructor(e,t){super(),y(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){let e=I(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;let t=this.xhr=new X(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let r in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&t.setRequestHeader(r,this.opts.extraHeaders[r])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(r){this.setTimeoutFn(()=>{this.onError(r)},0);return}typeof document<"u"&&(this.index=u.requestsCount++,u.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Ve,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete u.requests[this.index],this.xhr=null}}onLoad(){let e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}};u.requestsCount=0;u.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",ye);else if(typeof addEventListener=="function"){let s="onpagehide"in p?"pagehide":"unload";addEventListener(s,ye,!1)}}function ye(){for(let s in u.requests)u.requests.hasOwnProperty(s)&&u.requests[s].abort()}var O=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),B=p.WebSocket||p.MozWebSocket,H=!0,ge="arraybuffer";var be=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative",K=class extends g{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;let e=this.uri(),t=this.opts.protocols,r=be?{}:I(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=H&&!be?t?new B(e,t):new B(e):new B(e,t,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType||ge,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let r=e[t],i=t===e.length-1;q(r,this.supportsBinary,n=>{let o={};H||(r.options&&(o.compress=r.options.compress),this.opts.perMessageDeflate&&(typeof n=="string"?Buffer.byteLength(n):n.length)<this.opts.perMessageDeflate.threshold&&(o.compress=!1));try{H?this.ws.send(n):this.ws.send(n,o)}catch{}i&&O(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{},t=this.opts.secure?"wss":"ws",r="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=V()),this.supportsBinary||(e.b64=1);let i=M(e),n=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(n?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(i.length?"?"+i:"")}check(){return!!B}};var $={websocket:K,polling:U};var Ue=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,He=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function k(s){let e=s,t=s.indexOf("["),r=s.indexOf("]");t!=-1&&r!=-1&&(s=s.substring(0,t)+s.substring(t,r).replace(/:/g,";")+s.substring(r,s.length));let i=Ue.exec(s||""),n={},o=14;for(;o--;)n[He[o]]=i[o]||"";return t!=-1&&r!=-1&&(n.source=e,n.host=n.host.substring(1,n.host.length-1).replace(/;/g,":"),n.authority=n.authority.replace("[","").replace("]","").replace(/;/g,":"),n.ipv6uri=!0),n.pathNames=Ke(n,n.path),n.queryKey=Ye(n,n.query),n}function Ke(s,e){let t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Ye(s,e){let t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,n){i&&(t[i]=n)}),t}var f=class extends h{constructor(e,t={}){super(),e&&typeof e=="object"&&(t=e,e=null),e?(e=k(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=k(t.host).host),y(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=ue(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){let t=Object.assign({},this.opts.query);t.EIO=Y,t.transport=e,this.id&&(t.sid=this.id);let r=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new $[e](r)}open(){let e;if(this.opts.rememberUpgrade&&f.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),r=!1;f.priorWebsocketSuccess=!1;let i=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",v=>{if(!r)if(v.type==="pong"&&v.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;f.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(w(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{let _=new Error("probe error");_.transport=t.name,this.emitReserved("upgradeError",_)}}))};function n(){r||(r=!0,w(),t.close(),t=null)}let o=v=>{let _=new Error("probe error: "+v);_.transport=t.name,n(),this.emitReserved("upgradeError",_)};function a(){o("transport closed")}function m(){o("socket closed")}function A(v){t&&v.name!==t.name&&n()}let w=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",m),this.off("upgrading",A)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",m),this.once("upgrading",A),t.open()}onOpen(){if(this.readyState="open",f.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let e=0,t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":let t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){let i=this.writeBuffer[r].data;if(i&&(t+=he(i)),r>0&&t>this.maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}write(e,t,r){return this.sendPacket("message",e,t,r),this}send(e,t,r){return this.sendPacket("message",e,t,r),this}sendPacket(e,t,r,i){if(typeof t=="function"&&(i=t,t=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;let n={type:e,data:t,options:r};this.emitReserved("packetCreate",n),this.writeBuffer.push(n),i&&this.once("flush",i),this.flush()}close(){let e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}onError(e){f.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){let t=[],r=0,i=e.length;for(;r<i;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}};f.protocol=Y;var Qt=f.protocol;function we(s,e="",t){let r=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),r=k(s)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";let n=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+n+":"+r.port+e,r.href=r.protocol+"://"+n+(t&&t.port===r.port?"":":"+r.port),r}var j={};_e(j,{Decoder:()=>N,Encoder:()=>Q,PacketType:()=>c,protocol:()=>xe});var ze=typeof ArrayBuffer=="function",We=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,ve=Object.prototype.toString,Xe=typeof Blob=="function"||typeof Blob<"u"&&ve.call(Blob)==="[object BlobConstructor]",$e=typeof File=="function"||typeof File<"u"&&ve.call(File)==="[object FileConstructor]";function S(s){return ze&&(s instanceof ArrayBuffer||We(s))||Xe&&s instanceof Blob||$e&&s instanceof File}function C(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,r=s.length;t<r;t++)if(C(s[t]))return!0;return!1}if(S(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return C(s.toJSON(),!0);for(let t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&C(s[t]))return!0;return!1}function ke(s){let e=[],t=s.data,r=s;return r.data=J(t,e),r.attachments=e.length,{packet:r,buffers:e}}function J(s,e){if(!s)return s;if(S(s)){let t={_placeholder:!0,num:e.length};return e.push(s),t}else if(Array.isArray(s)){let t=new Array(s.length);for(let r=0;r<s.length;r++)t[r]=J(s[r],e);return t}else if(typeof s=="object"&&!(s instanceof Date)){let t={};for(let r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=J(s[r],e));return t}return s}function Ee(s,e){return s.data=G(s.data,e),s.attachments=void 0,s}function G(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=G(s[t],e);else if(typeof s=="object")for(let t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=G(s[t],e));return s}var xe=5,c;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(c||(c={}));var Q=class{constructor(e){this.replacer=e}encode(e){return(e.type===c.EVENT||e.type===c.ACK)&&C(e)?(e.type=e.type===c.EVENT?c.BINARY_EVENT:c.BINARY_ACK,this.encodeAsBinary(e)):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===c.BINARY_EVENT||e.type===c.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){let t=ke(e),r=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(r),i}},N=class extends h{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e),t.type===c.BINARY_EVENT||t.type===c.BINARY_ACK?(this.reconstructor=new Z(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(S(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0,r={type:Number(e.charAt(0))};if(c[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===c.BINARY_EVENT||r.type===c.BINARY_ACK){let n=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);let o=e.substring(n,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");r.attachments=Number(o)}if(e.charAt(t+1)==="/"){let n=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(n,t)}else r.nsp="/";let i=e.charAt(t+1);if(i!==""&&Number(i)==i){let n=t+1;for(;++t;){let o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}r.id=Number(e.substring(n,t+1))}if(e.charAt(++t)){let n=this.tryParse(e.substr(t));if(N.isPayloadValid(r.type,n))r.data=n;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case c.CONNECT:return typeof t=="object";case c.DISCONNECT:return t===void 0;case c.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case c.EVENT:case c.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case c.ACK:case c.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}},Z=class{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){let t=Ee(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function l(s,e,t){return s.on(e,t),function(){s.off(e,t)}}var Je=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),E=class extends h{constructor(e,t,r){super(),this.connected=!1,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let e=this.io;this.subs=[l(e,"open",this.onopen.bind(this)),l(e,"packet",this.onpacket.bind(this)),l(e,"error",this.onerror.bind(this)),l(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(Je.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');t.unshift(e);let r={type:c.EVENT,data:t};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){let o=this.ids++,a=t.pop();this._registerAckCallback(o,a),r.id=o}let i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(e,t){let r=this.flags.timeout;if(r===void 0){this.acks[e]=t;return}let i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let n=0;n<this.sendBuffer.length;n++)this.sendBuffer[n].id===e&&this.sendBuffer.splice(n,1);t.call(this,new Error("operation has timed out"))},r);this.acks[e]=(...n)=>{this.io.clearTimeoutFn(i),t.apply(this,[null,...n])}}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this.packet({type:c.CONNECT,data:e})}):this.packet({type:c.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case c.CONNECT:if(e.data&&e.data.sid){let i=e.data.sid;this.onconnect(i)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case c.EVENT:case c.BINARY_EVENT:this.onevent(e);break;case c.ACK:case c.BINARY_ACK:this.onack(e);break;case c.DISCONNECT:this.ondisconnect();break;case c.CONNECT_ERROR:this.destroy();let r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){let t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){let t=this._anyListeners.slice();for(let r of t)r.apply(this,e)}super.emit.apply(this,e)}ack(e){let t=this,r=!1;return function(...i){r||(r=!0,t.packet({type:c.ACK,id:e,data:i}))}}onack(e){let t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:c.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){let t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){let t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let t=this._anyOutgoingListeners.slice();for(let r of t)r.apply(this,e.data)}}};function b(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}b.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};b.prototype.reset=function(){this.attempts=0};b.prototype.setMin=function(s){this.ms=s};b.prototype.setMax=function(s){this.max=s};b.prototype.setJitter=function(s){this.jitter=s};var x=class extends h{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,y(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new b({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;let i=t.parser||j;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new f(this.uri,this.opts);let t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;let i=l(t,"open",function(){r.onopen(),e&&e()}),n=l(t,"error",o=>{r.cleanup(),r._readyState="closed",this.emitReserved("error",o),e?e(o):r.maybeReconnectOnOpen()});if(this._timeout!==!1){let o=this._timeout;o===0&&i();let a=this.setTimeoutFn(()=>{i(),t.close(),t.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(i),this.subs.push(n),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");let e=this.engine;this.subs.push(l(e,"ping",this.onping.bind(this)),l(e,"data",this.ondata.bind(this)),l(e,"error",this.onerror.bind(this)),l(e,"close",this.onclose.bind(this)),l(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){O(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r||(r=new E(this,e,t),this.nsps[e]=r),r}_destroy(e){let t=Object.keys(this.nsps);for(let r of t)if(this.nsps[r].active)return;this._close()}_packet(e){let t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{let t=this.backoff.duration();this._reconnecting=!0;let r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(function(){clearTimeout(r)})}}onreconnect(){let e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}};var L={};function P(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};let t=we(s,e.path||"/socket.io"),r=t.source,i=t.id,n=t.path,o=L[i]&&n in L[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o,m;return a?m=new x(r,e):(L[i]||(L[i]=new x(r,e)),m=L[i]),t.query&&!e.query&&(e.query=t.queryKey),m.socket(t.path,e)}Object.assign(P,{Manager:x,Socket:E,io:P,connect:P});var Cs=P();console.log("Games js loaded");fetch(`${window.location.pathname}/info`,{method:"post"}).then(s=>s.json()).then(({game_id:s})=>{console.log("Posted to info; ",{game_id:s})}).catch(s=>console.log(s));console.log("After Games js loaded");})();
//# sourceMappingURL=index.js.map
