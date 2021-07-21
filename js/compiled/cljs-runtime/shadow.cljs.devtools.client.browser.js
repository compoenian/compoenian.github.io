goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48296 = arguments.length;
var i__4830__auto___48297 = (0);
while(true){
if((i__4830__auto___48297 < len__4829__auto___48296)){
args__4835__auto__.push((arguments[i__4830__auto___48297]));

var G__48299 = (i__4830__auto___48297 + (1));
i__4830__auto___48297 = G__48299;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47984){
var G__47985 = cljs.core.first(seq47984);
var seq47984__$1 = cljs.core.next(seq47984);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47985,seq47984__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47999 = cljs.core.seq(sources);
var chunk__48000 = null;
var count__48001 = (0);
var i__48002 = (0);
while(true){
if((i__48002 < count__48001)){
var map__48019 = chunk__48000.cljs$core$IIndexed$_nth$arity$2(null,i__48002);
var map__48019__$1 = cljs.core.__destructure_map(map__48019);
var src = map__48019__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48019__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48019__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48019__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48019__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48021){var e_48306 = e48021;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48306);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48306.message)].join('')));
}

var G__48307 = seq__47999;
var G__48308 = chunk__48000;
var G__48309 = count__48001;
var G__48310 = (i__48002 + (1));
seq__47999 = G__48307;
chunk__48000 = G__48308;
count__48001 = G__48309;
i__48002 = G__48310;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47999);
if(temp__5753__auto__){
var seq__47999__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47999__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47999__$1);
var G__48311 = cljs.core.chunk_rest(seq__47999__$1);
var G__48312 = c__4649__auto__;
var G__48313 = cljs.core.count(c__4649__auto__);
var G__48314 = (0);
seq__47999 = G__48311;
chunk__48000 = G__48312;
count__48001 = G__48313;
i__48002 = G__48314;
continue;
} else {
var map__48023 = cljs.core.first(seq__47999__$1);
var map__48023__$1 = cljs.core.__destructure_map(map__48023);
var src = map__48023__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48023__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48026){var e_48316 = e48026;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48316);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48316.message)].join('')));
}

var G__48318 = cljs.core.next(seq__47999__$1);
var G__48319 = null;
var G__48320 = (0);
var G__48321 = (0);
seq__47999 = G__48318;
chunk__48000 = G__48319;
count__48001 = G__48320;
i__48002 = G__48321;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__48033 = cljs.core.seq(js_requires);
var chunk__48034 = null;
var count__48035 = (0);
var i__48036 = (0);
while(true){
if((i__48036 < count__48035)){
var js_ns = chunk__48034.cljs$core$IIndexed$_nth$arity$2(null,i__48036);
var require_str_48345 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48345);


var G__48346 = seq__48033;
var G__48347 = chunk__48034;
var G__48348 = count__48035;
var G__48349 = (i__48036 + (1));
seq__48033 = G__48346;
chunk__48034 = G__48347;
count__48035 = G__48348;
i__48036 = G__48349;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48033);
if(temp__5753__auto__){
var seq__48033__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48033__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48033__$1);
var G__48352 = cljs.core.chunk_rest(seq__48033__$1);
var G__48353 = c__4649__auto__;
var G__48354 = cljs.core.count(c__4649__auto__);
var G__48355 = (0);
seq__48033 = G__48352;
chunk__48034 = G__48353;
count__48035 = G__48354;
i__48036 = G__48355;
continue;
} else {
var js_ns = cljs.core.first(seq__48033__$1);
var require_str_48356 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48356);


var G__48360 = cljs.core.next(seq__48033__$1);
var G__48361 = null;
var G__48362 = (0);
var G__48363 = (0);
seq__48033 = G__48360;
chunk__48034 = G__48361;
count__48035 = G__48362;
i__48036 = G__48363;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__48039){
var map__48040 = p__48039;
var map__48040__$1 = cljs.core.__destructure_map(map__48040);
var msg = map__48040__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48040__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48040__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48041(s__48042){
return (new cljs.core.LazySeq(null,(function (){
var s__48042__$1 = s__48042;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48042__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__48047 = cljs.core.first(xs__6308__auto__);
var map__48047__$1 = cljs.core.__destructure_map(map__48047);
var src = map__48047__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48047__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48047__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__48042__$1,map__48047,map__48047__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48040,map__48040__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48041_$_iter__48043(s__48044){
return (new cljs.core.LazySeq(null,((function (s__48042__$1,map__48047,map__48047__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48040,map__48040__$1,msg,info,reload_info){
return (function (){
var s__48044__$1 = s__48044;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__48044__$1);
if(temp__5753__auto____$1){
var s__48044__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48044__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__48044__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__48046 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__48045 = (0);
while(true){
if((i__48045 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__48045);
cljs.core.chunk_append(b__48046,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48370 = (i__48045 + (1));
i__48045 = G__48370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48046),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48041_$_iter__48043(cljs.core.chunk_rest(s__48044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48046),null);
}
} else {
var warning = cljs.core.first(s__48044__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48041_$_iter__48043(cljs.core.rest(s__48044__$2)));
}
} else {
return null;
}
break;
}
});})(s__48042__$1,map__48047,map__48047__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48040,map__48040__$1,msg,info,reload_info))
,null,null));
});})(s__48042__$1,map__48047,map__48047__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48040,map__48040__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48041(cljs.core.rest(s__48042__$1)));
} else {
var G__48371 = cljs.core.rest(s__48042__$1);
s__48042__$1 = G__48371;
continue;
}
} else {
var G__48372 = cljs.core.rest(s__48042__$1);
s__48042__$1 = G__48372;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__48051_48373 = cljs.core.seq(warnings);
var chunk__48052_48374 = null;
var count__48053_48375 = (0);
var i__48054_48376 = (0);
while(true){
if((i__48054_48376 < count__48053_48375)){
var map__48059_48377 = chunk__48052_48374.cljs$core$IIndexed$_nth$arity$2(null,i__48054_48376);
var map__48059_48378__$1 = cljs.core.__destructure_map(map__48059_48377);
var w_48379 = map__48059_48378__$1;
var msg_48380__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48059_48378__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48059_48378__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48059_48378__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48059_48378__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48383)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48381),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48382),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48380__$1)].join(''));


var G__48385 = seq__48051_48373;
var G__48386 = chunk__48052_48374;
var G__48387 = count__48053_48375;
var G__48388 = (i__48054_48376 + (1));
seq__48051_48373 = G__48385;
chunk__48052_48374 = G__48386;
count__48053_48375 = G__48387;
i__48054_48376 = G__48388;
continue;
} else {
var temp__5753__auto___48389 = cljs.core.seq(seq__48051_48373);
if(temp__5753__auto___48389){
var seq__48051_48390__$1 = temp__5753__auto___48389;
if(cljs.core.chunked_seq_QMARK_(seq__48051_48390__$1)){
var c__4649__auto___48391 = cljs.core.chunk_first(seq__48051_48390__$1);
var G__48392 = cljs.core.chunk_rest(seq__48051_48390__$1);
var G__48393 = c__4649__auto___48391;
var G__48394 = cljs.core.count(c__4649__auto___48391);
var G__48395 = (0);
seq__48051_48373 = G__48392;
chunk__48052_48374 = G__48393;
count__48053_48375 = G__48394;
i__48054_48376 = G__48395;
continue;
} else {
var map__48062_48396 = cljs.core.first(seq__48051_48390__$1);
var map__48062_48397__$1 = cljs.core.__destructure_map(map__48062_48396);
var w_48398 = map__48062_48397__$1;
var msg_48399__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48062_48397__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48062_48397__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48062_48397__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48062_48397__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48402)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48400),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48401),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48399__$1)].join(''));


var G__48403 = cljs.core.next(seq__48051_48390__$1);
var G__48404 = null;
var G__48405 = (0);
var G__48406 = (0);
seq__48051_48373 = G__48403;
chunk__48052_48374 = G__48404;
count__48053_48375 = G__48405;
i__48054_48376 = G__48406;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__48038_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__48038_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__48065){
var map__48066 = p__48065;
var map__48066__$1 = cljs.core.__destructure_map(map__48066);
var msg = map__48066__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48066__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__48067 = cljs.core.seq(updates);
var chunk__48069 = null;
var count__48070 = (0);
var i__48071 = (0);
while(true){
if((i__48071 < count__48070)){
var path = chunk__48069.cljs$core$IIndexed$_nth$arity$2(null,i__48071);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48119_48413 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48124_48414 = null;
var count__48125_48415 = (0);
var i__48126_48416 = (0);
while(true){
if((i__48126_48416 < count__48125_48415)){
var node_48417 = chunk__48124_48414.cljs$core$IIndexed$_nth$arity$2(null,i__48126_48416);
if(cljs.core.not(node_48417.shadow$old)){
var path_match_48418 = shadow.cljs.devtools.client.browser.match_paths(node_48417.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48418)){
var new_link_48420 = (function (){var G__48139 = node_48417.cloneNode(true);
G__48139.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48418),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48139;
})();
(node_48417.shadow$old = true);

(new_link_48420.onload = ((function (seq__48119_48413,chunk__48124_48414,count__48125_48415,i__48126_48416,seq__48067,chunk__48069,count__48070,i__48071,new_link_48420,path_match_48418,node_48417,path,map__48066,map__48066__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48417);
});})(seq__48119_48413,chunk__48124_48414,count__48125_48415,i__48126_48416,seq__48067,chunk__48069,count__48070,i__48071,new_link_48420,path_match_48418,node_48417,path,map__48066,map__48066__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48418], 0));

goog.dom.insertSiblingAfter(new_link_48420,node_48417);


var G__48422 = seq__48119_48413;
var G__48423 = chunk__48124_48414;
var G__48424 = count__48125_48415;
var G__48425 = (i__48126_48416 + (1));
seq__48119_48413 = G__48422;
chunk__48124_48414 = G__48423;
count__48125_48415 = G__48424;
i__48126_48416 = G__48425;
continue;
} else {
var G__48427 = seq__48119_48413;
var G__48428 = chunk__48124_48414;
var G__48429 = count__48125_48415;
var G__48430 = (i__48126_48416 + (1));
seq__48119_48413 = G__48427;
chunk__48124_48414 = G__48428;
count__48125_48415 = G__48429;
i__48126_48416 = G__48430;
continue;
}
} else {
var G__48431 = seq__48119_48413;
var G__48432 = chunk__48124_48414;
var G__48433 = count__48125_48415;
var G__48434 = (i__48126_48416 + (1));
seq__48119_48413 = G__48431;
chunk__48124_48414 = G__48432;
count__48125_48415 = G__48433;
i__48126_48416 = G__48434;
continue;
}
} else {
var temp__5753__auto___48435 = cljs.core.seq(seq__48119_48413);
if(temp__5753__auto___48435){
var seq__48119_48436__$1 = temp__5753__auto___48435;
if(cljs.core.chunked_seq_QMARK_(seq__48119_48436__$1)){
var c__4649__auto___48438 = cljs.core.chunk_first(seq__48119_48436__$1);
var G__48439 = cljs.core.chunk_rest(seq__48119_48436__$1);
var G__48440 = c__4649__auto___48438;
var G__48441 = cljs.core.count(c__4649__auto___48438);
var G__48442 = (0);
seq__48119_48413 = G__48439;
chunk__48124_48414 = G__48440;
count__48125_48415 = G__48441;
i__48126_48416 = G__48442;
continue;
} else {
var node_48443 = cljs.core.first(seq__48119_48436__$1);
if(cljs.core.not(node_48443.shadow$old)){
var path_match_48444 = shadow.cljs.devtools.client.browser.match_paths(node_48443.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48444)){
var new_link_48446 = (function (){var G__48140 = node_48443.cloneNode(true);
G__48140.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48444),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48140;
})();
(node_48443.shadow$old = true);

(new_link_48446.onload = ((function (seq__48119_48413,chunk__48124_48414,count__48125_48415,i__48126_48416,seq__48067,chunk__48069,count__48070,i__48071,new_link_48446,path_match_48444,node_48443,seq__48119_48436__$1,temp__5753__auto___48435,path,map__48066,map__48066__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48443);
});})(seq__48119_48413,chunk__48124_48414,count__48125_48415,i__48126_48416,seq__48067,chunk__48069,count__48070,i__48071,new_link_48446,path_match_48444,node_48443,seq__48119_48436__$1,temp__5753__auto___48435,path,map__48066,map__48066__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48444], 0));

goog.dom.insertSiblingAfter(new_link_48446,node_48443);


var G__48447 = cljs.core.next(seq__48119_48436__$1);
var G__48448 = null;
var G__48449 = (0);
var G__48450 = (0);
seq__48119_48413 = G__48447;
chunk__48124_48414 = G__48448;
count__48125_48415 = G__48449;
i__48126_48416 = G__48450;
continue;
} else {
var G__48451 = cljs.core.next(seq__48119_48436__$1);
var G__48452 = null;
var G__48453 = (0);
var G__48454 = (0);
seq__48119_48413 = G__48451;
chunk__48124_48414 = G__48452;
count__48125_48415 = G__48453;
i__48126_48416 = G__48454;
continue;
}
} else {
var G__48455 = cljs.core.next(seq__48119_48436__$1);
var G__48456 = null;
var G__48457 = (0);
var G__48458 = (0);
seq__48119_48413 = G__48455;
chunk__48124_48414 = G__48456;
count__48125_48415 = G__48457;
i__48126_48416 = G__48458;
continue;
}
}
} else {
}
}
break;
}


var G__48459 = seq__48067;
var G__48460 = chunk__48069;
var G__48461 = count__48070;
var G__48462 = (i__48071 + (1));
seq__48067 = G__48459;
chunk__48069 = G__48460;
count__48070 = G__48461;
i__48071 = G__48462;
continue;
} else {
var G__48463 = seq__48067;
var G__48464 = chunk__48069;
var G__48465 = count__48070;
var G__48466 = (i__48071 + (1));
seq__48067 = G__48463;
chunk__48069 = G__48464;
count__48070 = G__48465;
i__48071 = G__48466;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48067);
if(temp__5753__auto__){
var seq__48067__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48067__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48067__$1);
var G__48467 = cljs.core.chunk_rest(seq__48067__$1);
var G__48468 = c__4649__auto__;
var G__48469 = cljs.core.count(c__4649__auto__);
var G__48470 = (0);
seq__48067 = G__48467;
chunk__48069 = G__48468;
count__48070 = G__48469;
i__48071 = G__48470;
continue;
} else {
var path = cljs.core.first(seq__48067__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48143_48471 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48147_48472 = null;
var count__48148_48473 = (0);
var i__48149_48474 = (0);
while(true){
if((i__48149_48474 < count__48148_48473)){
var node_48475 = chunk__48147_48472.cljs$core$IIndexed$_nth$arity$2(null,i__48149_48474);
if(cljs.core.not(node_48475.shadow$old)){
var path_match_48476 = shadow.cljs.devtools.client.browser.match_paths(node_48475.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48476)){
var new_link_48477 = (function (){var G__48168 = node_48475.cloneNode(true);
G__48168.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48476),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48168;
})();
(node_48475.shadow$old = true);

(new_link_48477.onload = ((function (seq__48143_48471,chunk__48147_48472,count__48148_48473,i__48149_48474,seq__48067,chunk__48069,count__48070,i__48071,new_link_48477,path_match_48476,node_48475,path,seq__48067__$1,temp__5753__auto__,map__48066,map__48066__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48475);
});})(seq__48143_48471,chunk__48147_48472,count__48148_48473,i__48149_48474,seq__48067,chunk__48069,count__48070,i__48071,new_link_48477,path_match_48476,node_48475,path,seq__48067__$1,temp__5753__auto__,map__48066,map__48066__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48476], 0));

goog.dom.insertSiblingAfter(new_link_48477,node_48475);


var G__48481 = seq__48143_48471;
var G__48482 = chunk__48147_48472;
var G__48483 = count__48148_48473;
var G__48484 = (i__48149_48474 + (1));
seq__48143_48471 = G__48481;
chunk__48147_48472 = G__48482;
count__48148_48473 = G__48483;
i__48149_48474 = G__48484;
continue;
} else {
var G__48485 = seq__48143_48471;
var G__48486 = chunk__48147_48472;
var G__48487 = count__48148_48473;
var G__48488 = (i__48149_48474 + (1));
seq__48143_48471 = G__48485;
chunk__48147_48472 = G__48486;
count__48148_48473 = G__48487;
i__48149_48474 = G__48488;
continue;
}
} else {
var G__48489 = seq__48143_48471;
var G__48490 = chunk__48147_48472;
var G__48491 = count__48148_48473;
var G__48492 = (i__48149_48474 + (1));
seq__48143_48471 = G__48489;
chunk__48147_48472 = G__48490;
count__48148_48473 = G__48491;
i__48149_48474 = G__48492;
continue;
}
} else {
var temp__5753__auto___48493__$1 = cljs.core.seq(seq__48143_48471);
if(temp__5753__auto___48493__$1){
var seq__48143_48494__$1 = temp__5753__auto___48493__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48143_48494__$1)){
var c__4649__auto___48495 = cljs.core.chunk_first(seq__48143_48494__$1);
var G__48496 = cljs.core.chunk_rest(seq__48143_48494__$1);
var G__48497 = c__4649__auto___48495;
var G__48498 = cljs.core.count(c__4649__auto___48495);
var G__48499 = (0);
seq__48143_48471 = G__48496;
chunk__48147_48472 = G__48497;
count__48148_48473 = G__48498;
i__48149_48474 = G__48499;
continue;
} else {
var node_48500 = cljs.core.first(seq__48143_48494__$1);
if(cljs.core.not(node_48500.shadow$old)){
var path_match_48501 = shadow.cljs.devtools.client.browser.match_paths(node_48500.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48501)){
var new_link_48502 = (function (){var G__48170 = node_48500.cloneNode(true);
G__48170.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48501),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48170;
})();
(node_48500.shadow$old = true);

(new_link_48502.onload = ((function (seq__48143_48471,chunk__48147_48472,count__48148_48473,i__48149_48474,seq__48067,chunk__48069,count__48070,i__48071,new_link_48502,path_match_48501,node_48500,seq__48143_48494__$1,temp__5753__auto___48493__$1,path,seq__48067__$1,temp__5753__auto__,map__48066,map__48066__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48500);
});})(seq__48143_48471,chunk__48147_48472,count__48148_48473,i__48149_48474,seq__48067,chunk__48069,count__48070,i__48071,new_link_48502,path_match_48501,node_48500,seq__48143_48494__$1,temp__5753__auto___48493__$1,path,seq__48067__$1,temp__5753__auto__,map__48066,map__48066__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48501], 0));

goog.dom.insertSiblingAfter(new_link_48502,node_48500);


var G__48503 = cljs.core.next(seq__48143_48494__$1);
var G__48504 = null;
var G__48505 = (0);
var G__48506 = (0);
seq__48143_48471 = G__48503;
chunk__48147_48472 = G__48504;
count__48148_48473 = G__48505;
i__48149_48474 = G__48506;
continue;
} else {
var G__48508 = cljs.core.next(seq__48143_48494__$1);
var G__48509 = null;
var G__48510 = (0);
var G__48511 = (0);
seq__48143_48471 = G__48508;
chunk__48147_48472 = G__48509;
count__48148_48473 = G__48510;
i__48149_48474 = G__48511;
continue;
}
} else {
var G__48512 = cljs.core.next(seq__48143_48494__$1);
var G__48513 = null;
var G__48514 = (0);
var G__48515 = (0);
seq__48143_48471 = G__48512;
chunk__48147_48472 = G__48513;
count__48148_48473 = G__48514;
i__48149_48474 = G__48515;
continue;
}
}
} else {
}
}
break;
}


var G__48517 = cljs.core.next(seq__48067__$1);
var G__48518 = null;
var G__48519 = (0);
var G__48520 = (0);
seq__48067 = G__48517;
chunk__48069 = G__48518;
count__48070 = G__48519;
i__48071 = G__48520;
continue;
} else {
var G__48522 = cljs.core.next(seq__48067__$1);
var G__48523 = null;
var G__48524 = (0);
var G__48525 = (0);
seq__48067 = G__48522;
chunk__48069 = G__48523;
count__48070 = G__48524;
i__48071 = G__48525;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48222){
var map__48223 = p__48222;
var map__48223__$1 = cljs.core.__destructure_map(map__48223);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48223__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48247){
var map__48248 = p__48247;
var map__48248__$1 = cljs.core.__destructure_map(map__48248);
var _ = map__48248__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48248__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48251,done,error){
var map__48252 = p__48251;
var map__48252__$1 = cljs.core.__destructure_map(map__48252);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48252__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48253,done,error){
var map__48254 = p__48253;
var map__48254__$1 = cljs.core.__destructure_map(map__48254);
var msg = map__48254__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48254__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48254__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48254__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48255){
var map__48256 = p__48255;
var map__48256__$1 = cljs.core.__destructure_map(map__48256);
var src = map__48256__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48256__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48260 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48260) : done.call(null,G__48260));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48264){
var map__48265 = p__48264;
var map__48265__$1 = cljs.core.__destructure_map(map__48265);
var msg__$1 = map__48265__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48265__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48266){var ex = e48266;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48268){
var map__48269 = p__48268;
var map__48269__$1 = cljs.core.__destructure_map(map__48269);
var env = map__48269__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48269__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__48276){
var map__48277 = p__48276;
var map__48277__$1 = cljs.core.__destructure_map(map__48277);
var msg = map__48277__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48277__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48285){
var map__48286 = p__48285;
var map__48286__$1 = cljs.core.__destructure_map(map__48286);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48286__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48286__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48292){
var map__48293 = p__48292;
var map__48293__$1 = cljs.core.__destructure_map(map__48293);
var svc = map__48293__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48293__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
