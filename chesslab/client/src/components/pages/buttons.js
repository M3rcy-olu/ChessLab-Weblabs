// Assuming you have a function to update the points in the database
function updatePoints(value) {
  // Logic to update the points in the database
  fetch("/api/updatePoints", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ points: value }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        alert("Purchase failed: " + data.error);
      } else {
        alert("Purchase successful!");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Assuming you have a button element with an id of "purchaseButton"
const purchaseButton = document.getElementById("purchaseButton");

purchaseButton.addEventListener("click", function () {
  const purchaseValue = 10; // Change this value as per your requirement
  updatePoints(-purchaseValue);
});
