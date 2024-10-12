import React from 'react';

interface AIModelSelectorProps {
  selectedModel: string;
  onSelectModel: (model: string) => void;
}

const AIModelSelector: React.FC<AIModelSelectorProps> = ({ selectedModel, onSelectModel }) => {
  return (
    <div className="mb-4">
      <label htmlFor="ai-model" className="block text-sm font-medium text-gray-700 mb-1">
        Select AI Model
      </label>
      <select
        id="ai-model"
        value={selectedModel}
        onChange={(e) => onSelectModel(e.target.value)}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
        <option value="gpt-4">GPT-4</option>
        <option value="claude-2">Claude 2</option>
      </select>
    </div>
  );
};

export default AIModelSelector;