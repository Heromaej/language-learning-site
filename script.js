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
  // Change title text and apply animation
  mainTitle.textContent = "WRITE"; 
  mainTitle.classList.add("title-move-up");
  mainTitle.classList.add("title-bigger");
  
  // Hide main buttons and show editor section
  mainButtons.style.display = "none";
  editorSection.classList.remove("hidden");
  backArrow.classList.remove("hidden");
});

uploadBtn.addEventListener("click", () => {
  // Change title text and apply animation
  mainTitle.textContent = "UPLOAD";
  mainTitle.classList.add("title-move-up");
  mainTitle.classList.add("title-bigger");
  
  // Hide main buttons and show upload section
  mainButtons.style.display = "none";
  uploadSection.classList.remove("hidden");
  backArrow.classList.remove("hidden");
});

backArrow.addEventListener("click", () => {
  // Reset title to "LEARN LANGUAGES"
  mainTitle.textContent = "LEARN LANGUAGES";
  mainTitle.classList.remove("title-move-up");
  mainTitle.classList.remove("title-bigger");
  
  // Hide editor and upload sections, show main buttons
  editorSection.classList.add("hidden");
  uploadSection.classList.add("hidden");
  mainButtons.style.display = "flex";
  
  // Hide back arrow
  backArrow.classList.add("hidden");
});
