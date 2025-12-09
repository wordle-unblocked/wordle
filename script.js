// Theme Toggle
const themeToggle = document.getElementById("themeToggle")
const html = document.documentElement
const toggleIcon = themeToggle.querySelector(".toggle-icon")

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
if (currentTheme === "dark") {
  html.classList.add("dark-mode")
  toggleIcon.textContent = "🌙"
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark-mode")

  const isDark = html.classList.contains("dark-mode")
  localStorage.setItem("theme", isDark ? "dark" : "light")
  toggleIcon.textContent = isDark ? "🌙" : "☀"
})

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})

// Close mobile menu on link click
document.querySelectorAll(".nav-mobile a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active")
    mobileMenu.classList.remove("active")
  })
})

// Subscribe Form Validation
const subscribeForm = document.getElementById("subscribeForm")
subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = subscribeForm.querySelector('input[type="email"]').value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (emailRegex.test(email)) {
    alert(`✓ Thank you for subscribing with ${email}`)
    subscribeForm.reset()
  } else {
    alert("✗ Please enter a valid email address")
  }
})

// Game Card Interaction
document.querySelectorAll(".game-card").forEach((card) => {
  card.addEventListener("click", function () {
    const gameName = this.querySelector("h3").textContent
    console.log("[v0] Game selected:", gameName)
  })
})

// Iframe Loading Simulation
const iframeLoading = document.getElementById("iframeLoading")
const gameFrame = document.getElementById("gameFrame")

// Simulate loading complete after 2 seconds (replace src with actual game URL later)
setTimeout(() => {
  iframeLoading.style.display = "none"
  gameFrame.style.display = "block"
}, 2000)
