import React, { useState, useEffect } from 'react';
import { FileText, Settings } from 'lucide-react';
import CodeAnalysis from './components/CodeAnalysis';
import AIModelSelector from './components/AIModelSelector';

function App() {
  const [isGitHubPage, setIsGitHubPage] = useState(false);
  const [codeAnalysis, setCodeAnalysis] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-3.5-turbo');

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      setIsGitHubPage(url?.includes('github.com') || false);
    });
  }, []);

  const handleAnalyzeCode = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id!, { action: 'analyzeCode', model: selectedModel }, (response) => {
        setCodeAnalysis(response.analysis);
      });
    });
  };

  return (
    <div className="w-96 h-[600px] bg-white p-4 flex flex-col">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold flex items-center">
          <FileText className="mr-2" /> Code Reader
        </h1>
        <Settings className="cursor-pointer" onClick={() => {/* Open settings */}} />
      </header>
      
      {isGitHubPage ? (
        <>
          <AIModelSelector selectedModel={selectedModel} onSelectModel={setSelectedModel} />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mb-4"
            onClick={handleAnalyzeCode}
          >
            Analyze Code
          </button>
          <CodeAnalysis analysis={codeAnalysis} />
        </>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-500">Please navigate to a GitHub repository to use Code Reader.</p>
        </div>
      )}
    </div>
  );
}

export default App;