if (self.CavalryLogger) { CavalryLogger.start_js(["7pKvI"]); }

__d('EventWatchStatusSelector',['csx','DOM','DOMQuery','Event','CSS'],(function a(b,c,d,e,f,g,h){function i(j){'use strict';this.$EventWatchStatusSelector1=j.primaryButton;this.$EventWatchStatusSelector2=j.menuElement;this.$EventWatchStatusSelector3=j.initialStatus;var k=j.menuInstance.getTriggerElem();this.$EventWatchStatusSelector4=c('DOMQuery').find(k,"._33n");this.$EventWatchStatusSelector5=c('DOMQuery').find(k,"._33o");c('Event').listen(j.primaryButton,'click',function(){this.$EventWatchStatusSelector3=j.primaryStatus;this.$EventWatchStatusSelector6();this.$EventWatchStatusSelector7()}.bind(this));j.menuInstance.subscribe('setMenu',function(){var l=j.menuInstance.getMenu().getRoot();this.$EventWatchStatusSelector8=c('DOMQuery').find(l,"._33q");this.$EventWatchStatusSelector9=c('DOMQuery').find(l,"._33u");this.$EventWatchStatusSelector10=c('DOMQuery').find(l,"._33v");this.$EventWatchStatusSelector11=c('DOMQuery').find(l,"._33z");this.$EventWatchStatusSelector12=c('DOMQuery').scry(l,"._33-")[0];this.$EventWatchStatusSelector13=c('DOMQuery').scry(l,"._33_")[0];this.$EventWatchStatusSelector7();j.menuInstance.getMenu().subscribe('itemclick',function(m,n){var o=n.item.getRoot().getAttribute('data-string');if(o==='watched-selected'||o==='going-selected')return;this.$EventWatchStatusSelector3=o;setTimeout(this.$EventWatchStatusSelector7.bind(this));if(this.$EventWatchStatusSelector3==='unwatched')this.$EventWatchStatusSelector14();}.bind(this))}.bind(this))}i.prototype.$EventWatchStatusSelector14=function(){'use strict';c('DOM').insertAfter(this.$EventWatchStatusSelector2,this.$EventWatchStatusSelector1);c('DOM').remove(this.$EventWatchStatusSelector2)};i.prototype.$EventWatchStatusSelector6=function(){'use strict';c('DOM').insertAfter(this.$EventWatchStatusSelector1,this.$EventWatchStatusSelector2);c('DOM').remove(this.$EventWatchStatusSelector1)};i.prototype.$EventWatchStatusSelector7=function(){'use strict';if(this.$EventWatchStatusSelector4)c('CSS').conditionShow(this.$EventWatchStatusSelector4,this.$EventWatchStatusSelector3==='going');if(this.$EventWatchStatusSelector5)c('CSS').conditionShow(this.$EventWatchStatusSelector5,this.$EventWatchStatusSelector3==='watched');if(this.$EventWatchStatusSelector8)c('CSS').conditionShow(this.$EventWatchStatusSelector8,this.$EventWatchStatusSelector3!=='going');if(this.$EventWatchStatusSelector9)c('CSS').conditionShow(this.$EventWatchStatusSelector9,this.$EventWatchStatusSelector3==='going');if(this.$EventWatchStatusSelector10)c('CSS').conditionShow(this.$EventWatchStatusSelector10,this.$EventWatchStatusSelector3!=='watched');if(this.$EventWatchStatusSelector11)c('CSS').conditionShow(this.$EventWatchStatusSelector11,this.$EventWatchStatusSelector3==='watched');if(this.$EventWatchStatusSelector12)c('CSS').conditionShow(this.$EventWatchStatusSelector12,this.$EventWatchStatusSelector3==='going');if(this.$EventWatchStatusSelector13)c('CSS').conditionShow(this.$EventWatchStatusSelector13,this.$EventWatchStatusSelector3==='watched');};f.exports=i}),null);
__d("XAdPreferencesTessaSurveyController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ads\/preferences\/survey\/",{entry_product:{type:"String"}})}),null);