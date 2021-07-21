goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__43280,res){
var map__43281 = p__43280;
var map__43281__$1 = cljs.core.__destructure_map(map__43281);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43281__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43281__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__43282 = res;
var G__43282__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43282,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__43282);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43282__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__43282__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__43285 = arguments.length;
switch (G__43285) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__43288,msg,handlers,timeout_after_ms){
var map__43289 = p__43288;
var map__43289__$1 = cljs.core.__destructure_map(map__43289);
var runtime = map__43289__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___43483 = arguments.length;
var i__4830__auto___43484 = (0);
while(true){
if((i__4830__auto___43484 < len__4829__auto___43483)){
args__4835__auto__.push((arguments[i__4830__auto___43484]));

var G__43485 = (i__4830__auto___43484 + (1));
i__4830__auto___43484 = G__43485;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__43318,ev,args){
var map__43319 = p__43318;
var map__43319__$1 = cljs.core.__destructure_map(map__43319);
var runtime = map__43319__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__43320 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__43323 = null;
var count__43324 = (0);
var i__43325 = (0);
while(true){
if((i__43325 < count__43324)){
var ext = chunk__43323.cljs$core$IIndexed$_nth$arity$2(null,i__43325);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__43487 = seq__43320;
var G__43488 = chunk__43323;
var G__43489 = count__43324;
var G__43490 = (i__43325 + (1));
seq__43320 = G__43487;
chunk__43323 = G__43488;
count__43324 = G__43489;
i__43325 = G__43490;
continue;
} else {
var G__43492 = seq__43320;
var G__43493 = chunk__43323;
var G__43494 = count__43324;
var G__43495 = (i__43325 + (1));
seq__43320 = G__43492;
chunk__43323 = G__43493;
count__43324 = G__43494;
i__43325 = G__43495;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43320);
if(temp__5753__auto__){
var seq__43320__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43320__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__43320__$1);
var G__43496 = cljs.core.chunk_rest(seq__43320__$1);
var G__43497 = c__4649__auto__;
var G__43498 = cljs.core.count(c__4649__auto__);
var G__43499 = (0);
seq__43320 = G__43496;
chunk__43323 = G__43497;
count__43324 = G__43498;
i__43325 = G__43499;
continue;
} else {
var ext = cljs.core.first(seq__43320__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__43503 = cljs.core.next(seq__43320__$1);
var G__43504 = null;
var G__43505 = (0);
var G__43506 = (0);
seq__43320 = G__43503;
chunk__43323 = G__43504;
count__43324 = G__43505;
i__43325 = G__43506;
continue;
} else {
var G__43507 = cljs.core.next(seq__43320__$1);
var G__43508 = null;
var G__43509 = (0);
var G__43510 = (0);
seq__43320 = G__43507;
chunk__43323 = G__43508;
count__43324 = G__43509;
i__43325 = G__43510;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq43291){
var G__43292 = cljs.core.first(seq43291);
var seq43291__$1 = cljs.core.next(seq43291);
var G__43293 = cljs.core.first(seq43291__$1);
var seq43291__$2 = cljs.core.next(seq43291__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43292,G__43293,seq43291__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__43379,p__43380){
var map__43381 = p__43379;
var map__43381__$1 = cljs.core.__destructure_map(map__43381);
var runtime = map__43381__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43381__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43382 = p__43380;
var map__43382__$1 = cljs.core.__destructure_map(map__43382);
var msg = map__43382__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43382__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__43383 = cljs.core.deref(state_ref);
var map__43383__$1 = cljs.core.__destructure_map(map__43383);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43383__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43383__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__43389){
var map__43390 = p__43389;
var map__43390__$1 = cljs.core.__destructure_map(map__43390);
var runtime = map__43390__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43390__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__43395,msg){
var map__43396 = p__43395;
var map__43396__$1 = cljs.core.__destructure_map(map__43396);
var runtime = map__43396__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43396__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__43419,key,p__43420){
var map__43423 = p__43419;
var map__43423__$1 = cljs.core.__destructure_map(map__43423);
var state = map__43423__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43423__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__43424 = p__43420;
var map__43424__$1 = cljs.core.__destructure_map(map__43424);
var spec = map__43424__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43424__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__43430,key,spec){
var map__43435 = p__43430;
var map__43435__$1 = cljs.core.__destructure_map(map__43435);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43435__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__43438_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__43438_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__43439_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__43439_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__43440_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__43440_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__43441_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__43441_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__43442_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__43442_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__43445,key){
var map__43446 = p__43445;
var map__43446__$1 = cljs.core.__destructure_map(map__43446);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43446__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__43447,msg){
var map__43448 = p__43447;
var map__43448__$1 = cljs.core.__destructure_map(map__43448);
var runtime = map__43448__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43448__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__43451,p__43452){
var map__43453 = p__43451;
var map__43453__$1 = cljs.core.__destructure_map(map__43453);
var runtime = map__43453__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43453__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43454 = p__43452;
var map__43454__$1 = cljs.core.__destructure_map(map__43454);
var msg = map__43454__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43454__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43454__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__43455 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__43457 = null;
var count__43458 = (0);
var i__43459 = (0);
while(true){
if((i__43459 < count__43458)){
var map__43465 = chunk__43457.cljs$core$IIndexed$_nth$arity$2(null,i__43459);
var map__43465__$1 = cljs.core.__destructure_map(map__43465);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43465__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__43548 = seq__43455;
var G__43549 = chunk__43457;
var G__43550 = count__43458;
var G__43551 = (i__43459 + (1));
seq__43455 = G__43548;
chunk__43457 = G__43549;
count__43458 = G__43550;
i__43459 = G__43551;
continue;
} else {
var G__43552 = seq__43455;
var G__43553 = chunk__43457;
var G__43554 = count__43458;
var G__43555 = (i__43459 + (1));
seq__43455 = G__43552;
chunk__43457 = G__43553;
count__43458 = G__43554;
i__43459 = G__43555;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43455);
if(temp__5753__auto__){
var seq__43455__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43455__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__43455__$1);
var G__43561 = cljs.core.chunk_rest(seq__43455__$1);
var G__43562 = c__4649__auto__;
var G__43563 = cljs.core.count(c__4649__auto__);
var G__43564 = (0);
seq__43455 = G__43561;
chunk__43457 = G__43562;
count__43458 = G__43563;
i__43459 = G__43564;
continue;
} else {
var map__43470 = cljs.core.first(seq__43455__$1);
var map__43470__$1 = cljs.core.__destructure_map(map__43470);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43470__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__43570 = cljs.core.next(seq__43455__$1);
var G__43571 = null;
var G__43572 = (0);
var G__43573 = (0);
seq__43455 = G__43570;
chunk__43457 = G__43571;
count__43458 = G__43572;
i__43459 = G__43573;
continue;
} else {
var G__43574 = cljs.core.next(seq__43455__$1);
var G__43575 = null;
var G__43576 = (0);
var G__43577 = (0);
seq__43455 = G__43574;
chunk__43457 = G__43575;
count__43458 = G__43576;
i__43459 = G__43577;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
