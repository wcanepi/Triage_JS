// Declare an array
const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
];
var runUntil;

// Create function to do the looping
function loopFunc() {
  // Populate the command prompt variables
 const command = prompt('Choose one: update, delete, add, reorder');
 
 // Use a Switch statement to handle choices
  switch (command.toLowerCase()) { // Set the command to lowercase
    case 'update': // Update the list
      // Get the patient's name
      const pname = prompt('UPDATE: Enter the Patients name');
      // Loop though the array to find the name
      for (let i = 0; i < patientList.length; i++) {
        // If the patients name is found, ask for the new name and update it
        if (patientList[i].toUpperCase() === pname.toUpperCase()) {
          patientList[i] = prompt('UPDATE: What is the New name?');
          alert(patientList);
          break;
        }
      }
      // Patient's name was not found in the list
      if (i === patientList.length) {
        alert('That Patient was not found!');
      }
      break;

    case 'delete': // Delete Patient from list
      // Get the patient's name
      const delname = prompt('DELETE: What is the Patients name?');
      // Loop though the array to find the name
      for (let i = 0; i < patientList.length; i++) {
        // If the name is found, delete that element in the array
        if (patientList[i].toUpperCase() === delname.toUpperCase()) {
          patientList.splice(i, 1);
          alert(patientList);
          break;
        }
      }
      // Patient's name was not found in the list
      if (i === patientList.length) {
        alert('Patient was not found!');
      }
      break;

    case 'add': // Add Patient to list
      // Get the patient's name
      const newname = prompt('ADD: What is the new Patients name?');
      // If no value was entered, print an error message. Otherwise add name to the array
      if (!newname) {
        alert('You forgot to add a Patient name!');
      } else {
        patientList.push(newname);
        alert(patientList);
      }
      break;
      
    case 'reorder': // Reorder the list of Patients
      // Get the first patient's name
      const name1 = prompt('REORDER: What is the name of the First patient?');
      // Loop thru the array to find the first patient's name
      for (let i = 0; i < patientList.length; i++) {
        // If the first patient's name is found, continue
        if (patientList[i].toUpperCase() === name1.toUpperCase()) {
          // Get the second patient's name
          const name2 = prompt("REORDER: What is the name of the Second patient?");
          // Loop though the array to find the second patient's name
          for (let j = 0; j < patientList.length; j++) {
            // If the second patient's name is found, swap the values in the array
            if (patientList[j].toUpperCase() === name2.toUpperCase()) {
              patientList[i] = name2;
              patientList[j] = name1;
              alert(patientList);
              break;
            }
          }
          // 2nd patient name was not found in the list
          if (j === patientList.length) {
            alert('2nd patient name was not found in the list!');
            break;
          }
          break;
        }
      }
      // 1st patient name was not found in the list
      if (i === patientList.length) {
        alert('1st patient name was not found in list!');
        break;
      }
      break;
    default: // Switch statement defaults to display an error message
      alert('Oops try again!');
  }
}
// Create loop that calls loopFunc
while (!runUntil) {
  loopFunc();
}               
