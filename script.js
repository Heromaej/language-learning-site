const mainTitle = document.getElementById('mainTitle');
const initialButtons = document.getElementById('initialButtons');
const editorSection = document.getElementById('editorSection');
const autoTranslateBtn = document.getElementById('autoTranslateBtn');

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

autoTranslateBtn.addEventListener('click', async () => {
  const textArea = document.getElementById('wordEditor');
  const sourceLang = document.getElementById('sourceLang').value;
  const targetLang = document.getElementById('targetLang').value;

  const lines = textArea.value.split('\n');
  const updatedLines = [];

  for (const line of lines) {
    if (line.includes('-') || line.trim() === '') {
      updatedLines.push(line);
    } else {
      try {
        const response = await fetch('https://libretranslate.de/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            q: line.trim(),
            source: sourceLang,
            target: targetLang,
            format: "text"
          })
        });

        const data = await response.json();
        const translated = data.translatedText;
        updatedLines.push(`${line.trim()} - ${translated}`);
      } catch (error) {
        console.error('Translation failed:', error);
        updatedLines.push(`${line.trim()} - [Error]`);
      }
    }
  }

  textArea.value = updatedLines.join('\n');
});
