// Declaring array
const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
];
var neverComplete;
alert(patientList);

// Create function to loop
function loopFunc() {
  // Populate the command prompt variables
  const command = prompt('Choose one: update, delete, add, reorder');
  // Use s Switch statement to handle choices
  switch (command.toLowerCase()) { // Set the command to lowercase
    case 'update': // Update the list
      // Get the patient's name
      var name = prompt("Enter the Patient's name");
      // Loop though the array to find the name
      for (var i = 0; i < patientList.length; i++) {
        // If the patients name is found, ask for the new name and update it
        if (patientList[i].toUpperCase() === name.toUpperCase()) {
          patientList[i] = prompt('What is the New name?');
          alert(patientList);
          break;
        }
      }
      // Patient's name was not found in the list
      if (i === patientList.length) {
        alert('That Patient was not found!');
      }
      break;
    case 'delete': // Deleting from list
      // Get the patient's name
      var name = prompt("What is the Patient's name?");
      // Loop though the array to find the name
      for (var i = 0; i < patientList.length; i++) {
        // If the name is found, delete that element in the array
        if (patientList[i].toUpperCase() === name.toUpperCase()) {
          patientList.splice(i, 1);
          alert(patientList);
          break;
        }
      }
      // Patient's name was not found in the list
      if (i === patientList.length) {
        alert('Patient not found!');
      }
      break;
    case 'add': // Adding to list
      // Get the patient's name
      var name = prompt("What is the Patient's name?");
      // If no value was entered, print an error message
      // Otherwise add name to the array
      if (!name) {
        alert('Patient not found!');
      } else {
        patientList.push(name);
        alert(patientList);
      }
      break;
    case 'reorder': // Reorder the list
      // Get the first patient's name
      var name1 = prompt("What is the name of the First patient?");
      // Loop though the array to find the first patient's name
      for (var i = 0; i < patientList.length; i++) {
        // If the first patient's name is found, continue
        if (patientList[i].toUpperCase() === name1.toUpperCase()) {
          // Get the second patient's name
          var name2 = prompt("What is the name of the Second patient?");
          // Loop though the array to find the second patient's name
          for (var j = 0; j < patientList.length; j++) {
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
      alert('Patient was not found!');
  }
}
// Creating a loop that calls loopFunc
while (!neverComplete) {
  loopFunc();
}               
