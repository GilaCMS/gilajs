
function PNK(el,path){
    this.el = g.el(el)
    _el = this.el
    _this = this

    g.ajax({url:'http://192.168.1.83/gila/pnk/list?t=src/core/tables/post',fn:function(data){
        data = JSON.parse(data);
        _el.innerHTML = '<table><thead></thead><tbody></tbody></table>'
        g(_el).find('thead').html(PNK.thead(data.fields))
        g(_el).find('tbody').html(PNK.tbody(data.rows))
    }})


}


PNK.thead = function(data) {
    let t='<tr>'
    for(fid of data) {
//        if(typeof data[fid].title!='undefined') title=data[fid].title; else title=fid;
        t+='<th>'+fid
    }
    return t
}

PNK.tbody = function(data) {
    let t=''
    for(r of data) {
        t+='<tr>'
        for(td of r) {
            t+='<td>'+td
        }
    }
    return t
}
