// Function to make an AJAX request and fetch user data
function fetchUserData() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Define the API endpoint
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Set up the request with the HTTP method and the URL
  xhr.open("GET", apiUrl, true);

  // Set up a function to handle the response when the request completes
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Check if the request was successful
      // Parse the JSON response
      const users = JSON.parse(xhr.responseText);

      // Log the list of user names to the browser console
      console.log("List of User Names:");
      users.forEach((user) => {
        console.log(user.name); // Log each user's name
      });

      // Output the user names to the browser output
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = "<h3>List of User Names:</h3>";
      users.forEach((user) => {
        const p = document.createElement("p");
        p.textContent = user.name;
        outputDiv.appendChild(p);
      });
    } else {
      console.error("Error fetching data:", xhr.statusText);
    }
  };

  // Set up a function to handle errors
  xhr.onerror = function () {
    console.error("Request failed.");
  };

  // Send the request
  xhr.send();
}

// Call the function to fetch user data when the page loads
fetchUserData();
