import React from 'react';
import ReactMarkdown from 'react-markdown';

interface CodeAnalysisProps {
  analysis: string;
}

const CodeAnalysis: React.FC<CodeAnalysisProps> = ({ analysis }) => {
  return (
    <div className="flex-grow overflow-auto">
      {analysis ? (
        <ReactMarkdown className="prose prose-sm max-w-none">
          {analysis}
        </ReactMarkdown>
      ) : (
        <p className="text-gray-500">Click "Analyze Code" to generate a code analysis.</p>
      )}
    </div>
  );
};

export default CodeAnalysis;