goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__35108){
var map__35109 = p__35108;
var map__35109__$1 = cljs.core.__destructure_map(map__35109);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35109__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35109__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35109__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35109__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__35113_35160 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__35114_35161 = null;
var count__35115_35162 = (0);
var i__35116_35163 = (0);
while(true){
if((i__35116_35163 < count__35115_35162)){
var vec__35130_35164 = chunk__35114_35161.cljs$core$IIndexed$_nth$arity$2(null,i__35116_35163);
var k_35165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130_35164,(0),null);
var cb_35166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130_35164,(1),null);
try{var G__35134_35167 = cljs.core.deref(re_frame.trace.traces);
(cb_35166.cljs$core$IFn$_invoke$arity$1 ? cb_35166.cljs$core$IFn$_invoke$arity$1(G__35134_35167) : cb_35166.call(null,G__35134_35167));
}catch (e35133){var e_35168 = e35133;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35165,"while storing",cljs.core.deref(re_frame.trace.traces),e_35168], 0));
}

var G__35170 = seq__35113_35160;
var G__35171 = chunk__35114_35161;
var G__35172 = count__35115_35162;
var G__35173 = (i__35116_35163 + (1));
seq__35113_35160 = G__35170;
chunk__35114_35161 = G__35171;
count__35115_35162 = G__35172;
i__35116_35163 = G__35173;
continue;
} else {
var temp__5753__auto___35174 = cljs.core.seq(seq__35113_35160);
if(temp__5753__auto___35174){
var seq__35113_35175__$1 = temp__5753__auto___35174;
if(cljs.core.chunked_seq_QMARK_(seq__35113_35175__$1)){
var c__4649__auto___35176 = cljs.core.chunk_first(seq__35113_35175__$1);
var G__35177 = cljs.core.chunk_rest(seq__35113_35175__$1);
var G__35178 = c__4649__auto___35176;
var G__35179 = cljs.core.count(c__4649__auto___35176);
var G__35180 = (0);
seq__35113_35160 = G__35177;
chunk__35114_35161 = G__35178;
count__35115_35162 = G__35179;
i__35116_35163 = G__35180;
continue;
} else {
var vec__35135_35181 = cljs.core.first(seq__35113_35175__$1);
var k_35182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35135_35181,(0),null);
var cb_35183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35135_35181,(1),null);
try{var G__35139_35185 = cljs.core.deref(re_frame.trace.traces);
(cb_35183.cljs$core$IFn$_invoke$arity$1 ? cb_35183.cljs$core$IFn$_invoke$arity$1(G__35139_35185) : cb_35183.call(null,G__35139_35185));
}catch (e35138){var e_35186 = e35138;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35182,"while storing",cljs.core.deref(re_frame.trace.traces),e_35186], 0));
}

var G__35187 = cljs.core.next(seq__35113_35175__$1);
var G__35188 = null;
var G__35189 = (0);
var G__35190 = (0);
seq__35113_35160 = G__35187;
chunk__35114_35161 = G__35188;
count__35115_35162 = G__35189;
i__35116_35163 = G__35190;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
