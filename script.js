const writeBtn = document.getElementById("writeBtn");  // Changed variable name to "writeBtn"
const mainButtons = document.getElementById("mainButtons");
const mainTitle = document.getElementById("mainTitle");
const editorSection = document.getElementById("editorSection");
const wordEditor = document.getElementById("wordEditor");
const autoTranslateBtn = document.getElementById("autoTranslateBtn");
const languageSelector = document.getElementById("languageSelector");
const backArrow = document.getElementById("backArrow");
const continueBtn = document.getElementById("continueBtn");

writeBtn.addEventListener("click", () => {  // Changed from "makeOwnBtn" to "writeBtn"
  mainTitle.textContent = "WRITE";               // Change title text to "WRITE"
  mainTitle.classList.add("title-move-up");     // Title animation
  mainTitle.classList.add("title-bigger");      // Add class to make the title bigger
  mainButtons.style.display = "none";            // Hide main buttons
  editorSection.classList.remove("hidden");     // Show text editor
  languageSelector.classList.remove("hidden");  // Show language selector
  backArrow.classList.remove("hidden");         // Show back arrow
});

backArrow.addEventListener("click", () => {
  mainTitle.textContent = "LEARN LANGUAGES";             // Reset title
  mainTitle.classList.remove("title-move-up");           // Reset title animation
  mainTitle.classList.remove("title-bigger");            // Reset title size
  editorSection.classList.add("hidden");                 // Hide the text editor
  languageSelector.classList.add("hidden");              // Hide the language selector
  mainButtons.style.display = "flex";                     // Show the main buttons again
  backArrow.classList.add("hidden");                     // Hide the back arrow
});

autoTranslateBtn.addEventListener("click", () => {
  const lines = wordEditor.value.split("\n").map(line => {
    if (line.includes("-")) return line;
    return `${line} - [TRANSLATED]`;  // Simulate translation
  });
  wordEditor.value = lines.join("\n");
});

// CONTINUE Button action (you can add further functionality here)
continueBtn.addEventListener("click", () => {
  // Functionality after clicking continue can go here.
  // This can redirect to another page or do something else.
  alert("You clicked CONTINUE! (Add next functionality here)");
});
