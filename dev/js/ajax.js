
gItem.prototype.load = function(path){
  var xhttp = new XMLHttpRequest();
  var _g = this;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        for(let value of _g.all) value.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", path, true);
  xhttp.send();
}

/*
function xhrSuccess () { this.callback.apply(this, this.arguments); }

function xhrError () { console.error(this.statusText); }

function loadFile (sURL, fCallback ) { //, argumentToPass1, argumentToPass2, etc.
  var oReq = new XMLHttpRequest();
  oReq.callback = fCallback;
  oReq.arguments = Array.prototype.slice.call(arguments, 2);
  oReq.onload = xhrSuccess;
  oReq.onerror = xhrError;
  oReq.open("get", sURL, true);
  oReq.send(null);
}
*/
g.ajax = function(args,params,fun,type){
    if(typeof args!='object') {
        g.ajaxOld(args,params,fun,type)
        return
    }
    var xhttp = new XMLHttpRequest();

    xhttp.open(args.method, args.url, true);
    _fn = args.fn
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200)  {
          if(typeof args.type!='undefined') {
              if(args.type=='json') this.responseText = JSON.parse(this.responseText);
          }
         args.fn(this.responseText);
     }//else args.fn(false);
    };
    if(typeof args.header!='undefined') xhttp.setRequestHeader("Content-type", args.header);
    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(args.data);
}

g.ajaxOld = function(path,params,fn,type){
    var xhttp = new XMLHttpRequest();

    if(typeof params !== 'function') {
        g.ajax({url:path,method:'POST',data:params,fn:fn,type:type})
    } else {
        g.ajax({url:path,method:'GET',fn:params})
    }
}

g.post = function(path,params,fn){
    g.ajax({url:path,method:'POST',header:"application/x-www-form-urlencoded",data:params,fn:fn})
}

g.get = function(path,fn){
    g.ajax({url:path,method:'GET',fn:fn})
}

g.postJSON = function(path,params,fn){
    g.ajax({url:path,method:'POST',header:"application/x-www-form-urlencoded",data:params,fn:fn,type:'json'})
}
