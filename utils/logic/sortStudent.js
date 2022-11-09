// ********** LOGIC  ********** //
// sorts student to a house and then place them in the students array
import { students, houses } from '../data/data';

import createId from '../functions/createId';

import studentsOnDom from '../functions/studentsOnDom';

const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];

  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');

    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest
    });

    student.value = ''; // reset value of input
    studentsOnDom('#students', students);
  }
};

export default sortStudent;
