if (self.CavalryLogger) { CavalryLogger.start_js(["nbQL1"]); }

__d('GroupSellProductDetailActionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear()}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:GroupSellProductDetailActionsLoggerConfig',this.$GroupSellProductDetailActionsTypedLogger1,c('Banzai').BASIC)};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:GroupSellProductDetailActionsLoggerConfig',this.$GroupSellProductDetailActionsTypedLogger1,c('Banzai').VITAL)};h.prototype.clear=function(){this.$GroupSellProductDetailActionsTypedLogger1={};return this};h.prototype.updateData=function(j){this.$GroupSellProductDetailActionsTypedLogger1=babelHelpers['extends']({},this.$GroupSellProductDetailActionsTypedLogger1,j);return this};h.prototype.setClientTimeStr=function(j){this.$GroupSellProductDetailActionsTypedLogger1.client_time_str=j;return this};h.prototype.setEvent=function(j){this.$GroupSellProductDetailActionsTypedLogger1.event=j;return this};h.prototype.setExceptionMessage=function(j){this.$GroupSellProductDetailActionsTypedLogger1.exception_message=j;return this};h.prototype.setGroupID=function(j){this.$GroupSellProductDetailActionsTypedLogger1.group_id=j;return this};h.prototype.setIsEmployee=function(j){this.$GroupSellProductDetailActionsTypedLogger1.is_employee=j;return this};h.prototype.setReferralSurface=function(j){this.$GroupSellProductDetailActionsTypedLogger1.referral_surface=j;return this};h.prototype.setStoryID=function(j){this.$GroupSellProductDetailActionsTypedLogger1.story_id=j;return this};h.prototype.setSurface=function(j){this.$GroupSellProductDetailActionsTypedLogger1.surface=j;return this};h.prototype.setVC=function(j){this.$GroupSellProductDetailActionsTypedLogger1.vc=j;return this};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$GroupSellProductDetailActionsTypedLogger1=babelHelpers['extends']({},this.$GroupSellProductDetailActionsTypedLogger1,j);return this};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l)};var i={client_time_str:true,event:true,exception_message:true,group_id:true,is_employee:true,referral_surface:true,story_id:true,surface:true,vc:true};f.exports=h}),null);
__d("GroupSellProductDetailsEvent",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({PHOTO_CLICK:"photo_click",SHOW_DIALOG:"show_dialog",HIDE_DIALOG:"hide_dialog",PROFILE_LINK_CLICK:"profile_link_click",GROUP_LINK_CLICK:"group_link_click",PERMALINK_CLICK:"permalink_click",ASYNC_DATA_REQUEST_FAIL:"async_data_request_fail",DIALOG_INSTANCE_NULL:"dialog_instance_null",MESSAGE_SELLER_CLICK:"message_seller_click",UFI_CLICK:"ufi_click",MARK_AS_SOLD_CLICK:"mark_as_sold_click",FAILED_SALE_POST_GEN:"failed_sale_post_gen",PHOTO_SWIPE:"photo_swipe",GROUP_POST_LIKE:"group_post_like",GROUP_POST_COMMENT:"group_post_comment",SUGGESTED_ITEM_VPV:"suggested_item_vpv",SUGGESTED_ITEM_CLICK:"suggested_item_click",GROUP_POST_COMMENT_ERROR:"group_post_comment_error",GROUP_POST_COMMENT_TEXT_ENTERED:"group_post_comment_text_entered",GROUP_POST_COMMENT_INPUT_FOCUS:"group_post_comment_input_focus",GROUP_POST_COMMENT_WITH_PHOTO:"group_post_comment_with_photo",GROUP_POST_COMMENT_WITH_STICKER:"group_post_comment_with_sticker",GROUP_POST_COMMENT_INPUT_PREDICTIVE_TEXT_PRESS:"group_post_comment_input_predictive_text_press",GROUP_POST_SHARE_CLICK:"group_post_share_click",PDP_INITIAL_LOAD:"pdp_initial_load",PDP_NETWORK_FAILURE:"pdp_network_failure",PDP_RECOMMENDED_ITEMS_GRID_SEE_ALL_PRESS:"pdp_recommended_items_grid_see_all_press",PDP_RECOMMENDED_ITEMS_GRID_ITEM_PRESS:"pdp_recommended_items_grid_item_press",PDP_RECOMMENDED_ITEMS_HSCROLL_SEE_ALL_PRESS:"pdp_recommended_items_hscroll_see_all_press",PDP_RECOMMENDED_ITEMS_HSCROLL_ITEM_PRESS:"pdp_recommended_items_hscroll_item_press"})}),null);
__d("GroupSellProductDetailsImageAspect",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({HORIZONTAL:"horizontal",VERTICAL:"vertical",WIDE_HORIZONTAL:"wide_horizontal",WIDE_VERTICAL:"wide_vertical",SQUARE:"square",HEIGHT_BOUND:"height_bound"})}),null);
__d('GroupCommerceProductDetailImageContainer.react',['cx','DOM','Event','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','GroupSellProductDetailsImageAspect','Image.react','React','ScrollableArea.react','Style','Vector'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=38,l=483;i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;function m(n,o){j.constructor.call(this,n,o);this.$GroupCommerceProductDetailImageContainer6=function(event){var p=event.target;if(p.nodeName==='INPUT'||p.nodeName==='TEXTAREA')return;while(p){if(p.id===this.props.ufiID)return;p=p.parentElement}switch(event.keyCode){case 37:case 38:event.stopPropagation();this.$GroupCommerceProductDetailImageContainer9();break;case 39:case 40:event.stopPropagation();this.$GroupCommerceProductDetailImageContainer10();break;}}.bind(this);this.$GroupCommerceProductDetailImageContainer11=function(p){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').PHOTO_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.$GroupCommerceProductDetailImageContainer7(p,this.props.media);this.setState({currentIndex:p})}.bind(this);this.state={currentIndex:0,stageWidth:l,stageHeight:558}}m.prototype.render=function(){return c('React').createElement('div',null,c('React').createElement('div',{className:"_57xm"},this.$GroupCommerceProductDetailImageContainer2()),c('React').createElement('div',{className:"_57xn"},this.props.media.length?this.$GroupCommerceProductDetailImageContainer3():this.$GroupCommerceProductDetailImageContainer4()))};m.prototype.componentDidUpdate=function(n,o){if(this.props.media&&this.props.media.length>1&&this.props.media!==n.media){this.$GroupCommerceProductDetailImageContainer5();this.$GroupCommerceProductDetailImageContainer1=c('Event').listen(document.body,'keydown',this.$GroupCommerceProductDetailImageContainer6)}else if(!this.props.media||this.props.media.length<1)this.$GroupCommerceProductDetailImageContainer5();};m.prototype.componentWillUnmount=function(){this.$GroupCommerceProductDetailImageContainer5()};m.prototype.componentWillReceiveProps=function(n){var o,p=this;if(this.props.media!==n.media){var q=0;if(n.media.length<1){this.setState({stageWidth:l})}else (function(){var r=p.props.query;if(r&&r.fbid){q=n.media.findIndex(function(s){return s.id.toString()===r.fbid});if(q==-1)q=0;}p.$GroupCommerceProductDetailImageContainer7(q,n.media)})();this.setState({currentIndex:q})}};m.prototype.$GroupCommerceProductDetailImageContainer4=function(){var n=this.props.elem;if(!n)return null;var o=c('DOM').scry(n,'img')[0],p=c('DOM').scry(n,'i')[0];if(o){var q=c('Vector').from(o.naturalWidth,o.naturalHeight);return c('React').createElement(c('Image.react'),{className:"_580_",width:q.x,height:q.y,src:o.src,style:this.$GroupCommerceProductDetailImageContainer8(q.x,q.y)})}else if(p){var r=c('Style').get(p,'backgroundImage').replace(/.*url\(\"?([^\"]*)\"?\).*/,'$1');return c('React').createElement(c('Image.react'),{className:"_580_",src:r})}return null};m.prototype.$GroupCommerceProductDetailImageContainer5=function(){if(this.$GroupCommerceProductDetailImageContainer1){this.$GroupCommerceProductDetailImageContainer1.remove();this.$GroupCommerceProductDetailImageContainer1=null}};m.prototype.$GroupCommerceProductDetailImageContainer7=function(n,o){var p=o[n],q=this.state.stageWidth;switch(p.aspect){case c('GroupSellProductDetailsImageAspect').HORIZONTAL:case c('GroupSellProductDetailsImageAspect').WIDE_HORIZONTAL:q=744;break;case c('GroupSellProductDetailsImageAspect').WIDE_VERTICAL:q=314;break;case c('GroupSellProductDetailsImageAspect').VERTICAL:q=419;break;case c('GroupSellProductDetailsImageAspect').SQUARE:q=558;break;case c('GroupSellProductDetailsImageAspect').HEIGHT_BOUND:q=p.width;break;}this.props.onResize(p.aspect,q);this.setState({stageWidth:q})};m.prototype.$GroupCommerceProductDetailImageContainer10=function(){var n=this.state.currentIndex+1,o=this.props.media.length-1;if(n>o)n=0;this.$GroupCommerceProductDetailImageContainer11(n)};m.prototype.$GroupCommerceProductDetailImageContainer9=function(){var n=this.state.currentIndex-1,o=this.props.media.length-1;if(n<0)n=o;this.$GroupCommerceProductDetailImageContainer11(n)};m.prototype.$GroupCommerceProductDetailImageContainer3=function(){var n=[],o=this.props.media.length;for(var p=0;p<o;p++){var q=this.props.media[p];n.push(c('React').createElement(c('Image.react'),{className:(this.state.currentIndex!=p?"_5810":'')+(' '+"_580_"),width:q.width,height:q.height,src:q.uri,key:'stage'+q.id,style:this.$GroupCommerceProductDetailImageContainer8(q.width,q.height)}))}return n};m.prototype.$GroupCommerceProductDetailImageContainer8=function(n,o){var p=0;if(n>this.state.stageWidth){p=this.state.stageWidth/n;n*=p;o*=p}if(o>this.state.stageHeight){p=this.state.stageHeight/o;n*=p;o*=p}return {paddingTop:(this.state.stageHeight-o)/2+'px',paddingLeft:(this.state.stageWidth-n)/2+'px',maxWidth:this.state.stageWidth,maxHeight:this.state.stageHeight}};m.prototype.$GroupCommerceProductDetailImageContainer2=function(){var n=[],o=this.props.media.length;for(var p=0;p<o;p++){var q=this.props.media[p];n.push(c('React').createElement(c('Image.react'),{className:"_5811"+(this.state.currentIndex==p?' '+"_5812":''),width:k,height:k,src:q.uriThumb,onClick:this.$GroupCommerceProductDetailImageContainer11.bind(this,p),key:'thumbnail'+q.id}))}return c('React').createElement('div',null,c('React').createElement(c('ScrollableArea.react'),{height:this.props.maxHeight,shadow:false},n),c('React').createElement('div',{className:"_2dh4",style:{width:k}}))};f.exports=m}),null);
__d('GroupCommerceProductDetailPivotItem.react',['cx','Image.react','Link.react','React','RelayClassic','Tooltip.react','XUICard.react','XUICardSection.react','XUIText.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=148;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){var m=this.props.pivotItem.primary_photo,n=m?this.props.pivotItem.snowlift_uri:null,o=m?null:this.props.pivotItem.story.url,p=m?'theater':undefined;return c('React').createElement('div',{className:"_179c"},c('React').createElement(c('Link.react'),{ajaxify:n,href:o,rel:p},c('React').createElement(c('XUICard.react'),{className:"_3-8h",style:{width:k}},this.renderImage(),c('React').createElement(c('XUICardSection.react'),{className:"_2pi8 _2pi2 _4bqg"},c('React').createElement(c('XUIText.react'),{className:"_4bqh",display:'block',weight:'bold',size:'small'},this.props.pivotItem.group_commerce_item_title),c('React').createElement(c('XUIText.react'),{className:"_179d _4bqh",display:'block',size:'small'},this.props.pivotItem.formatted_price.text)))))};l.prototype.renderImage=function(){if(this.props.pivotItem.primary_photo)return c('React').createElement(c('Image.react'),{width:k,height:k,src:this.props.pivotItem.primary_photo.image.uri});return c('React').createElement('div',{className:"_5xvt",style:{width:k,height:k}})};function l(){i.apply(this,arguments)}f.exports=c('RelayClassic').createContainer(l,{initialVariables:{image_size:k},fragments:{pivotItem:function m(){return function(){return {children:[{fieldName:'group_commerce_item_title',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'text',kind:'Field',metadata:{},type:'String'}],fieldName:'formatted_price',kind:'Field',metadata:{canHaveSubselections:true},type:'TextWithEntities'},{children:[{calls:[{kind:'Call',metadata:{type:'Int'},name:'width',value:{kind:'CallVariable',callVariableName:'image_size'}},{kind:'Call',metadata:{type:'Int'},name:'height',value:{kind:'CallVariable',callVariableName:'image_size'}},{kind:'Call',metadata:{},name:'sizing',value:{kind:'CallValue',callValue:'cover-fill'}}],children:[{fieldName:'uri',kind:'Field',metadata:{},type:'Url'}],fieldName:'image',kind:'Field',metadata:{canHaveSubselections:true},type:'Image'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'primary_photo',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Photo'},{fieldName:'snowlift_uri',kind:'Field',metadata:{},type:'Url'},{children:[{fieldName:'url',kind:'Field',metadata:{},type:'Url'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'story',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Story'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('RelayClassic').QL.__id(),kind:'Fragment',metadata:{},name:'GroupCommerceProductDetailPivotItem_react_PivotItemRelayQL',type:'GroupCommerceProductItem'}}()}}})}),null);
__d('GroupCommerceProductDetailPivots.react',['cx','fbt','ix','GroupCommerceProductDetailPivotItem.react','Image.react','Layout.react','React','RelayClassic','XUICarousel.react','XUICarouselAnimator','XUICarouselArrow.react','XUICarouselItem.react','XUIGrayText.react'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('Layout.react').Column,n=c('React').PropTypes,o=12,p=8;k=babelHelpers.inherits(q,c('React').Component);l=k&&k.prototype;q.prototype.render=function(){if(!this.props.groupCommerceProductItem||!this.props.groupCommerceProductItem.top_related_products||!this.props.groupCommerceProductItem.top_related_products.edges||this.props.groupCommerceProductItem.top_related_products.edges.length<o)return null;var r=this.props.groupCommerceProductItem.top_related_products.edges.map(function(u){return c('React').createElement(c('XUICarouselItem.react'),{className:"_3-8_",key:u.node.id},c('React').createElement(c('GroupCommerceProductDetailPivotItem.react'),{pivotItem:u.node}))}),s=c('React').createElement(c('XUICarouselArrow.react'),null,c('React').createElement(c('Image.react'),{alt:i._("Previous"),src:j("101565")})),t=c('React').createElement(c('XUICarouselArrow.react'),null,c('React').createElement(c('Image.react'),{alt:i._("Next"),src:j("101566")}));return c('React').createElement('div',{className:"_2pie _39ha"},c('React').createElement(c('XUIGrayText.react'),{className:"_3-94",shade:'light',size:'small',weight:'bold',display:'block'},i._("SEE MORE ITEMS")),c('React').createElement(c('XUICarousel.react'),{animator:new (c('XUICarouselAnimator'))({type:'horizontal',centered:false,firstAndLastAligned:true}),arrows:[s,t],initialAutoplay:false,viewportWidth:this.props.width-p*2,wrapAround:false},r))};function q(){k.apply(this,arguments)}q.propTypes={width:n.number.isRequired};f.exports=c('RelayClassic').createContainer(q,{initialVariables:{count:o},fragments:{groupCommerceProductItem:function r(){return function(s){return {children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{calls:[{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallVariable',callVariableName:'count'}}],children:[{fieldName:'count',kind:'Field',metadata:{},type:'Int'},{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},c('RelayClassic').QL.__frag(s)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'GroupCommerceProductItem'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'ProductToTopRelatedProductsEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'top_related_products',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true,isFindable:true},type:'ProductToTopRelatedProductsConnection'}],id:c('RelayClassic').QL.__id(),kind:'Fragment',metadata:{},name:'GroupCommerceProductDetailPivots_react_GroupCommerceProductItemRelayQL',type:'GroupCommerceProductItem'}}(c('GroupCommerceProductDetailPivotItem.react').getFragment('pivotItem'))}}})}),null);
__d('GroupCommerceProductDetailPivotsRoute',['RelayClassic'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('RelayClassic').Route);i=h&&h.prototype;function j(){h.apply(this,arguments)}j.routeName='GroupCommerceProductDetailPivotsRoute';j.path='/product_details/top_related_products/{id}';j.paramDefinitions={id:{type:'Number',required:true}};j.queries={groupCommerceProductItem:function k(l){return function(m){return {calls:[{kind:'Call',metadata:{type:'ID!'},name:'id',value:{kind:'CallVariable',callVariableName:'id'}}],children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('RelayClassic').QL.__frag(m)]),fieldName:'node',kind:'Query',metadata:{isAbstract:true,identifyingArgName:'id',identifyingArgType:'ID!'},name:'GroupCommerceProductDetailPivotsRoute',type:'Node'}}(l.getFragment('groupCommerceProductItem'))}};f.exports=j}),null);
__d('GroupCommerceProductDetailPivotsRelayContainer.react',['GroupCommerceProductDetailPivots.react','GroupCommerceProductDetailPivotsRoute','React','RelayRootContainer'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.render=function(){var l=new (c('GroupCommerceProductDetailPivotsRoute'))({id:this.props.groupCommerceProductID});return c('React').createElement(c('RelayRootContainer'),{Component:c('GroupCommerceProductDetailPivots.react'),route:l,renderFetched:function(m){return c('React').createElement(c('GroupCommerceProductDetailPivots.react'),babelHelpers['extends']({},m,{width:this.props.width}))}.bind(this)})};function k(){h.apply(this,arguments)}k.propTypes={groupCommerceProductID:j.number.isRequired,width:j.number.isRequired};f.exports=k}),null);
__d('GroupCommerceProductDetailRHCContent.react',['cx','fbt','ix','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','Image.react','Link.react','React','XUIGrayText.react','XUIText.react'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('React').PropTypes;k=babelHelpers.inherits(n,c('React').Component);l=k&&k.prototype;n.prototype.render=function(){return c('React').createElement('div',{className:"_4g63"+(!this.props.actor.profilePicURI?' '+"_34xy":'')},c('React').createElement('div',{className:"_4g65"},this.$GroupCommerceProductDetailRHCContent1(),this.$GroupCommerceProductDetailRHCContent2(),this.$GroupCommerceProductDetailRHCContent3(),c('React').createElement('div',{className:"_4g67"},this.props.description),c('React').createElement('div',{className:"_4g68"},this.props.actionButton)),c('React').createElement('div',{className:"_4g6d",onClick:function(){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').UFI_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log()}.bind(this),ref:'ufi',role:'presentation'},this.props.ufi))};n.prototype.$GroupCommerceProductDetailRHCContent1=function(){var o=this.props.product.statusText?this.props.product.statusText+' '+this.props.product.title:this.props.product.title;return c('React').createElement(c('XUIText.react'),{id:this.props.titleID,className:"_4g6e"},o)};n.prototype.$GroupCommerceProductDetailRHCContent3=function(){var o=this.props.product.price;if(this.props.product.previousPrice!==null&&this.props.product.priceDropEnabled)o=i._("Now {current_price}",[i.param('current_price',o)]);var p=null;if(this.props.product.priceDropEnabled)p=c('React').createElement(c('XUIText.react'),null,c('React').createElement(c('XUIGrayText.react'),{className:"_3crf",shade:'light',size:'small'},this.props.product.previousPrice),' ');return c('React').createElement('div',{className:"_4g66"},p,o)};n.prototype.$GroupCommerceProductDetailRHCContent2=function(){var o=!this.props.product.deliveryNote?null:c('React').createElement(c('XUIText.react'),{display:'inline'},this.props.product.deliveryNote),p=o?c('React').createElement(c('Image.react'),{className:"_4g6g",src:j("75362")}):null;return c('React').createElement('div',{className:"_4g6h"},p,c('React').createElement(c('XUIText.react'),null,o))};function n(){k.apply(this,arguments)}n.propTypes={actor:m.object.isRequired,product:m.object.isRequired,group:m.object.isRequired,feedback:m.object.isRequired,ufi:m.any.isRequired,actionButton:m.any.isRequired,storyID:m.string,description:m.any.isRequired,titleID:m.string};f.exports=n}),null);
__d('GroupCommerceProductDetailRHCHeader.react',['cx','ix','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','Image.react','Link.react','React','ReactLayeredComponentMixin_DEPRECATED','XUIContextualDialog.react','XUIContextualDialogBody.react','classWithMixins','isEmpty','mixin'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes,m=104,n=40;j=babelHelpers.inherits(o,c('classWithMixins')(c('React').Component,c('mixin')(c('ReactLayeredComponentMixin_DEPRECATED'))));k=j&&j.prototype;o.prototype.renderLayers=function(){return {actorDialog:c('React').createElement(c('XUIContextualDialog.react'),{contextRef:function(){return this.refs.actorName}.bind(this),shown:true,hoverContextRef:function(){return this.refs.actorName}.bind(this),hideOnEscape:true,hoverHideDelay:0,hoverShowDelay:500,autoFocus:false,width:c('XUIContextualDialog.react').WIDTH.WIDE,position:'below'},c('React').createElement(c('XUIContextualDialogBody.react'),null,c('React').createElement('div',{id:this.props.actorHoverID}))),actorImageDialog:c('React').createElement(c('XUIContextualDialog.react'),{contextRef:function(){return this.refs.actorImage}.bind(this),shown:true,hoverContextRef:function(){return this.refs.actorImage}.bind(this),hideOnEscape:true,hoverHideDelay:0,hoverShowDelay:500,autoFocus:false,width:c('XUIContextualDialog.react').WIDTH.WIDE,position:'below'},c('React').createElement(c('XUIContextualDialogBody.react'),null,c('React').createElement('div',{id:this.props.actorImageHoverID}))),groupDialog:c('React').createElement(c('XUIContextualDialog.react'),{contextRef:function(){return this.refs.groupName}.bind(this),shown:true,hoverContextRef:function(){return this.refs.groupName}.bind(this),hideOnEscape:true,hoverHideDelay:0,hoverShowDelay:500,autoFocus:false,width:c('XUIContextualDialog.react').WIDTH.WIDE,position:'below'},c('React').createElement(c('XUIContextualDialogBody.react'),null,c('React').createElement('div',{id:this.props.groupHoverID})))}};o.prototype.render=function(){return c('React').createElement('div',{className:"_34xx"+(!this.props.actor.profilePicURI?' '+"_34xy":'')},c('React').createElement(c('Image.react'),{className:"_34xz",width:n,height:n,src:this.props.actor.profilePicURI,ref:'actorImage'}),c('React').createElement('div',{className:"_34x-"},c('React').createElement('div',{className:"_34x_"},c('React').createElement('div',{ref:'actorName',className:"_34y0"},c('React').createElement(c('Link.react'),{href:this.props.actor.uri,onClick:function(){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').PROFILE_LINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.props.hideDialog()}.bind(this)},this.props.actor.name)),!c('isEmpty')(this.props.group)?c('React').createElement(c('Image.react'),{className:"_34y1",src:i("82443")}):null,c('React').createElement('div',{ref:'groupName',className:"_34y0"},c('React').createElement(c('Link.react'),{href:this.props.group.uri,onClick:function(){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').GROUP_LINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.props.hideDialog()}.bind(this)},this.props.group.name))),c('React').createElement('div',{className:"_4g6i"},c('React').createElement(c('Link.react'),{href:this.props.product.uri,onClick:function(){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').PERMALINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.props.hideDialog()}.bind(this)},this.props.timestamp))),c('React').createElement('div',{id:this.props.chevronID}))};o.prototype.componentDidUpdate=function(p,q){var r=this.refs.actorName.offsetWidth,s=m-r;this.refs.groupName.style.maxWidth=m+s+'px'};function o(){j.apply(this,arguments)}o.propTypes={actor:l.object.isRequired,group:l.object.isRequired,storyID:l.string,actorHoverID:l.string.isRequired,actorImageHoverID:l.string.isRequired,groupHoverID:l.string.isRequired,chevronID:l.string.isRequired,product:l.object.isRequired,timestamp:l.any.isRequired};f.exports=o}),null);
__d('MarketplaceUpsellIconLink.react',['ix','cx','fbt','CenteredContainer.react','Image.react','Layout.react','Link.react','MarketplaceFIGSpectrumColors','React','XUIText.react','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){var k=c('Layout.react').Column,l=32,m=5;function n(o){var p={borderRadius:'50%',paddingTop:m,backgroundColor:c('MarketplaceFIGSpectrumColors').lime,height:l-m,width:l};return c('React').createElement(c('Link.react'),{className:o.className,href:o.href},c('React').createElement(c('XUIText.react'),{className:"_15t5",size:'medium'},c('React').createElement(c('Layout.react'),null,c('React').createElement(k,{className:"_2pij"},c('React').createElement(c('CenteredContainer.react'),{style:p,vertical:true},c('React').createElement(c('Image.react'),{src:h("140856")}))),c('React').createElement(k,{className:"_2pid"},j._("View More Items for Sale on Marketplace")),c('React').createElement(k,{className:"_15t6 _2pit"},c('React').createElement(c('Image.react'),{src:h("125812")})))))}f.exports=n}),null);
__d("XGroupCommerceMarketplaceProductDetailController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/marketplace\/product_detail\/",{sale_post_id:{type:"FBID",required:true},ufi_id:{type:"String",required:true},date_time_id:{type:"String",required:true},action_button_id:{type:"String",required:true},actor_dialog_id:{type:"String",required:true},actor_image_dialog_id:{type:"String",required:true},description_id:{type:"String",required:true},title_id:{type:"String",required:true},group_hover_id:{type:"String",required:true},ufi_instance_id:{type:"String",required:true},chevron_id:{type:"String",required:true}})}),null);
__d("XGroupCommerceMarketplaceSimilarProductsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/marketplace\/similar_products\/",{rid:{type:"Int"},rt:{type:"Enum",enumType:0},location:{type:"Enum",enumType:1},share_id:{type:"Int"},sale_post_id:{type:"FBID",required:true},post_dom_id:{type:"String",required:true},render_location:{type:"Enum",required:true,enumType:1}})}),null);
__d('GroupCommerceProductDetail.react',['csx','cx','fbt','Arbiter','AsyncRequest','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','GroupSellProductDetailsImageAspect','LayerFadeOnHide','LayerHideOnEscape','LeftRight.react','GroupCommerceProductDetailPivotsRelayContainer.react','GroupCommerceProductDetailRHCHeader.react','GroupCommerceProductDetailImageContainer.react','GroupCommerceProductDetailRHCContent.react','MarketplaceUpsellIconLink.react','Parent','React','ReactRenderer','ResponsiveBlock.react','ScrollableArea.react','XGroupCommerceMarketplaceProductDetailController','XGroupCommerceMarketplaceSimilarProductsController','XMarketplaceHomePageController','XUIDialog.react','XUIDialogTitle.react','XUIDialogBody.react','XUISpinner.react','guid'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=543,n=530,o=891;k=babelHelpers.inherits(p,c('React').Component);l=k&&k.prototype;function p(q,r){l.constructor.call(this,q,r);this.hideDialog=function(){this.$GroupCommerceProductDetail3(false)}.bind(this);this.$GroupCommerceProductDetail6=function(t,u){var v=this.state.width;switch(t){case c('GroupSellProductDetailsImageAspect').HORIZONTAL:case c('GroupSellProductDetailsImageAspect').WIDE_HORIZONTAL:v=1153;break;case c('GroupSellProductDetailsImageAspect').WIDE_VERTICAL:v=723;break;case c('GroupSellProductDetailsImageAspect').VERTICAL:v=828;break;case c('GroupSellProductDetailsImageAspect').SQUARE:v=967;break;case c('GroupSellProductDetailsImageAspect').HEIGHT_BOUND:v=u+409;break;}this.setState({width:v})}.bind(this);this.$GroupCommerceProductDetail4=function(t,u){if(u>m)u=m;this.setState({rhcHeight:u})}.bind(this);this.$GroupCommerceProductDetail3=function(t){if(p.$GroupCommerceProductDetail9!==null)this.setState({isDialogShown:t});if(!t){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').HIDE_DIALOG).setStoryID(this.state.payload.storyID).setGroupID(this.state.payload.group.id).log();this.props.onHide&&this.props.onHide();if(p.$GroupCommerceProductDetail9!==null)setTimeout(function(){this.setState({payload:this.$GroupCommerceProductDetail7(),query:null,elem:null})}.bind(this));}}.bind(this);this.$GroupCommerceProductDetail5=function(t){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').SHOW_DIALOG).setStoryID(t.payload.storyID).setGroupID(t.payload.group.id).log();this.setState({payload:t.payload,isDialogShown:true,isLoading:false})}.bind(this);var s=this;s.hideDialog=this.hideDialog.bind(this);s.showDialog=this.showDialog.bind(this);s.$GroupCommerceProductDetail3=this.$GroupCommerceProductDetail3.bind(this);s.$GroupCommerceProductDetail4=this.$GroupCommerceProductDetail4.bind(this);s.$GroupCommerceProductDetail5=this.$GroupCommerceProductDetail5.bind(this);s.$GroupCommerceProductDetail6=this.$GroupCommerceProductDetail6.bind(this);this.$GroupCommerceProductDetail2={};this.state={isDialogShown:false,isLoading:false,width:o,rhcHeight:200,payload:this.$GroupCommerceProductDetail7(),ufiID:'ufi_detail_'+c('guid')(),datetimeID:'datetime_'+c('guid')(),actionButtonID:'actionButton'+c('guid')(),actorHoverID:'actorHoverID'+c('guid')(),actorImageHoverID:'actorImageHoverID'+c('guid')(),descriptionID:'descriptionID'+c('guid')(),titleID:'titleID'+c('guid')(),groupHoverID:'groupHoverID'+c('guid')(),ufiInstanceID:'ufiInstanceID'+c('guid')(),chevronID:'chevronID'+c('guid')(),query:null,elem:null,salePostID:null}}p.prototype.componentDidMount=function(){this.$GroupCommerceProductDetail1=c('Arbiter').subscribe('XComposerEditDialog/doneEditing',function(){this.$GroupCommerceProductDetail8(this.state.salePostID)}.bind(this))};p.prototype.componentWillUnmount=function(){var q=this.refs.modal;if(q!=null)q.layer.hide();p.$GroupCommerceProductDetail9=null;this.$GroupCommerceProductDetail1&&this.$GroupCommerceProductDetail1.unsubscribe();this.$GroupCommerceProductDetail1=null};p.prototype.render=function(){if(!this.state.isDialogShown)return null;var q=c('React').createElement('span',{id:this.state.datetimeID}),r=c('React').createElement('div',{id:this.state.ufiID}),s=c('React').createElement('div',{id:this.state.actionButtonID}),t=c('React').createElement('div',{className:"_3g5q",id:this.state.descriptionID}),u=c('XMarketplaceHomePageController').getURIBuilder().setString('ref','sale_groups').getURI(),v=c('React').createElement(c('MarketplaceUpsellIconLink.react'),{className:"_1mle _2pie",href:u});return c('React').createElement(c('XUIDialog.react'),{shown:true,onToggle:this.$GroupCommerceProductDetail3,ref:'modal',width:this.state.width,behaviors:{LayerFadeOnHide:c('LayerFadeOnHide'),LayerHideOnEscape:c('LayerHideOnEscape')},className:"_1mlf"},c('React').createElement(c('XUIDialogTitle.react'),null,j._("Item Details")),c('React').createElement(c('XUIDialogBody.react'),null,c('React').createElement('div',{className:"_3g6d"},c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',{className:"_3g6e"},c('React').createElement(c('GroupCommerceProductDetailImageContainer.react'),{elem:this.state.elem,group:this.state.payload.group,maxHeight:n,media:this.state.payload.media,onResize:this.$GroupCommerceProductDetail6,query:this.state.query,storyID:this.state.payload.storyID,ufiID:this.state.ufiID})),c('React').createElement('div',{className:"_3g6f"},c('React').createElement(c('ScrollableArea.react'),{className:"_3g6g",height:this.state.rhcHeight},c('React').createElement(c('ResponsiveBlock.react'),{className:"_3g6h",onResize:this.$GroupCommerceProductDetail4},this.$GroupCommerceProductDetail10(),c('React').createElement(c('GroupCommerceProductDetailRHCHeader.react'),{actor:this.state.payload.actor,group:this.state.payload.group,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,actorHoverID:this.state.actorHoverID,actorImageHoverID:this.state.actorImageHoverID,groupHoverID:this.state.groupHoverID,chevronID:this.state.chevronID,product:this.state.payload.product,timestamp:q}),c('React').createElement(c('GroupCommerceProductDetailRHCContent.react'),{actor:this.state.payload.actor,product:this.state.payload.product,group:this.state.payload.group,feedback:this.state.payload.feedback,actionButton:s,ufi:r,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,description:t,titleID:this.state.titleID}))))),this.$GroupCommerceProductDetail11())),v)};p.prototype.showDialog=function(q,r,s){this.$GroupCommerceProductDetail8(q);this.setState({payload:this.$GroupCommerceProductDetail7(),salePostID:q,query:r,elem:s,isDialogShown:true,isLoading:true,width:o});this.$GroupCommerceProductDetail12(q,s)};p.prototype.$GroupCommerceProductDetail10=function(){if(!this.state.isLoading)return null;return c('React').createElement('div',{className:"_msc"},c('React').createElement(c('XUISpinner.react'),{size:'large'}))};p.prototype.$GroupCommerceProductDetail11=function(){var q=this.state.payload.product;if(!q.id||!q.showPivots)return null;return c('React').createElement(c('GroupCommerceProductDetailPivotsRelayContainer.react'),{groupCommerceProductID:q.id,width:this.state.width})};p.prototype.$GroupCommerceProductDetail8=function(q){var r=c('XGroupCommerceMarketplaceProductDetailController').getURIBuilder().setFBID('sale_post_id',q).setString('ufi_id',this.state.ufiID).setString('date_time_id',this.state.datetimeID).setString('action_button_id',this.state.actionButtonID).setString('actor_dialog_id',this.state.actorHoverID).setString('actor_image_dialog_id',this.state.actorImageHoverID).setString('description_id',this.state.descriptionID).setString('title_id',this.state.titleID).setString('group_hover_id',this.state.groupHoverID).setString('ufi_instance_id',this.state.ufiInstanceID).setString('chevron_id',this.state.chevronID).getURI();new (c('AsyncRequest'))().setURI(r).setMethod('GET').setHandler(this.$GroupCommerceProductDetail5).setErrorHandler(function(s){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').ASYNC_DATA_REQUEST_FAIL).setStoryID(q.toString()).log()}).setReadOnly(true).send()};p.prototype.$GroupCommerceProductDetail12=function(q,r){var s=r&&c('Parent').bySelector(r,"._4-u2");if(!r||!r.dataset.renderLocation||!s)return;var t=s.id;if(!t||this.$GroupCommerceProductDetail2[t])return;this.$GroupCommerceProductDetail2[t]=true;var u=c('XGroupCommerceMarketplaceSimilarProductsController').getURIBuilder().setFBID('sale_post_id',q).setString('post_dom_id',t).setEnum('render_location',r.dataset.renderLocation).getURI();new (c('AsyncRequest'))().setURI(u).setMethod('GET').setHandler(this.$GroupCommerceProductDetail13).setErrorHandler(function(v){}).setReadOnly(true).send()};p.prototype.$GroupCommerceProductDetail13=function(q){var r=q.getPayload();if(!r||!r.length)return;};p.prototype.$GroupCommerceProductDetail7=function(){return {actor:{profilePicURI:null},group:{},product:{},feedback:{},media:[],ufi:{}}};p.init=function(q){var r=c('ReactRenderer').constructAndRenderComponent(p,{},q);p.$GroupCommerceProductDetail14=q;p.$GroupCommerceProductDetail9=r;if(p.$GroupCommerceProductDetail15){p.showDialog(p.$GroupCommerceProductDetail15,p.$GroupCommerceProductDetail16,p.$GroupCommerceProductDetail17);p.$GroupCommerceProductDetail15=null;p.$GroupCommerceProductDetail16=null;p.$GroupCommerceProductDetail17=null}};p.showDialog=function(q,r,s){if(!p.$GroupCommerceProductDetail9){if(!p.$GroupCommerceProductDetail14){p.$GroupCommerceProductDetail15=q;p.$GroupCommerceProductDetail16=r;p.$GroupCommerceProductDetail17=s;return}p.init(p.$GroupCommerceProductDetail14)}if(!p.$GroupCommerceProductDetail9){new (c('GroupSellProductDetailActionsTypedLogger'))().setEvent(c('GroupSellProductDetailsEvent').DIALOG_INSTANCE_NULL).setStoryID(q.toString()).log();return}p.$GroupCommerceProductDetail9.showDialog(q,r,s)};p.$GroupCommerceProductDetail9=null;p.$GroupCommerceProductDetail15=null;p.$GroupCommerceProductDetail14=null;p.$GroupCommerceProductDetail17=null;p.$GroupCommerceProductDetail16=null;f.exports=p}),null);
__d('GroupCommerceProductDetailLayer',['Layer','GroupCommerceProductDetail.react'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('Layer'));i=h&&h.prototype;j.prototype._buildWrapper=function(k,l){c('GroupCommerceProductDetail.react').init(l);return l};function j(){h.apply(this,arguments)}f.exports=j}),null);