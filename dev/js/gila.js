/*

g() retuns a gItem
g. functions that dont apply on selected nodes
gItem. functions that apply on returned node list
*/
function gItem(x) {
    this.all = x;
}


g = function(x){
    if (typeof x !== 'undefined') {
        if(typeof x === 'object') return new gItem([x]);
        all = document.querySelectorAll(x);
        return new gItem(all);
    }
}

var g_click_queries = new Array();

g.el = function(id) {
    return document.getElementById(id);
}
// Prototypes
/*
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};*/

//gtest.all
/*
var css="";
//display-flex
for(i=1; i<13; i++){
	css += '.col-'+i+'{width:'+(i/0.12)+'%}\n'
}

var sc = {
margin: ['auto','0','4px','8px','16px'],
display: ['inline','flex','block','8px','16px'],
'align-items': ['center','flex-start','flex-end'],
'float': ['left','right'],

}

for(i in sc) for(j=0; j<sc[i].length; j++) css += '.'+i+'-'+sc[i][j]+'{'+i+':'+sc[i][j]+'}\n'


var style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css+style.styleSheet.cssText
} else {
  style.appendChild(document.createTextNode(css))
}

document.head.appendChild(style);
*/

/*
document.addEventListener('DOMContentLoaded', function() {
    var p = document.createElement("p");
    var content = document.createTextNode(" more text");
    p.appendChild(content);
    document.body.appendChild(p);

});
*/


 /*
rjItem.prototype.node = function (node,data){
    if (typeof data !== 'undefined') {
		html = '<'+node+''
		for(let attr in data) html += ' '+attr+'="'+data[attr]+'"'
		html += '/>'
	} else html = node
	console.log(html)
    for(let value of this.domlist){
        var template = document.createElement('template');
        template.innerHTML = html;
        console.log(html)
        value.appendChild(template.content.firstChild)
    }
    return this
}
rjItem.prototype.create = function (node,data){

    for(let value of this.domlist){
		var nnode = document.createElement(node)
		if (typeof data !== 'undefined') for(let attr in data){
			nnode[attr] = data[attr]
		}
        value.appendChild(nnode)
    }
    return this
}*/
