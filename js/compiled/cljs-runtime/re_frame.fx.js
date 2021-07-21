goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__35502 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35503 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35503);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35611 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35611)){
var new_db_35612 = temp__5753__auto___35611;
var fexpr__35509_35613 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35509_35613.cljs$core$IFn$_invoke$arity$1 ? fexpr__35509_35613.cljs$core$IFn$_invoke$arity$1(new_db_35612) : fexpr__35509_35613.call(null,new_db_35612));
} else {
}

var seq__35511 = cljs.core.seq(effects_without_db);
var chunk__35512 = null;
var count__35513 = (0);
var i__35514 = (0);
while(true){
if((i__35514 < count__35513)){
var vec__35528 = chunk__35512.cljs$core$IIndexed$_nth$arity$2(null,i__35514);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35528,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35528,(1),null);
var temp__5751__auto___35614 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35614)){
var effect_fn_35615 = temp__5751__auto___35614;
(effect_fn_35615.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35615.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35615.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35616 = seq__35511;
var G__35617 = chunk__35512;
var G__35618 = count__35513;
var G__35619 = (i__35514 + (1));
seq__35511 = G__35616;
chunk__35512 = G__35617;
count__35513 = G__35618;
i__35514 = G__35619;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35511);
if(temp__5753__auto__){
var seq__35511__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35511__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35511__$1);
var G__35620 = cljs.core.chunk_rest(seq__35511__$1);
var G__35621 = c__4649__auto__;
var G__35622 = cljs.core.count(c__4649__auto__);
var G__35623 = (0);
seq__35511 = G__35620;
chunk__35512 = G__35621;
count__35513 = G__35622;
i__35514 = G__35623;
continue;
} else {
var vec__35533 = cljs.core.first(seq__35511__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35533,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35533,(1),null);
var temp__5751__auto___35624 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35624)){
var effect_fn_35625 = temp__5751__auto___35624;
(effect_fn_35625.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35625.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35625.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35626 = cljs.core.next(seq__35511__$1);
var G__35627 = null;
var G__35628 = (0);
var G__35629 = (0);
seq__35511 = G__35626;
chunk__35512 = G__35627;
count__35513 = G__35628;
i__35514 = G__35629;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__35086__auto___35630 = re_frame.interop.now();
var duration__35087__auto___35631 = (end__35086__auto___35630 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35087__auto___35631,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__35086__auto___35630);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35502);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35633 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35633)){
var new_db_35634 = temp__5753__auto___35633;
var fexpr__35536_35635 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35536_35635.cljs$core$IFn$_invoke$arity$1 ? fexpr__35536_35635.cljs$core$IFn$_invoke$arity$1(new_db_35634) : fexpr__35536_35635.call(null,new_db_35634));
} else {
}

var seq__35537 = cljs.core.seq(effects_without_db);
var chunk__35538 = null;
var count__35539 = (0);
var i__35540 = (0);
while(true){
if((i__35540 < count__35539)){
var vec__35555 = chunk__35538.cljs$core$IIndexed$_nth$arity$2(null,i__35540);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35555,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35555,(1),null);
var temp__5751__auto___35637 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35637)){
var effect_fn_35638 = temp__5751__auto___35637;
(effect_fn_35638.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35638.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35638.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35639 = seq__35537;
var G__35640 = chunk__35538;
var G__35641 = count__35539;
var G__35642 = (i__35540 + (1));
seq__35537 = G__35639;
chunk__35538 = G__35640;
count__35539 = G__35641;
i__35540 = G__35642;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35537);
if(temp__5753__auto__){
var seq__35537__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35537__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35537__$1);
var G__35643 = cljs.core.chunk_rest(seq__35537__$1);
var G__35644 = c__4649__auto__;
var G__35645 = cljs.core.count(c__4649__auto__);
var G__35646 = (0);
seq__35537 = G__35643;
chunk__35538 = G__35644;
count__35539 = G__35645;
i__35540 = G__35646;
continue;
} else {
var vec__35571 = cljs.core.first(seq__35537__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35571,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35571,(1),null);
var temp__5751__auto___35647 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35647)){
var effect_fn_35648 = temp__5751__auto___35647;
(effect_fn_35648.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35648.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35648.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35649 = cljs.core.next(seq__35537__$1);
var G__35650 = null;
var G__35651 = (0);
var G__35652 = (0);
seq__35537 = G__35649;
chunk__35538 = G__35650;
count__35539 = G__35651;
i__35540 = G__35652;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__35574){
var map__35576 = p__35574;
var map__35576__$1 = cljs.core.__destructure_map(map__35576);
var effect = map__35576__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35576__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35576__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__35581 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35582 = null;
var count__35583 = (0);
var i__35584 = (0);
while(true){
if((i__35584 < count__35583)){
var effect = chunk__35582.cljs$core$IIndexed$_nth$arity$2(null,i__35584);
re_frame.fx.dispatch_later(effect);


var G__35655 = seq__35581;
var G__35656 = chunk__35582;
var G__35657 = count__35583;
var G__35658 = (i__35584 + (1));
seq__35581 = G__35655;
chunk__35582 = G__35656;
count__35583 = G__35657;
i__35584 = G__35658;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35581);
if(temp__5753__auto__){
var seq__35581__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35581__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35581__$1);
var G__35659 = cljs.core.chunk_rest(seq__35581__$1);
var G__35660 = c__4649__auto__;
var G__35661 = cljs.core.count(c__4649__auto__);
var G__35662 = (0);
seq__35581 = G__35659;
chunk__35582 = G__35660;
count__35583 = G__35661;
i__35584 = G__35662;
continue;
} else {
var effect = cljs.core.first(seq__35581__$1);
re_frame.fx.dispatch_later(effect);


var G__35663 = cljs.core.next(seq__35581__$1);
var G__35664 = null;
var G__35665 = (0);
var G__35666 = (0);
seq__35581 = G__35663;
chunk__35582 = G__35664;
count__35583 = G__35665;
i__35584 = G__35666;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__35587 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35588 = null;
var count__35589 = (0);
var i__35590 = (0);
while(true){
if((i__35590 < count__35589)){
var vec__35597 = chunk__35588.cljs$core$IIndexed$_nth$arity$2(null,i__35590);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35597,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35597,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35669 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35669)){
var effect_fn_35671 = temp__5751__auto___35669;
(effect_fn_35671.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35671.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35671.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35673 = seq__35587;
var G__35674 = chunk__35588;
var G__35675 = count__35589;
var G__35676 = (i__35590 + (1));
seq__35587 = G__35673;
chunk__35588 = G__35674;
count__35589 = G__35675;
i__35590 = G__35676;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35587);
if(temp__5753__auto__){
var seq__35587__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35587__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35587__$1);
var G__35677 = cljs.core.chunk_rest(seq__35587__$1);
var G__35678 = c__4649__auto__;
var G__35679 = cljs.core.count(c__4649__auto__);
var G__35680 = (0);
seq__35587 = G__35677;
chunk__35588 = G__35678;
count__35589 = G__35679;
i__35590 = G__35680;
continue;
} else {
var vec__35600 = cljs.core.first(seq__35587__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35600,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35600,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35681 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35681)){
var effect_fn_35682 = temp__5751__auto___35681;
(effect_fn_35682.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35682.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35682.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35683 = cljs.core.next(seq__35587__$1);
var G__35684 = null;
var G__35685 = (0);
var G__35686 = (0);
seq__35587 = G__35683;
chunk__35588 = G__35684;
count__35589 = G__35685;
i__35590 = G__35686;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__35603 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35604 = null;
var count__35605 = (0);
var i__35606 = (0);
while(true){
if((i__35606 < count__35605)){
var event = chunk__35604.cljs$core$IIndexed$_nth$arity$2(null,i__35606);
re_frame.router.dispatch(event);


var G__35690 = seq__35603;
var G__35691 = chunk__35604;
var G__35692 = count__35605;
var G__35693 = (i__35606 + (1));
seq__35603 = G__35690;
chunk__35604 = G__35691;
count__35605 = G__35692;
i__35606 = G__35693;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35603);
if(temp__5753__auto__){
var seq__35603__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35603__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35603__$1);
var G__35694 = cljs.core.chunk_rest(seq__35603__$1);
var G__35695 = c__4649__auto__;
var G__35696 = cljs.core.count(c__4649__auto__);
var G__35697 = (0);
seq__35603 = G__35694;
chunk__35604 = G__35695;
count__35605 = G__35696;
i__35606 = G__35697;
continue;
} else {
var event = cljs.core.first(seq__35603__$1);
re_frame.router.dispatch(event);


var G__35698 = cljs.core.next(seq__35603__$1);
var G__35699 = null;
var G__35700 = (0);
var G__35701 = (0);
seq__35603 = G__35698;
chunk__35604 = G__35699;
count__35605 = G__35700;
i__35606 = G__35701;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__35607 = cljs.core.seq(value);
var chunk__35608 = null;
var count__35609 = (0);
var i__35610 = (0);
while(true){
if((i__35610 < count__35609)){
var event = chunk__35608.cljs$core$IIndexed$_nth$arity$2(null,i__35610);
clear_event(event);


var G__35704 = seq__35607;
var G__35705 = chunk__35608;
var G__35706 = count__35609;
var G__35707 = (i__35610 + (1));
seq__35607 = G__35704;
chunk__35608 = G__35705;
count__35609 = G__35706;
i__35610 = G__35707;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35607);
if(temp__5753__auto__){
var seq__35607__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35607__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35607__$1);
var G__35708 = cljs.core.chunk_rest(seq__35607__$1);
var G__35709 = c__4649__auto__;
var G__35710 = cljs.core.count(c__4649__auto__);
var G__35711 = (0);
seq__35607 = G__35708;
chunk__35608 = G__35709;
count__35609 = G__35710;
i__35610 = G__35711;
continue;
} else {
var event = cljs.core.first(seq__35607__$1);
clear_event(event);


var G__35712 = cljs.core.next(seq__35607__$1);
var G__35713 = null;
var G__35714 = (0);
var G__35715 = (0);
seq__35607 = G__35712;
chunk__35608 = G__35713;
count__35609 = G__35714;
i__35610 = G__35715;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
