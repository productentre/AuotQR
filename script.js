function bookTestDrive() {

    alert(
        "Your test drive request has been received!"
    );

}
// ================= FEEDBACK FORM =================

const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        const message = document.getElementById("feedbackMessage");

        message.textContent =
            `Thank you, ${name}! Your feedback has been submitted successfully. ⭐`;

        feedbackForm.reset();

    });

}
