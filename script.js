
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Mobile navigation
menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen ? "✕" : "☰";
});

// Close menu when a navigation link is clicked
document.querySelectorAll(".navigation a").forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = "☰";
    });
});

// Automatic copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp enquiry form
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !service || !message) {
        alert("Please complete all the fields.");
        return;
    }

    const whatsappMessage =
        "Hello EBICH TECH DRILLS LIMITED,\n\n" +
        "I would like to make an enquiry.\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Service Required: " + service + "\n" +
        "Project Details: " + message;

    const whatsappURL =
        "https://wa.me/2348166684983?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
});
