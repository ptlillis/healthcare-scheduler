// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', (e) => {
  if (e) {
    console.log('dom loaded!');
  }

//   const todoContainer = document.querySelector('.todo-container');
//   const todoForm = document.getElementById('todo-form');

// //   // Inital todos array
//   let appointment = [];

//   // Helper function to hide items
//   const hide = (el) => {
//     el.style.display = 'none';
//   };
//   const show = (el) => {
//     el.style.display = 'inline';
//   };

// //   // This function resets the todos displayed with new todos from the database
//   const initializeRows = () => {
//     todoContainer.innerHTML = '';
//     const rowsToAdd = [];
//     for (let i = 0; i < todos.length; i++) {
//       rowsToAdd.push(createNewRow(todos[i]));
//     }

//     rowsToAdd.forEach((row) => todoContainer.prepend(row));
//   };

  // Helper function to grab todos
  // const getAppointment = () => {
  //   fetch('/api/appointment', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     console.log(response)
  //     .then((data) => {
  //       console.log('Success in getting Appointment:', data);
  //       todos = data;
  //       initializeRows();
  //     });
  // };

  // getAppointment();

//   // Helper function to delete a todo
 

// BCS code correction
// const getAppoinment = (e) => {
//   // e.stopPropagation();
//   // const { id } = e.target.dataset;
//   fetch(`/api/appointment/${id}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then((dbAppointment)=> {
//     console.log("----------",dbAppointment );
//    })
 
//  };

  // then((dbAppointment) => res.json(dbAppointment))
//   console.log(appointment,"-----------")
     
// };
// getAppoinment();
let appointmentData = {};
  const getAppointmentInfo = () => {
    fetch(`/api/Appointment/:id`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log("=========----")
      // .then((response) => response.json())
      .then((data) => {
        console.log('Success in getting appointment data:', data);
        AppointmentData = data;
        // initializeDisplay();
      });
  };

  getAppointmentInfo();
});
// const deleteAppointment = (e) => {
//   e.stopPropagation();
//   const { id } = e.target.dataset;
//   fetch(`/api/appointment/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//     ///????????????  What should we do after delete of appointment?
//   }).then(getAppointmentInfo);
// };
// Delete button
// const delBtn = document.getElementById('button');
// delBtn.addEventListener('click', deleteAppointment);
//   // Function to handle when a user cancels editing
  
//   // Update a todo (PUT)
  // const updateTodo = (todo) => {
  //   console.log('attempting to update with', appointment);
  //   fetch('/api/appointment', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(todo),
  //   }).then((response) => console.log(response));
  // };

//   // Function to call when we are finished editing a todo
  
//       // Update the text in the dom
      

  // Construct a todo-item row
  
 

