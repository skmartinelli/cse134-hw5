 // Set the value of the date field to the current date and time
 document.getElementById("date").value  =  new Date().toLocaleString();
          
 function submitForm(method) {
   // Create a new XMLHttpRequest object
   let xhr  =  new XMLHttpRequest();
   
   // Set the request method and endpoint
   xhr.open(method, 'https://httpbin.org/' + method.toLowerCase());
   
   // Set the request headers
   xhr.setRequestHeader('Content-Type', 'application/json');
   
   // Define a callback function to handle the response
   xhr.onload  =  function() {
     if (xhr.status  ===  200) {
       document.getElementById("response").value = (xhr.responseText);
     } else {
       alert('Error: ' + xhr.status);
     }
   };
   
   // Read the form data and send the request
   let data  =  {
     id: document.getElementById('id').value,
     article_name: document.getElementById('article_name').value,
     article_body: document.getElementById('article_body').value,
     date: document.getElementById('date').value
   };
   
   xhr.send(JSON.stringify(data));
 }