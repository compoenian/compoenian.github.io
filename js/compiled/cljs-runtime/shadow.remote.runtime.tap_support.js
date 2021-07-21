goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44088,p__44089){
var map__44090 = p__44088;
var map__44090__$1 = cljs.core.__destructure_map(map__44090);
var svc = map__44090__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44090__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44090__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44090__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44091 = p__44089;
var map__44091__$1 = cljs.core.__destructure_map(map__44091);
var msg = map__44091__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44091__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44091__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44091__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44091__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44100,p__44101){
var map__44106 = p__44100;
var map__44106__$1 = cljs.core.__destructure_map(map__44106);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44106__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44107 = p__44101;
var map__44107__$1 = cljs.core.__destructure_map(map__44107);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44107__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44134,p__44135){
var map__44137 = p__44134;
var map__44137__$1 = cljs.core.__destructure_map(map__44137);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44137__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44137__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44138 = p__44135;
var map__44138__$1 = cljs.core.__destructure_map(map__44138);
var msg = map__44138__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44138__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44143,tid){
var map__44144 = p__44143;
var map__44144__$1 = cljs.core.__destructure_map(map__44144);
var svc = map__44144__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44144__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44157 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44158 = null;
var count__44159 = (0);
var i__44160 = (0);
while(true){
if((i__44160 < count__44159)){
var vec__44178 = chunk__44158.cljs$core$IIndexed$_nth$arity$2(null,i__44160);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44178,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44178,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44200 = seq__44157;
var G__44201 = chunk__44158;
var G__44202 = count__44159;
var G__44203 = (i__44160 + (1));
seq__44157 = G__44200;
chunk__44158 = G__44201;
count__44159 = G__44202;
i__44160 = G__44203;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44157);
if(temp__5753__auto__){
var seq__44157__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44157__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44157__$1);
var G__44204 = cljs.core.chunk_rest(seq__44157__$1);
var G__44205 = c__4649__auto__;
var G__44206 = cljs.core.count(c__4649__auto__);
var G__44207 = (0);
seq__44157 = G__44204;
chunk__44158 = G__44205;
count__44159 = G__44206;
i__44160 = G__44207;
continue;
} else {
var vec__44184 = cljs.core.first(seq__44157__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44184,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44184,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44208 = cljs.core.next(seq__44157__$1);
var G__44209 = null;
var G__44210 = (0);
var G__44211 = (0);
seq__44157 = G__44208;
chunk__44158 = G__44209;
count__44159 = G__44210;
i__44160 = G__44211;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44146_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44146_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44147_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44147_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44148_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44148_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44149_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44149_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44193){
var map__44194 = p__44193;
var map__44194__$1 = cljs.core.__destructure_map(map__44194);
var svc = map__44194__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44194__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44194__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
