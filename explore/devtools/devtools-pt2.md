Question 1:
The program was passing the numbers as strings, so when they were operated upon with the + operator, string concatenation was done instead of arithmetic addition.

![calculateSum breakpoint](/explore/devtools/result-calculateSum.png)

![Watch expressions](/explore/devtools/result-dataType.png)

Question 2:
The easiest way to fix this is to do an explicity type cast of num1 and num2 as Numbers.

![fixed summing bug](/explore/devtools/fix.png)