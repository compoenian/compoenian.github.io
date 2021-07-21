goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43333){
var map__43338 = p__43333;
var map__43338__$1 = cljs.core.__destructure_map(map__43338);
var m = map__43338__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43338__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43338__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43356_43603 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43357_43604 = null;
var count__43358_43605 = (0);
var i__43359_43606 = (0);
while(true){
if((i__43359_43606 < count__43358_43605)){
var f_43608 = chunk__43357_43604.cljs$core$IIndexed$_nth$arity$2(null,i__43359_43606);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43608], 0));


var G__43609 = seq__43356_43603;
var G__43611 = chunk__43357_43604;
var G__43612 = count__43358_43605;
var G__43613 = (i__43359_43606 + (1));
seq__43356_43603 = G__43609;
chunk__43357_43604 = G__43611;
count__43358_43605 = G__43612;
i__43359_43606 = G__43613;
continue;
} else {
var temp__5753__auto___43614 = cljs.core.seq(seq__43356_43603);
if(temp__5753__auto___43614){
var seq__43356_43615__$1 = temp__5753__auto___43614;
if(cljs.core.chunked_seq_QMARK_(seq__43356_43615__$1)){
var c__4649__auto___43616 = cljs.core.chunk_first(seq__43356_43615__$1);
var G__43617 = cljs.core.chunk_rest(seq__43356_43615__$1);
var G__43618 = c__4649__auto___43616;
var G__43619 = cljs.core.count(c__4649__auto___43616);
var G__43620 = (0);
seq__43356_43603 = G__43617;
chunk__43357_43604 = G__43618;
count__43358_43605 = G__43619;
i__43359_43606 = G__43620;
continue;
} else {
var f_43622 = cljs.core.first(seq__43356_43615__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43622], 0));


var G__43623 = cljs.core.next(seq__43356_43615__$1);
var G__43624 = null;
var G__43625 = (0);
var G__43626 = (0);
seq__43356_43603 = G__43623;
chunk__43357_43604 = G__43624;
count__43358_43605 = G__43625;
i__43359_43606 = G__43626;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43627 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43627], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43627)))?cljs.core.second(arglists_43627):arglists_43627)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43385_43631 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43386_43632 = null;
var count__43387_43634 = (0);
var i__43388_43635 = (0);
while(true){
if((i__43388_43635 < count__43387_43634)){
var vec__43411_43636 = chunk__43386_43632.cljs$core$IIndexed$_nth$arity$2(null,i__43388_43635);
var name_43637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43411_43636,(0),null);
var map__43418_43638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43411_43636,(1),null);
var map__43418_43639__$1 = cljs.core.__destructure_map(map__43418_43638);
var doc_43640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43418_43639__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43418_43639__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43637], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43641], 0));

if(cljs.core.truth_(doc_43640)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43640], 0));
} else {
}


var G__43647 = seq__43385_43631;
var G__43648 = chunk__43386_43632;
var G__43649 = count__43387_43634;
var G__43650 = (i__43388_43635 + (1));
seq__43385_43631 = G__43647;
chunk__43386_43632 = G__43648;
count__43387_43634 = G__43649;
i__43388_43635 = G__43650;
continue;
} else {
var temp__5753__auto___43652 = cljs.core.seq(seq__43385_43631);
if(temp__5753__auto___43652){
var seq__43385_43653__$1 = temp__5753__auto___43652;
if(cljs.core.chunked_seq_QMARK_(seq__43385_43653__$1)){
var c__4649__auto___43654 = cljs.core.chunk_first(seq__43385_43653__$1);
var G__43655 = cljs.core.chunk_rest(seq__43385_43653__$1);
var G__43656 = c__4649__auto___43654;
var G__43657 = cljs.core.count(c__4649__auto___43654);
var G__43658 = (0);
seq__43385_43631 = G__43655;
chunk__43386_43632 = G__43656;
count__43387_43634 = G__43657;
i__43388_43635 = G__43658;
continue;
} else {
var vec__43426_43659 = cljs.core.first(seq__43385_43653__$1);
var name_43661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43426_43659,(0),null);
var map__43429_43662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43426_43659,(1),null);
var map__43429_43663__$1 = cljs.core.__destructure_map(map__43429_43662);
var doc_43664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43429_43663__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43429_43663__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43661], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43665], 0));

if(cljs.core.truth_(doc_43664)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43664], 0));
} else {
}


var G__43668 = cljs.core.next(seq__43385_43653__$1);
var G__43669 = null;
var G__43670 = (0);
var G__43671 = (0);
seq__43385_43631 = G__43668;
chunk__43386_43632 = G__43669;
count__43387_43634 = G__43670;
i__43388_43635 = G__43671;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__43431 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43432 = null;
var count__43433 = (0);
var i__43434 = (0);
while(true){
if((i__43434 < count__43433)){
var role = chunk__43432.cljs$core$IIndexed$_nth$arity$2(null,i__43434);
var temp__5753__auto___43673__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___43673__$1)){
var spec_43674 = temp__5753__auto___43673__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43674)], 0));
} else {
}


var G__43675 = seq__43431;
var G__43676 = chunk__43432;
var G__43677 = count__43433;
var G__43678 = (i__43434 + (1));
seq__43431 = G__43675;
chunk__43432 = G__43676;
count__43433 = G__43677;
i__43434 = G__43678;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__43431);
if(temp__5753__auto____$1){
var seq__43431__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43431__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__43431__$1);
var G__43680 = cljs.core.chunk_rest(seq__43431__$1);
var G__43681 = c__4649__auto__;
var G__43682 = cljs.core.count(c__4649__auto__);
var G__43683 = (0);
seq__43431 = G__43680;
chunk__43432 = G__43681;
count__43433 = G__43682;
i__43434 = G__43683;
continue;
} else {
var role = cljs.core.first(seq__43431__$1);
var temp__5753__auto___43684__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___43684__$2)){
var spec_43685 = temp__5753__auto___43684__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43685)], 0));
} else {
}


var G__43686 = cljs.core.next(seq__43431__$1);
var G__43687 = null;
var G__43688 = (0);
var G__43689 = (0);
seq__43431 = G__43686;
chunk__43432 = G__43687;
count__43433 = G__43688;
i__43434 = G__43689;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__43691 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43692 = cljs.core.ex_cause(t);
via = G__43691;
t = G__43692;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__43466 = datafied_throwable;
var map__43466__$1 = cljs.core.__destructure_map(map__43466);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43466__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43466__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43466__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43467 = cljs.core.last(via);
var map__43467__$1 = cljs.core.__destructure_map(map__43467);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43467__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43467__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43467__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43468 = data;
var map__43468__$1 = cljs.core.__destructure_map(map__43468);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43468__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43468__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43468__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43469 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43469__$1 = cljs.core.__destructure_map(map__43469);
var top_data = map__43469__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43469__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43471 = phase;
var G__43471__$1 = (((G__43471 instanceof cljs.core.Keyword))?G__43471.fqn:null);
switch (G__43471__$1) {
case "read-source":
var map__43472 = data;
var map__43472__$1 = cljs.core.__destructure_map(map__43472);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43472__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43472__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43473 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43473__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43473,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43473);
var G__43473__$2 = (cljs.core.truth_((function (){var fexpr__43475 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43475.cljs$core$IFn$_invoke$arity$1 ? fexpr__43475.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43475.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43473__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43473__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43473__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43473__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43476 = top_data;
var G__43476__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43476,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43476);
var G__43476__$2 = (cljs.core.truth_((function (){var fexpr__43478 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43478.cljs$core$IFn$_invoke$arity$1 ? fexpr__43478.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43478.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43476__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43476__$1);
var G__43476__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43476__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43476__$2);
var G__43476__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43476__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43476__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43476__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43476__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43479 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43479,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43479,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43479,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43479,(3),null);
var G__43482 = top_data;
var G__43482__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43482,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43482);
var G__43482__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43482__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43482__$1);
var G__43482__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43482__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43482__$2);
var G__43482__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43482__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43482__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43482__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43482__$4;
}

break;
case "execution":
var vec__43500 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43500,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43500,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43500,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43500,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43464_SHARP_){
var or__4223__auto__ = (p1__43464_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__43511 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43511.cljs$core$IFn$_invoke$arity$1 ? fexpr__43511.cljs$core$IFn$_invoke$arity$1(p1__43464_SHARP_) : fexpr__43511.call(null,p1__43464_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__43514 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43514__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43514,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43514);
var G__43514__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43514__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43514__$1);
var G__43514__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43514__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43514__$2);
var G__43514__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43514__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43514__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43514__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43514__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43471__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43535){
var map__43536 = p__43535;
var map__43536__$1 = cljs.core.__destructure_map(map__43536);
var triage_data = map__43536__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43536__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43536__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43536__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43536__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43536__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43536__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43536__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43536__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__43539 = phase;
var G__43539__$1 = (((G__43539 instanceof cljs.core.Keyword))?G__43539.fqn:null);
switch (G__43539__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43540 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43541 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43542 = loc;
var G__43543 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43544_43714 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43545_43715 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43546_43716 = true;
var _STAR_print_fn_STAR__temp_val__43547_43717 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43546_43716);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43547_43717);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43530_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43530_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43545_43715);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43544_43714);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43540,G__43541,G__43542,G__43543) : format.call(null,G__43540,G__43541,G__43542,G__43543));

break;
case "macroexpansion":
var G__43556 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43557 = cause_type;
var G__43558 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43559 = loc;
var G__43560 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43556,G__43557,G__43558,G__43559,G__43560) : format.call(null,G__43556,G__43557,G__43558,G__43559,G__43560));

break;
case "compile-syntax-check":
var G__43565 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43566 = cause_type;
var G__43567 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43568 = loc;
var G__43569 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43565,G__43566,G__43567,G__43568,G__43569) : format.call(null,G__43565,G__43566,G__43567,G__43568,G__43569));

break;
case "compilation":
var G__43578 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43579 = cause_type;
var G__43580 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43581 = loc;
var G__43582 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43578,G__43579,G__43580,G__43581,G__43582) : format.call(null,G__43578,G__43579,G__43580,G__43581,G__43582));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43583 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43584 = symbol;
var G__43585 = loc;
var G__43586 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43589_43727 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43590_43728 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43591_43729 = true;
var _STAR_print_fn_STAR__temp_val__43592_43730 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43591_43729);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43592_43730);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43531_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43531_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43590_43728);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43589_43727);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43583,G__43584,G__43585,G__43586) : format.call(null,G__43583,G__43584,G__43585,G__43586));
} else {
var G__43595 = "Execution error%s at %s(%s).\n%s\n";
var G__43596 = cause_type;
var G__43597 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43598 = loc;
var G__43599 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43595,G__43596,G__43597,G__43598,G__43599) : format.call(null,G__43595,G__43596,G__43597,G__43598,G__43599));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43539__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
