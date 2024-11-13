const suggestions = ["Mercury", "Earth", "Venus", "Jupiter", "Saturn", "Mars", "Uranus", "Neptune"];

function filterFunction() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const suggestionsList = document.getElementById('suggestions');

    // Clear previous suggestions
    suggestionsList.innerHTML = '';

    if (filter) {
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(filter));

        if (filteredSuggestions.length > 0) {
            suggestionsList.style.display = 'block'; // Show suggestions
            filteredSuggestions.forEach(item => {
                const li = document.createElement('li');
                li.className = 'suggestion-item';
                li.textContent = item;
                li.onclick = () => {
                    input.value = item; // Set input value on click
                    suggestionsList.style.display = 'none'; // Hide suggestions
                };
                suggestionsList.appendChild(li);
            });
        } else {
            suggestionsList.style.display = 'none'; // Hide if no matches
        }
    } else {
        suggestionsList.style.display = 'none'; // Hide if input is empty
    }
}