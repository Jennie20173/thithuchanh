


// function Staff(fullname, email) {
//   this.fullname = fullname;
//   this.email = email;
//   this.getFullname = function(){
//    return this.fullname;
//   }
  
// }
// var david = new Staff('David', 'david@gmail.com');
// console.log(david);
// // david.fullname='david do';
// // console.log(david);
// david.getFullname ='david do'
// console.log(david)
class Staff{
  constructor(fullname,email){
    this.fullname = fullname;
    this.email =email;
    this.setFullName = function(fullname){
      return this.fullname;
    }
  }
}
var david = new Staff('david','david@gamil.com');
console.log(david);
david.setFullName='david do';
console.log(david);


