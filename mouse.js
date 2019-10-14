function Mouse(name,weight)
{
	this.name=name,
	this.weight=parseInt(weight)
	this.dead=false;
}
Mouse.prototype.die = function() {
	this.dead=true;
};
var mouse=new Mouse("Jerry",5);
console.log(mouse);
module.exports=Mouse;