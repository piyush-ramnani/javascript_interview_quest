//Q - return only details of those who scored more than 60 marks

let students = [
  { name: "Piyush", rollNumber: 32, marks: 80 },
  { name: "Sammi", rollNumber: 18, marks: 79 },
  { name: "Sahil", rollNumber: 32, marks: 70 },
  { name: "ansi", rollNumber: 32, marks: 0 },
  { name: "Vats", rollNumber: 32, marks: 5 },
];

const SixtyPlusMarks = students.filter((students) => students.marks > 60);
console.log(SixtyPlusMarks);
