document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var searchValue = document.getElementById('searchInput').value.toLowerCase().replace(/[^a-z]/g, '');

    console.log("Search Value:", searchValue); // Debugging: Check if searchValue is correct

    // Get all the card titles
    var cardTitles = document.querySelectorAll('.card-title');

    // Remove highlight from all card titles
    cardTitles.forEach(function(cardTitle) {
        cardTitle.classList.remove('highlighted');
    });

    // Clear previous search results
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    // Array to store matched card titles
    var matchedTitles = [];

    // Iterate through each card title
    cardTitles.forEach(function(cardTitle) {
        var titleText = cardTitle.textContent.toLowerCase().replace(/[^a-z]/g, '');
        
        // Check if the card title contains the search value
        if (titleText.includes(searchValue)) {
            // Add highlight to the matched card title
            cardTitle.classList.add('highlighted');

            // Create a button for the matched title
            var scrollButton = document.createElement('button');
            scrollButton.textContent = cardTitle.textContent;
            scrollButton.classList.add('btn', 'btn-primary', 'mb-2');
            scrollButton.style.marginRight = '5px'; // Add space between buttons
            scrollButton.addEventListener('click', function() {
                cardTitle.scrollIntoView({ behavior: 'smooth' });
            });
            resultsContainer.appendChild(scrollButton);

            matchedTitles.push(cardTitle);
        }
    });

    // Add label "Results:"
    var resultsLabel = document.createElement('p');
    resultsLabel.textContent = 'Results:';
    resultsContainer.prepend(resultsLabel);

    // If no matches are found, show an alert
    if (matchedTitles.length === 0) {
        console.log("No match found. Showing alert..."); // Debugging: Check if this block is reached
        alert('No results found for: ' + searchValue);
    }
});
