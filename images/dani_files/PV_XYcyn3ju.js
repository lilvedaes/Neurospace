if (self.CavalryLogger) { CavalryLogger.start_js(["PK5Ri"]); }

__d('FBModalHideOnWrapperClick',['csx','cx','CSS','DOM','Event','requestAnimationFrame'],(function a(b,c,d,e,f,g,h,i){function j(k){'use strict';this._layer=k;this._subscriptions=null;this._onBlur=null}j.prototype.enable=function(){'use strict';this._subscriptions=[this._layer.subscribe('show',this._attach.bind(this)),this._layer.subscribe('hide',this._detach.bind(this))];if(this._layer.isShown())this._attach();};j.prototype.disable=function(){'use strict';this._detach();while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null};j.prototype._detach=function(){'use strict';this._onClick&&this._onClick.remove();this._onClick=null};j.prototype._attach=function(){'use strict';var k=c('DOM').scry(this._layer.getContentRoot(),"._4ra7")[0];if(k)this._onClick=c('Event').listen(k,'click',function(event){return c('requestAnimationFrame')(function(){if(c('CSS').matchesSelector(event.target,"._4ra7")){this._layer.hide();return false}}.bind(this))}.bind(this));};f.exports=j}),null);
__d('FBModal.react',['cx','Arbiter','FBModalHideOnWrapperClick','Event','EventListener','JSXDOM','Layer','LayerAutoFocus','LayerFadeOnShow','LayerFormHooks','LayerRefocusOnHide','LayerTabIsolation','LayerTogglerContext','LayerHideOnEscape','LayerHideOnTransition','ModalLayer','React','ReactDOM','ReactLayer','Run'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('Layer'));j=i&&i.prototype;l.prototype._configure=function(o,p){j._configure.call(this,o,p)};l.prototype._getDefaultBehaviors=function(){return j._getDefaultBehaviors.call(this).concat([m,c('ModalLayer'),c('LayerAutoFocus'),c('LayerFadeOnShow'),c('FBModalHideOnWrapperClick'),c('LayerFormHooks'),c('LayerHideOnEscape'),c('LayerHideOnTransition'),c('LayerRefocusOnHide'),c('LayerTabIsolation'),c('LayerTogglerContext')])};l.prototype._buildWrapper=function(o,p){this._innerContent=c('JSXDOM').div({className:"_4ra7"},p);c('EventListener').listen(this._innerContent,'scroll',function(){return window.dispatchEvent(new (c('Event'))('scroll'))});this._root=c('JSXDOM').div({className:"_5aat _4-hy",role:"dialog","aria-labelledby":o.titleID||null},this._innerContent);return this._root};l.prototype.getContentRoot=function(){return this._root};l.prototype.getInnerContent=function(){return this._innerContent};function l(){i.apply(this,arguments)}function m(o){this._layer=o;this._subscription=null}m.prototype.enable=function(){this._subscription=this._layer.subscribe(['show','hide'],function(o){if(o==='show'){c('Arbiter').inform('layer_shown',{type:'GenericOverlay'})}else c('Arbiter').inform('layer_hidden',{type:'GenericOverlay'});}.bind(this))};m.prototype.disable=function(){this._subscription&&this._subscription.unsubscribe();this._subscription=null};var n=c('ReactLayer').createClass({displayName:'FBModal',propTypes:{behaviors:k.object,causalElement:k.object,causalElementRef:k.func,className:k.string,onHide:k.func,onShow:k.func,shown:k.bool,titleID:k.string},createLayer:function o(p){var q=this.props.className,r={classNames:q?q.split(' '):null,titleID:this.props.titleID},s=new l(r,p);s.conditionShow(this.props.shown);return s},receiveProps:function o(p,q){this.updateBehaviors(q.behaviors,p.behaviors);if(this.layer){this.layer.setCausalElement(this._getCausalElement());this.layer.conditionShow(p.shown);p.shown&&this.layer.updatePosition()}},_getCausalElement:function o(){var p=null;if(this.props.causalElementRef){p=c('ReactDOM').findDOMNode(this.props.causalElementRef())}else p=this.props.causalElement;return p},componentDidMount:function o(p){this.layerSubscribe('hide',this._onHide);this.layerSubscribe('show',this._onShow);c('Run').onLeave(function(){return p&&p.hide()})},_onHide:function o(){this.props.onHide&&this.props.onHide()},_onShow:function o(){this.props.onShow&&this.props.onShow()}});f.exports=n}),null);
__d('FBModalCloseButton.react',['cx','fbt','Image.react','React','ShimButton.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.render=function(){return c('React').createElement(c('ShimButton.react'),{className:"_3cnu",inline:true,onClick:this.props.onToggleClick},c('React').createElement(c('Image.react'),{alt:i._("Close"),src:{uri:'/images/video/channel_view/close.png'}}))};function l(){j.apply(this,arguments)}l.displayName='Modal Close Button';f.exports=l}),null);
__d('ProfileDiscoveryModal.react',['cx','FBModal.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){var l=this.props,m=l.children,n=l.hideOnWashClick,o=babelHelpers.objectWithoutProperties(l,['children','hideOnWashClick']),p=m[0],q=m.slice(1),r=null;if(n)r=function(event){if(event.target===this.$ProfileDiscoveryModal1)this.props.onHide(event);}.bind(this);return c('React').createElement(c('FBModal.react'),babelHelpers['extends']({},o,{className:"_3r0h"}),p,c('React').createElement('div',{className:"_3r0i",onClick:r,ref:function(s){return this.$ProfileDiscoveryModal1=s}.bind(this),role:'presentation'},q))};function k(){i.apply(this,arguments)}f.exports=k}),null);
__d('ProfileDiscoveryEntityCardsModalPlaceholder.react',['cx','FBModalCloseButton.react','ProfileDiscoveryModal.react','React','XUISpinner.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){return c('React').createElement(c('ProfileDiscoveryModal.react'),{hideOnWashClick:true,onHide:this.props.toggleShowState,shown:true},c('React').createElement(c('FBModalCloseButton.react'),{onToggleClick:this.props.toggleShowState}),c('React').createElement('div',{className:"_iib"},c('React').createElement(c('XUISpinner.react'),{background:'dark',size:'large'})))};function k(){i.apply(this,arguments)}f.exports=k}),null);
__d('ProfileDiscoveryEntityCardsDialogContainer.react',['BootloadOnRender.react','LazyComponent.react','JSResource','ProfileDiscoveryEntityCardsModalPlaceholder.react','React','ReactRenderer'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').PureComponent);i=h&&h.prototype;function j(k){i.constructor.call(this,k);this.$ProfileDiscoveryEntityCardsDialogContainer2=function(){this.setState({showDialog:!this.state.showDialog})}.bind(this);this.state={showDialog:k.initialShowDialog||false}}j.prototype.componentDidMount=function(){this.props.button.addEventListener('click',this.$ProfileDiscoveryEntityCardsDialogContainer2)};j.prototype.componentWillUnmount=function(){this.props.button.removeEventListener('click',this.$ProfileDiscoveryEntityCardsDialogContainer2)};j.prototype.render=function(){return c('React').createElement('div',{ref:function(k){return this.$ProfileDiscoveryEntityCardsDialogContainer1=k}.bind(this)},this.renderLayers())};j.prototype.renderLayers=function(){if(!this.state.showDialog)return null;return c('React').createElement(c('BootloadOnRender.react'),{loader:c('JSResource')('ProfileDiscoveryEntityCardsModal.react').__setRef('ProfileDiscoveryEntityCardsDialogContainer.react'),placeholder:c('React').createElement(c('ProfileDiscoveryEntityCardsModalPlaceholder.react'),{toggleShowState:this.$ProfileDiscoveryEntityCardsDialogContainer2}),component:c('React').createElement(c('LazyComponent.react'),babelHelpers['extends']({},this.props,{toggleShowState:this.$ProfileDiscoveryEntityCardsDialogContainer2}))})};j.bindToButton=function(k,l){c('ReactRenderer').constructAndRenderComponentByID(j,l,k)};f.exports=j}),null);