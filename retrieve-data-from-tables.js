// 1. Write a SQL statement that displays all the information about all salespeople.
// SELECT * FROM salesman;

// 2. Write a SQL statement to display a string "This is SQL Exercise, Practice and Solution".
// SELECT "This is SQL Exercise, Practice and Solution";

// 3. Write a SQL query to display three numbers in three columns.
// SELECT 5, 10, 15;

// 4. Write a SQL query to display the sum of two numbers 10 and 15 from the RDBMS server.
// SELECT 10 + 15;

// 5. Write an SQL query to display the result of an arithmetic expression.
// SELECT 10 * 10;

// 6. Write a SQL statement to display specific columns such as names and commissions for all salespeople.
// SELECT name,commission FROM salesman;

// 7. Write a query to display the columns in a specific order, such as order date, salesman ID, order number, and purchase amount for all orders.
// SELECT ord_date, salesman_id, order_no, purch_amt FROM orders;

// 8. From the following table, write a SQL query to identify the unique salespeople ID. Return salesman_id.
// SELECT DISTINCT salesman_id;

// 9. From the following table, write a SQL query to locate salespeople who live in the city of 'Paris'. Return salesperson's name, city.
// SELECT * FROM salesman WHERE city = 'Paris';

// 10. From the following table, write a SQL query to find customers whose grade is 200. Return customer_id, cust_name, city, grade, salesman_id.
// SELECT customer_id,  cust_name, city, grade, salesman_id FROM customer WHERE grade = 200;

// 11. From the following table, write a SQL query to find orders that are delivered by a salesperson with ID. 5001. Return ord_no, ord_date, purch_amt.
// SELECT  ord_no, ord_date, purch_amt FROM orders WHERE salesman_id = 5001;

// 12. From the following table, write a SQL query to find the Nobel Prize winner(s) for the year 1970. Return year, subject and winner.
// SELECT year, subject, winner FROM nobel_win WHERE year = 1970;

// 13. From the following table, write a SQL query to find the Nobel Prize winner in ‘Literature’ for 1971. Return winner.
// SELECT * FROM nobel_win WHERE subject = 'Literature' AND year = 1971;

// 14. From the following table, write a SQL query to locate the Nobel Prize winner ‘Dennis Gabor'. Return year, subject.
// SELECT * FROM nobel_win WHERE winner = 'Dennis Gabor';

// 15. From the following table, write a  SQL query to find the Nobel Prize winners in the field of ‘Physics’ since 1950. Return winner.
// SELECT winner FROM nobel_win WHERE subject = 'Physics' AND year >= 1950;

// 16. From the following table, write a SQL query to find the Nobel Prize winners in ‘Chemistry’ between the years 1965 and 1975. Begin and end values are included. Return year, subject, winner, and country.
// SELECT year, subject, winner, country FROM nobel_win WHERE subject = 'Chemistry' AND year BETWEEN 1965 AND 1975;

// 17. Write a SQL query to display all details of the Prime Ministerial winners after 1972 of Menachem Begin and Yitzhak Rabin.
// SELECT * FROM nobel_win WHERE year > 1972 AND winner IN ('Menachem Begin', 'Yitzhak Rabin');

// 18. From the following table, write a SQL query to retrieve the details of the winners whose first names match with the string ‘Louis’. Return year, subject, winner, country, and category.
// SELECT year, subject, winner, country, category FROM nobel_win WHERE winner LIKE 'Louis%';

// 19. From the following table, write a SQL query that combines the winners in Physics, 1970 and in Economics, 1971. Return year, subject, winner, country, and category.
// SELECT year, subject, winner, country, category FROM nobel_win WHERE year = 1970 AND subject = 'Physics';
// UNION
// SELECT year, subject, winner, country, category FROM nobel_win WHERE year = 1971 AND subject = 'Economics';

// 20. From the following table, write a SQL query to find the Nobel Prize winners in 1970 excluding the subjects of Physiology and Economics. Return year, subject, winner, country, and category.
// SELECT year, subject, winner, country, category FROM nobel_win WHERE year = 1970 AND subject NOT IN ('Physiology','Economics');

// 21. From the following table, write a SQL query to combine the winners in 'Physiology' before 1971 and winners in 'Peace' on or after 1974. Return year, subject, winner, country, and category.
// SELECT year, subject, winner, country, category FROM nobel_win WHERE year < 1971 AND subject = 'Physiology';
// UNION
// SELECT year, subject, winner, country, category FROM nobel_win WHERE year >= 1974 AND subject = 'Peace';

// 22. From the following table, write a SQL query to find the details of the Nobel Prize winner 'Johannes Georg Bednorz'. Return year, subject, winner, country, and category.
// SELECT year, subject, winner, country, category FROM nobel_win WHERE winner = 'Johannes Georg Bednorz';

// 23. From the following table, write a SQL query to find Nobel Prize winners for the subject that does not begin with the letter 'P'. Return year, subject, winner, country, and category. Order the result by year, descending and winner in ascending.
// SELECT year, subject, winner, country, category FROM nobel_win WHERE subject NOT LIKE 'P%' ORDER BY year DESC, winner;

// 24. From the following table, write a SQL query to find the details of 1970 Nobel Prize winners. Order the results by subject, ascending except for 'Chemistry' and ‘Economics’ which will come at the end of the result set. Return year, subject, winner, country, and category.
// SELECT year, subject, winner, country, category FROM nobel_win ORDER BY CASE WHEN subject IN ('Chemistry','Economics') THEN 1 ELSE 0 END,subject;

// 25. From the following table, write a  SQL query to select a range of products whose price is in the range Rs.200 to Rs.600. Begin and end values are included. Return pro_id, pro_name, pro_price, and pro_com.
// SELECT pro_id, pro_name, pro_price, pro_com FROM item_mast WHERE pro_price BETWEEN 200 AND 600;

// 26. From the following table, write a SQL query to calculate the average price for a manufacturer code of 16. Return avg.
// SELECT AVG(pro_price) FROM item_mast WHERE pro_com = 16;

// 27. From the following table, write a SQL query to display the pro_name as 'Item Name' and pro_price as 'Price in Rs.'
// SELECT pro_name as 'Item Name', pro_price as 'Price in Rs.' FROM item_mast;

// 28. From the following table, write a SQL query to find the items whose prices are higher than or equal to $250. Order the result by product price in descending, then product name in ascending. Return pro_name and pro_price.
// SELECT pro_name, pro_price FROM item_mast WHERE pro_price >= 250 ORDER BY pro_price DESC, pro_name;

// 29. From the following table, write a SQL query to calculate average price of the items for each company. Return average price and company code.
// SELECT AVG(pro_price), pro_com FROM item_mast GROUP BY pro_com;

// 30. From the following table, write a SQL query to find the cheapest item(s). Return pro_name and, pro_price.
// SELECT pro_name, pro_price FROM item_mast WHERE pro_price = (SELECT MIN(pro_price) FROM item_mast);

// 31. From the following table, write a SQL query to find the unique last name of all employees. Return emp_lname.
// SELECT DISTINCT(emp_lname) FROM emp_details;

// 32. From the following table, write a SQL query to find the details of employees whose last name is 'Snares'. Return emp_idno, emp_fname, emp_lname, and emp_dept.
// SELECT  emp_idno, emp_fname, emp_lname, emp_dept FROM emp_details WHERE emp_lname = 'Snares';

// 33. From the following table, write a SQL query to retrieve the details of the employees who work in the department 57. Return emp_idno, emp_fname, emp_lname and emp_dept.
// SELECT  emp_idno, emp_fname, emp_lname, emp_dept FROM emp_details WHERE emp_dept = 57;
