import React from 'react';
import { Character } from '../types';

interface CharacterGridProps {
  characters: Character[];
  selectedCharacter: Character | null;
  onSelect: (character: Character) => void;
}

export function CharacterGrid({ characters, selectedCharacter, onSelect }: CharacterGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 [column-gap:5.49rem] [row-gap:0.39rem] p-4">
      {characters.map((character) => (
        <button
          key={character.id}
          onClick={() => onSelect(character)}
          className={`relative group transition-transform duration-300 hover:scale-105 focus:outline-none ${
            selectedCharacter?.id === character.id
              ? 'ring-4 ring-red-500 ring-opacity-50'
              : ''
          }`}
          aria-label={`Select ${character.name}`}
        >
          <div className="relative w-[158px] h-[278px] mx-auto overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-black">
            <img
              src={character.imageUrl}
              alt={character.name}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {selectedCharacter?.id === character.id && (
              <div className="absolute inset-0 bg-red-500/20 animate-pulse" />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
              <span className="text-sm font-semibold text-white truncate">
                {character.name}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}