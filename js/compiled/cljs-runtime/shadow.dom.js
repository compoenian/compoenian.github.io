goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46504 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46504(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46505 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46505(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45586 = coll;
var G__45587 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45586,G__45587) : shadow.dom.lazy_native_coll_seq.call(null,G__45586,G__45587));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45618 = arguments.length;
switch (G__45618) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45629 = arguments.length;
switch (G__45629) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45642 = arguments.length;
switch (G__45642) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45663 = arguments.length;
switch (G__45663) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45682 = arguments.length;
switch (G__45682) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45707 = arguments.length;
switch (G__45707) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45713){if((e45713 instanceof Object)){
var e = e45713;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45713;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45726 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45727 = null;
var count__45728 = (0);
var i__45729 = (0);
while(true){
if((i__45729 < count__45728)){
var el = chunk__45727.cljs$core$IIndexed$_nth$arity$2(null,i__45729);
var handler_46519__$1 = ((function (seq__45726,chunk__45727,count__45728,i__45729,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45726,chunk__45727,count__45728,i__45729,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46519__$1);


var G__46520 = seq__45726;
var G__46521 = chunk__45727;
var G__46522 = count__45728;
var G__46523 = (i__45729 + (1));
seq__45726 = G__46520;
chunk__45727 = G__46521;
count__45728 = G__46522;
i__45729 = G__46523;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45726);
if(temp__5753__auto__){
var seq__45726__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45726__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45726__$1);
var G__46524 = cljs.core.chunk_rest(seq__45726__$1);
var G__46525 = c__4649__auto__;
var G__46526 = cljs.core.count(c__4649__auto__);
var G__46527 = (0);
seq__45726 = G__46524;
chunk__45727 = G__46525;
count__45728 = G__46526;
i__45729 = G__46527;
continue;
} else {
var el = cljs.core.first(seq__45726__$1);
var handler_46528__$1 = ((function (seq__45726,chunk__45727,count__45728,i__45729,el,seq__45726__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45726,chunk__45727,count__45728,i__45729,el,seq__45726__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46528__$1);


var G__46529 = cljs.core.next(seq__45726__$1);
var G__46530 = null;
var G__46531 = (0);
var G__46532 = (0);
seq__45726 = G__46529;
chunk__45727 = G__46530;
count__45728 = G__46531;
i__45729 = G__46532;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45752 = arguments.length;
switch (G__45752) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__45761 = cljs.core.seq(events);
var chunk__45762 = null;
var count__45763 = (0);
var i__45764 = (0);
while(true){
if((i__45764 < count__45763)){
var vec__45786 = chunk__45762.cljs$core$IIndexed$_nth$arity$2(null,i__45764);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45786,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45786,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46537 = seq__45761;
var G__46538 = chunk__45762;
var G__46539 = count__45763;
var G__46540 = (i__45764 + (1));
seq__45761 = G__46537;
chunk__45762 = G__46538;
count__45763 = G__46539;
i__45764 = G__46540;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45761);
if(temp__5753__auto__){
var seq__45761__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45761__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45761__$1);
var G__46541 = cljs.core.chunk_rest(seq__45761__$1);
var G__46542 = c__4649__auto__;
var G__46543 = cljs.core.count(c__4649__auto__);
var G__46544 = (0);
seq__45761 = G__46541;
chunk__45762 = G__46542;
count__45763 = G__46543;
i__45764 = G__46544;
continue;
} else {
var vec__45792 = cljs.core.first(seq__45761__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45792,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45792,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46547 = cljs.core.next(seq__45761__$1);
var G__46548 = null;
var G__46549 = (0);
var G__46550 = (0);
seq__45761 = G__46547;
chunk__45762 = G__46548;
count__45763 = G__46549;
i__45764 = G__46550;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__45802 = cljs.core.seq(styles);
var chunk__45803 = null;
var count__45804 = (0);
var i__45805 = (0);
while(true){
if((i__45805 < count__45804)){
var vec__45818 = chunk__45803.cljs$core$IIndexed$_nth$arity$2(null,i__45805);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45818,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46553 = seq__45802;
var G__46554 = chunk__45803;
var G__46555 = count__45804;
var G__46556 = (i__45805 + (1));
seq__45802 = G__46553;
chunk__45803 = G__46554;
count__45804 = G__46555;
i__45805 = G__46556;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45802);
if(temp__5753__auto__){
var seq__45802__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45802__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45802__$1);
var G__46557 = cljs.core.chunk_rest(seq__45802__$1);
var G__46558 = c__4649__auto__;
var G__46559 = cljs.core.count(c__4649__auto__);
var G__46560 = (0);
seq__45802 = G__46557;
chunk__45803 = G__46558;
count__45804 = G__46559;
i__45805 = G__46560;
continue;
} else {
var vec__45823 = cljs.core.first(seq__45802__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45823,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46561 = cljs.core.next(seq__45802__$1);
var G__46562 = null;
var G__46563 = (0);
var G__46564 = (0);
seq__45802 = G__46561;
chunk__45803 = G__46562;
count__45804 = G__46563;
i__45805 = G__46564;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__45828_46565 = key;
var G__45828_46566__$1 = (((G__45828_46565 instanceof cljs.core.Keyword))?G__45828_46565.fqn:null);
switch (G__45828_46566__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_46568 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_46568,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_46568,"aria-");
}
})())){
el.setAttribute(ks_46568,value);
} else {
(el[ks_46568] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45857){
var map__45859 = p__45857;
var map__45859__$1 = cljs.core.__destructure_map(map__45859);
var props = map__45859__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45859__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45860 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45860,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45860,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45860,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45864 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45864,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45864;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45872 = arguments.length;
switch (G__45872) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45883){
var vec__45886 = p__45883;
var seq__45887 = cljs.core.seq(vec__45886);
var first__45888 = cljs.core.first(seq__45887);
var seq__45887__$1 = cljs.core.next(seq__45887);
var nn = first__45888;
var first__45888__$1 = cljs.core.first(seq__45887__$1);
var seq__45887__$2 = cljs.core.next(seq__45887__$1);
var np = first__45888__$1;
var nc = seq__45887__$2;
var node = vec__45886;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45893 = nn;
var G__45894 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45893,G__45894) : create_fn.call(null,G__45893,G__45894));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45896 = nn;
var G__45897 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45896,G__45897) : create_fn.call(null,G__45896,G__45897));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45902 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45902,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45902,(1),null);
var seq__45907_46579 = cljs.core.seq(node_children);
var chunk__45908_46580 = null;
var count__45909_46581 = (0);
var i__45910_46582 = (0);
while(true){
if((i__45910_46582 < count__45909_46581)){
var child_struct_46586 = chunk__45908_46580.cljs$core$IIndexed$_nth$arity$2(null,i__45910_46582);
var children_46590 = shadow.dom.dom_node(child_struct_46586);
if(cljs.core.seq_QMARK_(children_46590)){
var seq__45943_46591 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46590));
var chunk__45945_46592 = null;
var count__45946_46593 = (0);
var i__45947_46594 = (0);
while(true){
if((i__45947_46594 < count__45946_46593)){
var child_46595 = chunk__45945_46592.cljs$core$IIndexed$_nth$arity$2(null,i__45947_46594);
if(cljs.core.truth_(child_46595)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46595);


var G__46596 = seq__45943_46591;
var G__46597 = chunk__45945_46592;
var G__46598 = count__45946_46593;
var G__46599 = (i__45947_46594 + (1));
seq__45943_46591 = G__46596;
chunk__45945_46592 = G__46597;
count__45946_46593 = G__46598;
i__45947_46594 = G__46599;
continue;
} else {
var G__46600 = seq__45943_46591;
var G__46601 = chunk__45945_46592;
var G__46602 = count__45946_46593;
var G__46603 = (i__45947_46594 + (1));
seq__45943_46591 = G__46600;
chunk__45945_46592 = G__46601;
count__45946_46593 = G__46602;
i__45947_46594 = G__46603;
continue;
}
} else {
var temp__5753__auto___46604 = cljs.core.seq(seq__45943_46591);
if(temp__5753__auto___46604){
var seq__45943_46605__$1 = temp__5753__auto___46604;
if(cljs.core.chunked_seq_QMARK_(seq__45943_46605__$1)){
var c__4649__auto___46606 = cljs.core.chunk_first(seq__45943_46605__$1);
var G__46607 = cljs.core.chunk_rest(seq__45943_46605__$1);
var G__46608 = c__4649__auto___46606;
var G__46609 = cljs.core.count(c__4649__auto___46606);
var G__46610 = (0);
seq__45943_46591 = G__46607;
chunk__45945_46592 = G__46608;
count__45946_46593 = G__46609;
i__45947_46594 = G__46610;
continue;
} else {
var child_46611 = cljs.core.first(seq__45943_46605__$1);
if(cljs.core.truth_(child_46611)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46611);


var G__46612 = cljs.core.next(seq__45943_46605__$1);
var G__46613 = null;
var G__46614 = (0);
var G__46615 = (0);
seq__45943_46591 = G__46612;
chunk__45945_46592 = G__46613;
count__45946_46593 = G__46614;
i__45947_46594 = G__46615;
continue;
} else {
var G__46616 = cljs.core.next(seq__45943_46605__$1);
var G__46617 = null;
var G__46618 = (0);
var G__46619 = (0);
seq__45943_46591 = G__46616;
chunk__45945_46592 = G__46617;
count__45946_46593 = G__46618;
i__45947_46594 = G__46619;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46590);
}


var G__46621 = seq__45907_46579;
var G__46622 = chunk__45908_46580;
var G__46623 = count__45909_46581;
var G__46624 = (i__45910_46582 + (1));
seq__45907_46579 = G__46621;
chunk__45908_46580 = G__46622;
count__45909_46581 = G__46623;
i__45910_46582 = G__46624;
continue;
} else {
var temp__5753__auto___46625 = cljs.core.seq(seq__45907_46579);
if(temp__5753__auto___46625){
var seq__45907_46626__$1 = temp__5753__auto___46625;
if(cljs.core.chunked_seq_QMARK_(seq__45907_46626__$1)){
var c__4649__auto___46627 = cljs.core.chunk_first(seq__45907_46626__$1);
var G__46628 = cljs.core.chunk_rest(seq__45907_46626__$1);
var G__46629 = c__4649__auto___46627;
var G__46630 = cljs.core.count(c__4649__auto___46627);
var G__46631 = (0);
seq__45907_46579 = G__46628;
chunk__45908_46580 = G__46629;
count__45909_46581 = G__46630;
i__45910_46582 = G__46631;
continue;
} else {
var child_struct_46632 = cljs.core.first(seq__45907_46626__$1);
var children_46633 = shadow.dom.dom_node(child_struct_46632);
if(cljs.core.seq_QMARK_(children_46633)){
var seq__45957_46634 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46633));
var chunk__45959_46635 = null;
var count__45960_46636 = (0);
var i__45961_46637 = (0);
while(true){
if((i__45961_46637 < count__45960_46636)){
var child_46638 = chunk__45959_46635.cljs$core$IIndexed$_nth$arity$2(null,i__45961_46637);
if(cljs.core.truth_(child_46638)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46638);


var G__46641 = seq__45957_46634;
var G__46642 = chunk__45959_46635;
var G__46643 = count__45960_46636;
var G__46644 = (i__45961_46637 + (1));
seq__45957_46634 = G__46641;
chunk__45959_46635 = G__46642;
count__45960_46636 = G__46643;
i__45961_46637 = G__46644;
continue;
} else {
var G__46645 = seq__45957_46634;
var G__46646 = chunk__45959_46635;
var G__46647 = count__45960_46636;
var G__46648 = (i__45961_46637 + (1));
seq__45957_46634 = G__46645;
chunk__45959_46635 = G__46646;
count__45960_46636 = G__46647;
i__45961_46637 = G__46648;
continue;
}
} else {
var temp__5753__auto___46649__$1 = cljs.core.seq(seq__45957_46634);
if(temp__5753__auto___46649__$1){
var seq__45957_46651__$1 = temp__5753__auto___46649__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45957_46651__$1)){
var c__4649__auto___46652 = cljs.core.chunk_first(seq__45957_46651__$1);
var G__46653 = cljs.core.chunk_rest(seq__45957_46651__$1);
var G__46654 = c__4649__auto___46652;
var G__46655 = cljs.core.count(c__4649__auto___46652);
var G__46656 = (0);
seq__45957_46634 = G__46653;
chunk__45959_46635 = G__46654;
count__45960_46636 = G__46655;
i__45961_46637 = G__46656;
continue;
} else {
var child_46658 = cljs.core.first(seq__45957_46651__$1);
if(cljs.core.truth_(child_46658)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46658);


var G__46659 = cljs.core.next(seq__45957_46651__$1);
var G__46660 = null;
var G__46661 = (0);
var G__46662 = (0);
seq__45957_46634 = G__46659;
chunk__45959_46635 = G__46660;
count__45960_46636 = G__46661;
i__45961_46637 = G__46662;
continue;
} else {
var G__46663 = cljs.core.next(seq__45957_46651__$1);
var G__46664 = null;
var G__46665 = (0);
var G__46666 = (0);
seq__45957_46634 = G__46663;
chunk__45959_46635 = G__46664;
count__45960_46636 = G__46665;
i__45961_46637 = G__46666;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46633);
}


var G__46667 = cljs.core.next(seq__45907_46626__$1);
var G__46668 = null;
var G__46669 = (0);
var G__46670 = (0);
seq__45907_46579 = G__46667;
chunk__45908_46580 = G__46668;
count__45909_46581 = G__46669;
i__45910_46582 = G__46670;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46004 = cljs.core.seq(node);
var chunk__46005 = null;
var count__46006 = (0);
var i__46007 = (0);
while(true){
if((i__46007 < count__46006)){
var n = chunk__46005.cljs$core$IIndexed$_nth$arity$2(null,i__46007);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46675 = seq__46004;
var G__46676 = chunk__46005;
var G__46677 = count__46006;
var G__46678 = (i__46007 + (1));
seq__46004 = G__46675;
chunk__46005 = G__46676;
count__46006 = G__46677;
i__46007 = G__46678;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46004);
if(temp__5753__auto__){
var seq__46004__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46004__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46004__$1);
var G__46679 = cljs.core.chunk_rest(seq__46004__$1);
var G__46680 = c__4649__auto__;
var G__46681 = cljs.core.count(c__4649__auto__);
var G__46682 = (0);
seq__46004 = G__46679;
chunk__46005 = G__46680;
count__46006 = G__46681;
i__46007 = G__46682;
continue;
} else {
var n = cljs.core.first(seq__46004__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46683 = cljs.core.next(seq__46004__$1);
var G__46684 = null;
var G__46685 = (0);
var G__46686 = (0);
seq__46004 = G__46683;
chunk__46005 = G__46684;
count__46006 = G__46685;
i__46007 = G__46686;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46014 = arguments.length;
switch (G__46014) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46025 = arguments.length;
switch (G__46025) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46046 = arguments.length;
switch (G__46046) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___46696 = arguments.length;
var i__4830__auto___46697 = (0);
while(true){
if((i__4830__auto___46697 < len__4829__auto___46696)){
args__4835__auto__.push((arguments[i__4830__auto___46697]));

var G__46698 = (i__4830__auto___46697 + (1));
i__4830__auto___46697 = G__46698;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46068_46699 = cljs.core.seq(nodes);
var chunk__46069_46700 = null;
var count__46070_46701 = (0);
var i__46071_46702 = (0);
while(true){
if((i__46071_46702 < count__46070_46701)){
var node_46703 = chunk__46069_46700.cljs$core$IIndexed$_nth$arity$2(null,i__46071_46702);
fragment.appendChild(shadow.dom._to_dom(node_46703));


var G__46704 = seq__46068_46699;
var G__46705 = chunk__46069_46700;
var G__46706 = count__46070_46701;
var G__46707 = (i__46071_46702 + (1));
seq__46068_46699 = G__46704;
chunk__46069_46700 = G__46705;
count__46070_46701 = G__46706;
i__46071_46702 = G__46707;
continue;
} else {
var temp__5753__auto___46708 = cljs.core.seq(seq__46068_46699);
if(temp__5753__auto___46708){
var seq__46068_46709__$1 = temp__5753__auto___46708;
if(cljs.core.chunked_seq_QMARK_(seq__46068_46709__$1)){
var c__4649__auto___46710 = cljs.core.chunk_first(seq__46068_46709__$1);
var G__46711 = cljs.core.chunk_rest(seq__46068_46709__$1);
var G__46712 = c__4649__auto___46710;
var G__46713 = cljs.core.count(c__4649__auto___46710);
var G__46714 = (0);
seq__46068_46699 = G__46711;
chunk__46069_46700 = G__46712;
count__46070_46701 = G__46713;
i__46071_46702 = G__46714;
continue;
} else {
var node_46715 = cljs.core.first(seq__46068_46709__$1);
fragment.appendChild(shadow.dom._to_dom(node_46715));


var G__46716 = cljs.core.next(seq__46068_46709__$1);
var G__46717 = null;
var G__46718 = (0);
var G__46719 = (0);
seq__46068_46699 = G__46716;
chunk__46069_46700 = G__46717;
count__46070_46701 = G__46718;
i__46071_46702 = G__46719;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46063){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46063));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46087_46724 = cljs.core.seq(scripts);
var chunk__46088_46725 = null;
var count__46089_46726 = (0);
var i__46090_46727 = (0);
while(true){
if((i__46090_46727 < count__46089_46726)){
var vec__46107_46728 = chunk__46088_46725.cljs$core$IIndexed$_nth$arity$2(null,i__46090_46727);
var script_tag_46729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46107_46728,(0),null);
var script_body_46730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46107_46728,(1),null);
eval(script_body_46730);


var G__46731 = seq__46087_46724;
var G__46732 = chunk__46088_46725;
var G__46733 = count__46089_46726;
var G__46734 = (i__46090_46727 + (1));
seq__46087_46724 = G__46731;
chunk__46088_46725 = G__46732;
count__46089_46726 = G__46733;
i__46090_46727 = G__46734;
continue;
} else {
var temp__5753__auto___46735 = cljs.core.seq(seq__46087_46724);
if(temp__5753__auto___46735){
var seq__46087_46736__$1 = temp__5753__auto___46735;
if(cljs.core.chunked_seq_QMARK_(seq__46087_46736__$1)){
var c__4649__auto___46737 = cljs.core.chunk_first(seq__46087_46736__$1);
var G__46738 = cljs.core.chunk_rest(seq__46087_46736__$1);
var G__46739 = c__4649__auto___46737;
var G__46740 = cljs.core.count(c__4649__auto___46737);
var G__46741 = (0);
seq__46087_46724 = G__46738;
chunk__46088_46725 = G__46739;
count__46089_46726 = G__46740;
i__46090_46727 = G__46741;
continue;
} else {
var vec__46116_46743 = cljs.core.first(seq__46087_46736__$1);
var script_tag_46744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46116_46743,(0),null);
var script_body_46745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46116_46743,(1),null);
eval(script_body_46745);


var G__46749 = cljs.core.next(seq__46087_46736__$1);
var G__46750 = null;
var G__46751 = (0);
var G__46752 = (0);
seq__46087_46724 = G__46749;
chunk__46088_46725 = G__46750;
count__46089_46726 = G__46751;
i__46090_46727 = G__46752;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46120){
var vec__46121 = p__46120;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46121,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46121,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46136 = arguments.length;
switch (G__46136) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46143 = cljs.core.seq(style_keys);
var chunk__46144 = null;
var count__46145 = (0);
var i__46146 = (0);
while(true){
if((i__46146 < count__46145)){
var it = chunk__46144.cljs$core$IIndexed$_nth$arity$2(null,i__46146);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46764 = seq__46143;
var G__46765 = chunk__46144;
var G__46766 = count__46145;
var G__46767 = (i__46146 + (1));
seq__46143 = G__46764;
chunk__46144 = G__46765;
count__46145 = G__46766;
i__46146 = G__46767;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46143);
if(temp__5753__auto__){
var seq__46143__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46143__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46143__$1);
var G__46768 = cljs.core.chunk_rest(seq__46143__$1);
var G__46769 = c__4649__auto__;
var G__46770 = cljs.core.count(c__4649__auto__);
var G__46771 = (0);
seq__46143 = G__46768;
chunk__46144 = G__46769;
count__46145 = G__46770;
i__46146 = G__46771;
continue;
} else {
var it = cljs.core.first(seq__46143__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46772 = cljs.core.next(seq__46143__$1);
var G__46773 = null;
var G__46774 = (0);
var G__46775 = (0);
seq__46143 = G__46772;
chunk__46144 = G__46773;
count__46145 = G__46774;
i__46146 = G__46775;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k46159,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__46175 = k46159;
var G__46175__$1 = (((G__46175 instanceof cljs.core.Keyword))?G__46175.fqn:null);
switch (G__46175__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46159,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__46178){
var vec__46180 = p__46178;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46180,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46180,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46158){
var self__ = this;
var G__46158__$1 = this;
return (new cljs.core.RecordIter((0),G__46158__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46161,other46162){
var self__ = this;
var this46161__$1 = this;
return (((!((other46162 == null)))) && ((((this46161__$1.constructor === other46162.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46161__$1.x,other46162.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46161__$1.y,other46162.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46161__$1.__extmap,other46162.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k46159){
var self__ = this;
var this__4479__auto____$1 = this;
var G__46210 = k46159;
var G__46210__$1 = (((G__46210 instanceof cljs.core.Keyword))?G__46210.fqn:null);
switch (G__46210__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46159);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__46158){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__46214 = cljs.core.keyword_identical_QMARK_;
var expr__46215 = k__4481__auto__;
if(cljs.core.truth_((pred__46214.cljs$core$IFn$_invoke$arity$2 ? pred__46214.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46215) : pred__46214.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46215)))){
return (new shadow.dom.Coordinate(G__46158,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46214.cljs$core$IFn$_invoke$arity$2 ? pred__46214.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46215) : pred__46214.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46215)))){
return (new shadow.dom.Coordinate(self__.x,G__46158,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__46158),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__46158){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46158,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46169){
var extmap__4512__auto__ = (function (){var G__46237 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46169,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46169)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46237);
} else {
return G__46237;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46169),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46169),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k46252,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__46269 = k46252;
var G__46269__$1 = (((G__46269 instanceof cljs.core.Keyword))?G__46269.fqn:null);
switch (G__46269__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46252,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__46274){
var vec__46276 = p__46274;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46276,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46276,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46251){
var self__ = this;
var G__46251__$1 = this;
return (new cljs.core.RecordIter((0),G__46251__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46253,other46254){
var self__ = this;
var this46253__$1 = this;
return (((!((other46254 == null)))) && ((((this46253__$1.constructor === other46254.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46253__$1.w,other46254.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46253__$1.h,other46254.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46253__$1.__extmap,other46254.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k46252){
var self__ = this;
var this__4479__auto____$1 = this;
var G__46302 = k46252;
var G__46302__$1 = (((G__46302 instanceof cljs.core.Keyword))?G__46302.fqn:null);
switch (G__46302__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46252);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__46251){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__46308 = cljs.core.keyword_identical_QMARK_;
var expr__46309 = k__4481__auto__;
if(cljs.core.truth_((pred__46308.cljs$core$IFn$_invoke$arity$2 ? pred__46308.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46309) : pred__46308.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46309)))){
return (new shadow.dom.Size(G__46251,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46308.cljs$core$IFn$_invoke$arity$2 ? pred__46308.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46309) : pred__46308.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46309)))){
return (new shadow.dom.Size(self__.w,G__46251,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__46251),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__46251){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46251,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46260){
var extmap__4512__auto__ = (function (){var G__46318 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46260,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46260)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46318);
} else {
return G__46318;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46260),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46260),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__46828 = (i + (1));
var G__46829 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46828;
ret = G__46829;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46331){
var vec__46332 = p__46331;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46332,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46332,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46336 = arguments.length;
switch (G__46336) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46837 = ps;
var G__46838 = (i + (1));
el__$1 = G__46837;
i = G__46838;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46356 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46356,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46356,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46356,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46362_46843 = cljs.core.seq(props);
var chunk__46363_46844 = null;
var count__46364_46845 = (0);
var i__46365_46846 = (0);
while(true){
if((i__46365_46846 < count__46364_46845)){
var vec__46381_46847 = chunk__46363_46844.cljs$core$IIndexed$_nth$arity$2(null,i__46365_46846);
var k_46848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46381_46847,(0),null);
var v_46849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46381_46847,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_46848);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46848),v_46849);


var G__46852 = seq__46362_46843;
var G__46853 = chunk__46363_46844;
var G__46854 = count__46364_46845;
var G__46855 = (i__46365_46846 + (1));
seq__46362_46843 = G__46852;
chunk__46363_46844 = G__46853;
count__46364_46845 = G__46854;
i__46365_46846 = G__46855;
continue;
} else {
var temp__5753__auto___46856 = cljs.core.seq(seq__46362_46843);
if(temp__5753__auto___46856){
var seq__46362_46857__$1 = temp__5753__auto___46856;
if(cljs.core.chunked_seq_QMARK_(seq__46362_46857__$1)){
var c__4649__auto___46858 = cljs.core.chunk_first(seq__46362_46857__$1);
var G__46859 = cljs.core.chunk_rest(seq__46362_46857__$1);
var G__46860 = c__4649__auto___46858;
var G__46861 = cljs.core.count(c__4649__auto___46858);
var G__46862 = (0);
seq__46362_46843 = G__46859;
chunk__46363_46844 = G__46860;
count__46364_46845 = G__46861;
i__46365_46846 = G__46862;
continue;
} else {
var vec__46390_46863 = cljs.core.first(seq__46362_46857__$1);
var k_46864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46390_46863,(0),null);
var v_46865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46390_46863,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_46864);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46864),v_46865);


var G__46866 = cljs.core.next(seq__46362_46857__$1);
var G__46867 = null;
var G__46868 = (0);
var G__46869 = (0);
seq__46362_46843 = G__46866;
chunk__46363_46844 = G__46867;
count__46364_46845 = G__46868;
i__46365_46846 = G__46869;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46402 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46402,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46402,(1),null);
var seq__46405_46870 = cljs.core.seq(node_children);
var chunk__46407_46871 = null;
var count__46408_46872 = (0);
var i__46409_46873 = (0);
while(true){
if((i__46409_46873 < count__46408_46872)){
var child_struct_46874 = chunk__46407_46871.cljs$core$IIndexed$_nth$arity$2(null,i__46409_46873);
if((!((child_struct_46874 == null)))){
if(typeof child_struct_46874 === 'string'){
var text_46877 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46877),child_struct_46874].join(''));
} else {
var children_46878 = shadow.dom.svg_node(child_struct_46874);
if(cljs.core.seq_QMARK_(children_46878)){
var seq__46444_46879 = cljs.core.seq(children_46878);
var chunk__46446_46880 = null;
var count__46447_46881 = (0);
var i__46448_46882 = (0);
while(true){
if((i__46448_46882 < count__46447_46881)){
var child_46884 = chunk__46446_46880.cljs$core$IIndexed$_nth$arity$2(null,i__46448_46882);
if(cljs.core.truth_(child_46884)){
node.appendChild(child_46884);


var G__46885 = seq__46444_46879;
var G__46886 = chunk__46446_46880;
var G__46887 = count__46447_46881;
var G__46888 = (i__46448_46882 + (1));
seq__46444_46879 = G__46885;
chunk__46446_46880 = G__46886;
count__46447_46881 = G__46887;
i__46448_46882 = G__46888;
continue;
} else {
var G__46889 = seq__46444_46879;
var G__46890 = chunk__46446_46880;
var G__46891 = count__46447_46881;
var G__46892 = (i__46448_46882 + (1));
seq__46444_46879 = G__46889;
chunk__46446_46880 = G__46890;
count__46447_46881 = G__46891;
i__46448_46882 = G__46892;
continue;
}
} else {
var temp__5753__auto___46893 = cljs.core.seq(seq__46444_46879);
if(temp__5753__auto___46893){
var seq__46444_46894__$1 = temp__5753__auto___46893;
if(cljs.core.chunked_seq_QMARK_(seq__46444_46894__$1)){
var c__4649__auto___46895 = cljs.core.chunk_first(seq__46444_46894__$1);
var G__46896 = cljs.core.chunk_rest(seq__46444_46894__$1);
var G__46897 = c__4649__auto___46895;
var G__46898 = cljs.core.count(c__4649__auto___46895);
var G__46899 = (0);
seq__46444_46879 = G__46896;
chunk__46446_46880 = G__46897;
count__46447_46881 = G__46898;
i__46448_46882 = G__46899;
continue;
} else {
var child_46901 = cljs.core.first(seq__46444_46894__$1);
if(cljs.core.truth_(child_46901)){
node.appendChild(child_46901);


var G__46902 = cljs.core.next(seq__46444_46894__$1);
var G__46903 = null;
var G__46904 = (0);
var G__46905 = (0);
seq__46444_46879 = G__46902;
chunk__46446_46880 = G__46903;
count__46447_46881 = G__46904;
i__46448_46882 = G__46905;
continue;
} else {
var G__46906 = cljs.core.next(seq__46444_46894__$1);
var G__46907 = null;
var G__46908 = (0);
var G__46909 = (0);
seq__46444_46879 = G__46906;
chunk__46446_46880 = G__46907;
count__46447_46881 = G__46908;
i__46448_46882 = G__46909;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46878);
}
}


var G__46911 = seq__46405_46870;
var G__46912 = chunk__46407_46871;
var G__46913 = count__46408_46872;
var G__46914 = (i__46409_46873 + (1));
seq__46405_46870 = G__46911;
chunk__46407_46871 = G__46912;
count__46408_46872 = G__46913;
i__46409_46873 = G__46914;
continue;
} else {
var G__46915 = seq__46405_46870;
var G__46916 = chunk__46407_46871;
var G__46917 = count__46408_46872;
var G__46918 = (i__46409_46873 + (1));
seq__46405_46870 = G__46915;
chunk__46407_46871 = G__46916;
count__46408_46872 = G__46917;
i__46409_46873 = G__46918;
continue;
}
} else {
var temp__5753__auto___46919 = cljs.core.seq(seq__46405_46870);
if(temp__5753__auto___46919){
var seq__46405_46923__$1 = temp__5753__auto___46919;
if(cljs.core.chunked_seq_QMARK_(seq__46405_46923__$1)){
var c__4649__auto___46924 = cljs.core.chunk_first(seq__46405_46923__$1);
var G__46925 = cljs.core.chunk_rest(seq__46405_46923__$1);
var G__46926 = c__4649__auto___46924;
var G__46927 = cljs.core.count(c__4649__auto___46924);
var G__46928 = (0);
seq__46405_46870 = G__46925;
chunk__46407_46871 = G__46926;
count__46408_46872 = G__46927;
i__46409_46873 = G__46928;
continue;
} else {
var child_struct_46929 = cljs.core.first(seq__46405_46923__$1);
if((!((child_struct_46929 == null)))){
if(typeof child_struct_46929 === 'string'){
var text_46930 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46930),child_struct_46929].join(''));
} else {
var children_46931 = shadow.dom.svg_node(child_struct_46929);
if(cljs.core.seq_QMARK_(children_46931)){
var seq__46458_46932 = cljs.core.seq(children_46931);
var chunk__46460_46933 = null;
var count__46461_46934 = (0);
var i__46462_46935 = (0);
while(true){
if((i__46462_46935 < count__46461_46934)){
var child_46936 = chunk__46460_46933.cljs$core$IIndexed$_nth$arity$2(null,i__46462_46935);
if(cljs.core.truth_(child_46936)){
node.appendChild(child_46936);


var G__46937 = seq__46458_46932;
var G__46938 = chunk__46460_46933;
var G__46939 = count__46461_46934;
var G__46940 = (i__46462_46935 + (1));
seq__46458_46932 = G__46937;
chunk__46460_46933 = G__46938;
count__46461_46934 = G__46939;
i__46462_46935 = G__46940;
continue;
} else {
var G__46941 = seq__46458_46932;
var G__46942 = chunk__46460_46933;
var G__46943 = count__46461_46934;
var G__46944 = (i__46462_46935 + (1));
seq__46458_46932 = G__46941;
chunk__46460_46933 = G__46942;
count__46461_46934 = G__46943;
i__46462_46935 = G__46944;
continue;
}
} else {
var temp__5753__auto___46945__$1 = cljs.core.seq(seq__46458_46932);
if(temp__5753__auto___46945__$1){
var seq__46458_46946__$1 = temp__5753__auto___46945__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46458_46946__$1)){
var c__4649__auto___46947 = cljs.core.chunk_first(seq__46458_46946__$1);
var G__46948 = cljs.core.chunk_rest(seq__46458_46946__$1);
var G__46949 = c__4649__auto___46947;
var G__46950 = cljs.core.count(c__4649__auto___46947);
var G__46951 = (0);
seq__46458_46932 = G__46948;
chunk__46460_46933 = G__46949;
count__46461_46934 = G__46950;
i__46462_46935 = G__46951;
continue;
} else {
var child_46952 = cljs.core.first(seq__46458_46946__$1);
if(cljs.core.truth_(child_46952)){
node.appendChild(child_46952);


var G__46953 = cljs.core.next(seq__46458_46946__$1);
var G__46954 = null;
var G__46955 = (0);
var G__46956 = (0);
seq__46458_46932 = G__46953;
chunk__46460_46933 = G__46954;
count__46461_46934 = G__46955;
i__46462_46935 = G__46956;
continue;
} else {
var G__46957 = cljs.core.next(seq__46458_46946__$1);
var G__46958 = null;
var G__46959 = (0);
var G__46960 = (0);
seq__46458_46932 = G__46957;
chunk__46460_46933 = G__46958;
count__46461_46934 = G__46959;
i__46462_46935 = G__46960;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46931);
}
}


var G__46961 = cljs.core.next(seq__46405_46923__$1);
var G__46962 = null;
var G__46963 = (0);
var G__46964 = (0);
seq__46405_46870 = G__46961;
chunk__46407_46871 = G__46962;
count__46408_46872 = G__46963;
i__46409_46873 = G__46964;
continue;
} else {
var G__46965 = cljs.core.next(seq__46405_46923__$1);
var G__46966 = null;
var G__46967 = (0);
var G__46968 = (0);
seq__46405_46870 = G__46965;
chunk__46407_46871 = G__46966;
count__46408_46872 = G__46967;
i__46409_46873 = G__46968;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___46972 = arguments.length;
var i__4830__auto___46977 = (0);
while(true){
if((i__4830__auto___46977 < len__4829__auto___46972)){
args__4835__auto__.push((arguments[i__4830__auto___46977]));

var G__46978 = (i__4830__auto___46977 + (1));
i__4830__auto___46977 = G__46978;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46477){
var G__46478 = cljs.core.first(seq46477);
var seq46477__$1 = cljs.core.next(seq46477);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46478,seq46477__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46482 = arguments.length;
switch (G__46482) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__43144__auto___46983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_46491){
var state_val_46492 = (state_46491[(1)]);
if((state_val_46492 === (1))){
var state_46491__$1 = state_46491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46491__$1,(2),once_or_cleanup);
} else {
if((state_val_46492 === (2))){
var inst_46488 = (state_46491[(2)]);
var inst_46489 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46491__$1 = (function (){var statearr_46497 = state_46491;
(statearr_46497[(7)] = inst_46488);

return statearr_46497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46491__$1,inst_46489);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42992__auto__ = null;
var shadow$dom$state_machine__42992__auto____0 = (function (){
var statearr_46498 = [null,null,null,null,null,null,null,null];
(statearr_46498[(0)] = shadow$dom$state_machine__42992__auto__);

(statearr_46498[(1)] = (1));

return statearr_46498;
});
var shadow$dom$state_machine__42992__auto____1 = (function (state_46491){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_46491);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e46499){var ex__42995__auto__ = e46499;
var statearr_46500_46986 = state_46491;
(statearr_46500_46986[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_46491[(4)]))){
var statearr_46501_46987 = state_46491;
(statearr_46501_46987[(1)] = cljs.core.first((state_46491[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46988 = state_46491;
state_46491 = G__46988;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
shadow$dom$state_machine__42992__auto__ = function(state_46491){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42992__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42992__auto____1.call(this,state_46491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42992__auto____0;
shadow$dom$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42992__auto____1;
return shadow$dom$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_46502 = f__43145__auto__();
(statearr_46502[(6)] = c__43144__auto___46983);

return statearr_46502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
