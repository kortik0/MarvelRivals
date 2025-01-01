import React from 'react';
import { SelectionHistoryItem, Character } from '../types';

interface SelectionHistoryProps {
  history: SelectionHistoryItem[];
  characters: Character[];
  onClear: () => void;
}

export function SelectionHistory({ history, characters, onClear }: SelectionHistoryProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold">Selection History</h2>
        <button
          onClick={onClear}
          className="text-red-500 hover:text-red-400 text-sm"
        >
          Clear
        </button>
      </div>
      <div className="space-y-2">
        {history.map((item) => {
          const character = characters.find(c => c.id === item.id);
          return (
            <div
              key={`${item.id}-${item.timestamp}`}
              className="text-gray-300 text-sm"
            >
              {new Date(item.timestamp).toLocaleTimeString()}: {character?.name || 'Unknown Character'}
            </div>
          );
        })}
      </div>
    </div>
  );
}