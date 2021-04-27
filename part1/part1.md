## 1a.
1. "values added: 20" 
2. "final result: 20" 
3. "values added: 20"
4. Error because we defined "result" with "let" it is in the scope within the brackets.
5. Error because we defined "result" with "const" we cannot change the value.
6. Error beacuse reuslt is not within the scope of the brackets around the console.log
 
## 1b.
1. 3
2. 150
3. 150
4. It will return a list of the discounted prices [50, 100, 150]
5. Error because we defined "i" with let and "i" is in the scope of the for loop
6. Error because we defined "discountedPrice" with let and "discountedPrice" is in the scope of the for loop
7. 150
8. It will return a list of the discounted prices [50, 100, 150]
9. Error because we defined "i" with let and "i" is in the scope of the for loop
10. 3
11. It will return a list of the discounted prices [50, 100, 150]
12. <br>
	A. student.name <br>
	B. student['Grad Year'] <br>
	C. student.greeting() <br>
	D. student['Favorite Teacher'].name <br>
	E. student.courseLoad[0] <br>
13. <br>
	A. '32' because it treats the "+" as concatenation <br>
	B. 1 because it converts 3 to a string <br>
	C. 3 because 3 is treated as an integer and it converts null to 0 <br>
	D. 3null because it treats null as a string <br>
	E. 4 because true is treated as 1 and 1 + 3 = 4<br>
	F. 0 because both false and null are treated as zero and it adds 0 to 0 to get 0 <br>
	G. 3undefined because it treats undefined as a string since we give 3 as a string <br>
	H. NaN because it tries to convert 3 to a number, but subraction with underfined becomes not a number. <br>
14. <br>
	A. true became javascript converts '2' to an integer <br>
	B. false because it does string comparison and '2' is greater alphanumerically than '12' <br>
	C. true because it converts '2' to an integer and 2 == 2 <br>
	D. false because '===' does not convert the types <br>
	E. false because it converts true to 1 and 1 != 2 <br>
	F. true because they are of the same type and in booleans there are only 2 values 0 and 1 and since 2 is greater it gets converted to true. <br>
15. The difference between '==' and '===' is that '==' checks for eqaulity with type conversions and '===' does not type convert.
17. The result is an array with the values of each element doubles [2,4,6] this happens because for each element we apply the function doSomething which multiplies the argument by 2 and this is applies to each elementh then pushed to a new array then that array is returned.
19. 1 <br>
	4 <br>
	3 <br>
	2 <br>
