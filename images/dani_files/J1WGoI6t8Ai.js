if (self.CavalryLogger) { CavalryLogger.start_js(["gN8ZX"]); }

__d('SendAPIDialogButton',['Button'],(function a(b,c,d,e,f,g){f.exports={monitor:function h(i){var j=document.getElementsByName('publish')[0],k='TypeaheadBehaviors';Object.assign(window[k]||(window[k]={}),{SendAPIDialogButtonActivate:function l(m){m.subscribe('select',function(){c('Button').setEnabled(j,1)});m.subscribe('blur',function(){var n=i.getTokenValues();c('Button').setEnabled(j,n&&n.length)})}})}}}),null);
__d('UFIAddCommentController',['Parent','React','ReactDOM','UFIAddComment.react','UFIAddCommentActionType','UFIAsyncWrapper','UFICallbackStore','UFICommentEditIDStore','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFINewCommentNotifier'],(function a(b,c,d,e,f,g){'use strict';h.factory=function(j,k){k.rootid=j.id;return new h(j,Object.freeze(k))};function h(j,k){i.call(this);this.$UFIAddCommentController1=j;this.$UFIAddCommentController2=k;this.$UFIAddCommentController3=new (c('UFIDispatcher'))();this.$UFIAddCommentController4={UFICallbackStore:new (c('UFICallbackStore'))(this.$UFIAddCommentController3)};this.$UFIAddCommentController4.UFICallbackStore.on(c('UFIAddCommentActionType').SUBMIT_NEW,function(l){return c('UFINewCommentNotifier').onNewComment(c('Parent').byTag(j,'form'),this.$UFIAddCommentController2,l.comment,l.target,l.replyCommentID,l.timestamp)}.bind(this));this.$UFIAddCommentController5=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);c('UFICommentEditIDStore').addListener(function(){var l=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);if(l!=this.$UFIAddCommentController5){this.$UFIAddCommentController5=l;this.render()}}.bind(this));this.render()}h.prototype.render=function(){var j=c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIAddCommentController3,stores:this.$UFIAddCommentController4},c('React').createElement(c('UFIFeedbackContext.react'),{contextArgs:this.$UFIAddCommentController2,render:this.renderAddComment}));c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,j),this.$UFIAddCommentController1)};h.prototype.disable=function(){this.$UFIAddCommentController4.UFICallbackStore.remove()};var i=function j(){this.renderAddComment=function(k,l){if(this.$UFIAddCommentController5!==null||!l||!l.cancomment||!l.actorforpost)return null;return c('React').createElement(c('UFIAddComment.react'),{viewerActorID:l.actorforpost,targetID:l.ownerid,initialData:null,ref:null,withoutSeparator:false,editingComment:{},isEditing:false,mentionsDataSource:l.mentionsdatasource,showSendOnEnterTip:l.showsendonentertip,multiCompanyGroupsCount:l.multicompanygroupscount,allowPhotoAttachments:l.allowphotoattachments&&!k.islivestreaming,allowVideoAttachments:l.allowvideoattachments&&!k.islivestreaming,allowStickerAttachments:l.allowstickerattachments&&!k.islivestreaming,allowGifAttachments:l.allowgifattachments&&!k.islivestreaming,allowTipJar:Boolean(l.istipjarenabled&&k.islivestreaming),contextArgs:k,subtitle:l.subtitle,isQAndA:l.isqanda,keepFocus:k.islivestreaming})}.bind(this)};f.exports=h}),null);
__d('LitestandLinkHider',['DataStore','DOMQuery','Event','Parent','UserAgent_DEPRECATED'],(function a(b,c,d,e,f,g){'use strict';function h(event){var j=event.getTarget(),k=c('Parent').byTag(j,'a');if(!(k instanceof HTMLAnchorElement))return;if(event.type==='mouseover'){c('DataStore').set(k,'href',k.href);k.removeAttribute('href')}else{k.href=c('DataStore').get(k,'href')||k.href;if(event.type==='mouseout')c('DataStore').remove(k,'href');}}var i={hideLinks:function j(k){if(c('UserAgent_DEPRECATED').chrome()||c('UserAgent_DEPRECATED').ie()>=9||c('UserAgent_DEPRECATED').opera())c('Event').listen(k,{mouseover:h,mouseout:h,mousedown:h});},removeAllHrefs:function j(k){var l=arguments.length<=1||arguments[1]===undefined?null:arguments[1],m=c('DOMQuery').scry(k,'a');m.forEach(function(n){if(l&&l.length&&l.some(function(o){return n.hasAttribute(o)}))return;n.removeAttribute('href');n.removeAttribute('ajaxify');n.removeAttribute('rel');n.setAttribute('tabindex',0)})},removeClickable:function j(k,l){i.removeAllHrefs(k);var m=c('DOMQuery').scry(k,'.'+l+' a');m.forEach(function(n){n.removeAttribute('onclick');n.removeAttribute('onmouseover')})}};f.exports=i}),null);
__d('TagTypeaheadView',['AsyncRequest','ContextualTypeaheadView','CSS','DOM','FamilyTaggingConfig','Parent'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('ContextualTypeaheadView'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this,k,l);this.hintText=l.hintText;this.userEd=l.userEd;this.origAutoSelect=l.autoSelect;this.setSuggestions(l.suggestions)}j.prototype.init=function(){'use strict';c('CSS').addClass(this.element,'uiTagTypeaheadView');i.init.call(this)};j.prototype.buildResults=function(k){'use strict';if(!this.value&&this.hintText)k.unshift({subtext:this.hintText,type:'hintText'});if(this.userEd){new (c('AsyncRequest'))().setURI('/ajax/fof/user_education.php').setData({increment:1}).send();k.unshift({subtext:this.userEd,type:'userEdText'})}if(c('FamilyTaggingConfig').gk){var l=[],m=[];for(var n=0;n<k.length;n++)if(k[n].type!=='family_tags'&&k[n].index!=-1000&&k[n].type!=='hintText'){l.push(k[n])}else m.push(k[n]);k=m.concat(l);i.updateResults.call(this,k)}var o=i.buildResults.call(this,k);if(this.userEd)k.shift();if(!this.value)k.shift();return o};j.prototype.show=function(){'use strict';var k=c('DOM').scry(this.context,'.typeaheadBackdrop');if(k.length>0)c('CSS').addClass(k[0],'resultsPresent');return i.show.call(this)};j.prototype.hide=function(){'use strict';var k=c('DOM').scry(this.context,'.typeaheadBackdrop');if(k.length>0)c('CSS').removeClass(k[0],'resultsPresent');return i.hide.call(this)};j.prototype.render=function(k,l,m){'use strict';this.autoSelect=this.origAutoSelect&&k.length;this.disableAutoSelect=k.length===0;l=l.concat(this.getAdditionalResults());i.render.call(this,k,l,m)};j.prototype.getItems=function(){'use strict';var k=i.getItems.call(this);if(!this.value)k.shift();if(this.userEd)k.shift();return k};j.prototype.getSuggestions=function(){'use strict';return this.suggestions};j.prototype.setSuggestions=function(k){'use strict';this.suggestions=k?k.map(String):[];this.visible=!!this.suggestions.length};j.prototype.addSuggestion=function(k){'use strict';this.suggestions.unshift(k)};j.prototype.addTypeaheadFlip=function(k){'use strict';c('CSS').addClass(this.element,k)};j.prototype.removeTypeaheadFlip=function(k){'use strict';c('CSS').removeClass(this.element,k)};j.prototype.getContext=function(){'use strict';var k=c('Parent').byClass(this.element,'typeaheadContainer');if(k){return k}else return i.getContext.call(this);};j.prototype.getAdditionalResults=function(){'use strict';return []};f.exports=j}),null);
__d('DisablePlatformButton',['ge','CSS','Event'],(function a(b,c,d,e,f,g){var h=false,i={init:function j(k){for(var l=0;l<k.length;l++){var m=c('ge')(k[l]);c('Event').listen(m,'click',function(n){if(h){return false}else{h=true;for(var o=0;o<k.length;o++)c('CSS').addClass(k[o],'uiButtonDisabled');}})}}};f.exports=i}),null);
__d('TypeaheadHintText',['emptyFunction'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._typeahead=i}h.prototype.enable=function(){'use strict';this._typeahead.getCore().resetOnKeyup=false};Object.assign(h.prototype,{disable:c('emptyFunction')});f.exports=h}),null);
__d('legacy:HintTextTypeaheadBehavior',['TypeaheadHintText'],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.hintText=function(h){h.enableBehavior(c('TypeaheadHintText'))}}),3);