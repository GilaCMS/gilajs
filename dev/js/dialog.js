
g.popup = function (html,col){
    if (typeof col != 'undefined') {
        g.dialog({body:html,class:col});
    } else g.dialog({body:html});
}

g.modal = function (p){
    p.type='modal'
    g.dialog(p)
}

g.dialog = function (p){
    var default_params = {class:'',escape:true,body:'',title:'',foot:'',img:'',buttons:'ok',type:'',id:'gila-popup'};
    for(i in default_params) if(typeof p[i] == 'undefined') p[i] = default_params[i];
    if(p.type=='modal') {
        g('.gila-darkscreen').remove()
        closebtn = '<span class="closebtn" onclick="g(\'.gila-darkscreen\').remove();">×</span>';
    } else {
        closebtn = '<span class="closebtn" onclick="g(this.parentNode).remove();">×</span>';
    }
    dsclick =''// ' onclick="g(\'.gila-darkscreen\').remove();';


    if(p.title!='') p.title='<div class="title">'+p.title+'</div>';
    if(p.body!='') p.body='<div class="body">'+p.body+'</div>';
    p.class='bg-white curved '+p.class;
    buttons='';
    if(p.buttons!='') for(btni of p.buttons.split(' ')){
        btn = g.dialog.buttons[btni];
        if(typeof btn.class=='undefined') btn.class='default';
        if(typeof btn.fn=='undefined') btn.fn='';
        buttons+='<button class="btn '+btn.class+'" onclick="g.dialog.buttons.'+btni+'.fn(this)">'+btn.title+'</button>';
    }
    p.foot=buttons+p.foot;
    if(p.foot!='') p.foot='<div class="foot">'+p.foot+'</div>';
    if(p.escape == false) {
        dsclick='';
        closebtn=''
    }
    // onclick="event.stopPropagation()"
    append='<div id=\''+p.id+'\' class="'+p.class+' gila-popup">'+closebtn+p.title+p.img+p.body+p.foot+'</div>';
    if(p.type=='modal'){
      g(document.body).append('<div class=\'gila-darkscreen\''+dsclick+'">'+append+'</div>');
    } else g(document.body).append(append)
}

g.dialog.buttons = [];
g.dialog.buttons.ok = {title:'Ok',fn:function(e){
    g(e).findUp('.gila-darkscreen').remove()//.remove();
}};


g.alert = function (html,type,callback){
    foot=''; buttons='ok'; icon='';
    if (typeof type !== 'undefined') {
        if (type=='success') icon="<i class=\'fa fa-check-circle-o fa-5x\' aria-hidden=\'true\' style=\'color:green\'></i><br>";
        if (type=='error') icon="<i class=\'fa fa-times-circle-o fa-5x\' aria-hidden=\'true\' style=\'color:red\'></i><br>";
        if (type=='warning') icon="<i class=\'fa fa-exclamation-triangle fa-5x\' aria-hidden=\'true\' style=\'color:yellow\'></i><br>";
        if (type=='notice') icon="<i class=\'fa fa-exclamation-circle fa-5x\' aria-hidden=\'true\' style=\'color:blue\'></i><br>";
    }
    if (typeof callback !== 'undefined') {
        foot="<a class='btn' onclick='g(\"#gila-darkscreen\").remove();"+callback+"'>OK</a>";
        buttons='';
    }
    //g.popup("<div class='title'>Alert</div><div class='body'>"+html+"</div><div class='footer text-align-center row'><a class='btn' onclick='g(\"#gila-darkscreen\").remove();"+callback+"'>OK</a></div>",{class:'small',escape:false});
    g.dialog({body:icon+'<h2>'+html+'</h2>',class:'small text-align-center',escape:false,buttons:buttons,foot:foot,type:'modal'});
}
