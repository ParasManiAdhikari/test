import { useState } from 'react';

function CopyToClipboard(props) {
  const [copied, setCopied] = useState(false);
  const textToCopy = props.text;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="p-4 bg-pgreen-700 rounded-md">
      <div className="flex justify-between items-center">
        <p className="text-lg text-slate-50">{textToCopy}</p>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-pgreen-800 text-white rounded-md ml-4 hover:bg-green-950 focus:outline-none focus:ring focus:ring-green-500"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default CopyToClipboard;
