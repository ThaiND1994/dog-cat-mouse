function Dog()
{
this.stomatch=[];	
}
Dog.prototype.eat = function(cat) {
 this.stomatch.push(cat);
};
module.exports=Dog