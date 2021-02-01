The bug was that num1 and num2 were being stored as strings, so result was the concatenation of strings instead of addition of numbers. I fixed it by subtracting 0 from both num1 and num2 so that they would be treated as numbers.
1. citylost.json
2. part2.js
3. 11.7MB
4. 1.35s
5. Chrome/87.0.4280.141
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData()