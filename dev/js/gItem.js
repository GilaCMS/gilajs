
gItem.prototype.html = function (html){
    if (typeof html === 'undefined') return this.all[0].innerHTML
    for(let value of this.all){
        value.innerHTML = html
    }
    return this
}

gItem.prototype.attr = function (attr,val){
    if (typeof val === 'undefined') return this.all[0].getAttribute(attr)
    for(let value of this.all){
        value.setAttribute(attr, val)
    }
    return this
}

gItem.prototype.style = function (attr,val){
    if (typeof val === 'undefined') return this.style[attr]
    for(let value of this.all){
        value.style[attr] = val
    }
    return this
}

gItem.prototype.remove = function (){
    for(let value of this.all){
        value.parentElement.removeChild(value)
    }
}

gItem.prototype.findUp = function (q){
    var x = document.querySelectorAll(q);
    _this = this;
    while (this.all[0]) {
        console.log(this.all[0].href)
        this.all[0] = this.all[0].parentNode;
        for (xi = 0; xi < x.length; xi++) {
            if(this.all[0].isSameNode(x[xi])) return this;
        }
    }
    _this.all=[]
    return _this;
}


gItem.prototype.parent = function (){
    this.all = [this.all[0].parentNode];
    return this;
};
gItem.prototype.children = function (){
    var n=this.all[0].firstChild;
    this.all = [];
    for ( ; n; n = n.nextSibling )
       if ( n.nodeType == 1) this.all.push( n );
    return this;
};
gItem.prototype.find = function (x){
    if(typeof this.all[0]!='undefined') this.all = this.all[0].querySelectorAll(x);
    return this;
};

gItem.prototype.append = function (html,data,data_timeout){
    for(let value of this.all){
        let template = document.createElement('template');
        template.innerHTML = html;
        value.appendChild(template.content.firstChild)

        if (typeof data !== 'undefined') {
			for(let attr in data) template.content.firstChild[attr] = data[attr];
		}

        if (typeof data_timeout !== 'undefined') setTimeout(function () {
			for(let attr in data_timeout){
				template.content.firstChild[attr] = data_timeout[attr]
			}
		}, 100)
    }
    return this
}
gItem.prototype.prepend = function (html,data){
    for(let value of this.all){
        let template = document.createElement('template');
        template.innerHTML = html;
        value.insertBefore(template.content.firstChild,value.childNodes[0])

        if (typeof data !== 'undefined') {
			for(let attr in data) template.content.firstChild[attr] = data[attr];
		}

    }
    return this
}


gItem.prototype.createNS = function (node,data,data_timeout){
    for(let value of this.all){
        let child = document.createElementNS("http://www.w3.org/2000/svg", node);
        for(let attr in data)  child.setAttribute(attr,data[attr])
		value.appendChild(child)
        if (typeof data_timeout !== 'undefined') setTimeout(function () {
			for(let attr in data_timeout) child.setAttribute(attr,data_timeout[attr])
		}, 100)
    }
    return this
}
