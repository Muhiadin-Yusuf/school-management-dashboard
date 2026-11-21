export const initialStaff = [
  { id: 1, name: "Ahmed Mohamed", role: "Teacher", email: "ahmed@gmail.com", phone: "0612345678", status: "Active" },
  { id: 2, name: "Fatima Ali", role: "Accountant", email: "fatima@gmail.com", phone: "0623456789", status: "Active" },
  { id: 3, name: "Mohamed Hassan", role: "Administrator", email: "mohamed@gmail.com", phone: "0634567890", status: "Inactive" }
];

export const initialClasses = [
  { id: 1, name: "Class 1A", teacher: "Ahmed Ali", students: 35, status: "Active" },
  { id: 2, name: "Class 2B", teacher: "Fatima Hassan", students: 28, status: "Active" }
];

export const initialFees = [
  { id: 1, name: "Ahmed Ali", className: "Class One", status: "Paid", amount: 120 },
  { id: 2, name: "Ayan Hassan", className: "Class Two", status: "Unpaid", amount: 100 },
  { id: 3, name: "Mohamed Yusuf", className: "Class Three", status: "Paid", amount: 150 },
  { id: 4, name: "Hodan Omar", className: "Class One", status: "Unpaid", amount: 120 }
];

export const initialStudents = [
  { id: 1, name: "Ahmed Ali", className: "Class One", gender: "Male", phone: "0612345678", status: "Active" },
  { id: 2, name: "Ayan Hassan", className: "Class Two", gender: "Female", phone: "0623456789", status: "Active" },
  { id: 3, name: "Mohamed Yusuf", className: "Class Three", gender: "Male", phone: "0634567890", status: "Active" },
  { id: 4, name: "Hodan Omar", className: "Class One", gender: "Female", phone: "0645678901", status: "Active" }
];
