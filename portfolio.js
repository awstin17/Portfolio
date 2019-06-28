/* ------------------------------ Begin Extra Info Expanding Section ------------------------------ */

//Finds all learn more buttons in project list and adds click event listener to each
let learnButtons = $(".learn-more")
learnButtons.each((index, button) => $(button).click(expandToggle))

function expandToggle(expandEvent) {
  let learnMoreButton = $(expandEvent.currentTarget) // Find button element that fired off the event
  let extraInfoSection = learnMoreButton.next() // Find extra information section right after button
  let scrollDiv = extraInfoSection.find(".scrollHere")[0] // Find the div the screen scrolls to after clicking

  extraInfoSection.toggleClass("unexpanded expanded") // Expand/unexpand information
  scrollDiv.scrollIntoView({ behavior: "smooth", block: "center" }) // Scroll to additional info
  toggleButtonText(learnMoreButton) // Change button text on button that called this function
}

function toggleButtonText(learnMoreButton) {
  learnMoreButton.text(
    learnMoreButton.text() == "Collapse" ? "Learn More" : "Collapse"
  )
}

/* ------------------------------ Begin Image Carousel Section ------------------------------ */

// Finds all right arrow buttons on image carousels and add click event listener
let rightCarouselButtons = $(".rightButtonCarousel")
rightCarouselButtons.each((index, button) => $(button).click(displayNextImage))

// Finds all left arrow buttons on image carousels and adds click event listener
let leftCarouselButtons = $(".leftButtonCarousel")
leftCarouselButtons.each((index, button) =>
  $(button).click(displayPreviousImage)
)

function displayNextImage(nextImageEvent) {
  let displayingImage = $(nextImageEvent.currentTarget)
    .prev()
    .children(".displayingImage")

  let nextImage = displayingImage.next()[0]
    ? displayingImage.next()
    : displayingImage.siblings(":first")

  displayingImage.toggleClass("displayingImage hiddenImage")
  nextImage.toggleClass("displayingImage hiddenImage")
}

function displayPreviousImage(previousImageEvent) {
  let displayingImage = $(previousImageEvent.currentTarget)
    .next()
    .children(".displayingImage")

  let previousImage = displayingImage.prev()[0]
    ? displayingImage.prev()
    : displayingImage.siblings(":last")

  displayingImage.toggleClass("displayingImage hiddenImage")
  previousImage.toggleClass("displayingImage hiddenImage")
}
