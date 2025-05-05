const writeBtn = document.getElementById('writeBtn');
const uploadBtn = document.getElementById('uploadBtn');
const mainButtons = document.getElementById('mainButtons');
const mainTitle = document.getElementById('mainTitle');
const editorSection = document.getElementById('editorSection');
const backArrow = document.getElementById('backArrow');
const editorTitle = document.getElementById('editorTitle');
const autoTranslateBtn = document.getElementById('autoTranslateBtn');
const continueBtn = document.getElementById('continueBtn');

writeBtn.addEventListener('click', () => {
  mainButtons.classList.add('hidden');
  mainTitle.textContent = 'WRITE';
  mainTitle.style.fontSize = '3.5em';
  mainTitle.style.marginBottom = '20px';
  editorSection.classList.remove('hidden');
  backArrow.classList.remove('hidden');
});

backArrow.addEventListener('click', () => {
  mainButtons.classList.remove('hidden');
  mainTitle.textContent = 'LEARN LANGUAGES';
  mainTitle.style.fontSize = '3em';
  mainTitle.style.marginBottom = '40px';
  editorSection.classList.add('hidden');
  backArrow.classList.add('hidden');
});

// AUTO-TRANSLATE button functionality
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
        const response = await fetch('https://www.apertium.org/apy/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            langpair: `${sourceLang}|${targetLang}`,
            q: line.trim()
          })
        });

        const data = await response.json();
        const translated = data.responseData.translatedText;
        updatedLines.push(`${line.trim()} - ${translated}`);
      } catch (error) {
        console.error('Translation failed:', error);
        updatedLines.push(`${line.trim()} - [Error]`);
      }
    }
  }

  textArea.value = updatedLines.join('\n');
});
