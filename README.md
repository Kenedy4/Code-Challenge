# Code-Challenge

Initial phases:

> I created a directory in my Phase-1 folder and named it Code-Challenge, followed by local repository also called Code-challenge.
> After that I had to publish to public domain using the Git commands as follows:
> ....git init -b main
> ....git add .
> ....git commit -m "initial commit"
> ....git remote add origin git@github.com:Kenedy4/Code-Challenge.git(fron the local repo).
> ....git push origin main--- to ensure that any changes I make on my local repo are tracked through GitHub.

After the initials I started solving the provided challenegs as explained below.

            Part #1:  Challenge 1: Student Grade Generator

Instruction: Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

Solution:

===> For this part, I have writen a program that captures student marks and returns the grade depending on the operational conditions.
===> To actualize this, I started with function delaration; hence my function is "studentGrader" passed the (marks) as my argument parameter.
===> After function declararion and passing the parameter argument through it, I initiated the If statement to instruct the JS complier to check and execute the first argument if the statement is met. and for this case, the statement is "For the grade greater than 79, the student gets grade "A"": this implies that if the students scores 70% and above, they will receive grade A.
After that executed other conditions using the provided conditions to be executed until the last condition/default is recheached.

            Part #2: Challenge 2: Speed Detector

Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

                Part #3:Challenge 3: Net Salary Calculator

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

**NB:** Use KRA, NHIF, and NSSF values provided in the link below.

- [KRA Tax Rates](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)
- [NHIF and NSSF rates](https://www.aren.co.ke/payroll/taxrates.htm)

> > > Writing arimetic function
> > > use comparison operator (conditional operators).
> > > This achieved by conducting three operations:
> > > ====> Calculating Paying deductions
> > > ====> Determining the Gross salary
> > > ====> Net salary

> > > NOTE: Some parts of the Code Challenge are still under Development, others are not clear because it's my first time doing code challenge and it rewarding and exhausting.
