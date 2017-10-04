
gItem.prototype.serialize = function (){
    //if (typeof options === 'undefined') return this.all[0].innerHTML
    var options={
        href:function(e){return e.attr('href')}
    }
    var s=[];
    var si=0;
    for(var v=0; v<this.all.length; v++ ){
        var attr={};

        attr['tag']=this.all[v].tagName;
        //var e=g(this.all[v]);
        for(var i in options) {
            attr[i]=options[i](g(this.all[v]));
        }
        children=g(this.all[v]).children().serialize();
        children=JSON.parse( children );
        if(typeof children[0]!='undefined') attr['children']=children;
        s[si]=attr;
        si++;
    }
    return JSON.stringify(s)
}

//
