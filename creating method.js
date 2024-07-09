// creating method

const object_1= {
  key : 2384795629,
  randomvalue: function () {
    console.log(`random value is ${this.key}`);
  }
}
object_1.randomvalue();




// creating method to sum values in an object

let array_data= {
  data: [1, 2, 3, 4, 5]
}

array_data.add_all = a=> {
  let b= 0
  array_data.data.forEach(a=> b+=a);
  console.log(b);
}
array_data.add_all();

/* random value is 2384795629
 * 15 
*/