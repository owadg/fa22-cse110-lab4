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

Question 13:
A: '32' since integers map to their exact string representation
B: 1 since the minus sign requires numeric operands and strings that are numbers are converted to strings.
C: 3 this is a numeric conversion and null becomes 0.
D: '3null' this is a string conversion and null becomes 'null'
E: 4 this is a numeric conversion and true becomes 1.
F: 0 this is a numeric conversion and false becomes zero and null becomes zero.
G: '3undefined' this is a string conversion, as such undefined becomes 'undefined.
H: NaN this is a numeric conversion, so '3' becomes 3 as it is a string literal that only consists of numbers. undefined becomes NaN. Anything added to NaN becomes NaN.

Question 14:
A: true - this is a numeric conversion, so '2' becomes 2, which is greater than 1.
B: false - this is a string comparison, and in lexographic order, '1' comes before '2'
C:  true - '2' becomes a 2, and 2==2 is true.
D: false - '2' and 2 are different primitive types, and this is a strict equality comparison.
E: false - true gets numerically converted to a 1, and 1 !=2.
F: true - we do an explicit type case, so both sides of the operand are booleans. 2 as a boolean is true, and true=true.

Question 15:
== is an equality operator. It will implicitly convert types, so even if the parameters aren't the same type, but can be converted to the same value, it will return true, whereas === is a strict equality operator, so if the parameters are not the same type, it will instantly return false.

Question 17:
[2, 4, 6]
We are iterating through array. For each index i, we take the value of it, and call the callback function on it, which in this case multiplies everything by 2. We append this returned value to the array and return the array after doing this for all induces.

Question 19:
1
3
4
2