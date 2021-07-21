goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39655 = arguments.length;
var i__4830__auto___39656 = (0);
while(true){
if((i__4830__auto___39656 < len__4829__auto___39655)){
args__4835__auto__.push((arguments[i__4830__auto___39656]));

var G__39657 = (i__4830__auto___39656 + (1));
i__4830__auto___39656 = G__39657;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39642){
var vec__39643 = p__39642;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39643,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4223__auto__ = plural;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq39639){
var G__39640 = cljs.core.first(seq39639);
var seq39639__$1 = cljs.core.next(seq39639);
var G__39641 = cljs.core.first(seq39639__$1);
var seq39639__$2 = cljs.core.next(seq39639__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39640,G__39641,seq39639__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39658 = arguments.length;
var i__4830__auto___39659 = (0);
while(true){
if((i__4830__auto___39659 < len__4829__auto___39658)){
args__4835__auto__.push((arguments[i__4830__auto___39659]));

var G__39660 = (i__4830__auto___39659 + (1));
i__4830__auto___39659 = G__39660;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39650){
var vec__39651 = p__39650;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39651,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4223__auto__ = plural;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq39647){
var G__39648 = cljs.core.first(seq39647);
var seq39647__$1 = cljs.core.next(seq39647);
var G__39649 = cljs.core.first(seq39647__$1);
var seq39647__$2 = cljs.core.next(seq39647__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39648,G__39649,seq39647__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
