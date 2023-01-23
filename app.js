window.addEventListener('DOMContentLoaded', () => {
    const ratingButtonsDiv = document.getElementById("ratings-bar");
    // Dividing by two to omit nested span children
    // Subtracting 1 to omit default empty text node
    // const numRatingValues = (ratingButtons.childNodes.length - 1) / 2;
    const numRatingValues = ratingButtonsDiv.childElementCount;

    const ratingButtonsArr = Array.from(ratingButtonsDiv.children);

    const formSubmitButton = document.getElementById("form-submit-btn");

    const ratingCardDiv = document.getElementById("rating-card");
    const formResponseCard = document.getElementById("form-response-card");

    const userRating_dom = document.getElementById("user-rating");

    const handleSubmit = (e) => {
        ratingCardDiv.classList.add("hidden");
        formResponseCard.classList.remove("hidden");

        console.log("Form submitted")
    }

    console.log(ratingButtonsArr);
    formSubmitButton.addEventListener("click", handleSubmit);
});