goog.provide('zprint.sutil');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sexpr], 0));
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zloc], 0));
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_(sexpr)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(sexpr));
} else {
return cljs.core.seq(sexpr);
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.nthnext(sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_((function (){var G__38644 = cljs.core.first(sloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__38644) : zthing_QMARK_.call(null,G__38644));
})())){
return i;
} else {
var G__38840 = cljs.core.next(sloc);
var G__38841 = (i + (1));
sloc = G__38840;
i = G__38841;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.count(sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_(sexpr))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_(sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first(sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second(sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_(sexpr)) || (cljs.core.seq_QMARK_(sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.last(sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_(x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return (x instanceof cljs.core.Atom);
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref(x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns(x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__38662 = arguments.length;
switch (G__38662) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),val], null);
}));

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj_term,(2)))], null);
}));

(zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2);

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (((typeof x === 'string') || (((typeof x === 'number') || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))))))))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(p__38665,pair_seq,ns){
var map__38666 = p__38665;
var map__38666__$1 = cljs.core.__destructure_map(map__38666);
var map_options = map__38666__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38666__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38666__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38666__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38666__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__4221__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4221__auto__;
}
})())){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__38682 = cljs.core.first(pair_seq__$1);
var seq__38683 = cljs.core.seq(vec__38682);
var first__38684 = cljs.core.first(seq__38683);
var seq__38683__$1 = cljs.core.next(seq__38683);
var k = first__38684;
var rest_of_pair = seq__38683__$1;
var pair = vec__38682;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace(k):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns__$1,current_ns)){
var G__38843 = ns__$1;
var G__38844 = cljs.core.next(pair_seq__$1);
var G__38845 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__38843;
pair_seq__$1 = G__38844;
out = G__38845;
continue;
} else {
return null;
}
} else {
var G__38846 = current_ns;
var G__38847 = cljs.core.next(pair_seq__$1);
var G__38848 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__38846;
pair_seq__$1 = G__38847;
out = G__38848;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__38849 = ns__$1;
var G__38850 = cljs.core.next(pair_seq__$1);
var G__38851 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns__$1 = G__38849;
pair_seq__$1 = G__38850;
out = G__38851;
continue;
} else {
return null;
}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,pair_seq], null);
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__38689 = zprint.zfns.zstring;
var znumstr_orig_val__38690 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__38691 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__38692 = zprint.zfns.zsexpr;
var zseqnws_orig_val__38693 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__38694 = zprint.zfns.zseqnws_w_nl;
var zseqnws_w_bl_orig_val__38695 = zprint.zfns.zseqnws_w_bl;
var zfocus_style_orig_val__38696 = zprint.zfns.zfocus_style;
var zstart_orig_val__38697 = zprint.zfns.zstart;
var zfirst_orig_val__38698 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__38699 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__38700 = zprint.zfns.zsecond;
var zsecond_no_comment_orig_val__38701 = zprint.zfns.zsecond_no_comment;
var zthird_orig_val__38702 = zprint.zfns.zthird;
var zthird_no_comment_orig_val__38703 = zprint.zfns.zthird_no_comment;
var zfourth_orig_val__38704 = zprint.zfns.zfourth;
var znextnws_orig_val__38705 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__38706 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__38707 = zprint.zfns.znthnext;
var zcount_orig_val__38708 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__38709 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__38710 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__38711 = zprint.zfns.zmap_w_nl;
var zmap_w_bl_orig_val__38712 = zprint.zfns.zmap_w_bl;
var zmap_w_nl_comma_orig_val__38713 = zprint.zfns.zmap_w_nl_comma;
var zanonfn_QMARK__orig_val__38714 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__38715 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__38716 = zprint.zfns.zfocus;
var zfind_path_orig_val__38717 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__38718 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__38719 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__38720 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__38721 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__38722 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__38723 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__38724 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__38725 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__38726 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__38727 = zprint.zfns.ztag;
var zlast_orig_val__38728 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__38729 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__38730 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__38731 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__38732 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__38733 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__38734 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__38735 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__38736 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__38737 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__38738 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__38739 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__38740 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__38741 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__38742 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__38743 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__38744 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__38745 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__38746 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__38747 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__38748 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__38749 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__38750 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__38751 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__38752 = zprint.zfns.zlift_ns;
var zfind_orig_val__38753 = zprint.zfns.zfind;
var ztake_append_orig_val__38754 = zprint.zfns.ztake_append;
var zstring_temp_val__38756 = zprint.sutil.sstring;
var znumstr_temp_val__38757 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__38758 = cljs.core.constantly(false);
var zsexpr_temp_val__38759 = cljs.core.identity;
var zseqnws_temp_val__38760 = zprint.sutil.sseqnws;
var zseqnws_w_nl_temp_val__38761 = zprint.sutil.sseqnws;
var zseqnws_w_bl_temp_val__38762 = zprint.sutil.sseqnws;
var zfocus_style_temp_val__38763 = zprint.sutil.sfocus_style;
var zstart_temp_val__38764 = zprint.sutil.sfirst;
var zfirst_temp_val__38765 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__38766 = zprint.sutil.sfirst;
var zsecond_temp_val__38767 = zprint.sutil.ssecond;
var zsecond_no_comment_temp_val__38768 = zprint.sutil.ssecond;
var zthird_temp_val__38769 = zprint.sutil.sthird;
var zthird_no_comment_temp_val__38770 = zprint.sutil.sthird;
var zfourth_temp_val__38771 = zprint.sutil.sfourth;
var znextnws_temp_val__38772 = cljs.core.next;
var znextnws_w_nl_temp_val__38773 = cljs.core.next;
var znthnext_temp_val__38774 = zprint.sutil.snthnext;
var zcount_temp_val__38775 = zprint.sutil.scount;
var zcount_zloc_seq_nc_nws_temp_val__38776 = zprint.sutil.scount;
var zmap_temp_val__38777 = zprint.sutil.smap;
var zmap_w_nl_temp_val__38778 = zprint.sutil.smap;
var zmap_w_bl_temp_val__38779 = zprint.sutil.smap;
var zmap_w_nl_comma_temp_val__38780 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__38781 = cljs.core.constantly(false);
var zfn_obj_QMARK__temp_val__38782 = cljs.core.fn_QMARK_;
var zfocus_temp_val__38783 = zprint.sutil.sfocus;
var zfind_path_temp_val__38784 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__38785 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__38786 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__38787 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__38788 = cljs.core.map_QMARK_;
var znamespacedmap_QMARK__temp_val__38789 = cljs.core.constantly(false);
var zset_QMARK__temp_val__38790 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__38791 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__38792 = cljs.core.constantly(false);
var zuneval_QMARK__temp_val__38793 = cljs.core.constantly(false);
var ztag_temp_val__38794 = cljs.core.constantly(null);
var zlast_temp_val__38795 = zprint.sutil.slast;
var zarray_QMARK__temp_val__38796 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__38797 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__38798 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__38799 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__38800 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__38801 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__38802 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__38803 = cljs.core.constantly(false);
var zwhitespaceorcomment_QMARK__temp_val__38804 = cljs.core.constantly(false);
var zmap_all_temp_val__38805 = cljs.core.map;
var zfuture_QMARK__temp_val__38806 = cljs.core.constantly(false);
var zpromise_QMARK__temp_val__38807 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__38808 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__38809 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__38810 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__38811 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__38812 = cljs.core.constantly(false);
var zarray_to_shift_seq_temp_val__38813 = null;
var zdotdotdot_temp_val__38814 = cljs.core.constantly(new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__38815 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__38816 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__38817 = cljs.core.constantly(false);
var zreader_cond_w_coll_QMARK__temp_val__38818 = cljs.core.constantly(false);
var zlift_ns_temp_val__38819 = zprint.sutil.slift_ns;
var zfind_temp_val__38820 = zprint.sutil.sfind;
var ztake_append_temp_val__38821 = zprint.sutil.stake_append;
(zprint.zfns.zstring = zstring_temp_val__38756);

(zprint.zfns.znumstr = znumstr_temp_val__38757);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__38758);

(zprint.zfns.zsexpr = zsexpr_temp_val__38759);

(zprint.zfns.zseqnws = zseqnws_temp_val__38760);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__38761);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_temp_val__38762);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__38763);

(zprint.zfns.zstart = zstart_temp_val__38764);

(zprint.zfns.zfirst = zfirst_temp_val__38765);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__38766);

(zprint.zfns.zsecond = zsecond_temp_val__38767);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_temp_val__38768);

(zprint.zfns.zthird = zthird_temp_val__38769);

(zprint.zfns.zthird_no_comment = zthird_no_comment_temp_val__38770);

(zprint.zfns.zfourth = zfourth_temp_val__38771);

(zprint.zfns.znextnws = znextnws_temp_val__38772);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__38773);

(zprint.zfns.znthnext = znthnext_temp_val__38774);

(zprint.zfns.zcount = zcount_temp_val__38775);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__38776);

(zprint.zfns.zmap = zmap_temp_val__38777);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__38778);

(zprint.zfns.zmap_w_bl = zmap_w_bl_temp_val__38779);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__38780);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__38781);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__38782);

(zprint.zfns.zfocus = zfocus_temp_val__38783);

(zprint.zfns.zfind_path = zfind_path_temp_val__38784);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__38785);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__38786);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__38787);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__38788);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__38789);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__38790);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__38791);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__38792);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__38793);

(zprint.zfns.ztag = ztag_temp_val__38794);

(zprint.zfns.zlast = zlast_temp_val__38795);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__38796);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__38797);

(zprint.zfns.zderef = zderef_temp_val__38798);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__38799);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__38800);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__38801);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__38802);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__38803);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__38804);

(zprint.zfns.zmap_all = zmap_all_temp_val__38805);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__38806);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__38807);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__38808);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__38809);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__38810);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__38811);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__38812);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__38813);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__38814);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__38815);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__38816);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__38817);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__38818);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__38819);

(zprint.zfns.zfind = zfind_temp_val__38820);

(zprint.zfns.ztake_append = ztake_append_temp_val__38821);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__38754);

(zprint.zfns.zfind = zfind_orig_val__38753);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__38752);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__38751);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__38750);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__38749);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__38748);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__38747);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__38746);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__38745);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__38744);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__38743);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__38742);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__38741);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__38740);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__38739);

(zprint.zfns.zmap_all = zmap_all_orig_val__38738);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__38737);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__38736);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__38735);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__38734);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__38733);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__38732);

(zprint.zfns.zderef = zderef_orig_val__38731);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__38730);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__38729);

(zprint.zfns.zlast = zlast_orig_val__38728);

(zprint.zfns.ztag = ztag_orig_val__38727);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__38726);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__38725);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__38724);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__38723);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__38722);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__38721);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__38720);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__38719);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__38718);

(zprint.zfns.zfind_path = zfind_path_orig_val__38717);

(zprint.zfns.zfocus = zfocus_orig_val__38716);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__38715);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__38714);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__38713);

(zprint.zfns.zmap_w_bl = zmap_w_bl_orig_val__38712);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__38711);

(zprint.zfns.zmap = zmap_orig_val__38710);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__38709);

(zprint.zfns.zcount = zcount_orig_val__38708);

(zprint.zfns.znthnext = znthnext_orig_val__38707);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__38706);

(zprint.zfns.znextnws = znextnws_orig_val__38705);

(zprint.zfns.zfourth = zfourth_orig_val__38704);

(zprint.zfns.zthird_no_comment = zthird_no_comment_orig_val__38703);

(zprint.zfns.zthird = zthird_orig_val__38702);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_orig_val__38701);

(zprint.zfns.zsecond = zsecond_orig_val__38700);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__38699);

(zprint.zfns.zfirst = zfirst_orig_val__38698);

(zprint.zfns.zstart = zstart_orig_val__38697);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__38696);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_orig_val__38695);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__38694);

(zprint.zfns.zseqnws = zseqnws_orig_val__38693);

(zprint.zfns.zsexpr = zsexpr_orig_val__38692);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__38691);

(zprint.zfns.znumstr = znumstr_orig_val__38690);

(zprint.zfns.zstring = zstring_orig_val__38689);
}});

//# sourceMappingURL=zprint.sutil.js.map
