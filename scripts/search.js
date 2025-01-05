document.getElementById('search-input').addEventListener('input', function (e) {
    const searchValue = e.target.value.toLowerCase();
    console.log(`Searching for: ${searchValue}`);
    // Add search functionality here
});
