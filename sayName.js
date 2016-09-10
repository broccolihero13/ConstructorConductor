//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.
// var Animal = function(name, legs){
//   this.name = name;
//   this.legs = legs;
// }
  //code here
var Person = function(name, age){
  this.name = name;
  this.age = age;
}

//Now create three instances of Person with data you make up

  //code here
var mickey = new Person('Mickey Mouse', 83);
var minnie = new Person('Minnie Mouse', 88);
var pluto = new Person('Pluto', parseInt(String(parseFloat(Math.round(86/7)))));

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function(){
  alert(this.name);
}
