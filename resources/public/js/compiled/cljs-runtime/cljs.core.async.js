goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43234 = arguments.length;
switch (G__43234) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43235 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43235 = (function (f,blockable,meta43236){
this.f = f;
this.blockable = blockable;
this.meta43236 = meta43236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43237,meta43236__$1){
var self__ = this;
var _43237__$1 = this;
return (new cljs.core.async.t_cljs$core$async43235(self__.f,self__.blockable,meta43236__$1));
}));

(cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43237){
var self__ = this;
var _43237__$1 = this;
return self__.meta43236;
}));

(cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43236","meta43236",794540075,null)], null);
}));

(cljs.core.async.t_cljs$core$async43235.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43235");

(cljs.core.async.t_cljs$core$async43235.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43235");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43235.
 */
cljs.core.async.__GT_t_cljs$core$async43235 = (function cljs$core$async$__GT_t_cljs$core$async43235(f__$1,blockable__$1,meta43236){
return (new cljs.core.async.t_cljs$core$async43235(f__$1,blockable__$1,meta43236));
});

}

return (new cljs.core.async.t_cljs$core$async43235(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43247 = arguments.length;
switch (G__43247) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43251 = arguments.length;
switch (G__43251) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43253 = arguments.length;
switch (G__43253) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45573 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45573) : fn1.call(null,val_45573));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45573) : fn1.call(null,val_45573));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43256 = arguments.length;
switch (G__43256) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___45576 = n;
var x_45577 = (0);
while(true){
if((x_45577 < n__4706__auto___45576)){
(a[x_45577] = x_45577);

var G__45578 = (x_45577 + (1));
x_45577 = G__45578;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43310 = (function (flag,meta43311){
this.flag = flag;
this.meta43311 = meta43311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43312,meta43311__$1){
var self__ = this;
var _43312__$1 = this;
return (new cljs.core.async.t_cljs$core$async43310(self__.flag,meta43311__$1));
}));

(cljs.core.async.t_cljs$core$async43310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43312){
var self__ = this;
var _43312__$1 = this;
return self__.meta43311;
}));

(cljs.core.async.t_cljs$core$async43310.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43310.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43311","meta43311",1459805365,null)], null);
}));

(cljs.core.async.t_cljs$core$async43310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43310");

(cljs.core.async.t_cljs$core$async43310.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43310.
 */
cljs.core.async.__GT_t_cljs$core$async43310 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43310(flag__$1,meta43311){
return (new cljs.core.async.t_cljs$core$async43310(flag__$1,meta43311));
});

}

return (new cljs.core.async.t_cljs$core$async43310(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43376 = (function (flag,cb,meta43377){
this.flag = flag;
this.cb = cb;
this.meta43377 = meta43377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43378,meta43377__$1){
var self__ = this;
var _43378__$1 = this;
return (new cljs.core.async.t_cljs$core$async43376(self__.flag,self__.cb,meta43377__$1));
}));

(cljs.core.async.t_cljs$core$async43376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43378){
var self__ = this;
var _43378__$1 = this;
return self__.meta43377;
}));

(cljs.core.async.t_cljs$core$async43376.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43377","meta43377",-827948397,null)], null);
}));

(cljs.core.async.t_cljs$core$async43376.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43376");

(cljs.core.async.t_cljs$core$async43376.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43376");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43376.
 */
cljs.core.async.__GT_t_cljs$core$async43376 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43376(flag__$1,cb__$1,meta43377){
return (new cljs.core.async.t_cljs$core$async43376(flag__$1,cb__$1,meta43377));
});

}

return (new cljs.core.async.t_cljs$core$async43376(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43397_SHARP_){
var G__43422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43397_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43422) : fret.call(null,G__43422));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43398_SHARP_){
var G__43425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43398_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43425) : fret.call(null,G__43425));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45585 = (i + (1));
i = G__45585;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___45588 = arguments.length;
var i__4830__auto___45589 = (0);
while(true){
if((i__4830__auto___45589 < len__4829__auto___45588)){
args__4835__auto__.push((arguments[i__4830__auto___45589]));

var G__45590 = (i__4830__auto___45589 + (1));
i__4830__auto___45589 = G__45590;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43443){
var map__43444 = p__43443;
var map__43444__$1 = cljs.core.__destructure_map(map__43444);
var opts = map__43444__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43436){
var G__43437 = cljs.core.first(seq43436);
var seq43436__$1 = cljs.core.next(seq43436);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43437,seq43436__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43450 = arguments.length;
switch (G__43450) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43144__auto___45595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_43537){
var state_val_43538 = (state_43537[(1)]);
if((state_val_43538 === (7))){
var inst_43529 = (state_43537[(2)]);
var state_43537__$1 = state_43537;
var statearr_43587_45596 = state_43537__$1;
(statearr_43587_45596[(2)] = inst_43529);

(statearr_43587_45596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43538 === (1))){
var state_43537__$1 = state_43537;
var statearr_43588_45597 = state_43537__$1;
(statearr_43588_45597[(2)] = null);

(statearr_43588_45597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43538 === (4))){
var inst_43491 = (state_43537[(7)]);
var inst_43491__$1 = (state_43537[(2)]);
var inst_43512 = (inst_43491__$1 == null);
var state_43537__$1 = (function (){var statearr_43593 = state_43537;
(statearr_43593[(7)] = inst_43491__$1);

return statearr_43593;
})();
if(cljs.core.truth_(inst_43512)){
var statearr_43594_45598 = state_43537__$1;
(statearr_43594_45598[(1)] = (5));

} else {
var statearr_43600_45599 = state_43537__$1;
(statearr_43600_45599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43538 === (13))){
var state_43537__$1 = state_43537;
var statearr_43601_45600 = state_43537__$1;
(statearr_43601_45600[(2)] = null);

(statearr_43601_45600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43538 === (6))){
var inst_43491 = (state_43537[(7)]);
var state_43537__$1 = state_43537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43537__$1,(11),to,inst_43491);
} else {
if((state_val_43538 === (3))){
var inst_43533 = (state_43537[(2)]);
var state_43537__$1 = state_43537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43537__$1,inst_43533);
} else {
if((state_val_43538 === (12))){
var state_43537__$1 = state_43537;
var statearr_43602_45601 = state_43537__$1;
(statearr_43602_45601[(2)] = null);

(statearr_43602_45601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43538 === (2))){
var state_43537__$1 = state_43537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43537__$1,(4),from);
} else {
if((state_val_43538 === (11))){
var inst_43522 = (state_43537[(2)]);
var state_43537__$1 = state_43537;
if(cljs.core.truth_(inst_43522)){
var statearr_43607_45602 = state_43537__$1;
(statearr_43607_45602[(1)] = (12));

} else {
var statearr_43610_45603 = state_43537__$1;
(statearr_43610_45603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43538 === (9))){
var state_43537__$1 = state_43537;
var statearr_43621_45604 = state_43537__$1;
(statearr_43621_45604[(2)] = null);

(statearr_43621_45604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43538 === (5))){
var state_43537__$1 = state_43537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43628_45605 = state_43537__$1;
(statearr_43628_45605[(1)] = (8));

} else {
var statearr_43629_45606 = state_43537__$1;
(statearr_43629_45606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43538 === (14))){
var inst_43527 = (state_43537[(2)]);
var state_43537__$1 = state_43537;
var statearr_43630_45607 = state_43537__$1;
(statearr_43630_45607[(2)] = inst_43527);

(statearr_43630_45607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43538 === (10))){
var inst_43519 = (state_43537[(2)]);
var state_43537__$1 = state_43537;
var statearr_43633_45608 = state_43537__$1;
(statearr_43633_45608[(2)] = inst_43519);

(statearr_43633_45608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43538 === (8))){
var inst_43516 = cljs.core.async.close_BANG_(to);
var state_43537__$1 = state_43537;
var statearr_43646_45609 = state_43537__$1;
(statearr_43646_45609[(2)] = inst_43516);

(statearr_43646_45609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42992__auto__ = null;
var cljs$core$async$state_machine__42992__auto____0 = (function (){
var statearr_43660 = [null,null,null,null,null,null,null,null];
(statearr_43660[(0)] = cljs$core$async$state_machine__42992__auto__);

(statearr_43660[(1)] = (1));

return statearr_43660;
});
var cljs$core$async$state_machine__42992__auto____1 = (function (state_43537){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_43537);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e43666){var ex__42995__auto__ = e43666;
var statearr_43667_45612 = state_43537;
(statearr_43667_45612[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_43537[(4)]))){
var statearr_43672_45613 = state_43537;
(statearr_43672_45613[(1)] = cljs.core.first((state_43537[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45615 = state_43537;
state_43537 = G__45615;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$state_machine__42992__auto__ = function(state_43537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42992__auto____1.call(this,state_43537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42992__auto____0;
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42992__auto____1;
return cljs$core$async$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_43679 = f__43145__auto__();
(statearr_43679[(6)] = c__43144__auto___45595);

return statearr_43679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43697){
var vec__43698 = p__43697;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43698,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43698,(1),null);
var job = vec__43698;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43144__auto___45617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_43706){
var state_val_43707 = (state_43706[(1)]);
if((state_val_43707 === (1))){
var state_43706__$1 = state_43706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43706__$1,(2),res,v);
} else {
if((state_val_43707 === (2))){
var inst_43703 = (state_43706[(2)]);
var inst_43704 = cljs.core.async.close_BANG_(res);
var state_43706__$1 = (function (){var statearr_43708 = state_43706;
(statearr_43708[(7)] = inst_43703);

return statearr_43708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43706__$1,inst_43704);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0 = (function (){
var statearr_43709 = [null,null,null,null,null,null,null,null];
(statearr_43709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__);

(statearr_43709[(1)] = (1));

return statearr_43709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1 = (function (state_43706){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_43706);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e43710){var ex__42995__auto__ = e43710;
var statearr_43711_45619 = state_43706;
(statearr_43711_45619[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_43706[(4)]))){
var statearr_43713_45620 = state_43706;
(statearr_43713_45620[(1)] = cljs.core.first((state_43706[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45621 = state_43706;
state_43706 = G__45621;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__ = function(state_43706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1.call(this,state_43706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_43718 = f__43145__auto__();
(statearr_43718[(6)] = c__43144__auto___45617);

return statearr_43718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43720){
var vec__43721 = p__43720;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43721,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43721,(1),null);
var job = vec__43721;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___45622 = n;
var __45623 = (0);
while(true){
if((__45623 < n__4706__auto___45622)){
var G__43731_45624 = type;
var G__43731_45625__$1 = (((G__43731_45624 instanceof cljs.core.Keyword))?G__43731_45624.fqn:null);
switch (G__43731_45625__$1) {
case "compute":
var c__43144__auto___45627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45623,c__43144__auto___45627,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async){
return (function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = ((function (__45623,c__43144__auto___45627,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async){
return (function (state_43744){
var state_val_43745 = (state_43744[(1)]);
if((state_val_43745 === (1))){
var state_43744__$1 = state_43744;
var statearr_43746_45630 = state_43744__$1;
(statearr_43746_45630[(2)] = null);

(statearr_43746_45630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (2))){
var state_43744__$1 = state_43744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43744__$1,(4),jobs);
} else {
if((state_val_43745 === (3))){
var inst_43742 = (state_43744[(2)]);
var state_43744__$1 = state_43744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43744__$1,inst_43742);
} else {
if((state_val_43745 === (4))){
var inst_43734 = (state_43744[(2)]);
var inst_43735 = process(inst_43734);
var state_43744__$1 = state_43744;
if(cljs.core.truth_(inst_43735)){
var statearr_43748_45632 = state_43744__$1;
(statearr_43748_45632[(1)] = (5));

} else {
var statearr_43749_45633 = state_43744__$1;
(statearr_43749_45633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (5))){
var state_43744__$1 = state_43744;
var statearr_43750_45635 = state_43744__$1;
(statearr_43750_45635[(2)] = null);

(statearr_43750_45635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (6))){
var state_43744__$1 = state_43744;
var statearr_43751_45636 = state_43744__$1;
(statearr_43751_45636[(2)] = null);

(statearr_43751_45636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (7))){
var inst_43740 = (state_43744[(2)]);
var state_43744__$1 = state_43744;
var statearr_43752_45637 = state_43744__$1;
(statearr_43752_45637[(2)] = inst_43740);

(statearr_43752_45637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45623,c__43144__auto___45627,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async))
;
return ((function (__45623,switch__42991__auto__,c__43144__auto___45627,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0 = (function (){
var statearr_43753 = [null,null,null,null,null,null,null];
(statearr_43753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__);

(statearr_43753[(1)] = (1));

return statearr_43753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1 = (function (state_43744){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_43744);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e43754){var ex__42995__auto__ = e43754;
var statearr_43755_45638 = state_43744;
(statearr_43755_45638[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_43744[(4)]))){
var statearr_43756_45639 = state_43744;
(statearr_43756_45639[(1)] = cljs.core.first((state_43744[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45641 = state_43744;
state_43744 = G__45641;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__ = function(state_43744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1.call(this,state_43744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__;
})()
;})(__45623,switch__42991__auto__,c__43144__auto___45627,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async))
})();
var state__43146__auto__ = (function (){var statearr_43757 = f__43145__auto__();
(statearr_43757[(6)] = c__43144__auto___45627);

return statearr_43757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
});})(__45623,c__43144__auto___45627,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async))
);


break;
case "async":
var c__43144__auto___45643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45623,c__43144__auto___45643,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async){
return (function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = ((function (__45623,c__43144__auto___45643,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async){
return (function (state_43771){
var state_val_43772 = (state_43771[(1)]);
if((state_val_43772 === (1))){
var state_43771__$1 = state_43771;
var statearr_43775_45648 = state_43771__$1;
(statearr_43775_45648[(2)] = null);

(statearr_43775_45648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43772 === (2))){
var state_43771__$1 = state_43771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43771__$1,(4),jobs);
} else {
if((state_val_43772 === (3))){
var inst_43769 = (state_43771[(2)]);
var state_43771__$1 = state_43771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43771__$1,inst_43769);
} else {
if((state_val_43772 === (4))){
var inst_43760 = (state_43771[(2)]);
var inst_43761 = async(inst_43760);
var state_43771__$1 = state_43771;
if(cljs.core.truth_(inst_43761)){
var statearr_43778_45649 = state_43771__$1;
(statearr_43778_45649[(1)] = (5));

} else {
var statearr_43779_45650 = state_43771__$1;
(statearr_43779_45650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43772 === (5))){
var state_43771__$1 = state_43771;
var statearr_43781_45651 = state_43771__$1;
(statearr_43781_45651[(2)] = null);

(statearr_43781_45651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43772 === (6))){
var state_43771__$1 = state_43771;
var statearr_43783_45652 = state_43771__$1;
(statearr_43783_45652[(2)] = null);

(statearr_43783_45652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43772 === (7))){
var inst_43766 = (state_43771[(2)]);
var state_43771__$1 = state_43771;
var statearr_43784_45654 = state_43771__$1;
(statearr_43784_45654[(2)] = inst_43766);

(statearr_43784_45654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45623,c__43144__auto___45643,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async))
;
return ((function (__45623,switch__42991__auto__,c__43144__auto___45643,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0 = (function (){
var statearr_43786 = [null,null,null,null,null,null,null];
(statearr_43786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__);

(statearr_43786[(1)] = (1));

return statearr_43786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1 = (function (state_43771){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_43771);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e43787){var ex__42995__auto__ = e43787;
var statearr_43788_45658 = state_43771;
(statearr_43788_45658[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_43771[(4)]))){
var statearr_43789_45659 = state_43771;
(statearr_43789_45659[(1)] = cljs.core.first((state_43771[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45661 = state_43771;
state_43771 = G__45661;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__ = function(state_43771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1.call(this,state_43771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__;
})()
;})(__45623,switch__42991__auto__,c__43144__auto___45643,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async))
})();
var state__43146__auto__ = (function (){var statearr_43791 = f__43145__auto__();
(statearr_43791[(6)] = c__43144__auto___45643);

return statearr_43791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
});})(__45623,c__43144__auto___45643,G__43731_45624,G__43731_45625__$1,n__4706__auto___45622,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43731_45625__$1)].join('')));

}

var G__45664 = (__45623 + (1));
__45623 = G__45664;
continue;
} else {
}
break;
}

var c__43144__auto___45665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_43813){
var state_val_43814 = (state_43813[(1)]);
if((state_val_43814 === (7))){
var inst_43809 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
var statearr_43816_45666 = state_43813__$1;
(statearr_43816_45666[(2)] = inst_43809);

(statearr_43816_45666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (1))){
var state_43813__$1 = state_43813;
var statearr_43817_45667 = state_43813__$1;
(statearr_43817_45667[(2)] = null);

(statearr_43817_45667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (4))){
var inst_43794 = (state_43813[(7)]);
var inst_43794__$1 = (state_43813[(2)]);
var inst_43795 = (inst_43794__$1 == null);
var state_43813__$1 = (function (){var statearr_43820 = state_43813;
(statearr_43820[(7)] = inst_43794__$1);

return statearr_43820;
})();
if(cljs.core.truth_(inst_43795)){
var statearr_43823_45668 = state_43813__$1;
(statearr_43823_45668[(1)] = (5));

} else {
var statearr_43824_45669 = state_43813__$1;
(statearr_43824_45669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (6))){
var inst_43799 = (state_43813[(8)]);
var inst_43794 = (state_43813[(7)]);
var inst_43799__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43800 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43801 = [inst_43794,inst_43799__$1];
var inst_43802 = (new cljs.core.PersistentVector(null,2,(5),inst_43800,inst_43801,null));
var state_43813__$1 = (function (){var statearr_43827 = state_43813;
(statearr_43827[(8)] = inst_43799__$1);

return statearr_43827;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43813__$1,(8),jobs,inst_43802);
} else {
if((state_val_43814 === (3))){
var inst_43811 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43813__$1,inst_43811);
} else {
if((state_val_43814 === (2))){
var state_43813__$1 = state_43813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43813__$1,(4),from);
} else {
if((state_val_43814 === (9))){
var inst_43806 = (state_43813[(2)]);
var state_43813__$1 = (function (){var statearr_43830 = state_43813;
(statearr_43830[(9)] = inst_43806);

return statearr_43830;
})();
var statearr_43831_45670 = state_43813__$1;
(statearr_43831_45670[(2)] = null);

(statearr_43831_45670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (5))){
var inst_43797 = cljs.core.async.close_BANG_(jobs);
var state_43813__$1 = state_43813;
var statearr_43832_45671 = state_43813__$1;
(statearr_43832_45671[(2)] = inst_43797);

(statearr_43832_45671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (8))){
var inst_43799 = (state_43813[(8)]);
var inst_43804 = (state_43813[(2)]);
var state_43813__$1 = (function (){var statearr_43833 = state_43813;
(statearr_43833[(10)] = inst_43804);

return statearr_43833;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43813__$1,(9),results,inst_43799);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0 = (function (){
var statearr_43834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__);

(statearr_43834[(1)] = (1));

return statearr_43834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1 = (function (state_43813){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_43813);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e43837){var ex__42995__auto__ = e43837;
var statearr_43838_45674 = state_43813;
(statearr_43838_45674[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_43813[(4)]))){
var statearr_43841_45675 = state_43813;
(statearr_43841_45675[(1)] = cljs.core.first((state_43813[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45676 = state_43813;
state_43813 = G__45676;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__ = function(state_43813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1.call(this,state_43813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_43843 = f__43145__auto__();
(statearr_43843[(6)] = c__43144__auto___45665);

return statearr_43843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


var c__43144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_43882){
var state_val_43883 = (state_43882[(1)]);
if((state_val_43883 === (7))){
var inst_43878 = (state_43882[(2)]);
var state_43882__$1 = state_43882;
var statearr_43887_45679 = state_43882__$1;
(statearr_43887_45679[(2)] = inst_43878);

(statearr_43887_45679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (20))){
var state_43882__$1 = state_43882;
var statearr_43889_45680 = state_43882__$1;
(statearr_43889_45680[(2)] = null);

(statearr_43889_45680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (1))){
var state_43882__$1 = state_43882;
var statearr_43892_45683 = state_43882__$1;
(statearr_43892_45683[(2)] = null);

(statearr_43892_45683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (4))){
var inst_43847 = (state_43882[(7)]);
var inst_43847__$1 = (state_43882[(2)]);
var inst_43848 = (inst_43847__$1 == null);
var state_43882__$1 = (function (){var statearr_43893 = state_43882;
(statearr_43893[(7)] = inst_43847__$1);

return statearr_43893;
})();
if(cljs.core.truth_(inst_43848)){
var statearr_43894_45684 = state_43882__$1;
(statearr_43894_45684[(1)] = (5));

} else {
var statearr_43895_45685 = state_43882__$1;
(statearr_43895_45685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (15))){
var inst_43860 = (state_43882[(8)]);
var state_43882__$1 = state_43882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43882__$1,(18),to,inst_43860);
} else {
if((state_val_43883 === (21))){
var inst_43873 = (state_43882[(2)]);
var state_43882__$1 = state_43882;
var statearr_43896_45686 = state_43882__$1;
(statearr_43896_45686[(2)] = inst_43873);

(statearr_43896_45686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (13))){
var inst_43875 = (state_43882[(2)]);
var state_43882__$1 = (function (){var statearr_43897 = state_43882;
(statearr_43897[(9)] = inst_43875);

return statearr_43897;
})();
var statearr_43898_45687 = state_43882__$1;
(statearr_43898_45687[(2)] = null);

(statearr_43898_45687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (6))){
var inst_43847 = (state_43882[(7)]);
var state_43882__$1 = state_43882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43882__$1,(11),inst_43847);
} else {
if((state_val_43883 === (17))){
var inst_43868 = (state_43882[(2)]);
var state_43882__$1 = state_43882;
if(cljs.core.truth_(inst_43868)){
var statearr_43901_45689 = state_43882__$1;
(statearr_43901_45689[(1)] = (19));

} else {
var statearr_43902_45690 = state_43882__$1;
(statearr_43902_45690[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (3))){
var inst_43880 = (state_43882[(2)]);
var state_43882__$1 = state_43882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43882__$1,inst_43880);
} else {
if((state_val_43883 === (12))){
var inst_43857 = (state_43882[(10)]);
var state_43882__$1 = state_43882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43882__$1,(14),inst_43857);
} else {
if((state_val_43883 === (2))){
var state_43882__$1 = state_43882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43882__$1,(4),results);
} else {
if((state_val_43883 === (19))){
var state_43882__$1 = state_43882;
var statearr_43905_45691 = state_43882__$1;
(statearr_43905_45691[(2)] = null);

(statearr_43905_45691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (11))){
var inst_43857 = (state_43882[(2)]);
var state_43882__$1 = (function (){var statearr_43908 = state_43882;
(statearr_43908[(10)] = inst_43857);

return statearr_43908;
})();
var statearr_43909_45692 = state_43882__$1;
(statearr_43909_45692[(2)] = null);

(statearr_43909_45692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (9))){
var state_43882__$1 = state_43882;
var statearr_43914_45693 = state_43882__$1;
(statearr_43914_45693[(2)] = null);

(statearr_43914_45693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (5))){
var state_43882__$1 = state_43882;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43915_45694 = state_43882__$1;
(statearr_43915_45694[(1)] = (8));

} else {
var statearr_43916_45695 = state_43882__$1;
(statearr_43916_45695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (14))){
var inst_43862 = (state_43882[(11)]);
var inst_43860 = (state_43882[(8)]);
var inst_43860__$1 = (state_43882[(2)]);
var inst_43861 = (inst_43860__$1 == null);
var inst_43862__$1 = cljs.core.not(inst_43861);
var state_43882__$1 = (function (){var statearr_43917 = state_43882;
(statearr_43917[(11)] = inst_43862__$1);

(statearr_43917[(8)] = inst_43860__$1);

return statearr_43917;
})();
if(inst_43862__$1){
var statearr_43918_45696 = state_43882__$1;
(statearr_43918_45696[(1)] = (15));

} else {
var statearr_43919_45697 = state_43882__$1;
(statearr_43919_45697[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (16))){
var inst_43862 = (state_43882[(11)]);
var state_43882__$1 = state_43882;
var statearr_43920_45699 = state_43882__$1;
(statearr_43920_45699[(2)] = inst_43862);

(statearr_43920_45699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (10))){
var inst_43854 = (state_43882[(2)]);
var state_43882__$1 = state_43882;
var statearr_43921_45700 = state_43882__$1;
(statearr_43921_45700[(2)] = inst_43854);

(statearr_43921_45700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (18))){
var inst_43865 = (state_43882[(2)]);
var state_43882__$1 = state_43882;
var statearr_43922_45705 = state_43882__$1;
(statearr_43922_45705[(2)] = inst_43865);

(statearr_43922_45705[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (8))){
var inst_43851 = cljs.core.async.close_BANG_(to);
var state_43882__$1 = state_43882;
var statearr_43923_45706 = state_43882__$1;
(statearr_43923_45706[(2)] = inst_43851);

(statearr_43923_45706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0 = (function (){
var statearr_43927 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__);

(statearr_43927[(1)] = (1));

return statearr_43927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1 = (function (state_43882){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_43882);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e43928){var ex__42995__auto__ = e43928;
var statearr_43929_45708 = state_43882;
(statearr_43929_45708[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_43882[(4)]))){
var statearr_43930_45709 = state_43882;
(statearr_43930_45709[(1)] = cljs.core.first((state_43882[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45710 = state_43882;
state_43882 = G__45710;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__ = function(state_43882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1.call(this,state_43882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_43931 = f__43145__auto__();
(statearr_43931[(6)] = c__43144__auto__);

return statearr_43931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));

return c__43144__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__43933 = arguments.length;
switch (G__43933) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__43935 = arguments.length;
switch (G__43935) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__43945 = arguments.length;
switch (G__43945) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43144__auto___45716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_43975){
var state_val_43976 = (state_43975[(1)]);
if((state_val_43976 === (7))){
var inst_43970 = (state_43975[(2)]);
var state_43975__$1 = state_43975;
var statearr_43979_45717 = state_43975__$1;
(statearr_43979_45717[(2)] = inst_43970);

(statearr_43979_45717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43976 === (1))){
var state_43975__$1 = state_43975;
var statearr_43982_45718 = state_43975__$1;
(statearr_43982_45718[(2)] = null);

(statearr_43982_45718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43976 === (4))){
var inst_43950 = (state_43975[(7)]);
var inst_43950__$1 = (state_43975[(2)]);
var inst_43951 = (inst_43950__$1 == null);
var state_43975__$1 = (function (){var statearr_43983 = state_43975;
(statearr_43983[(7)] = inst_43950__$1);

return statearr_43983;
})();
if(cljs.core.truth_(inst_43951)){
var statearr_43984_45719 = state_43975__$1;
(statearr_43984_45719[(1)] = (5));

} else {
var statearr_43985_45720 = state_43975__$1;
(statearr_43985_45720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43976 === (13))){
var state_43975__$1 = state_43975;
var statearr_43986_45721 = state_43975__$1;
(statearr_43986_45721[(2)] = null);

(statearr_43986_45721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43976 === (6))){
var inst_43950 = (state_43975[(7)]);
var inst_43956 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43950) : p.call(null,inst_43950));
var state_43975__$1 = state_43975;
if(cljs.core.truth_(inst_43956)){
var statearr_43989_45723 = state_43975__$1;
(statearr_43989_45723[(1)] = (9));

} else {
var statearr_43990_45724 = state_43975__$1;
(statearr_43990_45724[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43976 === (3))){
var inst_43972 = (state_43975[(2)]);
var state_43975__$1 = state_43975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43975__$1,inst_43972);
} else {
if((state_val_43976 === (12))){
var state_43975__$1 = state_43975;
var statearr_43991_45730 = state_43975__$1;
(statearr_43991_45730[(2)] = null);

(statearr_43991_45730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43976 === (2))){
var state_43975__$1 = state_43975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43975__$1,(4),ch);
} else {
if((state_val_43976 === (11))){
var inst_43950 = (state_43975[(7)]);
var inst_43960 = (state_43975[(2)]);
var state_43975__$1 = state_43975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43975__$1,(8),inst_43960,inst_43950);
} else {
if((state_val_43976 === (9))){
var state_43975__$1 = state_43975;
var statearr_43996_45731 = state_43975__$1;
(statearr_43996_45731[(2)] = tc);

(statearr_43996_45731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43976 === (5))){
var inst_43953 = cljs.core.async.close_BANG_(tc);
var inst_43954 = cljs.core.async.close_BANG_(fc);
var state_43975__$1 = (function (){var statearr_43997 = state_43975;
(statearr_43997[(8)] = inst_43953);

return statearr_43997;
})();
var statearr_43998_45732 = state_43975__$1;
(statearr_43998_45732[(2)] = inst_43954);

(statearr_43998_45732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43976 === (14))){
var inst_43968 = (state_43975[(2)]);
var state_43975__$1 = state_43975;
var statearr_43999_45733 = state_43975__$1;
(statearr_43999_45733[(2)] = inst_43968);

(statearr_43999_45733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43976 === (10))){
var state_43975__$1 = state_43975;
var statearr_44000_45734 = state_43975__$1;
(statearr_44000_45734[(2)] = fc);

(statearr_44000_45734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43976 === (8))){
var inst_43962 = (state_43975[(2)]);
var state_43975__$1 = state_43975;
if(cljs.core.truth_(inst_43962)){
var statearr_44005_45735 = state_43975__$1;
(statearr_44005_45735[(1)] = (12));

} else {
var statearr_44006_45736 = state_43975__$1;
(statearr_44006_45736[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42992__auto__ = null;
var cljs$core$async$state_machine__42992__auto____0 = (function (){
var statearr_44007 = [null,null,null,null,null,null,null,null,null];
(statearr_44007[(0)] = cljs$core$async$state_machine__42992__auto__);

(statearr_44007[(1)] = (1));

return statearr_44007;
});
var cljs$core$async$state_machine__42992__auto____1 = (function (state_43975){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_43975);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e44012){var ex__42995__auto__ = e44012;
var statearr_44013_45737 = state_43975;
(statearr_44013_45737[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_43975[(4)]))){
var statearr_44014_45738 = state_43975;
(statearr_44014_45738[(1)] = cljs.core.first((state_43975[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45739 = state_43975;
state_43975 = G__45739;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$state_machine__42992__auto__ = function(state_43975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42992__auto____1.call(this,state_43975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42992__auto____0;
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42992__auto____1;
return cljs$core$async$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_44016 = f__43145__auto__();
(statearr_44016[(6)] = c__43144__auto___45716);

return statearr_44016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_44043){
var state_val_44044 = (state_44043[(1)]);
if((state_val_44044 === (7))){
var inst_44038 = (state_44043[(2)]);
var state_44043__$1 = state_44043;
var statearr_44046_45740 = state_44043__$1;
(statearr_44046_45740[(2)] = inst_44038);

(statearr_44046_45740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44044 === (1))){
var inst_44021 = init;
var inst_44022 = inst_44021;
var state_44043__$1 = (function (){var statearr_44047 = state_44043;
(statearr_44047[(7)] = inst_44022);

return statearr_44047;
})();
var statearr_44048_45742 = state_44043__$1;
(statearr_44048_45742[(2)] = null);

(statearr_44048_45742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44044 === (4))){
var inst_44025 = (state_44043[(8)]);
var inst_44025__$1 = (state_44043[(2)]);
var inst_44026 = (inst_44025__$1 == null);
var state_44043__$1 = (function (){var statearr_44049 = state_44043;
(statearr_44049[(8)] = inst_44025__$1);

return statearr_44049;
})();
if(cljs.core.truth_(inst_44026)){
var statearr_44054_45744 = state_44043__$1;
(statearr_44054_45744[(1)] = (5));

} else {
var statearr_44055_45745 = state_44043__$1;
(statearr_44055_45745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44044 === (6))){
var inst_44025 = (state_44043[(8)]);
var inst_44029 = (state_44043[(9)]);
var inst_44022 = (state_44043[(7)]);
var inst_44029__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44022,inst_44025) : f.call(null,inst_44022,inst_44025));
var inst_44030 = cljs.core.reduced_QMARK_(inst_44029__$1);
var state_44043__$1 = (function (){var statearr_44056 = state_44043;
(statearr_44056[(9)] = inst_44029__$1);

return statearr_44056;
})();
if(inst_44030){
var statearr_44057_45746 = state_44043__$1;
(statearr_44057_45746[(1)] = (8));

} else {
var statearr_44058_45747 = state_44043__$1;
(statearr_44058_45747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44044 === (3))){
var inst_44040 = (state_44043[(2)]);
var state_44043__$1 = state_44043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44043__$1,inst_44040);
} else {
if((state_val_44044 === (2))){
var state_44043__$1 = state_44043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44043__$1,(4),ch);
} else {
if((state_val_44044 === (9))){
var inst_44029 = (state_44043[(9)]);
var inst_44022 = inst_44029;
var state_44043__$1 = (function (){var statearr_44059 = state_44043;
(statearr_44059[(7)] = inst_44022);

return statearr_44059;
})();
var statearr_44060_45748 = state_44043__$1;
(statearr_44060_45748[(2)] = null);

(statearr_44060_45748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44044 === (5))){
var inst_44022 = (state_44043[(7)]);
var state_44043__$1 = state_44043;
var statearr_44063_45750 = state_44043__$1;
(statearr_44063_45750[(2)] = inst_44022);

(statearr_44063_45750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44044 === (10))){
var inst_44036 = (state_44043[(2)]);
var state_44043__$1 = state_44043;
var statearr_44064_45751 = state_44043__$1;
(statearr_44064_45751[(2)] = inst_44036);

(statearr_44064_45751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44044 === (8))){
var inst_44029 = (state_44043[(9)]);
var inst_44032 = cljs.core.deref(inst_44029);
var state_44043__$1 = state_44043;
var statearr_44065_45753 = state_44043__$1;
(statearr_44065_45753[(2)] = inst_44032);

(statearr_44065_45753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42992__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42992__auto____0 = (function (){
var statearr_44066 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44066[(0)] = cljs$core$async$reduce_$_state_machine__42992__auto__);

(statearr_44066[(1)] = (1));

return statearr_44066;
});
var cljs$core$async$reduce_$_state_machine__42992__auto____1 = (function (state_44043){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_44043);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e44067){var ex__42995__auto__ = e44067;
var statearr_44069_45754 = state_44043;
(statearr_44069_45754[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_44043[(4)]))){
var statearr_44071_45755 = state_44043;
(statearr_44071_45755[(1)] = cljs.core.first((state_44043[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45756 = state_44043;
state_44043 = G__45756;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42992__auto__ = function(state_44043){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42992__auto____1.call(this,state_44043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42992__auto____0;
cljs$core$async$reduce_$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42992__auto____1;
return cljs$core$async$reduce_$_state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_44072 = f__43145__auto__();
(statearr_44072[(6)] = c__43144__auto__);

return statearr_44072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));

return c__43144__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_44080){
var state_val_44081 = (state_44080[(1)]);
if((state_val_44081 === (1))){
var inst_44075 = cljs.core.async.reduce(f__$1,init,ch);
var state_44080__$1 = state_44080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44080__$1,(2),inst_44075);
} else {
if((state_val_44081 === (2))){
var inst_44077 = (state_44080[(2)]);
var inst_44078 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44077) : f__$1.call(null,inst_44077));
var state_44080__$1 = state_44080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44080__$1,inst_44078);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42992__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42992__auto____0 = (function (){
var statearr_44083 = [null,null,null,null,null,null,null];
(statearr_44083[(0)] = cljs$core$async$transduce_$_state_machine__42992__auto__);

(statearr_44083[(1)] = (1));

return statearr_44083;
});
var cljs$core$async$transduce_$_state_machine__42992__auto____1 = (function (state_44080){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_44080);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e44084){var ex__42995__auto__ = e44084;
var statearr_44085_45758 = state_44080;
(statearr_44085_45758[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_44080[(4)]))){
var statearr_44086_45759 = state_44080;
(statearr_44086_45759[(1)] = cljs.core.first((state_44080[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45760 = state_44080;
state_44080 = G__45760;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42992__auto__ = function(state_44080){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42992__auto____1.call(this,state_44080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42992__auto____0;
cljs$core$async$transduce_$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42992__auto____1;
return cljs$core$async$transduce_$_state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_44087 = f__43145__auto__();
(statearr_44087[(6)] = c__43144__auto__);

return statearr_44087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));

return c__43144__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44094 = arguments.length;
switch (G__44094) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_44132){
var state_val_44133 = (state_44132[(1)]);
if((state_val_44133 === (7))){
var inst_44113 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
var statearr_44140_45768 = state_44132__$1;
(statearr_44140_45768[(2)] = inst_44113);

(statearr_44140_45768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (1))){
var inst_44102 = cljs.core.seq(coll);
var inst_44104 = inst_44102;
var state_44132__$1 = (function (){var statearr_44141 = state_44132;
(statearr_44141[(7)] = inst_44104);

return statearr_44141;
})();
var statearr_44142_45769 = state_44132__$1;
(statearr_44142_45769[(2)] = null);

(statearr_44142_45769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (4))){
var inst_44104 = (state_44132[(7)]);
var inst_44111 = cljs.core.first(inst_44104);
var state_44132__$1 = state_44132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44132__$1,(7),ch,inst_44111);
} else {
if((state_val_44133 === (13))){
var inst_44125 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
var statearr_44145_45773 = state_44132__$1;
(statearr_44145_45773[(2)] = inst_44125);

(statearr_44145_45773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (6))){
var inst_44116 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
if(cljs.core.truth_(inst_44116)){
var statearr_44152_45774 = state_44132__$1;
(statearr_44152_45774[(1)] = (8));

} else {
var statearr_44155_45775 = state_44132__$1;
(statearr_44155_45775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (3))){
var inst_44129 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44132__$1,inst_44129);
} else {
if((state_val_44133 === (12))){
var state_44132__$1 = state_44132;
var statearr_44161_45776 = state_44132__$1;
(statearr_44161_45776[(2)] = null);

(statearr_44161_45776[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (2))){
var inst_44104 = (state_44132[(7)]);
var state_44132__$1 = state_44132;
if(cljs.core.truth_(inst_44104)){
var statearr_44167_45777 = state_44132__$1;
(statearr_44167_45777[(1)] = (4));

} else {
var statearr_44168_45781 = state_44132__$1;
(statearr_44168_45781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (11))){
var inst_44122 = cljs.core.async.close_BANG_(ch);
var state_44132__$1 = state_44132;
var statearr_44169_45782 = state_44132__$1;
(statearr_44169_45782[(2)] = inst_44122);

(statearr_44169_45782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (9))){
var state_44132__$1 = state_44132;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44173_45783 = state_44132__$1;
(statearr_44173_45783[(1)] = (11));

} else {
var statearr_44174_45784 = state_44132__$1;
(statearr_44174_45784[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (5))){
var inst_44104 = (state_44132[(7)]);
var state_44132__$1 = state_44132;
var statearr_44176_45785 = state_44132__$1;
(statearr_44176_45785[(2)] = inst_44104);

(statearr_44176_45785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (10))){
var inst_44127 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
var statearr_44181_45789 = state_44132__$1;
(statearr_44181_45789[(2)] = inst_44127);

(statearr_44181_45789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (8))){
var inst_44104 = (state_44132[(7)]);
var inst_44118 = cljs.core.next(inst_44104);
var inst_44104__$1 = inst_44118;
var state_44132__$1 = (function (){var statearr_44182 = state_44132;
(statearr_44182[(7)] = inst_44104__$1);

return statearr_44182;
})();
var statearr_44183_45790 = state_44132__$1;
(statearr_44183_45790[(2)] = null);

(statearr_44183_45790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42992__auto__ = null;
var cljs$core$async$state_machine__42992__auto____0 = (function (){
var statearr_44187 = [null,null,null,null,null,null,null,null];
(statearr_44187[(0)] = cljs$core$async$state_machine__42992__auto__);

(statearr_44187[(1)] = (1));

return statearr_44187;
});
var cljs$core$async$state_machine__42992__auto____1 = (function (state_44132){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_44132);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e44188){var ex__42995__auto__ = e44188;
var statearr_44190_45795 = state_44132;
(statearr_44190_45795[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_44132[(4)]))){
var statearr_44191_45799 = state_44132;
(statearr_44191_45799[(1)] = cljs.core.first((state_44132[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45800 = state_44132;
state_44132 = G__45800;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$state_machine__42992__auto__ = function(state_44132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42992__auto____1.call(this,state_44132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42992__auto____0;
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42992__auto____1;
return cljs$core$async$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_44192 = f__43145__auto__();
(statearr_44192[(6)] = c__43144__auto__);

return statearr_44192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));

return c__43144__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44196 = arguments.length;
switch (G__44196) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_45809 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_45809(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45811 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_45811(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45821 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_45821(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45822 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_45822(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44212 = (function (ch,cs,meta44213){
this.ch = ch;
this.cs = cs;
this.meta44213 = meta44213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44214,meta44213__$1){
var self__ = this;
var _44214__$1 = this;
return (new cljs.core.async.t_cljs$core$async44212(self__.ch,self__.cs,meta44213__$1));
}));

(cljs.core.async.t_cljs$core$async44212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44214){
var self__ = this;
var _44214__$1 = this;
return self__.meta44213;
}));

(cljs.core.async.t_cljs$core$async44212.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44212.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44212.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44212.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44212.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44213","meta44213",-1700120102,null)], null);
}));

(cljs.core.async.t_cljs$core$async44212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44212");

(cljs.core.async.t_cljs$core$async44212.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44212.
 */
cljs.core.async.__GT_t_cljs$core$async44212 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44212(ch__$1,cs__$1,meta44213){
return (new cljs.core.async.t_cljs$core$async44212(ch__$1,cs__$1,meta44213));
});

}

return (new cljs.core.async.t_cljs$core$async44212(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43144__auto___45829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_44347){
var state_val_44348 = (state_44347[(1)]);
if((state_val_44348 === (7))){
var inst_44343 = (state_44347[(2)]);
var state_44347__$1 = state_44347;
var statearr_44351_45830 = state_44347__$1;
(statearr_44351_45830[(2)] = inst_44343);

(statearr_44351_45830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (20))){
var inst_44248 = (state_44347[(7)]);
var inst_44260 = cljs.core.first(inst_44248);
var inst_44261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44260,(0),null);
var inst_44262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44260,(1),null);
var state_44347__$1 = (function (){var statearr_44352 = state_44347;
(statearr_44352[(8)] = inst_44261);

return statearr_44352;
})();
if(cljs.core.truth_(inst_44262)){
var statearr_44353_45831 = state_44347__$1;
(statearr_44353_45831[(1)] = (22));

} else {
var statearr_44354_45832 = state_44347__$1;
(statearr_44354_45832[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (27))){
var inst_44217 = (state_44347[(9)]);
var inst_44297 = (state_44347[(10)]);
var inst_44292 = (state_44347[(11)]);
var inst_44290 = (state_44347[(12)]);
var inst_44297__$1 = cljs.core._nth(inst_44290,inst_44292);
var inst_44298 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44297__$1,inst_44217,done);
var state_44347__$1 = (function (){var statearr_44355 = state_44347;
(statearr_44355[(10)] = inst_44297__$1);

return statearr_44355;
})();
if(cljs.core.truth_(inst_44298)){
var statearr_44356_45833 = state_44347__$1;
(statearr_44356_45833[(1)] = (30));

} else {
var statearr_44357_45834 = state_44347__$1;
(statearr_44357_45834[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (1))){
var state_44347__$1 = state_44347;
var statearr_44360_45835 = state_44347__$1;
(statearr_44360_45835[(2)] = null);

(statearr_44360_45835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (24))){
var inst_44248 = (state_44347[(7)]);
var inst_44267 = (state_44347[(2)]);
var inst_44268 = cljs.core.next(inst_44248);
var inst_44226 = inst_44268;
var inst_44227 = null;
var inst_44228 = (0);
var inst_44229 = (0);
var state_44347__$1 = (function (){var statearr_44361 = state_44347;
(statearr_44361[(13)] = inst_44229);

(statearr_44361[(14)] = inst_44226);

(statearr_44361[(15)] = inst_44227);

(statearr_44361[(16)] = inst_44228);

(statearr_44361[(17)] = inst_44267);

return statearr_44361;
})();
var statearr_44363_45836 = state_44347__$1;
(statearr_44363_45836[(2)] = null);

(statearr_44363_45836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (39))){
var state_44347__$1 = state_44347;
var statearr_44367_45837 = state_44347__$1;
(statearr_44367_45837[(2)] = null);

(statearr_44367_45837[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (4))){
var inst_44217 = (state_44347[(9)]);
var inst_44217__$1 = (state_44347[(2)]);
var inst_44218 = (inst_44217__$1 == null);
var state_44347__$1 = (function (){var statearr_44369 = state_44347;
(statearr_44369[(9)] = inst_44217__$1);

return statearr_44369;
})();
if(cljs.core.truth_(inst_44218)){
var statearr_44370_45838 = state_44347__$1;
(statearr_44370_45838[(1)] = (5));

} else {
var statearr_44371_45839 = state_44347__$1;
(statearr_44371_45839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (15))){
var inst_44229 = (state_44347[(13)]);
var inst_44226 = (state_44347[(14)]);
var inst_44227 = (state_44347[(15)]);
var inst_44228 = (state_44347[(16)]);
var inst_44244 = (state_44347[(2)]);
var inst_44245 = (inst_44229 + (1));
var tmp44364 = inst_44226;
var tmp44365 = inst_44227;
var tmp44366 = inst_44228;
var inst_44226__$1 = tmp44364;
var inst_44227__$1 = tmp44365;
var inst_44228__$1 = tmp44366;
var inst_44229__$1 = inst_44245;
var state_44347__$1 = (function (){var statearr_44372 = state_44347;
(statearr_44372[(18)] = inst_44244);

(statearr_44372[(13)] = inst_44229__$1);

(statearr_44372[(14)] = inst_44226__$1);

(statearr_44372[(15)] = inst_44227__$1);

(statearr_44372[(16)] = inst_44228__$1);

return statearr_44372;
})();
var statearr_44373_45840 = state_44347__$1;
(statearr_44373_45840[(2)] = null);

(statearr_44373_45840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (21))){
var inst_44271 = (state_44347[(2)]);
var state_44347__$1 = state_44347;
var statearr_44377_45841 = state_44347__$1;
(statearr_44377_45841[(2)] = inst_44271);

(statearr_44377_45841[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (31))){
var inst_44297 = (state_44347[(10)]);
var inst_44301 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44297);
var state_44347__$1 = state_44347;
var statearr_44378_45843 = state_44347__$1;
(statearr_44378_45843[(2)] = inst_44301);

(statearr_44378_45843[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (32))){
var inst_44289 = (state_44347[(19)]);
var inst_44292 = (state_44347[(11)]);
var inst_44291 = (state_44347[(20)]);
var inst_44290 = (state_44347[(12)]);
var inst_44303 = (state_44347[(2)]);
var inst_44304 = (inst_44292 + (1));
var tmp44374 = inst_44289;
var tmp44375 = inst_44291;
var tmp44376 = inst_44290;
var inst_44289__$1 = tmp44374;
var inst_44290__$1 = tmp44376;
var inst_44291__$1 = tmp44375;
var inst_44292__$1 = inst_44304;
var state_44347__$1 = (function (){var statearr_44380 = state_44347;
(statearr_44380[(21)] = inst_44303);

(statearr_44380[(19)] = inst_44289__$1);

(statearr_44380[(11)] = inst_44292__$1);

(statearr_44380[(20)] = inst_44291__$1);

(statearr_44380[(12)] = inst_44290__$1);

return statearr_44380;
})();
var statearr_44381_45845 = state_44347__$1;
(statearr_44381_45845[(2)] = null);

(statearr_44381_45845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (40))){
var inst_44316 = (state_44347[(22)]);
var inst_44320 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44316);
var state_44347__$1 = state_44347;
var statearr_44382_45846 = state_44347__$1;
(statearr_44382_45846[(2)] = inst_44320);

(statearr_44382_45846[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (33))){
var inst_44307 = (state_44347[(23)]);
var inst_44309 = cljs.core.chunked_seq_QMARK_(inst_44307);
var state_44347__$1 = state_44347;
if(inst_44309){
var statearr_44383_45847 = state_44347__$1;
(statearr_44383_45847[(1)] = (36));

} else {
var statearr_44384_45848 = state_44347__$1;
(statearr_44384_45848[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (13))){
var inst_44238 = (state_44347[(24)]);
var inst_44241 = cljs.core.async.close_BANG_(inst_44238);
var state_44347__$1 = state_44347;
var statearr_44385_45849 = state_44347__$1;
(statearr_44385_45849[(2)] = inst_44241);

(statearr_44385_45849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (22))){
var inst_44261 = (state_44347[(8)]);
var inst_44264 = cljs.core.async.close_BANG_(inst_44261);
var state_44347__$1 = state_44347;
var statearr_44386_45850 = state_44347__$1;
(statearr_44386_45850[(2)] = inst_44264);

(statearr_44386_45850[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (36))){
var inst_44307 = (state_44347[(23)]);
var inst_44311 = cljs.core.chunk_first(inst_44307);
var inst_44312 = cljs.core.chunk_rest(inst_44307);
var inst_44313 = cljs.core.count(inst_44311);
var inst_44289 = inst_44312;
var inst_44290 = inst_44311;
var inst_44291 = inst_44313;
var inst_44292 = (0);
var state_44347__$1 = (function (){var statearr_44387 = state_44347;
(statearr_44387[(19)] = inst_44289);

(statearr_44387[(11)] = inst_44292);

(statearr_44387[(20)] = inst_44291);

(statearr_44387[(12)] = inst_44290);

return statearr_44387;
})();
var statearr_44390_45851 = state_44347__$1;
(statearr_44390_45851[(2)] = null);

(statearr_44390_45851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (41))){
var inst_44307 = (state_44347[(23)]);
var inst_44322 = (state_44347[(2)]);
var inst_44323 = cljs.core.next(inst_44307);
var inst_44289 = inst_44323;
var inst_44290 = null;
var inst_44291 = (0);
var inst_44292 = (0);
var state_44347__$1 = (function (){var statearr_44392 = state_44347;
(statearr_44392[(19)] = inst_44289);

(statearr_44392[(25)] = inst_44322);

(statearr_44392[(11)] = inst_44292);

(statearr_44392[(20)] = inst_44291);

(statearr_44392[(12)] = inst_44290);

return statearr_44392;
})();
var statearr_44393_45854 = state_44347__$1;
(statearr_44393_45854[(2)] = null);

(statearr_44393_45854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (43))){
var state_44347__$1 = state_44347;
var statearr_44394_45855 = state_44347__$1;
(statearr_44394_45855[(2)] = null);

(statearr_44394_45855[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (29))){
var inst_44331 = (state_44347[(2)]);
var state_44347__$1 = state_44347;
var statearr_44395_45856 = state_44347__$1;
(statearr_44395_45856[(2)] = inst_44331);

(statearr_44395_45856[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (44))){
var inst_44340 = (state_44347[(2)]);
var state_44347__$1 = (function (){var statearr_44397 = state_44347;
(statearr_44397[(26)] = inst_44340);

return statearr_44397;
})();
var statearr_44398_45858 = state_44347__$1;
(statearr_44398_45858[(2)] = null);

(statearr_44398_45858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (6))){
var inst_44281 = (state_44347[(27)]);
var inst_44280 = cljs.core.deref(cs);
var inst_44281__$1 = cljs.core.keys(inst_44280);
var inst_44282 = cljs.core.count(inst_44281__$1);
var inst_44283 = cljs.core.reset_BANG_(dctr,inst_44282);
var inst_44288 = cljs.core.seq(inst_44281__$1);
var inst_44289 = inst_44288;
var inst_44290 = null;
var inst_44291 = (0);
var inst_44292 = (0);
var state_44347__$1 = (function (){var statearr_44399 = state_44347;
(statearr_44399[(19)] = inst_44289);

(statearr_44399[(27)] = inst_44281__$1);

(statearr_44399[(11)] = inst_44292);

(statearr_44399[(20)] = inst_44291);

(statearr_44399[(12)] = inst_44290);

(statearr_44399[(28)] = inst_44283);

return statearr_44399;
})();
var statearr_44400_45863 = state_44347__$1;
(statearr_44400_45863[(2)] = null);

(statearr_44400_45863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (28))){
var inst_44307 = (state_44347[(23)]);
var inst_44289 = (state_44347[(19)]);
var inst_44307__$1 = cljs.core.seq(inst_44289);
var state_44347__$1 = (function (){var statearr_44405 = state_44347;
(statearr_44405[(23)] = inst_44307__$1);

return statearr_44405;
})();
if(inst_44307__$1){
var statearr_44407_45865 = state_44347__$1;
(statearr_44407_45865[(1)] = (33));

} else {
var statearr_44408_45866 = state_44347__$1;
(statearr_44408_45866[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (25))){
var inst_44292 = (state_44347[(11)]);
var inst_44291 = (state_44347[(20)]);
var inst_44294 = (inst_44292 < inst_44291);
var inst_44295 = inst_44294;
var state_44347__$1 = state_44347;
if(cljs.core.truth_(inst_44295)){
var statearr_44409_45867 = state_44347__$1;
(statearr_44409_45867[(1)] = (27));

} else {
var statearr_44411_45868 = state_44347__$1;
(statearr_44411_45868[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (34))){
var state_44347__$1 = state_44347;
var statearr_44413_45869 = state_44347__$1;
(statearr_44413_45869[(2)] = null);

(statearr_44413_45869[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (17))){
var state_44347__$1 = state_44347;
var statearr_44415_45871 = state_44347__$1;
(statearr_44415_45871[(2)] = null);

(statearr_44415_45871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (3))){
var inst_44345 = (state_44347[(2)]);
var state_44347__$1 = state_44347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44347__$1,inst_44345);
} else {
if((state_val_44348 === (12))){
var inst_44276 = (state_44347[(2)]);
var state_44347__$1 = state_44347;
var statearr_44417_45873 = state_44347__$1;
(statearr_44417_45873[(2)] = inst_44276);

(statearr_44417_45873[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (2))){
var state_44347__$1 = state_44347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44347__$1,(4),ch);
} else {
if((state_val_44348 === (23))){
var state_44347__$1 = state_44347;
var statearr_44419_45874 = state_44347__$1;
(statearr_44419_45874[(2)] = null);

(statearr_44419_45874[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (35))){
var inst_44329 = (state_44347[(2)]);
var state_44347__$1 = state_44347;
var statearr_44420_45875 = state_44347__$1;
(statearr_44420_45875[(2)] = inst_44329);

(statearr_44420_45875[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (19))){
var inst_44248 = (state_44347[(7)]);
var inst_44252 = cljs.core.chunk_first(inst_44248);
var inst_44253 = cljs.core.chunk_rest(inst_44248);
var inst_44254 = cljs.core.count(inst_44252);
var inst_44226 = inst_44253;
var inst_44227 = inst_44252;
var inst_44228 = inst_44254;
var inst_44229 = (0);
var state_44347__$1 = (function (){var statearr_44421 = state_44347;
(statearr_44421[(13)] = inst_44229);

(statearr_44421[(14)] = inst_44226);

(statearr_44421[(15)] = inst_44227);

(statearr_44421[(16)] = inst_44228);

return statearr_44421;
})();
var statearr_44424_45876 = state_44347__$1;
(statearr_44424_45876[(2)] = null);

(statearr_44424_45876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (11))){
var inst_44248 = (state_44347[(7)]);
var inst_44226 = (state_44347[(14)]);
var inst_44248__$1 = cljs.core.seq(inst_44226);
var state_44347__$1 = (function (){var statearr_44427 = state_44347;
(statearr_44427[(7)] = inst_44248__$1);

return statearr_44427;
})();
if(inst_44248__$1){
var statearr_44428_45877 = state_44347__$1;
(statearr_44428_45877[(1)] = (16));

} else {
var statearr_44429_45878 = state_44347__$1;
(statearr_44429_45878[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (9))){
var inst_44278 = (state_44347[(2)]);
var state_44347__$1 = state_44347;
var statearr_44432_45879 = state_44347__$1;
(statearr_44432_45879[(2)] = inst_44278);

(statearr_44432_45879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (5))){
var inst_44224 = cljs.core.deref(cs);
var inst_44225 = cljs.core.seq(inst_44224);
var inst_44226 = inst_44225;
var inst_44227 = null;
var inst_44228 = (0);
var inst_44229 = (0);
var state_44347__$1 = (function (){var statearr_44433 = state_44347;
(statearr_44433[(13)] = inst_44229);

(statearr_44433[(14)] = inst_44226);

(statearr_44433[(15)] = inst_44227);

(statearr_44433[(16)] = inst_44228);

return statearr_44433;
})();
var statearr_44434_45880 = state_44347__$1;
(statearr_44434_45880[(2)] = null);

(statearr_44434_45880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (14))){
var state_44347__$1 = state_44347;
var statearr_44435_45881 = state_44347__$1;
(statearr_44435_45881[(2)] = null);

(statearr_44435_45881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (45))){
var inst_44337 = (state_44347[(2)]);
var state_44347__$1 = state_44347;
var statearr_44438_45882 = state_44347__$1;
(statearr_44438_45882[(2)] = inst_44337);

(statearr_44438_45882[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (26))){
var inst_44281 = (state_44347[(27)]);
var inst_44333 = (state_44347[(2)]);
var inst_44334 = cljs.core.seq(inst_44281);
var state_44347__$1 = (function (){var statearr_44439 = state_44347;
(statearr_44439[(29)] = inst_44333);

return statearr_44439;
})();
if(inst_44334){
var statearr_44440_45884 = state_44347__$1;
(statearr_44440_45884[(1)] = (42));

} else {
var statearr_44441_45885 = state_44347__$1;
(statearr_44441_45885[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (16))){
var inst_44248 = (state_44347[(7)]);
var inst_44250 = cljs.core.chunked_seq_QMARK_(inst_44248);
var state_44347__$1 = state_44347;
if(inst_44250){
var statearr_44442_45889 = state_44347__$1;
(statearr_44442_45889[(1)] = (19));

} else {
var statearr_44443_45890 = state_44347__$1;
(statearr_44443_45890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (38))){
var inst_44326 = (state_44347[(2)]);
var state_44347__$1 = state_44347;
var statearr_44448_45891 = state_44347__$1;
(statearr_44448_45891[(2)] = inst_44326);

(statearr_44448_45891[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (30))){
var state_44347__$1 = state_44347;
var statearr_44450_45892 = state_44347__$1;
(statearr_44450_45892[(2)] = null);

(statearr_44450_45892[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (10))){
var inst_44229 = (state_44347[(13)]);
var inst_44227 = (state_44347[(15)]);
var inst_44237 = cljs.core._nth(inst_44227,inst_44229);
var inst_44238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44237,(0),null);
var inst_44239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44237,(1),null);
var state_44347__$1 = (function (){var statearr_44451 = state_44347;
(statearr_44451[(24)] = inst_44238);

return statearr_44451;
})();
if(cljs.core.truth_(inst_44239)){
var statearr_44452_45895 = state_44347__$1;
(statearr_44452_45895[(1)] = (13));

} else {
var statearr_44453_45898 = state_44347__$1;
(statearr_44453_45898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (18))){
var inst_44274 = (state_44347[(2)]);
var state_44347__$1 = state_44347;
var statearr_44454_45899 = state_44347__$1;
(statearr_44454_45899[(2)] = inst_44274);

(statearr_44454_45899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (42))){
var state_44347__$1 = state_44347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44347__$1,(45),dchan);
} else {
if((state_val_44348 === (37))){
var inst_44307 = (state_44347[(23)]);
var inst_44316 = (state_44347[(22)]);
var inst_44217 = (state_44347[(9)]);
var inst_44316__$1 = cljs.core.first(inst_44307);
var inst_44317 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44316__$1,inst_44217,done);
var state_44347__$1 = (function (){var statearr_44456 = state_44347;
(statearr_44456[(22)] = inst_44316__$1);

return statearr_44456;
})();
if(cljs.core.truth_(inst_44317)){
var statearr_44457_45900 = state_44347__$1;
(statearr_44457_45900[(1)] = (39));

} else {
var statearr_44458_45901 = state_44347__$1;
(statearr_44458_45901[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44348 === (8))){
var inst_44229 = (state_44347[(13)]);
var inst_44228 = (state_44347[(16)]);
var inst_44231 = (inst_44229 < inst_44228);
var inst_44232 = inst_44231;
var state_44347__$1 = state_44347;
if(cljs.core.truth_(inst_44232)){
var statearr_44459_45905 = state_44347__$1;
(statearr_44459_45905[(1)] = (10));

} else {
var statearr_44460_45906 = state_44347__$1;
(statearr_44460_45906[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42992__auto__ = null;
var cljs$core$async$mult_$_state_machine__42992__auto____0 = (function (){
var statearr_44462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44462[(0)] = cljs$core$async$mult_$_state_machine__42992__auto__);

(statearr_44462[(1)] = (1));

return statearr_44462;
});
var cljs$core$async$mult_$_state_machine__42992__auto____1 = (function (state_44347){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_44347);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e44463){var ex__42995__auto__ = e44463;
var statearr_44464_45917 = state_44347;
(statearr_44464_45917[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_44347[(4)]))){
var statearr_44465_45918 = state_44347;
(statearr_44465_45918[(1)] = cljs.core.first((state_44347[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45919 = state_44347;
state_44347 = G__45919;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42992__auto__ = function(state_44347){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42992__auto____1.call(this,state_44347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42992__auto____0;
cljs$core$async$mult_$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42992__auto____1;
return cljs$core$async$mult_$_state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_44467 = f__43145__auto__();
(statearr_44467[(6)] = c__43144__auto___45829);

return statearr_44467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44473 = arguments.length;
switch (G__44473) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_45921 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_45921(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45922 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_45922(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45923 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45923(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45925 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_45925(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45936 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45936(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___45937 = arguments.length;
var i__4830__auto___45938 = (0);
while(true){
if((i__4830__auto___45938 < len__4829__auto___45937)){
args__4835__auto__.push((arguments[i__4830__auto___45938]));

var G__45939 = (i__4830__auto___45938 + (1));
i__4830__auto___45938 = G__45939;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44488){
var map__44489 = p__44488;
var map__44489__$1 = cljs.core.__destructure_map(map__44489);
var opts = map__44489__$1;
var statearr_44490_45940 = state;
(statearr_44490_45940[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44491_45941 = state;
(statearr_44491_45941[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_44492_45942 = state;
(statearr_44492_45942[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44480){
var G__44481 = cljs.core.first(seq44480);
var seq44480__$1 = cljs.core.next(seq44480);
var G__44482 = cljs.core.first(seq44480__$1);
var seq44480__$2 = cljs.core.next(seq44480__$1);
var G__44483 = cljs.core.first(seq44480__$2);
var seq44480__$3 = cljs.core.next(seq44480__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44481,G__44482,G__44483,seq44480__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44497 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44498){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44498 = meta44498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44499,meta44498__$1){
var self__ = this;
var _44499__$1 = this;
return (new cljs.core.async.t_cljs$core$async44497(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44498__$1));
}));

(cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44499){
var self__ = this;
var _44499__$1 = this;
return self__.meta44498;
}));

(cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44497.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44498","meta44498",-1118795646,null)], null);
}));

(cljs.core.async.t_cljs$core$async44497.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44497");

(cljs.core.async.t_cljs$core$async44497.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44497");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44497.
 */
cljs.core.async.__GT_t_cljs$core$async44497 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44497(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44498){
return (new cljs.core.async.t_cljs$core$async44497(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44498));
});

}

return (new cljs.core.async.t_cljs$core$async44497(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43144__auto___45951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_44578){
var state_val_44580 = (state_44578[(1)]);
if((state_val_44580 === (7))){
var inst_44535 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
if(cljs.core.truth_(inst_44535)){
var statearr_44584_45952 = state_44578__$1;
(statearr_44584_45952[(1)] = (8));

} else {
var statearr_44585_45953 = state_44578__$1;
(statearr_44585_45953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (20))){
var inst_44528 = (state_44578[(7)]);
var state_44578__$1 = state_44578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44578__$1,(23),out,inst_44528);
} else {
if((state_val_44580 === (1))){
var inst_44511 = calc_state();
var inst_44512 = cljs.core.__destructure_map(inst_44511);
var inst_44513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44512,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44512,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44512,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44516 = inst_44511;
var state_44578__$1 = (function (){var statearr_44590 = state_44578;
(statearr_44590[(8)] = inst_44513);

(statearr_44590[(9)] = inst_44514);

(statearr_44590[(10)] = inst_44516);

(statearr_44590[(11)] = inst_44515);

return statearr_44590;
})();
var statearr_44591_45963 = state_44578__$1;
(statearr_44591_45963[(2)] = null);

(statearr_44591_45963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (24))){
var inst_44519 = (state_44578[(12)]);
var inst_44516 = inst_44519;
var state_44578__$1 = (function (){var statearr_44592 = state_44578;
(statearr_44592[(10)] = inst_44516);

return statearr_44592;
})();
var statearr_44593_45964 = state_44578__$1;
(statearr_44593_45964[(2)] = null);

(statearr_44593_45964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (4))){
var inst_44530 = (state_44578[(13)]);
var inst_44528 = (state_44578[(7)]);
var inst_44527 = (state_44578[(2)]);
var inst_44528__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44527,(0),null);
var inst_44529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44527,(1),null);
var inst_44530__$1 = (inst_44528__$1 == null);
var state_44578__$1 = (function (){var statearr_44594 = state_44578;
(statearr_44594[(13)] = inst_44530__$1);

(statearr_44594[(14)] = inst_44529);

(statearr_44594[(7)] = inst_44528__$1);

return statearr_44594;
})();
if(cljs.core.truth_(inst_44530__$1)){
var statearr_44595_45965 = state_44578__$1;
(statearr_44595_45965[(1)] = (5));

} else {
var statearr_44596_45966 = state_44578__$1;
(statearr_44596_45966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (15))){
var inst_44551 = (state_44578[(15)]);
var inst_44520 = (state_44578[(16)]);
var inst_44551__$1 = cljs.core.empty_QMARK_(inst_44520);
var state_44578__$1 = (function (){var statearr_44597 = state_44578;
(statearr_44597[(15)] = inst_44551__$1);

return statearr_44597;
})();
if(inst_44551__$1){
var statearr_44598_45967 = state_44578__$1;
(statearr_44598_45967[(1)] = (17));

} else {
var statearr_44599_45968 = state_44578__$1;
(statearr_44599_45968[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (21))){
var inst_44519 = (state_44578[(12)]);
var inst_44516 = inst_44519;
var state_44578__$1 = (function (){var statearr_44600 = state_44578;
(statearr_44600[(10)] = inst_44516);

return statearr_44600;
})();
var statearr_44601_45969 = state_44578__$1;
(statearr_44601_45969[(2)] = null);

(statearr_44601_45969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (13))){
var inst_44542 = (state_44578[(2)]);
var inst_44543 = calc_state();
var inst_44516 = inst_44543;
var state_44578__$1 = (function (){var statearr_44603 = state_44578;
(statearr_44603[(10)] = inst_44516);

(statearr_44603[(17)] = inst_44542);

return statearr_44603;
})();
var statearr_44604_45971 = state_44578__$1;
(statearr_44604_45971[(2)] = null);

(statearr_44604_45971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (22))){
var inst_44572 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
var statearr_44606_45972 = state_44578__$1;
(statearr_44606_45972[(2)] = inst_44572);

(statearr_44606_45972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (6))){
var inst_44529 = (state_44578[(14)]);
var inst_44533 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44529,change);
var state_44578__$1 = state_44578;
var statearr_44607_45974 = state_44578__$1;
(statearr_44607_45974[(2)] = inst_44533);

(statearr_44607_45974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (25))){
var state_44578__$1 = state_44578;
var statearr_44609_45975 = state_44578__$1;
(statearr_44609_45975[(2)] = null);

(statearr_44609_45975[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (17))){
var inst_44529 = (state_44578[(14)]);
var inst_44521 = (state_44578[(18)]);
var inst_44553 = (inst_44521.cljs$core$IFn$_invoke$arity$1 ? inst_44521.cljs$core$IFn$_invoke$arity$1(inst_44529) : inst_44521.call(null,inst_44529));
var inst_44554 = cljs.core.not(inst_44553);
var state_44578__$1 = state_44578;
var statearr_44611_45976 = state_44578__$1;
(statearr_44611_45976[(2)] = inst_44554);

(statearr_44611_45976[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (3))){
var inst_44576 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44578__$1,inst_44576);
} else {
if((state_val_44580 === (12))){
var state_44578__$1 = state_44578;
var statearr_44613_45977 = state_44578__$1;
(statearr_44613_45977[(2)] = null);

(statearr_44613_45977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (2))){
var inst_44519 = (state_44578[(12)]);
var inst_44516 = (state_44578[(10)]);
var inst_44519__$1 = cljs.core.__destructure_map(inst_44516);
var inst_44520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44519__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44519__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44519__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44578__$1 = (function (){var statearr_44615 = state_44578;
(statearr_44615[(12)] = inst_44519__$1);

(statearr_44615[(16)] = inst_44520);

(statearr_44615[(18)] = inst_44521);

return statearr_44615;
})();
return cljs.core.async.ioc_alts_BANG_(state_44578__$1,(4),inst_44522);
} else {
if((state_val_44580 === (23))){
var inst_44563 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
if(cljs.core.truth_(inst_44563)){
var statearr_44616_45978 = state_44578__$1;
(statearr_44616_45978[(1)] = (24));

} else {
var statearr_44617_45979 = state_44578__$1;
(statearr_44617_45979[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (19))){
var inst_44557 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
var statearr_44619_45980 = state_44578__$1;
(statearr_44619_45980[(2)] = inst_44557);

(statearr_44619_45980[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (11))){
var inst_44529 = (state_44578[(14)]);
var inst_44539 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44529);
var state_44578__$1 = state_44578;
var statearr_44620_45981 = state_44578__$1;
(statearr_44620_45981[(2)] = inst_44539);

(statearr_44620_45981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (9))){
var inst_44529 = (state_44578[(14)]);
var inst_44546 = (state_44578[(19)]);
var inst_44520 = (state_44578[(16)]);
var inst_44546__$1 = (inst_44520.cljs$core$IFn$_invoke$arity$1 ? inst_44520.cljs$core$IFn$_invoke$arity$1(inst_44529) : inst_44520.call(null,inst_44529));
var state_44578__$1 = (function (){var statearr_44621 = state_44578;
(statearr_44621[(19)] = inst_44546__$1);

return statearr_44621;
})();
if(cljs.core.truth_(inst_44546__$1)){
var statearr_44622_45982 = state_44578__$1;
(statearr_44622_45982[(1)] = (14));

} else {
var statearr_44623_45983 = state_44578__$1;
(statearr_44623_45983[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (5))){
var inst_44530 = (state_44578[(13)]);
var state_44578__$1 = state_44578;
var statearr_44624_45984 = state_44578__$1;
(statearr_44624_45984[(2)] = inst_44530);

(statearr_44624_45984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (14))){
var inst_44546 = (state_44578[(19)]);
var state_44578__$1 = state_44578;
var statearr_44626_45985 = state_44578__$1;
(statearr_44626_45985[(2)] = inst_44546);

(statearr_44626_45985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (26))){
var inst_44568 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
var statearr_44627_45986 = state_44578__$1;
(statearr_44627_45986[(2)] = inst_44568);

(statearr_44627_45986[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (16))){
var inst_44559 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
if(cljs.core.truth_(inst_44559)){
var statearr_44629_45987 = state_44578__$1;
(statearr_44629_45987[(1)] = (20));

} else {
var statearr_44632_45989 = state_44578__$1;
(statearr_44632_45989[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (10))){
var inst_44574 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
var statearr_44638_45990 = state_44578__$1;
(statearr_44638_45990[(2)] = inst_44574);

(statearr_44638_45990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (18))){
var inst_44551 = (state_44578[(15)]);
var state_44578__$1 = state_44578;
var statearr_44639_45992 = state_44578__$1;
(statearr_44639_45992[(2)] = inst_44551);

(statearr_44639_45992[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44580 === (8))){
var inst_44528 = (state_44578[(7)]);
var inst_44537 = (inst_44528 == null);
var state_44578__$1 = state_44578;
if(cljs.core.truth_(inst_44537)){
var statearr_44640_45993 = state_44578__$1;
(statearr_44640_45993[(1)] = (11));

} else {
var statearr_44641_45994 = state_44578__$1;
(statearr_44641_45994[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42992__auto__ = null;
var cljs$core$async$mix_$_state_machine__42992__auto____0 = (function (){
var statearr_44642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44642[(0)] = cljs$core$async$mix_$_state_machine__42992__auto__);

(statearr_44642[(1)] = (1));

return statearr_44642;
});
var cljs$core$async$mix_$_state_machine__42992__auto____1 = (function (state_44578){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_44578);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e44643){var ex__42995__auto__ = e44643;
var statearr_44644_45995 = state_44578;
(statearr_44644_45995[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_44578[(4)]))){
var statearr_44645_45996 = state_44578;
(statearr_44645_45996[(1)] = cljs.core.first((state_44578[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45997 = state_44578;
state_44578 = G__45997;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42992__auto__ = function(state_44578){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42992__auto____1.call(this,state_44578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42992__auto____0;
cljs$core$async$mix_$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42992__auto____1;
return cljs$core$async$mix_$_state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_44647 = f__43145__auto__();
(statearr_44647[(6)] = c__43144__auto___45951);

return statearr_44647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_46002 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_46002(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46008 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_46008(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46009 = (function() {
var G__46010 = null;
var G__46010__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__46010__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__46010 = function(p,v){
switch(arguments.length){
case 1:
return G__46010__1.call(this,p);
case 2:
return G__46010__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46010.cljs$core$IFn$_invoke$arity$1 = G__46010__1;
G__46010.cljs$core$IFn$_invoke$arity$2 = G__46010__2;
return G__46010;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44654 = arguments.length;
switch (G__44654) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46009(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46009(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44658 = arguments.length;
switch (G__44658) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44655_SHARP_){
if(cljs.core.truth_((p1__44655_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44655_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44655_SHARP_.call(null,topic)))){
return p1__44655_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44655_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44665 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44666){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44666 = meta44666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44667,meta44666__$1){
var self__ = this;
var _44667__$1 = this;
return (new cljs.core.async.t_cljs$core$async44665(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44666__$1));
}));

(cljs.core.async.t_cljs$core$async44665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44667){
var self__ = this;
var _44667__$1 = this;
return self__.meta44666;
}));

(cljs.core.async.t_cljs$core$async44665.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44665.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44665.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44665.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44666","meta44666",-1010927913,null)], null);
}));

(cljs.core.async.t_cljs$core$async44665.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44665");

(cljs.core.async.t_cljs$core$async44665.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44665");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44665.
 */
cljs.core.async.__GT_t_cljs$core$async44665 = (function cljs$core$async$__GT_t_cljs$core$async44665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44666){
return (new cljs.core.async.t_cljs$core$async44665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44666));
});

}

return (new cljs.core.async.t_cljs$core$async44665(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43144__auto___46015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_44758){
var state_val_44759 = (state_44758[(1)]);
if((state_val_44759 === (7))){
var inst_44754 = (state_44758[(2)]);
var state_44758__$1 = state_44758;
var statearr_44763_46017 = state_44758__$1;
(statearr_44763_46017[(2)] = inst_44754);

(statearr_44763_46017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (20))){
var state_44758__$1 = state_44758;
var statearr_44764_46018 = state_44758__$1;
(statearr_44764_46018[(2)] = null);

(statearr_44764_46018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (1))){
var state_44758__$1 = state_44758;
var statearr_44769_46019 = state_44758__$1;
(statearr_44769_46019[(2)] = null);

(statearr_44769_46019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (24))){
var inst_44737 = (state_44758[(7)]);
var inst_44746 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44737);
var state_44758__$1 = state_44758;
var statearr_44770_46020 = state_44758__$1;
(statearr_44770_46020[(2)] = inst_44746);

(statearr_44770_46020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (4))){
var inst_44682 = (state_44758[(8)]);
var inst_44682__$1 = (state_44758[(2)]);
var inst_44683 = (inst_44682__$1 == null);
var state_44758__$1 = (function (){var statearr_44771 = state_44758;
(statearr_44771[(8)] = inst_44682__$1);

return statearr_44771;
})();
if(cljs.core.truth_(inst_44683)){
var statearr_44775_46021 = state_44758__$1;
(statearr_44775_46021[(1)] = (5));

} else {
var statearr_44776_46023 = state_44758__$1;
(statearr_44776_46023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (15))){
var inst_44731 = (state_44758[(2)]);
var state_44758__$1 = state_44758;
var statearr_44777_46024 = state_44758__$1;
(statearr_44777_46024[(2)] = inst_44731);

(statearr_44777_46024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (21))){
var inst_44751 = (state_44758[(2)]);
var state_44758__$1 = (function (){var statearr_44781 = state_44758;
(statearr_44781[(9)] = inst_44751);

return statearr_44781;
})();
var statearr_44782_46026 = state_44758__$1;
(statearr_44782_46026[(2)] = null);

(statearr_44782_46026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (13))){
var inst_44711 = (state_44758[(10)]);
var inst_44713 = cljs.core.chunked_seq_QMARK_(inst_44711);
var state_44758__$1 = state_44758;
if(inst_44713){
var statearr_44784_46028 = state_44758__$1;
(statearr_44784_46028[(1)] = (16));

} else {
var statearr_44785_46029 = state_44758__$1;
(statearr_44785_46029[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (22))){
var inst_44743 = (state_44758[(2)]);
var state_44758__$1 = state_44758;
if(cljs.core.truth_(inst_44743)){
var statearr_44786_46030 = state_44758__$1;
(statearr_44786_46030[(1)] = (23));

} else {
var statearr_44787_46031 = state_44758__$1;
(statearr_44787_46031[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (6))){
var inst_44737 = (state_44758[(7)]);
var inst_44682 = (state_44758[(8)]);
var inst_44739 = (state_44758[(11)]);
var inst_44737__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44682) : topic_fn.call(null,inst_44682));
var inst_44738 = cljs.core.deref(mults);
var inst_44739__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44738,inst_44737__$1);
var state_44758__$1 = (function (){var statearr_44788 = state_44758;
(statearr_44788[(7)] = inst_44737__$1);

(statearr_44788[(11)] = inst_44739__$1);

return statearr_44788;
})();
if(cljs.core.truth_(inst_44739__$1)){
var statearr_44789_46032 = state_44758__$1;
(statearr_44789_46032[(1)] = (19));

} else {
var statearr_44790_46033 = state_44758__$1;
(statearr_44790_46033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (25))){
var inst_44748 = (state_44758[(2)]);
var state_44758__$1 = state_44758;
var statearr_44791_46034 = state_44758__$1;
(statearr_44791_46034[(2)] = inst_44748);

(statearr_44791_46034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (17))){
var inst_44711 = (state_44758[(10)]);
var inst_44722 = cljs.core.first(inst_44711);
var inst_44723 = cljs.core.async.muxch_STAR_(inst_44722);
var inst_44724 = cljs.core.async.close_BANG_(inst_44723);
var inst_44725 = cljs.core.next(inst_44711);
var inst_44692 = inst_44725;
var inst_44693 = null;
var inst_44694 = (0);
var inst_44695 = (0);
var state_44758__$1 = (function (){var statearr_44792 = state_44758;
(statearr_44792[(12)] = inst_44695);

(statearr_44792[(13)] = inst_44692);

(statearr_44792[(14)] = inst_44694);

(statearr_44792[(15)] = inst_44724);

(statearr_44792[(16)] = inst_44693);

return statearr_44792;
})();
var statearr_44793_46035 = state_44758__$1;
(statearr_44793_46035[(2)] = null);

(statearr_44793_46035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (3))){
var inst_44756 = (state_44758[(2)]);
var state_44758__$1 = state_44758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44758__$1,inst_44756);
} else {
if((state_val_44759 === (12))){
var inst_44733 = (state_44758[(2)]);
var state_44758__$1 = state_44758;
var statearr_44794_46036 = state_44758__$1;
(statearr_44794_46036[(2)] = inst_44733);

(statearr_44794_46036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (2))){
var state_44758__$1 = state_44758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44758__$1,(4),ch);
} else {
if((state_val_44759 === (23))){
var state_44758__$1 = state_44758;
var statearr_44795_46037 = state_44758__$1;
(statearr_44795_46037[(2)] = null);

(statearr_44795_46037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (19))){
var inst_44682 = (state_44758[(8)]);
var inst_44739 = (state_44758[(11)]);
var inst_44741 = cljs.core.async.muxch_STAR_(inst_44739);
var state_44758__$1 = state_44758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44758__$1,(22),inst_44741,inst_44682);
} else {
if((state_val_44759 === (11))){
var inst_44711 = (state_44758[(10)]);
var inst_44692 = (state_44758[(13)]);
var inst_44711__$1 = cljs.core.seq(inst_44692);
var state_44758__$1 = (function (){var statearr_44796 = state_44758;
(statearr_44796[(10)] = inst_44711__$1);

return statearr_44796;
})();
if(inst_44711__$1){
var statearr_44797_46038 = state_44758__$1;
(statearr_44797_46038[(1)] = (13));

} else {
var statearr_44798_46039 = state_44758__$1;
(statearr_44798_46039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (9))){
var inst_44735 = (state_44758[(2)]);
var state_44758__$1 = state_44758;
var statearr_44799_46041 = state_44758__$1;
(statearr_44799_46041[(2)] = inst_44735);

(statearr_44799_46041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (5))){
var inst_44689 = cljs.core.deref(mults);
var inst_44690 = cljs.core.vals(inst_44689);
var inst_44691 = cljs.core.seq(inst_44690);
var inst_44692 = inst_44691;
var inst_44693 = null;
var inst_44694 = (0);
var inst_44695 = (0);
var state_44758__$1 = (function (){var statearr_44800 = state_44758;
(statearr_44800[(12)] = inst_44695);

(statearr_44800[(13)] = inst_44692);

(statearr_44800[(14)] = inst_44694);

(statearr_44800[(16)] = inst_44693);

return statearr_44800;
})();
var statearr_44801_46044 = state_44758__$1;
(statearr_44801_46044[(2)] = null);

(statearr_44801_46044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (14))){
var state_44758__$1 = state_44758;
var statearr_44805_46045 = state_44758__$1;
(statearr_44805_46045[(2)] = null);

(statearr_44805_46045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (16))){
var inst_44711 = (state_44758[(10)]);
var inst_44715 = cljs.core.chunk_first(inst_44711);
var inst_44717 = cljs.core.chunk_rest(inst_44711);
var inst_44718 = cljs.core.count(inst_44715);
var inst_44692 = inst_44717;
var inst_44693 = inst_44715;
var inst_44694 = inst_44718;
var inst_44695 = (0);
var state_44758__$1 = (function (){var statearr_44807 = state_44758;
(statearr_44807[(12)] = inst_44695);

(statearr_44807[(13)] = inst_44692);

(statearr_44807[(14)] = inst_44694);

(statearr_44807[(16)] = inst_44693);

return statearr_44807;
})();
var statearr_44808_46047 = state_44758__$1;
(statearr_44808_46047[(2)] = null);

(statearr_44808_46047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (10))){
var inst_44695 = (state_44758[(12)]);
var inst_44692 = (state_44758[(13)]);
var inst_44694 = (state_44758[(14)]);
var inst_44693 = (state_44758[(16)]);
var inst_44701 = cljs.core._nth(inst_44693,inst_44695);
var inst_44703 = cljs.core.async.muxch_STAR_(inst_44701);
var inst_44704 = cljs.core.async.close_BANG_(inst_44703);
var inst_44706 = (inst_44695 + (1));
var tmp44802 = inst_44692;
var tmp44803 = inst_44694;
var tmp44804 = inst_44693;
var inst_44692__$1 = tmp44802;
var inst_44693__$1 = tmp44804;
var inst_44694__$1 = tmp44803;
var inst_44695__$1 = inst_44706;
var state_44758__$1 = (function (){var statearr_44811 = state_44758;
(statearr_44811[(12)] = inst_44695__$1);

(statearr_44811[(17)] = inst_44704);

(statearr_44811[(13)] = inst_44692__$1);

(statearr_44811[(14)] = inst_44694__$1);

(statearr_44811[(16)] = inst_44693__$1);

return statearr_44811;
})();
var statearr_44812_46048 = state_44758__$1;
(statearr_44812_46048[(2)] = null);

(statearr_44812_46048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (18))){
var inst_44728 = (state_44758[(2)]);
var state_44758__$1 = state_44758;
var statearr_44813_46049 = state_44758__$1;
(statearr_44813_46049[(2)] = inst_44728);

(statearr_44813_46049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44759 === (8))){
var inst_44695 = (state_44758[(12)]);
var inst_44694 = (state_44758[(14)]);
var inst_44698 = (inst_44695 < inst_44694);
var inst_44699 = inst_44698;
var state_44758__$1 = state_44758;
if(cljs.core.truth_(inst_44699)){
var statearr_44814_46050 = state_44758__$1;
(statearr_44814_46050[(1)] = (10));

} else {
var statearr_44815_46051 = state_44758__$1;
(statearr_44815_46051[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42992__auto__ = null;
var cljs$core$async$state_machine__42992__auto____0 = (function (){
var statearr_44816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44816[(0)] = cljs$core$async$state_machine__42992__auto__);

(statearr_44816[(1)] = (1));

return statearr_44816;
});
var cljs$core$async$state_machine__42992__auto____1 = (function (state_44758){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_44758);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e44817){var ex__42995__auto__ = e44817;
var statearr_44818_46052 = state_44758;
(statearr_44818_46052[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_44758[(4)]))){
var statearr_44819_46053 = state_44758;
(statearr_44819_46053[(1)] = cljs.core.first((state_44758[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46054 = state_44758;
state_44758 = G__46054;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$state_machine__42992__auto__ = function(state_44758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42992__auto____1.call(this,state_44758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42992__auto____0;
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42992__auto____1;
return cljs$core$async$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_44820 = f__43145__auto__();
(statearr_44820[(6)] = c__43144__auto___46015);

return statearr_44820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44822 = arguments.length;
switch (G__44822) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44824 = arguments.length;
switch (G__44824) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__44826 = arguments.length;
switch (G__44826) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43144__auto___46058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_44873){
var state_val_44874 = (state_44873[(1)]);
if((state_val_44874 === (7))){
var state_44873__$1 = state_44873;
var statearr_44882_46059 = state_44873__$1;
(statearr_44882_46059[(2)] = null);

(statearr_44882_46059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (1))){
var state_44873__$1 = state_44873;
var statearr_44883_46060 = state_44873__$1;
(statearr_44883_46060[(2)] = null);

(statearr_44883_46060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (4))){
var inst_44829 = (state_44873[(7)]);
var inst_44830 = (state_44873[(8)]);
var inst_44832 = (inst_44830 < inst_44829);
var state_44873__$1 = state_44873;
if(cljs.core.truth_(inst_44832)){
var statearr_44891_46061 = state_44873__$1;
(statearr_44891_46061[(1)] = (6));

} else {
var statearr_44892_46062 = state_44873__$1;
(statearr_44892_46062[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (15))){
var inst_44856 = (state_44873[(9)]);
var inst_44864 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44856);
var state_44873__$1 = state_44873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44873__$1,(17),out,inst_44864);
} else {
if((state_val_44874 === (13))){
var inst_44856 = (state_44873[(9)]);
var inst_44856__$1 = (state_44873[(2)]);
var inst_44860 = cljs.core.some(cljs.core.nil_QMARK_,inst_44856__$1);
var state_44873__$1 = (function (){var statearr_44895 = state_44873;
(statearr_44895[(9)] = inst_44856__$1);

return statearr_44895;
})();
if(cljs.core.truth_(inst_44860)){
var statearr_44901_46064 = state_44873__$1;
(statearr_44901_46064[(1)] = (14));

} else {
var statearr_44902_46065 = state_44873__$1;
(statearr_44902_46065[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (6))){
var state_44873__$1 = state_44873;
var statearr_44903_46066 = state_44873__$1;
(statearr_44903_46066[(2)] = null);

(statearr_44903_46066[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (17))){
var inst_44866 = (state_44873[(2)]);
var state_44873__$1 = (function (){var statearr_44905 = state_44873;
(statearr_44905[(10)] = inst_44866);

return statearr_44905;
})();
var statearr_44906_46067 = state_44873__$1;
(statearr_44906_46067[(2)] = null);

(statearr_44906_46067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (3))){
var inst_44871 = (state_44873[(2)]);
var state_44873__$1 = state_44873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44873__$1,inst_44871);
} else {
if((state_val_44874 === (12))){
var _ = (function (){var statearr_44907 = state_44873;
(statearr_44907[(4)] = cljs.core.rest((state_44873[(4)])));

return statearr_44907;
})();
var state_44873__$1 = state_44873;
var ex44904 = (state_44873__$1[(2)]);
var statearr_44908_46072 = state_44873__$1;
(statearr_44908_46072[(5)] = ex44904);


if((ex44904 instanceof Object)){
var statearr_44909_46073 = state_44873__$1;
(statearr_44909_46073[(1)] = (11));

(statearr_44909_46073[(5)] = null);

} else {
throw ex44904;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (2))){
var inst_44828 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44829 = cnt;
var inst_44830 = (0);
var state_44873__$1 = (function (){var statearr_44910 = state_44873;
(statearr_44910[(7)] = inst_44829);

(statearr_44910[(11)] = inst_44828);

(statearr_44910[(8)] = inst_44830);

return statearr_44910;
})();
var statearr_44911_46074 = state_44873__$1;
(statearr_44911_46074[(2)] = null);

(statearr_44911_46074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (11))){
var inst_44834 = (state_44873[(2)]);
var inst_44835 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44873__$1 = (function (){var statearr_44912 = state_44873;
(statearr_44912[(12)] = inst_44834);

return statearr_44912;
})();
var statearr_44913_46075 = state_44873__$1;
(statearr_44913_46075[(2)] = inst_44835);

(statearr_44913_46075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (9))){
var inst_44830 = (state_44873[(8)]);
var _ = (function (){var statearr_44914 = state_44873;
(statearr_44914[(4)] = cljs.core.cons((12),(state_44873[(4)])));

return statearr_44914;
})();
var inst_44841 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44830) : chs__$1.call(null,inst_44830));
var inst_44842 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44830) : done.call(null,inst_44830));
var inst_44843 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44841,inst_44842);
var ___$1 = (function (){var statearr_44915 = state_44873;
(statearr_44915[(4)] = cljs.core.rest((state_44873[(4)])));

return statearr_44915;
})();
var state_44873__$1 = state_44873;
var statearr_44916_46076 = state_44873__$1;
(statearr_44916_46076[(2)] = inst_44843);

(statearr_44916_46076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (5))){
var inst_44853 = (state_44873[(2)]);
var state_44873__$1 = (function (){var statearr_44917 = state_44873;
(statearr_44917[(13)] = inst_44853);

return statearr_44917;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44873__$1,(13),dchan);
} else {
if((state_val_44874 === (14))){
var inst_44862 = cljs.core.async.close_BANG_(out);
var state_44873__$1 = state_44873;
var statearr_44918_46077 = state_44873__$1;
(statearr_44918_46077[(2)] = inst_44862);

(statearr_44918_46077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (16))){
var inst_44869 = (state_44873[(2)]);
var state_44873__$1 = state_44873;
var statearr_44919_46078 = state_44873__$1;
(statearr_44919_46078[(2)] = inst_44869);

(statearr_44919_46078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (10))){
var inst_44830 = (state_44873[(8)]);
var inst_44846 = (state_44873[(2)]);
var inst_44847 = (inst_44830 + (1));
var inst_44830__$1 = inst_44847;
var state_44873__$1 = (function (){var statearr_44920 = state_44873;
(statearr_44920[(8)] = inst_44830__$1);

(statearr_44920[(14)] = inst_44846);

return statearr_44920;
})();
var statearr_44921_46080 = state_44873__$1;
(statearr_44921_46080[(2)] = null);

(statearr_44921_46080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44874 === (8))){
var inst_44851 = (state_44873[(2)]);
var state_44873__$1 = state_44873;
var statearr_44922_46081 = state_44873__$1;
(statearr_44922_46081[(2)] = inst_44851);

(statearr_44922_46081[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42992__auto__ = null;
var cljs$core$async$state_machine__42992__auto____0 = (function (){
var statearr_44923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44923[(0)] = cljs$core$async$state_machine__42992__auto__);

(statearr_44923[(1)] = (1));

return statearr_44923;
});
var cljs$core$async$state_machine__42992__auto____1 = (function (state_44873){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_44873);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e44924){var ex__42995__auto__ = e44924;
var statearr_44925_46082 = state_44873;
(statearr_44925_46082[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_44873[(4)]))){
var statearr_44926_46083 = state_44873;
(statearr_44926_46083[(1)] = cljs.core.first((state_44873[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46084 = state_44873;
state_44873 = G__46084;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$state_machine__42992__auto__ = function(state_44873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42992__auto____1.call(this,state_44873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42992__auto____0;
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42992__auto____1;
return cljs$core$async$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_44927 = f__43145__auto__();
(statearr_44927[(6)] = c__43144__auto___46058);

return statearr_44927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44930 = arguments.length;
switch (G__44930) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43144__auto___46086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_44965){
var state_val_44966 = (state_44965[(1)]);
if((state_val_44966 === (7))){
var inst_44942 = (state_44965[(7)]);
var inst_44941 = (state_44965[(8)]);
var inst_44941__$1 = (state_44965[(2)]);
var inst_44942__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44941__$1,(0),null);
var inst_44943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44941__$1,(1),null);
var inst_44945 = (inst_44942__$1 == null);
var state_44965__$1 = (function (){var statearr_44970 = state_44965;
(statearr_44970[(9)] = inst_44943);

(statearr_44970[(7)] = inst_44942__$1);

(statearr_44970[(8)] = inst_44941__$1);

return statearr_44970;
})();
if(cljs.core.truth_(inst_44945)){
var statearr_44971_46091 = state_44965__$1;
(statearr_44971_46091[(1)] = (8));

} else {
var statearr_44972_46092 = state_44965__$1;
(statearr_44972_46092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44966 === (1))){
var inst_44931 = cljs.core.vec(chs);
var inst_44932 = inst_44931;
var state_44965__$1 = (function (){var statearr_44976 = state_44965;
(statearr_44976[(10)] = inst_44932);

return statearr_44976;
})();
var statearr_44978_46096 = state_44965__$1;
(statearr_44978_46096[(2)] = null);

(statearr_44978_46096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44966 === (4))){
var inst_44932 = (state_44965[(10)]);
var state_44965__$1 = state_44965;
return cljs.core.async.ioc_alts_BANG_(state_44965__$1,(7),inst_44932);
} else {
if((state_val_44966 === (6))){
var inst_44961 = (state_44965[(2)]);
var state_44965__$1 = state_44965;
var statearr_44981_46097 = state_44965__$1;
(statearr_44981_46097[(2)] = inst_44961);

(statearr_44981_46097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44966 === (3))){
var inst_44963 = (state_44965[(2)]);
var state_44965__$1 = state_44965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44965__$1,inst_44963);
} else {
if((state_val_44966 === (2))){
var inst_44932 = (state_44965[(10)]);
var inst_44934 = cljs.core.count(inst_44932);
var inst_44935 = (inst_44934 > (0));
var state_44965__$1 = state_44965;
if(cljs.core.truth_(inst_44935)){
var statearr_44983_46098 = state_44965__$1;
(statearr_44983_46098[(1)] = (4));

} else {
var statearr_44984_46100 = state_44965__$1;
(statearr_44984_46100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44966 === (11))){
var inst_44932 = (state_44965[(10)]);
var inst_44954 = (state_44965[(2)]);
var tmp44982 = inst_44932;
var inst_44932__$1 = tmp44982;
var state_44965__$1 = (function (){var statearr_44986 = state_44965;
(statearr_44986[(11)] = inst_44954);

(statearr_44986[(10)] = inst_44932__$1);

return statearr_44986;
})();
var statearr_44987_46101 = state_44965__$1;
(statearr_44987_46101[(2)] = null);

(statearr_44987_46101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44966 === (9))){
var inst_44942 = (state_44965[(7)]);
var state_44965__$1 = state_44965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44965__$1,(11),out,inst_44942);
} else {
if((state_val_44966 === (5))){
var inst_44959 = cljs.core.async.close_BANG_(out);
var state_44965__$1 = state_44965;
var statearr_44990_46105 = state_44965__$1;
(statearr_44990_46105[(2)] = inst_44959);

(statearr_44990_46105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44966 === (10))){
var inst_44957 = (state_44965[(2)]);
var state_44965__$1 = state_44965;
var statearr_44991_46106 = state_44965__$1;
(statearr_44991_46106[(2)] = inst_44957);

(statearr_44991_46106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44966 === (8))){
var inst_44943 = (state_44965[(9)]);
var inst_44932 = (state_44965[(10)]);
var inst_44942 = (state_44965[(7)]);
var inst_44941 = (state_44965[(8)]);
var inst_44948 = (function (){var cs = inst_44932;
var vec__44937 = inst_44941;
var v = inst_44942;
var c = inst_44943;
return (function (p1__44928_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44928_SHARP_);
});
})();
var inst_44949 = cljs.core.filterv(inst_44948,inst_44932);
var inst_44932__$1 = inst_44949;
var state_44965__$1 = (function (){var statearr_44992 = state_44965;
(statearr_44992[(10)] = inst_44932__$1);

return statearr_44992;
})();
var statearr_44993_46110 = state_44965__$1;
(statearr_44993_46110[(2)] = null);

(statearr_44993_46110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42992__auto__ = null;
var cljs$core$async$state_machine__42992__auto____0 = (function (){
var statearr_44994 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44994[(0)] = cljs$core$async$state_machine__42992__auto__);

(statearr_44994[(1)] = (1));

return statearr_44994;
});
var cljs$core$async$state_machine__42992__auto____1 = (function (state_44965){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_44965);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e44995){var ex__42995__auto__ = e44995;
var statearr_44996_46113 = state_44965;
(statearr_44996_46113[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_44965[(4)]))){
var statearr_44997_46114 = state_44965;
(statearr_44997_46114[(1)] = cljs.core.first((state_44965[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46115 = state_44965;
state_44965 = G__46115;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$state_machine__42992__auto__ = function(state_44965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42992__auto____1.call(this,state_44965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42992__auto____0;
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42992__auto____1;
return cljs$core$async$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_44998 = f__43145__auto__();
(statearr_44998[(6)] = c__43144__auto___46086);

return statearr_44998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45000 = arguments.length;
switch (G__45000) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43144__auto___46124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_45024){
var state_val_45025 = (state_45024[(1)]);
if((state_val_45025 === (7))){
var inst_45006 = (state_45024[(7)]);
var inst_45006__$1 = (state_45024[(2)]);
var inst_45007 = (inst_45006__$1 == null);
var inst_45008 = cljs.core.not(inst_45007);
var state_45024__$1 = (function (){var statearr_45028 = state_45024;
(statearr_45028[(7)] = inst_45006__$1);

return statearr_45028;
})();
if(inst_45008){
var statearr_45030_46125 = state_45024__$1;
(statearr_45030_46125[(1)] = (8));

} else {
var statearr_45032_46126 = state_45024__$1;
(statearr_45032_46126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45025 === (1))){
var inst_45001 = (0);
var state_45024__$1 = (function (){var statearr_45033 = state_45024;
(statearr_45033[(8)] = inst_45001);

return statearr_45033;
})();
var statearr_45036_46127 = state_45024__$1;
(statearr_45036_46127[(2)] = null);

(statearr_45036_46127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45025 === (4))){
var state_45024__$1 = state_45024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45024__$1,(7),ch);
} else {
if((state_val_45025 === (6))){
var inst_45019 = (state_45024[(2)]);
var state_45024__$1 = state_45024;
var statearr_45039_46128 = state_45024__$1;
(statearr_45039_46128[(2)] = inst_45019);

(statearr_45039_46128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45025 === (3))){
var inst_45021 = (state_45024[(2)]);
var inst_45022 = cljs.core.async.close_BANG_(out);
var state_45024__$1 = (function (){var statearr_45041 = state_45024;
(statearr_45041[(9)] = inst_45021);

return statearr_45041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45024__$1,inst_45022);
} else {
if((state_val_45025 === (2))){
var inst_45001 = (state_45024[(8)]);
var inst_45003 = (inst_45001 < n);
var state_45024__$1 = state_45024;
if(cljs.core.truth_(inst_45003)){
var statearr_45042_46129 = state_45024__$1;
(statearr_45042_46129[(1)] = (4));

} else {
var statearr_45043_46130 = state_45024__$1;
(statearr_45043_46130[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45025 === (11))){
var inst_45001 = (state_45024[(8)]);
var inst_45011 = (state_45024[(2)]);
var inst_45012 = (inst_45001 + (1));
var inst_45001__$1 = inst_45012;
var state_45024__$1 = (function (){var statearr_45045 = state_45024;
(statearr_45045[(10)] = inst_45011);

(statearr_45045[(8)] = inst_45001__$1);

return statearr_45045;
})();
var statearr_45046_46131 = state_45024__$1;
(statearr_45046_46131[(2)] = null);

(statearr_45046_46131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45025 === (9))){
var state_45024__$1 = state_45024;
var statearr_45047_46132 = state_45024__$1;
(statearr_45047_46132[(2)] = null);

(statearr_45047_46132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45025 === (5))){
var state_45024__$1 = state_45024;
var statearr_45048_46133 = state_45024__$1;
(statearr_45048_46133[(2)] = null);

(statearr_45048_46133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45025 === (10))){
var inst_45016 = (state_45024[(2)]);
var state_45024__$1 = state_45024;
var statearr_45049_46135 = state_45024__$1;
(statearr_45049_46135[(2)] = inst_45016);

(statearr_45049_46135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45025 === (8))){
var inst_45006 = (state_45024[(7)]);
var state_45024__$1 = state_45024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45024__$1,(11),out,inst_45006);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42992__auto__ = null;
var cljs$core$async$state_machine__42992__auto____0 = (function (){
var statearr_45050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45050[(0)] = cljs$core$async$state_machine__42992__auto__);

(statearr_45050[(1)] = (1));

return statearr_45050;
});
var cljs$core$async$state_machine__42992__auto____1 = (function (state_45024){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_45024);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e45051){var ex__42995__auto__ = e45051;
var statearr_45052_46137 = state_45024;
(statearr_45052_46137[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_45024[(4)]))){
var statearr_45053_46138 = state_45024;
(statearr_45053_46138[(1)] = cljs.core.first((state_45024[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46139 = state_45024;
state_45024 = G__46139;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$state_machine__42992__auto__ = function(state_45024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42992__auto____1.call(this,state_45024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42992__auto____0;
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42992__auto____1;
return cljs$core$async$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_45054 = f__43145__auto__();
(statearr_45054[(6)] = c__43144__auto___46124);

return statearr_45054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45056 = (function (f,ch,meta45057){
this.f = f;
this.ch = ch;
this.meta45057 = meta45057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45058,meta45057__$1){
var self__ = this;
var _45058__$1 = this;
return (new cljs.core.async.t_cljs$core$async45056(self__.f,self__.ch,meta45057__$1));
}));

(cljs.core.async.t_cljs$core$async45056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45058){
var self__ = this;
var _45058__$1 = this;
return self__.meta45057;
}));

(cljs.core.async.t_cljs$core$async45056.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45056.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45056.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45060 = (function (f,ch,meta45057,_,fn1,meta45061){
this.f = f;
this.ch = ch;
this.meta45057 = meta45057;
this._ = _;
this.fn1 = fn1;
this.meta45061 = meta45061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45062,meta45061__$1){
var self__ = this;
var _45062__$1 = this;
return (new cljs.core.async.t_cljs$core$async45060(self__.f,self__.ch,self__.meta45057,self__._,self__.fn1,meta45061__$1));
}));

(cljs.core.async.t_cljs$core$async45060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45062){
var self__ = this;
var _45062__$1 = this;
return self__.meta45061;
}));

(cljs.core.async.t_cljs$core$async45060.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45060.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45055_SHARP_){
var G__45065 = (((p1__45055_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45055_SHARP_) : self__.f.call(null,p1__45055_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45065) : f1.call(null,G__45065));
});
}));

(cljs.core.async.t_cljs$core$async45060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45057","meta45057",-1618964394,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45056","cljs.core.async/t_cljs$core$async45056",1831807992,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45061","meta45061",-941523929,null)], null);
}));

(cljs.core.async.t_cljs$core$async45060.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45060");

(cljs.core.async.t_cljs$core$async45060.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45060");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45060.
 */
cljs.core.async.__GT_t_cljs$core$async45060 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45060(f__$1,ch__$1,meta45057__$1,___$2,fn1__$1,meta45061){
return (new cljs.core.async.t_cljs$core$async45060(f__$1,ch__$1,meta45057__$1,___$2,fn1__$1,meta45061));
});

}

return (new cljs.core.async.t_cljs$core$async45060(self__.f,self__.ch,self__.meta45057,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45067 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45067) : self__.f.call(null,G__45067));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45056.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45057","meta45057",-1618964394,null)], null);
}));

(cljs.core.async.t_cljs$core$async45056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45056");

(cljs.core.async.t_cljs$core$async45056.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45056.
 */
cljs.core.async.__GT_t_cljs$core$async45056 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45056(f__$1,ch__$1,meta45057){
return (new cljs.core.async.t_cljs$core$async45056(f__$1,ch__$1,meta45057));
});

}

return (new cljs.core.async.t_cljs$core$async45056(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45071 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45071 = (function (f,ch,meta45072){
this.f = f;
this.ch = ch;
this.meta45072 = meta45072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45073,meta45072__$1){
var self__ = this;
var _45073__$1 = this;
return (new cljs.core.async.t_cljs$core$async45071(self__.f,self__.ch,meta45072__$1));
}));

(cljs.core.async.t_cljs$core$async45071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45073){
var self__ = this;
var _45073__$1 = this;
return self__.meta45072;
}));

(cljs.core.async.t_cljs$core$async45071.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45071.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45071.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45072","meta45072",-1089339490,null)], null);
}));

(cljs.core.async.t_cljs$core$async45071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45071");

(cljs.core.async.t_cljs$core$async45071.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45071.
 */
cljs.core.async.__GT_t_cljs$core$async45071 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45071(f__$1,ch__$1,meta45072){
return (new cljs.core.async.t_cljs$core$async45071(f__$1,ch__$1,meta45072));
});

}

return (new cljs.core.async.t_cljs$core$async45071(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45074 = (function (p,ch,meta45075){
this.p = p;
this.ch = ch;
this.meta45075 = meta45075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45076,meta45075__$1){
var self__ = this;
var _45076__$1 = this;
return (new cljs.core.async.t_cljs$core$async45074(self__.p,self__.ch,meta45075__$1));
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45076){
var self__ = this;
var _45076__$1 = this;
return self__.meta45075;
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45075","meta45075",-2072375312,null)], null);
}));

(cljs.core.async.t_cljs$core$async45074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45074");

(cljs.core.async.t_cljs$core$async45074.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45074.
 */
cljs.core.async.__GT_t_cljs$core$async45074 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45074(p__$1,ch__$1,meta45075){
return (new cljs.core.async.t_cljs$core$async45074(p__$1,ch__$1,meta45075));
});

}

return (new cljs.core.async.t_cljs$core$async45074(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45088 = arguments.length;
switch (G__45088) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43144__auto___46151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_45111){
var state_val_45113 = (state_45111[(1)]);
if((state_val_45113 === (7))){
var inst_45107 = (state_45111[(2)]);
var state_45111__$1 = state_45111;
var statearr_45118_46152 = state_45111__$1;
(statearr_45118_46152[(2)] = inst_45107);

(statearr_45118_46152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45113 === (1))){
var state_45111__$1 = state_45111;
var statearr_45120_46153 = state_45111__$1;
(statearr_45120_46153[(2)] = null);

(statearr_45120_46153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45113 === (4))){
var inst_45093 = (state_45111[(7)]);
var inst_45093__$1 = (state_45111[(2)]);
var inst_45094 = (inst_45093__$1 == null);
var state_45111__$1 = (function (){var statearr_45121 = state_45111;
(statearr_45121[(7)] = inst_45093__$1);

return statearr_45121;
})();
if(cljs.core.truth_(inst_45094)){
var statearr_45122_46154 = state_45111__$1;
(statearr_45122_46154[(1)] = (5));

} else {
var statearr_45123_46155 = state_45111__$1;
(statearr_45123_46155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45113 === (6))){
var inst_45093 = (state_45111[(7)]);
var inst_45098 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45093) : p.call(null,inst_45093));
var state_45111__$1 = state_45111;
if(cljs.core.truth_(inst_45098)){
var statearr_45126_46156 = state_45111__$1;
(statearr_45126_46156[(1)] = (8));

} else {
var statearr_45127_46157 = state_45111__$1;
(statearr_45127_46157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45113 === (3))){
var inst_45109 = (state_45111[(2)]);
var state_45111__$1 = state_45111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45111__$1,inst_45109);
} else {
if((state_val_45113 === (2))){
var state_45111__$1 = state_45111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45111__$1,(4),ch);
} else {
if((state_val_45113 === (11))){
var inst_45101 = (state_45111[(2)]);
var state_45111__$1 = state_45111;
var statearr_45130_46160 = state_45111__$1;
(statearr_45130_46160[(2)] = inst_45101);

(statearr_45130_46160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45113 === (9))){
var state_45111__$1 = state_45111;
var statearr_45133_46163 = state_45111__$1;
(statearr_45133_46163[(2)] = null);

(statearr_45133_46163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45113 === (5))){
var inst_45096 = cljs.core.async.close_BANG_(out);
var state_45111__$1 = state_45111;
var statearr_45134_46164 = state_45111__$1;
(statearr_45134_46164[(2)] = inst_45096);

(statearr_45134_46164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45113 === (10))){
var inst_45104 = (state_45111[(2)]);
var state_45111__$1 = (function (){var statearr_45136 = state_45111;
(statearr_45136[(8)] = inst_45104);

return statearr_45136;
})();
var statearr_45138_46170 = state_45111__$1;
(statearr_45138_46170[(2)] = null);

(statearr_45138_46170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45113 === (8))){
var inst_45093 = (state_45111[(7)]);
var state_45111__$1 = state_45111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45111__$1,(11),out,inst_45093);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42992__auto__ = null;
var cljs$core$async$state_machine__42992__auto____0 = (function (){
var statearr_45141 = [null,null,null,null,null,null,null,null,null];
(statearr_45141[(0)] = cljs$core$async$state_machine__42992__auto__);

(statearr_45141[(1)] = (1));

return statearr_45141;
});
var cljs$core$async$state_machine__42992__auto____1 = (function (state_45111){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_45111);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e45142){var ex__42995__auto__ = e45142;
var statearr_45143_46171 = state_45111;
(statearr_45143_46171[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_45111[(4)]))){
var statearr_45144_46172 = state_45111;
(statearr_45144_46172[(1)] = cljs.core.first((state_45111[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46173 = state_45111;
state_45111 = G__46173;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$state_machine__42992__auto__ = function(state_45111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42992__auto____1.call(this,state_45111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42992__auto____0;
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42992__auto____1;
return cljs$core$async$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_45145 = f__43145__auto__();
(statearr_45145[(6)] = c__43144__auto___46151);

return statearr_45145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45147 = arguments.length;
switch (G__45147) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_45213){
var state_val_45214 = (state_45213[(1)]);
if((state_val_45214 === (7))){
var inst_45207 = (state_45213[(2)]);
var state_45213__$1 = state_45213;
var statearr_45215_46176 = state_45213__$1;
(statearr_45215_46176[(2)] = inst_45207);

(statearr_45215_46176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (20))){
var inst_45175 = (state_45213[(7)]);
var inst_45186 = (state_45213[(2)]);
var inst_45188 = cljs.core.next(inst_45175);
var inst_45161 = inst_45188;
var inst_45162 = null;
var inst_45163 = (0);
var inst_45164 = (0);
var state_45213__$1 = (function (){var statearr_45217 = state_45213;
(statearr_45217[(8)] = inst_45161);

(statearr_45217[(9)] = inst_45164);

(statearr_45217[(10)] = inst_45162);

(statearr_45217[(11)] = inst_45163);

(statearr_45217[(12)] = inst_45186);

return statearr_45217;
})();
var statearr_45220_46177 = state_45213__$1;
(statearr_45220_46177[(2)] = null);

(statearr_45220_46177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (1))){
var state_45213__$1 = state_45213;
var statearr_45221_46179 = state_45213__$1;
(statearr_45221_46179[(2)] = null);

(statearr_45221_46179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (4))){
var inst_45150 = (state_45213[(13)]);
var inst_45150__$1 = (state_45213[(2)]);
var inst_45151 = (inst_45150__$1 == null);
var state_45213__$1 = (function (){var statearr_45224 = state_45213;
(statearr_45224[(13)] = inst_45150__$1);

return statearr_45224;
})();
if(cljs.core.truth_(inst_45151)){
var statearr_45225_46183 = state_45213__$1;
(statearr_45225_46183[(1)] = (5));

} else {
var statearr_45226_46184 = state_45213__$1;
(statearr_45226_46184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (15))){
var state_45213__$1 = state_45213;
var statearr_45231_46185 = state_45213__$1;
(statearr_45231_46185[(2)] = null);

(statearr_45231_46185[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (21))){
var state_45213__$1 = state_45213;
var statearr_45232_46186 = state_45213__$1;
(statearr_45232_46186[(2)] = null);

(statearr_45232_46186[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (13))){
var inst_45161 = (state_45213[(8)]);
var inst_45164 = (state_45213[(9)]);
var inst_45162 = (state_45213[(10)]);
var inst_45163 = (state_45213[(11)]);
var inst_45171 = (state_45213[(2)]);
var inst_45172 = (inst_45164 + (1));
var tmp45227 = inst_45161;
var tmp45228 = inst_45162;
var tmp45229 = inst_45163;
var inst_45161__$1 = tmp45227;
var inst_45162__$1 = tmp45228;
var inst_45163__$1 = tmp45229;
var inst_45164__$1 = inst_45172;
var state_45213__$1 = (function (){var statearr_45235 = state_45213;
(statearr_45235[(8)] = inst_45161__$1);

(statearr_45235[(9)] = inst_45164__$1);

(statearr_45235[(10)] = inst_45162__$1);

(statearr_45235[(11)] = inst_45163__$1);

(statearr_45235[(14)] = inst_45171);

return statearr_45235;
})();
var statearr_45238_46187 = state_45213__$1;
(statearr_45238_46187[(2)] = null);

(statearr_45238_46187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (22))){
var state_45213__$1 = state_45213;
var statearr_45239_46188 = state_45213__$1;
(statearr_45239_46188[(2)] = null);

(statearr_45239_46188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (6))){
var inst_45150 = (state_45213[(13)]);
var inst_45159 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45150) : f.call(null,inst_45150));
var inst_45160 = cljs.core.seq(inst_45159);
var inst_45161 = inst_45160;
var inst_45162 = null;
var inst_45163 = (0);
var inst_45164 = (0);
var state_45213__$1 = (function (){var statearr_45240 = state_45213;
(statearr_45240[(8)] = inst_45161);

(statearr_45240[(9)] = inst_45164);

(statearr_45240[(10)] = inst_45162);

(statearr_45240[(11)] = inst_45163);

return statearr_45240;
})();
var statearr_45241_46189 = state_45213__$1;
(statearr_45241_46189[(2)] = null);

(statearr_45241_46189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (17))){
var inst_45175 = (state_45213[(7)]);
var inst_45179 = cljs.core.chunk_first(inst_45175);
var inst_45180 = cljs.core.chunk_rest(inst_45175);
var inst_45181 = cljs.core.count(inst_45179);
var inst_45161 = inst_45180;
var inst_45162 = inst_45179;
var inst_45163 = inst_45181;
var inst_45164 = (0);
var state_45213__$1 = (function (){var statearr_45243 = state_45213;
(statearr_45243[(8)] = inst_45161);

(statearr_45243[(9)] = inst_45164);

(statearr_45243[(10)] = inst_45162);

(statearr_45243[(11)] = inst_45163);

return statearr_45243;
})();
var statearr_45244_46190 = state_45213__$1;
(statearr_45244_46190[(2)] = null);

(statearr_45244_46190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (3))){
var inst_45210 = (state_45213[(2)]);
var state_45213__$1 = state_45213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45213__$1,inst_45210);
} else {
if((state_val_45214 === (12))){
var inst_45196 = (state_45213[(2)]);
var state_45213__$1 = state_45213;
var statearr_45249_46191 = state_45213__$1;
(statearr_45249_46191[(2)] = inst_45196);

(statearr_45249_46191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (2))){
var state_45213__$1 = state_45213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45213__$1,(4),in$);
} else {
if((state_val_45214 === (23))){
var inst_45205 = (state_45213[(2)]);
var state_45213__$1 = state_45213;
var statearr_45250_46192 = state_45213__$1;
(statearr_45250_46192[(2)] = inst_45205);

(statearr_45250_46192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (19))){
var inst_45191 = (state_45213[(2)]);
var state_45213__$1 = state_45213;
var statearr_45252_46193 = state_45213__$1;
(statearr_45252_46193[(2)] = inst_45191);

(statearr_45252_46193[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (11))){
var inst_45161 = (state_45213[(8)]);
var inst_45175 = (state_45213[(7)]);
var inst_45175__$1 = cljs.core.seq(inst_45161);
var state_45213__$1 = (function (){var statearr_45253 = state_45213;
(statearr_45253[(7)] = inst_45175__$1);

return statearr_45253;
})();
if(inst_45175__$1){
var statearr_45255_46194 = state_45213__$1;
(statearr_45255_46194[(1)] = (14));

} else {
var statearr_45257_46195 = state_45213__$1;
(statearr_45257_46195[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (9))){
var inst_45198 = (state_45213[(2)]);
var inst_45199 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45213__$1 = (function (){var statearr_45260 = state_45213;
(statearr_45260[(15)] = inst_45198);

return statearr_45260;
})();
if(cljs.core.truth_(inst_45199)){
var statearr_45261_46196 = state_45213__$1;
(statearr_45261_46196[(1)] = (21));

} else {
var statearr_45262_46197 = state_45213__$1;
(statearr_45262_46197[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (5))){
var inst_45153 = cljs.core.async.close_BANG_(out);
var state_45213__$1 = state_45213;
var statearr_45264_46198 = state_45213__$1;
(statearr_45264_46198[(2)] = inst_45153);

(statearr_45264_46198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (14))){
var inst_45175 = (state_45213[(7)]);
var inst_45177 = cljs.core.chunked_seq_QMARK_(inst_45175);
var state_45213__$1 = state_45213;
if(inst_45177){
var statearr_45265_46199 = state_45213__$1;
(statearr_45265_46199[(1)] = (17));

} else {
var statearr_45266_46200 = state_45213__$1;
(statearr_45266_46200[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (16))){
var inst_45194 = (state_45213[(2)]);
var state_45213__$1 = state_45213;
var statearr_45268_46201 = state_45213__$1;
(statearr_45268_46201[(2)] = inst_45194);

(statearr_45268_46201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45214 === (10))){
var inst_45164 = (state_45213[(9)]);
var inst_45162 = (state_45213[(10)]);
var inst_45169 = cljs.core._nth(inst_45162,inst_45164);
var state_45213__$1 = state_45213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45213__$1,(13),out,inst_45169);
} else {
if((state_val_45214 === (18))){
var inst_45175 = (state_45213[(7)]);
var inst_45184 = cljs.core.first(inst_45175);
var state_45213__$1 = state_45213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45213__$1,(20),out,inst_45184);
} else {
if((state_val_45214 === (8))){
var inst_45164 = (state_45213[(9)]);
var inst_45163 = (state_45213[(11)]);
var inst_45166 = (inst_45164 < inst_45163);
var inst_45167 = inst_45166;
var state_45213__$1 = state_45213;
if(cljs.core.truth_(inst_45167)){
var statearr_45271_46202 = state_45213__$1;
(statearr_45271_46202[(1)] = (10));

} else {
var statearr_45272_46203 = state_45213__$1;
(statearr_45272_46203[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42992__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42992__auto____0 = (function (){
var statearr_45275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45275[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42992__auto__);

(statearr_45275[(1)] = (1));

return statearr_45275;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42992__auto____1 = (function (state_45213){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_45213);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e45276){var ex__42995__auto__ = e45276;
var statearr_45277_46204 = state_45213;
(statearr_45277_46204[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_45213[(4)]))){
var statearr_45279_46205 = state_45213;
(statearr_45279_46205[(1)] = cljs.core.first((state_45213[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46206 = state_45213;
state_45213 = G__46206;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42992__auto__ = function(state_45213){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42992__auto____1.call(this,state_45213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42992__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42992__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_45282 = f__43145__auto__();
(statearr_45282[(6)] = c__43144__auto__);

return statearr_45282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));

return c__43144__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45286 = arguments.length;
switch (G__45286) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45293 = arguments.length;
switch (G__45293) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45300 = arguments.length;
switch (G__45300) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43144__auto___46211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_45324){
var state_val_45325 = (state_45324[(1)]);
if((state_val_45325 === (7))){
var inst_45319 = (state_45324[(2)]);
var state_45324__$1 = state_45324;
var statearr_45326_46212 = state_45324__$1;
(statearr_45326_46212[(2)] = inst_45319);

(statearr_45326_46212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (1))){
var inst_45301 = null;
var state_45324__$1 = (function (){var statearr_45327 = state_45324;
(statearr_45327[(7)] = inst_45301);

return statearr_45327;
})();
var statearr_45328_46213 = state_45324__$1;
(statearr_45328_46213[(2)] = null);

(statearr_45328_46213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (4))){
var inst_45304 = (state_45324[(8)]);
var inst_45304__$1 = (state_45324[(2)]);
var inst_45305 = (inst_45304__$1 == null);
var inst_45306 = cljs.core.not(inst_45305);
var state_45324__$1 = (function (){var statearr_45329 = state_45324;
(statearr_45329[(8)] = inst_45304__$1);

return statearr_45329;
})();
if(inst_45306){
var statearr_45330_46217 = state_45324__$1;
(statearr_45330_46217[(1)] = (5));

} else {
var statearr_45331_46218 = state_45324__$1;
(statearr_45331_46218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (6))){
var state_45324__$1 = state_45324;
var statearr_45334_46219 = state_45324__$1;
(statearr_45334_46219[(2)] = null);

(statearr_45334_46219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (3))){
var inst_45321 = (state_45324[(2)]);
var inst_45322 = cljs.core.async.close_BANG_(out);
var state_45324__$1 = (function (){var statearr_45335 = state_45324;
(statearr_45335[(9)] = inst_45321);

return statearr_45335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45324__$1,inst_45322);
} else {
if((state_val_45325 === (2))){
var state_45324__$1 = state_45324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45324__$1,(4),ch);
} else {
if((state_val_45325 === (11))){
var inst_45304 = (state_45324[(8)]);
var inst_45313 = (state_45324[(2)]);
var inst_45301 = inst_45304;
var state_45324__$1 = (function (){var statearr_45338 = state_45324;
(statearr_45338[(10)] = inst_45313);

(statearr_45338[(7)] = inst_45301);

return statearr_45338;
})();
var statearr_45339_46220 = state_45324__$1;
(statearr_45339_46220[(2)] = null);

(statearr_45339_46220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (9))){
var inst_45304 = (state_45324[(8)]);
var state_45324__$1 = state_45324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45324__$1,(11),out,inst_45304);
} else {
if((state_val_45325 === (5))){
var inst_45301 = (state_45324[(7)]);
var inst_45304 = (state_45324[(8)]);
var inst_45308 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45304,inst_45301);
var state_45324__$1 = state_45324;
if(inst_45308){
var statearr_45341_46221 = state_45324__$1;
(statearr_45341_46221[(1)] = (8));

} else {
var statearr_45342_46222 = state_45324__$1;
(statearr_45342_46222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (10))){
var inst_45316 = (state_45324[(2)]);
var state_45324__$1 = state_45324;
var statearr_45343_46223 = state_45324__$1;
(statearr_45343_46223[(2)] = inst_45316);

(statearr_45343_46223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45325 === (8))){
var inst_45301 = (state_45324[(7)]);
var tmp45340 = inst_45301;
var inst_45301__$1 = tmp45340;
var state_45324__$1 = (function (){var statearr_45344 = state_45324;
(statearr_45344[(7)] = inst_45301__$1);

return statearr_45344;
})();
var statearr_45345_46224 = state_45324__$1;
(statearr_45345_46224[(2)] = null);

(statearr_45345_46224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42992__auto__ = null;
var cljs$core$async$state_machine__42992__auto____0 = (function (){
var statearr_45346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45346[(0)] = cljs$core$async$state_machine__42992__auto__);

(statearr_45346[(1)] = (1));

return statearr_45346;
});
var cljs$core$async$state_machine__42992__auto____1 = (function (state_45324){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_45324);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e45348){var ex__42995__auto__ = e45348;
var statearr_45349_46225 = state_45324;
(statearr_45349_46225[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_45324[(4)]))){
var statearr_45351_46226 = state_45324;
(statearr_45351_46226[(1)] = cljs.core.first((state_45324[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46227 = state_45324;
state_45324 = G__46227;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$state_machine__42992__auto__ = function(state_45324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42992__auto____1.call(this,state_45324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42992__auto____0;
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42992__auto____1;
return cljs$core$async$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_45352 = f__43145__auto__();
(statearr_45352[(6)] = c__43144__auto___46211);

return statearr_45352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45356 = arguments.length;
switch (G__45356) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43144__auto___46229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_45398){
var state_val_45399 = (state_45398[(1)]);
if((state_val_45399 === (7))){
var inst_45394 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45400_46230 = state_45398__$1;
(statearr_45400_46230[(2)] = inst_45394);

(statearr_45400_46230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (1))){
var inst_45361 = (new Array(n));
var inst_45362 = inst_45361;
var inst_45363 = (0);
var state_45398__$1 = (function (){var statearr_45401 = state_45398;
(statearr_45401[(7)] = inst_45363);

(statearr_45401[(8)] = inst_45362);

return statearr_45401;
})();
var statearr_45402_46231 = state_45398__$1;
(statearr_45402_46231[(2)] = null);

(statearr_45402_46231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (4))){
var inst_45366 = (state_45398[(9)]);
var inst_45366__$1 = (state_45398[(2)]);
var inst_45367 = (inst_45366__$1 == null);
var inst_45368 = cljs.core.not(inst_45367);
var state_45398__$1 = (function (){var statearr_45407 = state_45398;
(statearr_45407[(9)] = inst_45366__$1);

return statearr_45407;
})();
if(inst_45368){
var statearr_45411_46232 = state_45398__$1;
(statearr_45411_46232[(1)] = (5));

} else {
var statearr_45412_46233 = state_45398__$1;
(statearr_45412_46233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (15))){
var inst_45388 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45413_46234 = state_45398__$1;
(statearr_45413_46234[(2)] = inst_45388);

(statearr_45413_46234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (13))){
var state_45398__$1 = state_45398;
var statearr_45414_46235 = state_45398__$1;
(statearr_45414_46235[(2)] = null);

(statearr_45414_46235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (6))){
var inst_45363 = (state_45398[(7)]);
var inst_45384 = (inst_45363 > (0));
var state_45398__$1 = state_45398;
if(cljs.core.truth_(inst_45384)){
var statearr_45418_46236 = state_45398__$1;
(statearr_45418_46236[(1)] = (12));

} else {
var statearr_45419_46238 = state_45398__$1;
(statearr_45419_46238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (3))){
var inst_45396 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45398__$1,inst_45396);
} else {
if((state_val_45399 === (12))){
var inst_45362 = (state_45398[(8)]);
var inst_45386 = cljs.core.vec(inst_45362);
var state_45398__$1 = state_45398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45398__$1,(15),out,inst_45386);
} else {
if((state_val_45399 === (2))){
var state_45398__$1 = state_45398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45398__$1,(4),ch);
} else {
if((state_val_45399 === (11))){
var inst_45378 = (state_45398[(2)]);
var inst_45379 = (new Array(n));
var inst_45362 = inst_45379;
var inst_45363 = (0);
var state_45398__$1 = (function (){var statearr_45423 = state_45398;
(statearr_45423[(10)] = inst_45378);

(statearr_45423[(7)] = inst_45363);

(statearr_45423[(8)] = inst_45362);

return statearr_45423;
})();
var statearr_45427_46239 = state_45398__$1;
(statearr_45427_46239[(2)] = null);

(statearr_45427_46239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (9))){
var inst_45362 = (state_45398[(8)]);
var inst_45376 = cljs.core.vec(inst_45362);
var state_45398__$1 = state_45398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45398__$1,(11),out,inst_45376);
} else {
if((state_val_45399 === (5))){
var inst_45363 = (state_45398[(7)]);
var inst_45362 = (state_45398[(8)]);
var inst_45366 = (state_45398[(9)]);
var inst_45371 = (state_45398[(11)]);
var inst_45370 = (inst_45362[inst_45363] = inst_45366);
var inst_45371__$1 = (inst_45363 + (1));
var inst_45372 = (inst_45371__$1 < n);
var state_45398__$1 = (function (){var statearr_45428 = state_45398;
(statearr_45428[(11)] = inst_45371__$1);

(statearr_45428[(12)] = inst_45370);

return statearr_45428;
})();
if(cljs.core.truth_(inst_45372)){
var statearr_45429_46242 = state_45398__$1;
(statearr_45429_46242[(1)] = (8));

} else {
var statearr_45430_46243 = state_45398__$1;
(statearr_45430_46243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (14))){
var inst_45391 = (state_45398[(2)]);
var inst_45392 = cljs.core.async.close_BANG_(out);
var state_45398__$1 = (function (){var statearr_45432 = state_45398;
(statearr_45432[(13)] = inst_45391);

return statearr_45432;
})();
var statearr_45433_46244 = state_45398__$1;
(statearr_45433_46244[(2)] = inst_45392);

(statearr_45433_46244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (10))){
var inst_45382 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45435_46245 = state_45398__$1;
(statearr_45435_46245[(2)] = inst_45382);

(statearr_45435_46245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (8))){
var inst_45362 = (state_45398[(8)]);
var inst_45371 = (state_45398[(11)]);
var tmp45431 = inst_45362;
var inst_45362__$1 = tmp45431;
var inst_45363 = inst_45371;
var state_45398__$1 = (function (){var statearr_45436 = state_45398;
(statearr_45436[(7)] = inst_45363);

(statearr_45436[(8)] = inst_45362__$1);

return statearr_45436;
})();
var statearr_45437_46246 = state_45398__$1;
(statearr_45437_46246[(2)] = null);

(statearr_45437_46246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42992__auto__ = null;
var cljs$core$async$state_machine__42992__auto____0 = (function (){
var statearr_45438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45438[(0)] = cljs$core$async$state_machine__42992__auto__);

(statearr_45438[(1)] = (1));

return statearr_45438;
});
var cljs$core$async$state_machine__42992__auto____1 = (function (state_45398){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_45398);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e45439){var ex__42995__auto__ = e45439;
var statearr_45440_46247 = state_45398;
(statearr_45440_46247[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_45398[(4)]))){
var statearr_45441_46248 = state_45398;
(statearr_45441_46248[(1)] = cljs.core.first((state_45398[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46249 = state_45398;
state_45398 = G__46249;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$state_machine__42992__auto__ = function(state_45398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42992__auto____1.call(this,state_45398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42992__auto____0;
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42992__auto____1;
return cljs$core$async$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_45442 = f__43145__auto__();
(statearr_45442[(6)] = c__43144__auto___46229);

return statearr_45442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45445 = arguments.length;
switch (G__45445) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43144__auto___46256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43145__auto__ = (function (){var switch__42991__auto__ = (function (state_45493){
var state_val_45494 = (state_45493[(1)]);
if((state_val_45494 === (7))){
var inst_45489 = (state_45493[(2)]);
var state_45493__$1 = state_45493;
var statearr_45495_46258 = state_45493__$1;
(statearr_45495_46258[(2)] = inst_45489);

(statearr_45495_46258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (1))){
var inst_45449 = [];
var inst_45450 = inst_45449;
var inst_45451 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45493__$1 = (function (){var statearr_45496 = state_45493;
(statearr_45496[(7)] = inst_45451);

(statearr_45496[(8)] = inst_45450);

return statearr_45496;
})();
var statearr_45497_46259 = state_45493__$1;
(statearr_45497_46259[(2)] = null);

(statearr_45497_46259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (4))){
var inst_45454 = (state_45493[(9)]);
var inst_45454__$1 = (state_45493[(2)]);
var inst_45455 = (inst_45454__$1 == null);
var inst_45456 = cljs.core.not(inst_45455);
var state_45493__$1 = (function (){var statearr_45498 = state_45493;
(statearr_45498[(9)] = inst_45454__$1);

return statearr_45498;
})();
if(inst_45456){
var statearr_45499_46261 = state_45493__$1;
(statearr_45499_46261[(1)] = (5));

} else {
var statearr_45500_46262 = state_45493__$1;
(statearr_45500_46262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (15))){
var inst_45450 = (state_45493[(8)]);
var inst_45481 = cljs.core.vec(inst_45450);
var state_45493__$1 = state_45493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45493__$1,(18),out,inst_45481);
} else {
if((state_val_45494 === (13))){
var inst_45476 = (state_45493[(2)]);
var state_45493__$1 = state_45493;
var statearr_45501_46264 = state_45493__$1;
(statearr_45501_46264[(2)] = inst_45476);

(statearr_45501_46264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (6))){
var inst_45450 = (state_45493[(8)]);
var inst_45478 = inst_45450.length;
var inst_45479 = (inst_45478 > (0));
var state_45493__$1 = state_45493;
if(cljs.core.truth_(inst_45479)){
var statearr_45502_46267 = state_45493__$1;
(statearr_45502_46267[(1)] = (15));

} else {
var statearr_45503_46268 = state_45493__$1;
(statearr_45503_46268[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (17))){
var inst_45486 = (state_45493[(2)]);
var inst_45487 = cljs.core.async.close_BANG_(out);
var state_45493__$1 = (function (){var statearr_45504 = state_45493;
(statearr_45504[(10)] = inst_45486);

return statearr_45504;
})();
var statearr_45505_46270 = state_45493__$1;
(statearr_45505_46270[(2)] = inst_45487);

(statearr_45505_46270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (3))){
var inst_45491 = (state_45493[(2)]);
var state_45493__$1 = state_45493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45493__$1,inst_45491);
} else {
if((state_val_45494 === (12))){
var inst_45450 = (state_45493[(8)]);
var inst_45469 = cljs.core.vec(inst_45450);
var state_45493__$1 = state_45493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45493__$1,(14),out,inst_45469);
} else {
if((state_val_45494 === (2))){
var state_45493__$1 = state_45493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45493__$1,(4),ch);
} else {
if((state_val_45494 === (11))){
var inst_45458 = (state_45493[(11)]);
var inst_45454 = (state_45493[(9)]);
var inst_45450 = (state_45493[(8)]);
var inst_45466 = inst_45450.push(inst_45454);
var tmp45506 = inst_45450;
var inst_45450__$1 = tmp45506;
var inst_45451 = inst_45458;
var state_45493__$1 = (function (){var statearr_45507 = state_45493;
(statearr_45507[(7)] = inst_45451);

(statearr_45507[(12)] = inst_45466);

(statearr_45507[(8)] = inst_45450__$1);

return statearr_45507;
})();
var statearr_45508_46273 = state_45493__$1;
(statearr_45508_46273[(2)] = null);

(statearr_45508_46273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (9))){
var inst_45451 = (state_45493[(7)]);
var inst_45462 = cljs.core.keyword_identical_QMARK_(inst_45451,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45493__$1 = state_45493;
var statearr_45509_46275 = state_45493__$1;
(statearr_45509_46275[(2)] = inst_45462);

(statearr_45509_46275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (5))){
var inst_45451 = (state_45493[(7)]);
var inst_45458 = (state_45493[(11)]);
var inst_45454 = (state_45493[(9)]);
var inst_45459 = (state_45493[(13)]);
var inst_45458__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45454) : f.call(null,inst_45454));
var inst_45459__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45458__$1,inst_45451);
var state_45493__$1 = (function (){var statearr_45510 = state_45493;
(statearr_45510[(11)] = inst_45458__$1);

(statearr_45510[(13)] = inst_45459__$1);

return statearr_45510;
})();
if(inst_45459__$1){
var statearr_45511_46279 = state_45493__$1;
(statearr_45511_46279[(1)] = (8));

} else {
var statearr_45512_46280 = state_45493__$1;
(statearr_45512_46280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (14))){
var inst_45458 = (state_45493[(11)]);
var inst_45454 = (state_45493[(9)]);
var inst_45471 = (state_45493[(2)]);
var inst_45472 = [];
var inst_45473 = inst_45472.push(inst_45454);
var inst_45450 = inst_45472;
var inst_45451 = inst_45458;
var state_45493__$1 = (function (){var statearr_45513 = state_45493;
(statearr_45513[(7)] = inst_45451);

(statearr_45513[(14)] = inst_45473);

(statearr_45513[(8)] = inst_45450);

(statearr_45513[(15)] = inst_45471);

return statearr_45513;
})();
var statearr_45514_46281 = state_45493__$1;
(statearr_45514_46281[(2)] = null);

(statearr_45514_46281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (16))){
var state_45493__$1 = state_45493;
var statearr_45515_46282 = state_45493__$1;
(statearr_45515_46282[(2)] = null);

(statearr_45515_46282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (10))){
var inst_45464 = (state_45493[(2)]);
var state_45493__$1 = state_45493;
if(cljs.core.truth_(inst_45464)){
var statearr_45516_46283 = state_45493__$1;
(statearr_45516_46283[(1)] = (11));

} else {
var statearr_45517_46284 = state_45493__$1;
(statearr_45517_46284[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (18))){
var inst_45483 = (state_45493[(2)]);
var state_45493__$1 = state_45493;
var statearr_45518_46285 = state_45493__$1;
(statearr_45518_46285[(2)] = inst_45483);

(statearr_45518_46285[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45494 === (8))){
var inst_45459 = (state_45493[(13)]);
var state_45493__$1 = state_45493;
var statearr_45519_46286 = state_45493__$1;
(statearr_45519_46286[(2)] = inst_45459);

(statearr_45519_46286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42992__auto__ = null;
var cljs$core$async$state_machine__42992__auto____0 = (function (){
var statearr_45523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45523[(0)] = cljs$core$async$state_machine__42992__auto__);

(statearr_45523[(1)] = (1));

return statearr_45523;
});
var cljs$core$async$state_machine__42992__auto____1 = (function (state_45493){
while(true){
var ret_value__42993__auto__ = (function (){try{while(true){
var result__42994__auto__ = switch__42991__auto__(state_45493);
if(cljs.core.keyword_identical_QMARK_(result__42994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42994__auto__;
}
break;
}
}catch (e45524){var ex__42995__auto__ = e45524;
var statearr_45525_46287 = state_45493;
(statearr_45525_46287[(2)] = ex__42995__auto__);


if(cljs.core.seq((state_45493[(4)]))){
var statearr_45526_46288 = state_45493;
(statearr_45526_46288[(1)] = cljs.core.first((state_45493[(4)])));

} else {
throw ex__42995__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46289 = state_45493;
state_45493 = G__46289;
continue;
} else {
return ret_value__42993__auto__;
}
break;
}
});
cljs$core$async$state_machine__42992__auto__ = function(state_45493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42992__auto____1.call(this,state_45493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42992__auto____0;
cljs$core$async$state_machine__42992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42992__auto____1;
return cljs$core$async$state_machine__42992__auto__;
})()
})();
var state__43146__auto__ = (function (){var statearr_45527 = f__43145__auto__();
(statearr_45527[(6)] = c__43144__auto___46256);

return statearr_45527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43146__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
