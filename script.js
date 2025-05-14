const writeBtn = document.getElementById("writeBtn");
const uploadBtn = document.getElementById("uploadBtn");
const mainButtons = document.getElementById("mainButtons");
const mainTitle = document.getElementById("mainTitle");
const editorSection = document.getElementById("editorSection");
const uploadSection = document.getElementById("uploadSection");
const backArrow = document.getElementById("backArrow");
const continueBtn = document.getElementById("continueBtn");
const uploadContinueBtn = document.getElementById("uploadContinueBtn");
const fileInput = document.getElementById("fileInput");
const fileLabel = document.getElementById("fileLabel");
const uploadTitle = document.getElementById("uploadTitle");

writeBtn.addEventListener("click", () => {
  mainTitle.textContent = "WRITE";
  mainTitle.classList.add("title-move-up");
  mainButtons.style.display = "none";
  editorSection.classList.remove("hidden");
  backArrow.classList.remove("hidden");
});

uploadBtn.addEventListener("click", () => {
  mainTitle.textContent = "";
  mainButtons.style.display = "none";
  uploadSection.classList.remove("hidden");
  backArrow.classList.remove("hidden");
});

backArrow.addEventListener("click", () => {
  mainTitle.textContent = "LEARN LANGUAGES";
  mainTitle.classList.remove("title-move-up");
  editorSection.classList.add("hidden");
  uploadSection.classList.add("hidden");
  mainButtons.style.display = "flex";
  backArrow.classList.add("hidden");
});

// Optional: handle selected file display
fileInput.addEventListener("change", () => {
  const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : "No file chosen";
  fileLabel.textContent = fileName;
});
