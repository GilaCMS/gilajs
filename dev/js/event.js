
document.onclick = function(){
    for(let i in g_click_queries) if(isNaN(i)){
        var x = document.querySelectorAll(i);
        for (xi = 0; xi < x.length; xi++) {
            if(event.target.isSameNode(x[xi])) {
                event.target.fn = g_click_queries[i].bind(event.target);
                event.target.fn()
            } else {
                el= event.target;
                while(el=el.parentNode) {
                    if(el.isSameNode(x[xi])) {
                        el.fn = g_click_queries[i].bind(el);
                        el.fn()
                    }
                }
            }
        }
    }
};

gItem.prototype.event = function (ev,fn,name){
    for(let value of this.all){
        value.addEventListener(ev, fn);
        if(typeof name!='undefined') value.setAttribute('data-event')=name;
    }
}
g.click = function (query,fn){
    g_click_queries[query] = fn;
}
