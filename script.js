const writeBtn = document.getElementById("writeBtn");
const uploadBtn = document.getElementById("uploadBtn");
const backArrow = document.getElementById("backArrow");
const mainTitle = document.getElementById("mainTitle");
const mainButtons = document.getElementById("mainButtons");

const writeSection = document.getElementById("writeSection");
const uploadSection = document.getElementById("uploadSection");

const writeEditor = document.getElementById("writeEditor");
const uploadEditor = document.getElementById("uploadEditor");

const writeContinueBtn = document.getElementById("writeContinueBtn");
const uploadContinueBtn = document.getElementById("uploadContinueBtn");

const fileInput = document.getElementById("fileInput");

// Show Write UI
writeBtn.addEventListener("click", () => {
  mainTitle.textContent = "Write";
  mainTitle.classList.add("title-move-up");
  mainButtons.style.display = "none";
  writeSection.classList.remove("hidden");
  backArrow.classList.remove("hidden");
});

// Show Upload UI
uploadBtn.addEventListener("click", () => {
  mainTitle.textContent = "Upload";
  mainTitle.classList.add("title-move-up");
  mainButtons.style.display = "none";
  uploadSection.classList.remove("hidden");
  backArrow.classList.remove("hidden");
});

// Back arrow resets everything
backArrow.addEventListener("click", () => {
  mainTitle.textContent = "LEARN LANGUAGES";
  mainTitle.classList.remove("title-move-up");

  writeSection.classList.add("hidden");
  uploadSection.classList.add("hidden");

  mainButtons.style.display = "flex";
  backArrow.classList.add("hidden");

  writeEditor.value = "";
  uploadEditor.value = "";
  fileInput.value = "";
});

// Handle file input
fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    uploadEditor.value = e.target.result;
  };
  reader.readAsText(file);
});

// CONTINUE Buttons (placeholder actions)
writeContinueBtn.addEventListener("click", () => {
  alert("You clicked CONTINUE from Write section!");
});

uploadContinueBtn.addEventListener("click", () => {
  alert("You clicked CONTINUE from Upload section!");
});
