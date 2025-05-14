const writeBtn = document.getElementById("writeBtn");
const uploadBtn = document.getElementById("uploadBtn");
const mainButtons = document.getElementById("mainButtons");
const mainTitle = document.getElementById("mainTitle");
const backArrow = document.getElementById("backArrow");

const editorSection = document.getElementById("editorSection");
const wordEditor = document.getElementById("wordEditor");
const continueBtn = document.getElementById("continueBtn");

const uploadSection = document.getElementById("uploadSection");
const uploadEditor = document.getElementById("uploadEditor");
const uploadContinueBtn = document.getElementById("uploadContinueBtn");
const fileInput = document.getElementById("fileInput");
const fileLabel = document.getElementById("fileLabel");

// WRITE button functionality
writeBtn.addEventListener("click", () => {
  mainTitle.textContent = "WRITE";
  mainTitle.classList.add("title-move-up");
  mainButtons.style.display = "none";
  editorSection.classList.remove("hidden");
  backArrow.classList.remove("hidden");
});

// UPLOAD button functionality
uploadBtn.addEventListener("click", () => {
  mainTitle.style.display = "none"; // Hide the "LEARN LANGUAGES" title
  const uploadTitle = document.createElement('h1'); // Create a new title for the upload page
  uploadTitle.textContent = "UPLOAD";
  uploadTitle.classList.add("upload-title");
  document.body.appendChild(uploadTitle); // Append the new title to the body
  
  mainButtons.style.display = "none"; // Hide the buttons
  uploadSection.classList.remove("hidden"); // Show the upload section
  backArrow.classList.remove("hidden"); // Show the back arrow
});


// BACK arrow functionality
backArrow.addEventListener("click", () => {
  mainTitle.textContent = "LEARN LANGUAGES";
  mainTitle.classList.remove("title-move-up");
  mainButtons.style.display = "flex";
  editorSection.classList.add("hidden");
  uploadSection.classList.add("hidden");
  backArrow.classList.add("hidden");
  fileLabel.textContent = "No file chosen";
  fileInput.value = "";
  uploadEditor.value = "";
  wordEditor.value = "";
});

// File selection and reading
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    fileLabel.textContent = file.name;

    const reader = new FileReader();
    reader.onload = function (e) {
      uploadEditor.value = e.target.result;
    };
    reader.readAsText(file);
  } else {
    fileLabel.textContent = "No file chosen";
  }
});

// CONTINUE button actions (customize as needed)
continueBtn.addEventListener("click", () => {
  alert("Continue from WRITE");
});

uploadContinueBtn.addEventListener("click", () => {
  alert("Continue from UPLOAD");
});
