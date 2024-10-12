import axios from 'axios';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'analyzeCode') {
    const files = extractFilesFromGitHub();
    analyzeCode(files, request.model)
      .then(analysis => sendResponse({ analysis }))
      .catch(error => sendResponse({ error: error.message }));
    return true; // Indicates that the response is asynchronous
  }
});

function extractFilesFromGitHub() {
  // Implementation to extract files from GitHub page
  // This is a placeholder and needs to be implemented based on GitHub's DOM structure
  const files: { [key: string]: string } = {};
  const fileElements = document.querySelectorAll('.js-navigation-item');
  fileElements.forEach((el) => {
    const nameEl = el.querySelector('.js-navigation-open') as HTMLElement;
    if (nameEl) {
      const fileName = nameEl.innerText;
      const fileContent = ''; // You would need to fetch the content of each file
      files[fileName] = fileContent;
    }
  });
  return files;
}

async function analyzeCode(files: { [key: string]: string }, model: string) {
  try {
    const response = await axios.post('https://your-api-endpoint.com/analyze', {
      files,
      model
    });
    return response.data.analysis;
  } catch (error) {
    console.error('Error analyzing code:', error);
    throw error;
  }
}