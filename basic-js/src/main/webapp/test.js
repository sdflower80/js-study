var Class = function() {
	
	console.log("Class invoke111");
	var klass = function() {
		this.init.apply(this, arguments);
	};
	klass.prototype.init = function() {};
	return klass;
}

var Person = Class();
Person.prototype.init = function() {
	console.log("person init!");
}

var p = new Person;

console.log("person obj ->", p);