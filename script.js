

function getBudgets(array) {
	var sum =0 /* i declare var  sum with inital value of 0 */ 
    for (let i=0; i <array.length; i++) /* then i will loop inside the array length to make sure covering all the objects inside the array*/
    {
		sum +=array[i].budget /* now it will add all the budget elements values inside each object together to get th sum during looping inside each object in the array*/
	}
	return sum /* now it will retrun the value of the sum after do complete loop */

}

/* now time to test the function */
  console.log("The Total Budget is :"+getBudgets([
    { name: "Mahmoud", age: 39, budget: 88000 },
    { name: "Panyet",  age: 32, budget: 68000 },
    { name: "Panyoot",  age: 22, budget:24000 }
  ])+"CAD");