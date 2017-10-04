

gItem.prototype.addClass = function (x){
    for(let value of this.all){
        value.classList.add(x)
    }
}

gItem.prototype.removeClass = function (x){
    for(let value of this.all){
        value.classList.remove(x)
    }
}
gItem.prototype.toggleClass = function (x){
    for(let value of this.all){
        value.classList.toggle(x);
    }
}
gItem.prototype.hasClass = function (x){
    for(let value of this.all){
        if(value.classList.contains(x)) return true;
    }
    return false;
}
