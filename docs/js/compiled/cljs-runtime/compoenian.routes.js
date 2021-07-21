goog.provide('compoenian.routes');
if((typeof compoenian !== 'undefined') && (typeof compoenian.routes !== 'undefined') && (typeof compoenian.routes.panels !== 'undefined')){
} else {
compoenian.routes.panels = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__49581 = cljs.core.get_global_hierarchy;
return (fexpr__49581.cljs$core$IFn$_invoke$arity$0 ? fexpr__49581.cljs$core$IFn$_invoke$arity$0() : fexpr__49581.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("compoenian.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
compoenian.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
compoenian.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, ["",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
compoenian.routes.parse = (function compoenian$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(compoenian.routes.routes),url);
});
compoenian.routes.url_for = (function compoenian$routes$url_for(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49583 = arguments.length;
var i__4830__auto___49584 = (0);
while(true){
if((i__4830__auto___49584 < len__4829__auto___49583)){
args__4835__auto__.push((arguments[i__4830__auto___49584]));

var G__49585 = (i__4830__auto___49584 + (1));
i__4830__auto___49584 = G__49585;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return compoenian.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(compoenian.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(compoenian.routes.routes)], null),args));
}));

(compoenian.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(compoenian.routes.url_for.cljs$lang$applyTo = (function (seq49582){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49582));
}));

compoenian.routes.dispatch = (function compoenian$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("compoenian.events","set-active-panel","compoenian.events/set-active-panel",-1842700670),panel], null));
});
if((typeof compoenian !== 'undefined') && (typeof compoenian.routes !== 'undefined') && (typeof compoenian.routes.history !== 'undefined')){
} else {
compoenian.routes.history = pushy.core.pushy(compoenian.routes.dispatch,compoenian.routes.parse);
}
compoenian.routes.navigate_BANG_ = (function compoenian$routes$navigate_BANG_(handler){
return compoenian.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,compoenian.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler], 0)));
});
compoenian.routes.start_BANG_ = (function compoenian$routes$start_BANG_(){
return compoenian.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return compoenian.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=compoenian.routes.js.map
