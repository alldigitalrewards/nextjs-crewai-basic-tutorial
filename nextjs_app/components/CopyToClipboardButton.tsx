import React from 'react';

interface CopyToClipboardButtonProps {
  textToCopy: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({ textToCopy }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      // Display a success message or toast notification
    } catch (err) {
      // Display an error message or toast notification
    }
  };

  return (
    <button onClick={handleCopy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Copy to Clipboard
    </button>
  );
};

export default CopyToClipboardButton;
