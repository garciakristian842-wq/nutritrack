const dailyGoal = 2000;
let caloriesConsumed = 0;

const foodForm = document.getElementById("foodForm");
const foodList = document.getElementById("foodList");

foodForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const foodName = document.getElementById("foodName").value;
    const foodCalories = Number(
        document.getElementById("foodCalories").value
    );
    const mealType = document.getElementById("mealType").value;

    // Add calories
    caloriesConsumed += foodCalories;

    // Add food to list
    const listItem = document.createElement("li");

    listItem.innerHTML = `
        <strong>${foodName}</strong>
        - ${mealType}
        - ${foodCalories} kcal
    `;

    foodList.appendChild(listItem);

    // Update dashboard
    updateDashboard();

    // Clear form
    foodForm.reset();
});

function updateDashboard() {

    document.getElementById("caloriesConsumed").textContent =
        caloriesConsumed + " kcal";

    let remaining = dailyGoal - caloriesConsumed;

    if (remaining < 0) {
        remaining = 0;
    }

    document.getElementById("caloriesRemaining").textContent =
        remaining + " kcal";

    let percentage =
        (caloriesConsumed / dailyGoal) * 100;

    if (percentage > 100) {
        percentage = 100;
    }

    document.getElementById("progressBar").style.width =
        percentage + "%";

    document.getElementById("progressText").textContent =
        Math.round(percentage) + "% of daily goal";
}