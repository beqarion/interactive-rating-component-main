// Get all the pagination buttons
const numbers = document.querySelectorAll(".card-link")

// Get submited card
const submitedCard = document.querySelector(".submited-card")

// Loop through each button and add a click event listener
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    // Remove the active class from all nums
    numbers.forEach((num) => {
      num.classList.remove("active")
    })
    // Add the active class to the clicked num
    num.classList.add("active")
    // Update content of submited card with number I clicked
    const pageNumber = num.textContent
    submitedCard.querySelector(
      ".given-rating"
    ).textContent = `You selected ${pageNumber} out of 5`
  })
})

document.querySelector(".card-btn").addEventListener("click", () => {
  // show submited card and hide original card
  console.log("clicked submit bnt")
  document.querySelector(".card:not(.hidden)").classList.add("hidden")
  submitedCard.classList.remove("hidden")
})
