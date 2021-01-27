const employees = [
  {
    id: "1",
    name: "Bob",
    role: "Software Engineer",
  },
  {
    id: "2",
    name: "Alice",
    role: "CEO",
  },
  {
    id: "3",
    name: "Shazi",
    role: "Software Engineer",
  },
];

export const getAllEmployees = () => {
  return employees;
};

export const getEmployeeById = (id) => {
  return employees.filter((employee) => {
    return employee.id === id;
  });
};
