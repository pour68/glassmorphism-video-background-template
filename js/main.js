const toggleDiv = document.querySelector("#desktop-toggle");
const section = document.querySelector(".desktop");

toggleDiv.addEventListener("click", () => {
  toggleDiv.classList.toggle("active");
  section.classList.toggle("active");
});
