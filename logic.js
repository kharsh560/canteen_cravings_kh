console.log("JS loaded");

// Function to check and update the visibility of the <h3> element
function updateVisibility() {
  const itemsListingCell = document.getElementById("itemsListingCell");
  const clickTo = document.getElementById("clickTo");

  // Check if there are any children with the class "individualItem" in the parent container
  const hasChild = itemsListingCell.querySelector(".individualItem");

  // Update visibility of the <h3> based on whether there are child elements or not
  if (hasChild) {
    clickTo.style.display = "none"; // Hide <h3>
  } else {
    clickTo.style.display = "block"; // Show <h3>
  }
}
// Call updateVisibility initially to ensure correct state on page load
updateVisibility();


// Add item logic

// Get the "Add Item" button and the container
    const addItemButton = document.getElementById("addItem");
    const itemsListingCell = document.getElementById("itemsListingCell");

    // Add an event listener for the button click
    addItemButton.addEventListener("click", () => {
      // Create a new div with class "individualItem"
      const newItem = document.createElement("div");
      newItem.className = "individualItem";

      // Add the content for the new item
      newItem.innerHTML = `
            <div class="container">
                <input required type="text" name="text" class="input">
                <label class="label">Snacks name</label>
            </div>
            <div class="controlAndRemoveDiv"> 
                <div class="controls">
                    <button class="minus">-</button>
                    <h2 class="itemQuantity">1</h2>
                    <button class="plus">+</button>
                </div>
                <button class="remove">
                    <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                </button>
            </div>
        `;

      // Append the new item to the container
      itemsListingCell.prepend(newItem);

      // Add event listener to the "Remove" button
      const removeButton = newItem.querySelector(".remove");
      removeButton.addEventListener("click", () => {
        newItem.remove(); // Remove the respective child element
        updateVisibility();
      });

      updateVisibility();
    });

    // Function to handle the increment and decrement logic
document.addEventListener("click", (event) => {
  const target = event.target;

  // Check if the clicked element is a plus or minus button
  if (target.classList.contains("plus")) {
    const itemQuantityElement = target
      .closest(".controls")
      .querySelector(".itemQuantity");

    // Get the current value and increment it
    let currentQuantity = parseInt(itemQuantityElement.textContent, 10);
    if (currentQuantity < 15) {
      currentQuantity += 1;
      itemQuantityElement.textContent = currentQuantity;
    }
  } else if (target.classList.contains("minus")) {
    const itemQuantityElement = target
      .closest(".controls")
      .querySelector(".itemQuantity");

    // Get the current value and decrement it
    let currentQuantity = parseInt(itemQuantityElement.textContent, 10);
    if (currentQuantity > 1) {
      currentQuantity -= 1;
      itemQuantityElement.textContent = currentQuantity;
    }
  }
});

    

/*
HTML ELEMENT:-

<div class="individualItem">
                <div class="container">
                    <input required="" type="text" name="text" class="input">
                    <label class="label">Snacks name</label>
                </div>
                <div class="controlAndRemoveDiv"> 
                    <div class="controls">
                        <button class="minus">-</button>
                        <h2 class="itemQuantity">4</h2>
                        <button class="plus">+</button>
                    </div>
                    <button class="remove">␡</button>
                </div>
            </div>
*/