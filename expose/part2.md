Question 1: This will simply print prices.length. This will not cause an error, since the indexing variable "i" in the for loop was declared with var, it is hoisted to the be at the scope of the function. The last time it was accessed was during the final iteration of the for loop, so that will be its last value. 

Question 2: This will print the discounted price of the last item. It will not cause an error since discountedPrice was declared with var, and it can be redeclared.

Question 3: This will print the the last value of finalPrice. There are no errors, since finalPrice is in scope.

Question 4: [50, 100, 150]
In this case, it halves all of the prices and returns them back in a new array.

Question 5: This will return an error. Since "i" is declared with let, it goes out of scope when the for loop exits, and thus causes an error when attempting to access it.

Question 6: This causes an error. discountedPrice is scoped to the for loop since it was declared with let. Accessing it outside of its scope causes an error.

Question 7: This does not cause an error. It just prints the finalPrice of the last item. finalPrice was declared in the scope of discountPrices(), and line 14 is in the same scope, so it should have access to this variable.

Question 8: [50, 100, 150]
Everything is done in scope. Thus, in this case, it just multiplies all the input prices by one-half, and returns the resulting array.

Question 9: "i" is out of scope since it was declared with let inside of the foor loop. Accessing an out of scope variable causes an error.

Question 10: "length" is in scope, and can be accessed. Thus, this just prints the length of the "prices" array.

Question 11: [50, 100, 150]
Thus function will not result in an error because even though discountedPrice is being initialized to a variable multiple times and it is const, it is being reinitialized, so the original value is technically never modified.

Question 12:
A: student.name
B: student['Grad Year']
C: student.greeting()
D: student['Favorite Teacher'].name
E: student.courseLoad[0]