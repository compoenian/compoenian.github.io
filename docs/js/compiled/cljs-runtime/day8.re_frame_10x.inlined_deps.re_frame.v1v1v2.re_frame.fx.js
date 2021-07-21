goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__32118 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32119 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32119);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32277 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32277)){
var new_db_32278 = temp__5753__auto___32277;
var fexpr__32123_32279 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32123_32279.cljs$core$IFn$_invoke$arity$1 ? fexpr__32123_32279.cljs$core$IFn$_invoke$arity$1(new_db_32278) : fexpr__32123_32279.call(null,new_db_32278));
} else {
}

var seq__32126 = cljs.core.seq(effects_without_db);
var chunk__32127 = null;
var count__32128 = (0);
var i__32129 = (0);
while(true){
if((i__32129 < count__32128)){
var vec__32140 = chunk__32127.cljs$core$IIndexed$_nth$arity$2(null,i__32129);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32140,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32140,(1),null);
var temp__5751__auto___32280 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32280)){
var effect_fn_32281 = temp__5751__auto___32280;
(effect_fn_32281.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32281.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32281.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32282 = seq__32126;
var G__32283 = chunk__32127;
var G__32284 = count__32128;
var G__32285 = (i__32129 + (1));
seq__32126 = G__32282;
chunk__32127 = G__32283;
count__32128 = G__32284;
i__32129 = G__32285;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32126);
if(temp__5753__auto__){
var seq__32126__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32126__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32126__$1);
var G__32286 = cljs.core.chunk_rest(seq__32126__$1);
var G__32287 = c__4649__auto__;
var G__32288 = cljs.core.count(c__4649__auto__);
var G__32289 = (0);
seq__32126 = G__32286;
chunk__32127 = G__32287;
count__32128 = G__32288;
i__32129 = G__32289;
continue;
} else {
var vec__32145 = cljs.core.first(seq__32126__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32145,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32145,(1),null);
var temp__5751__auto___32290 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32290)){
var effect_fn_32291 = temp__5751__auto___32290;
(effect_fn_32291.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32291.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32291.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32292 = cljs.core.next(seq__32126__$1);
var G__32293 = null;
var G__32294 = (0);
var G__32295 = (0);
seq__32126 = G__32292;
chunk__32127 = G__32293;
count__32128 = G__32294;
i__32129 = G__32295;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__31762__auto___32297 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__31763__auto___32298 = (end__31762__auto___32297 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31763__auto___32298,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__31762__auto___32297);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32118);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32300 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32300)){
var new_db_32301 = temp__5753__auto___32300;
var fexpr__32149_32302 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32149_32302.cljs$core$IFn$_invoke$arity$1 ? fexpr__32149_32302.cljs$core$IFn$_invoke$arity$1(new_db_32301) : fexpr__32149_32302.call(null,new_db_32301));
} else {
}

var seq__32152 = cljs.core.seq(effects_without_db);
var chunk__32153 = null;
var count__32154 = (0);
var i__32155 = (0);
while(true){
if((i__32155 < count__32154)){
var vec__32179 = chunk__32153.cljs$core$IIndexed$_nth$arity$2(null,i__32155);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32179,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32179,(1),null);
var temp__5751__auto___32307 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32307)){
var effect_fn_32309 = temp__5751__auto___32307;
(effect_fn_32309.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32309.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32309.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32310 = seq__32152;
var G__32311 = chunk__32153;
var G__32312 = count__32154;
var G__32313 = (i__32155 + (1));
seq__32152 = G__32310;
chunk__32153 = G__32311;
count__32154 = G__32312;
i__32155 = G__32313;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32152);
if(temp__5753__auto__){
var seq__32152__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32152__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32152__$1);
var G__32315 = cljs.core.chunk_rest(seq__32152__$1);
var G__32316 = c__4649__auto__;
var G__32317 = cljs.core.count(c__4649__auto__);
var G__32318 = (0);
seq__32152 = G__32315;
chunk__32153 = G__32316;
count__32154 = G__32317;
i__32155 = G__32318;
continue;
} else {
var vec__32182 = cljs.core.first(seq__32152__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32182,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32182,(1),null);
var temp__5751__auto___32321 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32321)){
var effect_fn_32322 = temp__5751__auto___32321;
(effect_fn_32322.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32322.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32322.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32325 = cljs.core.next(seq__32152__$1);
var G__32326 = null;
var G__32327 = (0);
var G__32328 = (0);
seq__32152 = G__32325;
chunk__32153 = G__32326;
count__32154 = G__32327;
i__32155 = G__32328;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__32185){
var map__32186 = p__32185;
var map__32186__$1 = cljs.core.__destructure_map(map__32186);
var effect = map__32186__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32186__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32186__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__32191 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32192 = null;
var count__32193 = (0);
var i__32194 = (0);
while(true){
if((i__32194 < count__32193)){
var effect = chunk__32192.cljs$core$IIndexed$_nth$arity$2(null,i__32194);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32339 = seq__32191;
var G__32340 = chunk__32192;
var G__32341 = count__32193;
var G__32342 = (i__32194 + (1));
seq__32191 = G__32339;
chunk__32192 = G__32340;
count__32193 = G__32341;
i__32194 = G__32342;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32191);
if(temp__5753__auto__){
var seq__32191__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32191__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32191__$1);
var G__32343 = cljs.core.chunk_rest(seq__32191__$1);
var G__32344 = c__4649__auto__;
var G__32345 = cljs.core.count(c__4649__auto__);
var G__32346 = (0);
seq__32191 = G__32343;
chunk__32192 = G__32344;
count__32193 = G__32345;
i__32194 = G__32346;
continue;
} else {
var effect = cljs.core.first(seq__32191__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32348 = cljs.core.next(seq__32191__$1);
var G__32349 = null;
var G__32350 = (0);
var G__32351 = (0);
seq__32191 = G__32348;
chunk__32192 = G__32349;
count__32193 = G__32350;
i__32194 = G__32351;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__32199 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32200 = null;
var count__32201 = (0);
var i__32202 = (0);
while(true){
if((i__32202 < count__32201)){
var vec__32219 = chunk__32200.cljs$core$IIndexed$_nth$arity$2(null,i__32202);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32219,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32355 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32355)){
var effect_fn_32357 = temp__5751__auto___32355;
(effect_fn_32357.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32357.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32357.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32360 = seq__32199;
var G__32361 = chunk__32200;
var G__32362 = count__32201;
var G__32363 = (i__32202 + (1));
seq__32199 = G__32360;
chunk__32200 = G__32361;
count__32201 = G__32362;
i__32202 = G__32363;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32199);
if(temp__5753__auto__){
var seq__32199__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32199__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32199__$1);
var G__32365 = cljs.core.chunk_rest(seq__32199__$1);
var G__32366 = c__4649__auto__;
var G__32367 = cljs.core.count(c__4649__auto__);
var G__32368 = (0);
seq__32199 = G__32365;
chunk__32200 = G__32366;
count__32201 = G__32367;
i__32202 = G__32368;
continue;
} else {
var vec__32230 = cljs.core.first(seq__32199__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32230,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32230,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32369 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32369)){
var effect_fn_32370 = temp__5751__auto___32369;
(effect_fn_32370.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32370.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32370.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32371 = cljs.core.next(seq__32199__$1);
var G__32372 = null;
var G__32373 = (0);
var G__32374 = (0);
seq__32199 = G__32371;
chunk__32200 = G__32372;
count__32201 = G__32373;
i__32202 = G__32374;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__32248 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32249 = null;
var count__32250 = (0);
var i__32251 = (0);
while(true){
if((i__32251 < count__32250)){
var event = chunk__32249.cljs$core$IIndexed$_nth$arity$2(null,i__32251);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32375 = seq__32248;
var G__32376 = chunk__32249;
var G__32377 = count__32250;
var G__32378 = (i__32251 + (1));
seq__32248 = G__32375;
chunk__32249 = G__32376;
count__32250 = G__32377;
i__32251 = G__32378;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32248);
if(temp__5753__auto__){
var seq__32248__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32248__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32248__$1);
var G__32379 = cljs.core.chunk_rest(seq__32248__$1);
var G__32380 = c__4649__auto__;
var G__32381 = cljs.core.count(c__4649__auto__);
var G__32382 = (0);
seq__32248 = G__32379;
chunk__32249 = G__32380;
count__32250 = G__32381;
i__32251 = G__32382;
continue;
} else {
var event = cljs.core.first(seq__32248__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32383 = cljs.core.next(seq__32248__$1);
var G__32384 = null;
var G__32385 = (0);
var G__32386 = (0);
seq__32248 = G__32383;
chunk__32249 = G__32384;
count__32250 = G__32385;
i__32251 = G__32386;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__32266 = cljs.core.seq(value);
var chunk__32267 = null;
var count__32268 = (0);
var i__32269 = (0);
while(true){
if((i__32269 < count__32268)){
var event = chunk__32267.cljs$core$IIndexed$_nth$arity$2(null,i__32269);
clear_event(event);


var G__32387 = seq__32266;
var G__32388 = chunk__32267;
var G__32389 = count__32268;
var G__32390 = (i__32269 + (1));
seq__32266 = G__32387;
chunk__32267 = G__32388;
count__32268 = G__32389;
i__32269 = G__32390;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32266);
if(temp__5753__auto__){
var seq__32266__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32266__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32266__$1);
var G__32391 = cljs.core.chunk_rest(seq__32266__$1);
var G__32392 = c__4649__auto__;
var G__32393 = cljs.core.count(c__4649__auto__);
var G__32394 = (0);
seq__32266 = G__32391;
chunk__32267 = G__32392;
count__32268 = G__32393;
i__32269 = G__32394;
continue;
} else {
var event = cljs.core.first(seq__32266__$1);
clear_event(event);


var G__32395 = cljs.core.next(seq__32266__$1);
var G__32396 = null;
var G__32397 = (0);
var G__32398 = (0);
seq__32266 = G__32395;
chunk__32267 = G__32396;
count__32268 = G__32397;
i__32269 = G__32398;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
