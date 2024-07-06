// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];
  while (true) {
    const firstName = prompt("Enter employee's first name:");
    if (!firstName) break;

    const lastName = prompt("Enter employee's last name:");
    if (!lastName) break;

    const salary = parseFloat(prompt("Enter employee's salary:"));
    if (isNaN(salary) || salary <= 0) {
      alert("Invalid salary. Please enter a valid number.");
      break;
    }

    employees.push({ firstName, lastName, salary });

    const continueAdding = confirm("Employee added. Would you like to add another?");
    if (!continueAdding) break;
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
    const totalSalary = employeesArray.reduce((total, employee) => total + employee.salary, 0);
    const averageSalary = totalSalary / employeesArray.length;
    console.log('Average Salary of your', employeesArray.length, 'employees is', averageSalary.toFixed(2),);
  
    const averageSalaryDiv = document.querySelector('#average-salary');
  
  }

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log('Congratulations to:', randomEmployee, 'our random drawing');

  const randomEmployeeDiv = document.querySelector('#random-employee');
 
}

// Display the total number of employees
const displayEmployeeCount = function(employeesArray) {
  const employeeCountDiv = document.querySelector('#employee-count');
  
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayEmployeeCount(employees); // Display the total number of employees
  displayAverageSalary(employees);
  console.log('==============================');
  getRandomEmployee(employees);

  employees.sort(function(a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
