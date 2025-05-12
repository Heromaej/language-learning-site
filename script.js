const writeBtn = document.getElementById("writeBtn");
const uploadBtn = document.getElementById("uploadBtn");
const mainButtons = document.getElementById("mainButtons");
const mainTitle = document.getElementById("mainTitle");
const editorSection = document.getElementById("editorSection");
const uploadSection = document.getElementById("uploadSection");
const backArrow = document.getElementById("backArrow");

// WRITE button
writeBtn.addEventListener("click", () => {
  mainTitle.textContent = "WRITE";
  mainTitle.classList.remove("title-upload");
  mainTitle.classList.add("title-move-up");

  mainButtons.style.display = "none";
  editorSection.classList.remove("hidden");
  uploadSection.classList.add("hidden");
  backArrow.classList.remove("hidden");
});

// UPLOAD button
uploadBtn.addEventListener("click", () => {
  mainTitle.textContent = "UPLOAD";
  mainTitle.classList.remove("title-move-up");
  mainTitle.classList.add("title-upload");

  mainButtons.style.display = "none";
  editorSection.classList.add("hidden");
  uploadSection.classList.remove("hidden");
  backArrow.classList.remove("hidden");
});

// BACK ARROW
backArrow.addEventListener("click", () => {
  mainTitle.textContent = "LEARN LANGUAGES";
  mainTitle.classList.remove("title-move-up", "title-upload");

  editorSection.classList.add("hidden");
  uploadSection.classList.add("hidden");

  mainButtons.style.display = "flex";
  backArrow.classList.add("hidden");
});

// CONTINUE buttons (placeholder for now)
document.getElementById("continueBtn").addEventListener("click", () => {
  alert("Continue from WRITE");
});

document.getElementById("continueBtnUpload").addEventListener("click", () => {
  alert("Continue from UPLOAD");
});
