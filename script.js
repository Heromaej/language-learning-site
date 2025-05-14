const writeBtn = document.getElementById("writeBtn");
const uploadBtn = document.getElementById("upload");
const mainButtons = document.getElementById("mainButtons");
const mainTitle = document.getElementById("mainTitle");
const editorSection = document.getElementById("editorSection");
const uploadSection = document.getElementById("uploadSection");
const wordEditor = document.getElementById("wordEditor");
const backArrow = document.getElementById("backArrow");
const continueBtn = document.getElementById("continueBtn");

writeBtn.addEventListener("click", () => {
  mainTitle.textContent = "WRITE"; // Change title text to "WRITE"
  mainTitle.classList.add("title-move-up"); // Title animation
  mainTitle.classList.add("title-bigger"); // Make title bigger
  mainButtons.style.display = "none"; // Hide main buttons
  editorSection.classList.remove("hidden"); // Show text editor
  backArrow.classList.remove("hidden"); // Show back arrow
});

uploadBtn.addEventListener("click", () => {
  mainTitle.textContent = "UPLOAD"; // Change title text to "UPLOAD"
  mainTitle.classList.add("title-move-up"); // Title animation
  mainTitle.classList.add("title-bigger"); // Make title bigger
  mainButtons.style.display = "none"; // Hide main buttons
  uploadSection.classList.remove("hidden"); // Show upload section
  backArrow.classList.remove("hidden"); // Show back arrow
});

backArrow.addEventListener("click", () => {
  mainTitle.textContent = "LEARN LANGUAGES"; // Reset title to "LEARN LANGUAGES"
  mainTitle.classList.remove("title-move-up"); // Reset title animation
  mainTitle.classList.remove("title-bigger"); // Reset title size
  editorSection.classList.add("hidden"); // Hide text editor
  uploadSection.classList.add("hidden"); // Hide upload section
  mainButtons.style.display = "flex"; // Show main buttons again
  backArrow.classList.add("hidden"); // Hide the back arrow
});
