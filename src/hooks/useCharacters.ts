import { useState, useEffect } from 'react';
import { ref, onValue, push, set } from 'firebase/database';
import { database } from '../config/firebase';
import { Character, CharacterRole } from '../types';

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const charactersRef = ref(database, 'characters');
    
    const unsubscribe = onValue(charactersRef, (snapshot) => {
      if (snapshot.exists()) {
        const charactersData = snapshot.val();
        const charactersArray = Object.entries(charactersData).map(([key, value]) => ({
          ...(value as Omit<Character, 'id'>),
          id: key,
        }));
        setCharacters(charactersArray);
      } else {
        setCharacters([]);
      }
      setLoading(false);
    }, (error) => {
      setError(error.message);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addCharacter = async (name: string, imageUrl: string, role: CharacterRole) => {
    try {
      const charactersRef = ref(database, 'characters');
      const newCharacterRef = push(charactersRef);
      await set(newCharacterRef, {
        name,
        imageUrl,
        role
      });
      return true;
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to add character');
      return false;
    }
  };

  return { characters, loading, error, addCharacter };
}