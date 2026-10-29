// Mobile navigation: open/close the menu and keep its accessibility state accurate.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open"); // Toggle the menu's visible CSS class.
  menuToggle.setAttribute("aria-expanded", String(isOpen)); // Tell screen readers whether it is open.
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

// On mobile, close the menu after the visitor selects a section link.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Keep the copyright year current automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Copy the public GitHub profile URL when the visitor presses the contact button.
const copyButton = document.getElementById("copyProfile");
const copyStatus = document.getElementById("copyStatus");
copyButton.addEventListener("click", async () => {
  const profileUrl = "https://github.com/162rajpatel-tech";
  try {
    await navigator.clipboard.writeText(profileUrl); // Modern browsers require HTTPS or localhost.
    copyStatus.textContent = "GitHub profile URL copied!";
  } catch (error) {
    // A helpful fallback message if browser clipboard permission is unavailable.
    copyStatus.textContent = "Copy this URL: " + profileUrl;
  }
});
