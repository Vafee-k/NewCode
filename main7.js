// Waits until the page fully loads before running the code
window.onload = function () {

    // Gets the button from the HTML page
    var factButton = document.getElementById("factButton");

    // Gets the paragraph where the fact will be displayed
    var factDisplay = document.getElementById("factDisplay");

    // Creates an array that stores multiple space facts
    var spaceFacts = [
        "One day on Venus is longer than one year on Venus.",
        "The International Space Station travels around Earth in about 90 minutes.",
        "Space is completely silent because there is no air for sound to travel through.",
        "A neutron star can be so dense that a spoonful would weigh billions of tons.",
        "The footprints on the Moon can stay there for millions of years."
    ];

    // Uses the button click without addEventListener
    factButton.onclick = function () {

        // Creates a random number based on the array length
        var randomIndex = Math.floor(Math.random() * spaceFacts.length);

        // Displays a random fact inside the paragraph
        factDisplay.innerHTML = spaceFacts[randomIndex];
    };
};