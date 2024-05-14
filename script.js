function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }

  const moveRandom = document.querySelector("#move-random");

  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });

  document.addEventListener('DOMContentLoaded', () => {
    let allowNavigation = false;

    // Function to handle beforeunload event
    const beforeUnloadHandler = (event) => {
        if (!allowNavigation) {
            // Cancel the event to prevent the browser from closing or navigating away
            event.preventDefault();
            // Chrome requires a returnValue to be set
            event.returnValue = '';
        }
    };

    // Add event listener for beforeunload
    window.addEventListener('beforeunload', beforeUnloadHandler);

    // Add event listener to the "Yes" button
    const yesButton = document.querySelector('.btn a[href="yes.html"]');
    if (yesButton) {
        yesButton.addEventListener('click', (event) => {
            allowNavigation = true; // Allow navigation
            // Remove the beforeunload event listener
            window.removeEventListener('beforeunload', beforeUnloadHandler);
        });
    }
});
