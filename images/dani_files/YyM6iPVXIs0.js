if (self.CavalryLogger) { CavalryLogger.start_js(["2\/maQ"]); }

__d('Live',['Arbiter','AsyncDOM','AsyncSignal','ChannelConstants','DataStore','DOM','ServerJS','emptyFunction'],(function a(b,c,d,e,f,g){function h(j,k){k=JSON.parse(JSON.stringify(k));new (c('ServerJS'))().setRelativeTo(j).handle(k)}var i={logAll:false,startup:function j(k){i.logAll=k;i.startup=c('emptyFunction');c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('live'),i.handleMessage.bind(i))},lookupLiveNode:function j(k,l){var m=c('DOM').scry(document.body,'.live_'+k+'_'+l);m.forEach(function(n){if(c('DataStore').get(n,'seqnum')===undefined){var o=JSON.parse(n.getAttribute('data-live'));c('DataStore').set(n,'seqnum',o.seq)}});return m},handleMessage:function j(k,l){var m=l.obj,n=m.fbid,o=m.assoc,p=this.lookupLiveNode(n,o);if(!p)return false;p.forEach(function(q){c('AsyncDOM').invoke(m.updates,q);if(m.js)h(q,m.js);})},log:function j(){if(i.logAll){var k=Array.from(arguments).join(':');new (c('AsyncSignal'))('/common/scribe_endpoint.php',{c:'live_sequence',m:k}).send()}}};f.exports=i}),null);