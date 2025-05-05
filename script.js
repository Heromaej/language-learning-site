const writeBtn = document.getElementById("writeBtn");
const mainButtons = document.getElementById("mainButtons");
const mainTitle = document.getElementById("mainTitle");
const editorSection = document.getElementById("editorSection");
const wordEditor = document.getElementById("wordEditor");
const backArrow = document.getElementById("backArrow");
const continueBtn = document.getElementById("continueBtn");

writeBtn.addEventListener("click", () => {
  mainTitle.textContent = "Write";
  mainTitle.classList.add("title-move-up");
  mainButtons.style.display = "none";
  editorSection.classList.remove("hidden");
  backArrow.classList.remove("hidden");
});

backArrow.addEventListener("click", () => {
  mainTitle.textContent = "LEARN LANGUAGES";
  mainTitle.classList.remove("title-move-up");
  editorSection.classList.add("hidden");
  mainButtons.style.display = "flex";
  backArrow.classList.add("hidden");
});

continueBtn.addEventListener("click", () => {
  alert("You clicked CONTINUE! (Add next functionality here)");
});
