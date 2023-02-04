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

    const setFormListener = () => {
        ratingButtonsArr.forEach(input => {
            input.addEventListener('change', () => {
                console.log(input)
                const ratingValue = input.getAttribute("data-value");
                console.log(ratingValue);
                input.classList.add("rb-tab-active")
                formSubmitButton.disabled = false;
            });
        });
    }

    const handleSubmit = () => {
        ratingCardDiv.classList.add("hidden");
        formResponseCard.classList.remove("hidden");
    }

    formSubmitButton.addEventListener("click", handleSubmit);

    const main = () => {
        setFormListener();
        console.log("Main function is running")
    }
    
    main();
});


