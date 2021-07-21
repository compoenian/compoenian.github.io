goog.provide('compoenian.core');
compoenian.core.dev_setup = (function compoenian$core$dev_setup(){
if(compoenian.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
compoenian.core.mount_root = (function compoenian$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [compoenian.containers.app.component.container], null),root_el);
});
compoenian.core.init = (function compoenian$core$init(){
compoenian.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("compoenian.events","initialize-db","compoenian.events/initialize-db",1434295282)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),"keydown"], null));

compoenian.core.dev_setup();

return compoenian.core.mount_root();
});

//# sourceMappingURL=compoenian.core.js.map
