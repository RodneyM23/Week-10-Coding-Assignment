document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let movie = document.getElementById("movie").value;
    let director = document.getElementById("director").value;
    let year = document.getElementById("year").value;
    // Get other form values as needed

    // Create a new row
    let table = document.getElementById("myTable");
    let newRow = table.insertRow(table.rows.length);
    
    // Insert cells with data
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    // Add more cells as needed

    cell1.innerHTML = movie;
    cell2.innerHTML = director;
    cell3.innerHTML = year;
    // Set innerHTML for other cells

    // Clear form inputs
    document.getElementById("movie").value = "";
    document.getElementById("director").value = "";
    document.getElementById("year").value = "";


});
