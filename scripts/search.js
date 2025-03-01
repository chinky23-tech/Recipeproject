
const recipes = {
    "gobi parantha": "bfrecipe1.html",
    "poha": "bfrecipe2.html",
    "sandwich": "bfrecipe3.html",
    "paneer parantha": "bfrecipe4.html",
    "besan chilla": "bfrecipe5.html",
    "moong dal chilla": "bfrecipe6.html",
    "oats chilla": "bfrecipe7.html",
    "allu parantha": "bfrecipe8.html",
    "spinach omelette": "bfrecipe9.html",
    "french toast": "bfrecipe10.html",
    "rajmah": "lunchrecipe1.html",
    "mix veg pulao": "lunchrecipe2.html",
    "kabuli channe puri": "lunchrecipe3.html",
    "paneer bhurji": "lunchrecipe4.html",
    "palak-chicken": "lunchrecipe5.html",
    "idli sambhar": "lunchrecipe6.html",
    "dal tadka": "lunchrecipe7.html",
    "chicken curry": "lunchrecipe8.html",
    "chicken biryani": "lunchrecipe9.html",
    "afgani paneer": "lunchrecipe10.html",
    "kadhi pakora": "dinnerrecipe1.html",
    "butter chicken": "dinnerrecipe2.html",
    "chana masala": "dinnerrecipe3.html",
    "chilli chicken": "dinnerrecipe4.html",
    "dal makhni": "dinnerrecipe5.html",
    "chilli paneer": "dinnerrecipe6.html",
    "egg curry": "dinnerrecipe7.html",
    "kadhai chicken": "dinnerrecipe8.html",
    "mix veg": "dinnerrecipe9.html",
    "besan laddo":"dessertrecipe1.html",
    "flooda":"dessertrecipe2.html",
    "gajar ka halwa": "dessertrecipe3.html",
    "gulab jamun":"dessertrecipe4.html",
    "jalebi":"dessertrecipe5.html",
    "kheer":"dessertrecipe6.html",
    "kulfi":"dessertrecipe7.html",
    "malpua":"dessertrecipe8.html",
    "mango lassi":"dessertrecipe9.html",
    "rasmalai":"dessertrecipe10.html",
    "breakfast":"breakfast.html",
    "lunch":"lunch.html",
    "dinner":"dinner.html",
    "desserts":"desserts.html"


};
// Function to handle the search
function performSearch() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const recipePage = recipes[searchQuery];

    if (recipePage) {
        // Redirect to the recipe page
        window.location.href = recipePage;
    } else {
        // Alert if recipe not found
        alert("Recipe not found! Please try again.");
    }
}

// Trigger search on icon click
document.getElementById("search-icon").addEventListener("click", function () {
    performSearch();
});

// Trigger search on Enter key
document.getElementById("search-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        performSearch();
    }
});
