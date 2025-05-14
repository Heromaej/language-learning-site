const writeBtn = document.getElementById("writeBtn");
const uploadBtn = document.getElementById("upload");
const mainButtons = document.getElementById("mainButtons");
const mainTitle = document.getElementById("mainTitle");
const editorSection = document.getElementById("editorSection");
const uploadSection = document.getElementById("uploadSection");
const wordEditor = document.getElementById("wordEditor");
const backArrow = document.getElementById("backArrow");
const continueBtn = document.getElementById("continueBtn");
const fileInput = document.getElementById("fileInput");
const fileContentEditor = document.getElementById("fileContentEditor");

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

// Continue Button action
continueBtn.addEventListener("click", () => {
  // Hide the current sections (WRITE or UPLOAD page)
  editorSection.classList.add("hidden");
  uploadSection.classList.add("hidden");
  
  // Show the 4 game buttons section
  const gameSection = document.createElement("div");
  gameSection.classList.add("game-buttons");

  const gameButtons = [
    { id: "game1", src: "game1.png" },
    { id: "game2", src: "game2.png" },
    { id: "game3", src: "game3.png" },
    { id: "game4", src: "game4.png" },
  ];

  gameButtons.forEach((button) => {
    const gameButton = document.createElement("button");
    gameButton.classList.add("game-button");
    gameButton.innerHTML = `<img src="${button.src}" alt="${button.id}">`;
    gameSection.appendChild(gameButton);
  });

  document.body.appendChild(gameSection);
});
