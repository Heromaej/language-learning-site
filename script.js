const mainTitle = document.getElementById('mainTitle');
const initialButtons = document.getElementById('initialButtons');
const editorSection = document.getElementById('editorSection');

function showEditor() {
  mainTitle.style.fontSize = '60px';
  mainTitle.textContent = 'WRITE';
  initialButtons.style.display = 'none';
  editorSection.style.display = 'block';
}

function goBack() {
  mainTitle.style.fontSize = '48px';
  mainTitle.textContent = 'LEARN LANGUAGES';
  initialButtons.style.display = 'block';
  editorSection.style.display = 'none';
}
