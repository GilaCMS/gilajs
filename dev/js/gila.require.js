
/*
<script type="text/javascript" src="http://your.cdn.com/first.js"></script>
<script type="text/javascript">
g.require("http://your.cdn.com/second.js", function(){
    //initialization code
});
</script>
*/
var g_requiredGroup = new Array();
var g_baseUrl = "res/";

g.require = function (res, callback = function(){ return } ) {

    if(Array.isArray(res)) {
        var group_n = g_requiredGroup.length;
        g_requiredGroup[group_n] = { loaded:0, fn:callback };
        var gcall = "if(g_requiredGroup["+group_n+"].loaded == "+res.length+"){ g_requiredGroup["+group_n+"].fn(); alert('ok'); }else g_requiredGroup["+group_n+"].loaded++;";
        for(r=0; r<res.length; r++) {
            g.require( res[r],function(){ gila_group_callback(res.length,group_n); });
        };

        return;
    }

    var rRes = requiredRes[res];

    if(typeof rRes == 'undefined') {
        console.warn(res+" is not defined in require.js");
        requiredRes[res]={wjs:res};
        rRes = requiredRes[res];
    }

    if(rRes.loaded == true) {
        callback();
        return;
    }

    if(rRes.dep) {
        g.require(rRes.dep, function(){
            if(rRes.css) g.loadCSS(g_baseUrl+rRes.css);
            if(rRes.js) g.loadJS(rRes,callback);
            if(rRes.wjs) g.loadJS(rRes,callback);
            //callback();
        });
    }else{
        if(rRes.css) g.loadCSS(g_baseUrl+rRes.css);
        if(rRes.js) g.loadJS(rRes,callback);
        if(rRes.wjs) g.loadJS(rRes,callback);
    }

}

g.loadJS = function (res, callback = function(){ return } ) {

    if(typeof res.wjs == 'undefined') url = g_baseUrl+res.js; else url = res.wjs;

    var script = document.createElement("script")
    script.type = "text/javascript";

    if(res.loaded == true){
        callback();
        return;
    }else{
        if(typeof res.callbacks == 'undefined') res.callbacks = new Array();
        res.callbacks.push(callback);
    }

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                script.readyState == "complete"){
                script.onreadystatechange = null;
                res.loaded = true;
                for(i in res.callbacks) res.callbacks[i]();
            }
        };
    } else {
        script.onload = function(){
            res.loaded = true;
            for(i in res.callbacks) res.callbacks[i]();
        };
    }

    script.src = url;
    if(res.dev == 1) script.src += "?"+Math.random();

    if( res.loading != true ) {
        document.getElementsByTagName("head")[0].appendChild(script);
        console.log(url+" loaded");
        res.loading = true;
    }
}

g.loadCSS = function (url) {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", url);
    document.getElementsByTagName("head")[0].appendChild(fileref);
}

gila_group_callback = function (n,group_n) {
    g_requiredGroup[group_n].loaded++;
    if(g_requiredGroup[group_n].loaded == n){
        g_requiredGroup[group_n].fn();
        console.log(g_requiredGroup[group_n].loaded+'!');
    } else {
        console.log(g_requiredGroup[group_n].loaded);
    }

}
