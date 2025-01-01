import React, { useState, useCallback } from 'react';
import { Character, SelectionHistoryItem, CharacterRole } from './types';
import { CharacterGrid } from './components/CharacterGrid';
import { RandomButton } from './components/RandomButton';
import { SelectionHistory } from './components/SelectionHistory';
import { RoleFilter } from './components/RoleFilter';
import { AdminPanel } from './components/AdminPanel';
import { useCharacters } from './hooks/useCharacters';

export default function App() {
  const { characters, loading, addCharacter } = useCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectionHistory, setSelectionHistory] = useState<SelectionHistoryItem[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedRole, setSelectedRole] = useState<CharacterRole | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);

  const filteredCharacters = selectedRole
    ? characters.filter(char => char.role === selectedRole)
    : characters;

  const handleSelect = useCallback((character: Character) => {
    setSelectedCharacter(character);
    setSelectionHistory((prev) => [
      { id: character.id, timestamp: Date.now() },
      ...prev.slice(0, 9),
    ]);
  }, []);

  const handleRandomSelect = useCallback(() => {
    if (isAnimating || filteredCharacters.length === 0) return;

    setIsAnimating(true);
    let iterations = 0;
    const totalIterations = 5;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * filteredCharacters.length);
      setSelectedCharacter(filteredCharacters[randomIndex]);
      iterations++;

      if (iterations >= totalIterations) {
        clearInterval(interval);
        setIsAnimating(false);
        handleSelect(filteredCharacters[randomIndex]);
      }
    }, 100);
  }, [isAnimating, handleSelect, filteredCharacters]);

  const handleClearHistory = useCallback(() => {
    setSelectionHistory([]);
  }, []);

  const handleAddCharacter = useCallback(async (name: string, imageUrl: string, role: CharacterRole) => {
    const success = await addCharacter(name, imageUrl, role);
    if (!success) {
      console.error('Failed to add character');
    }
  }, [addCharacter]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Loading characters...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto px-4 py-8" style={{ maxWidth: '110rem' }}>
        <header className="text-center mb-8">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowAdmin(!showAdmin)}
              className="text-red-500 hover:text-red-400"
            >
              {showAdmin ? 'Hide Admin' : 'Admin Panel'}
            </button>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-4">
            Marvel Rivals Character Select
          </h1>
          <RoleFilter selectedRole={selectedRole} onSelectRole={setSelectedRole} />
          <RandomButton onClick={handleRandomSelect} disabled={isAnimating} />
        </header>

        {showAdmin && (
          <div className="mb-8">
            <AdminPanel onAddCharacter={handleAddCharacter} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <CharacterGrid
              characters={filteredCharacters}
              selectedCharacter={selectedCharacter}
              onSelect={handleSelect}
            />
          </div>
          <div className="lg:col-span-1">
            <SelectionHistory
              history={selectionHistory}
              characters={characters}
              onClear={handleClearHistory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}