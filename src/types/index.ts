export type CharacterRole = 'defender' | 'duelist' | 'strategist';

export interface Character {
  id: number;
  name: string;
  imageUrl: string;
  role: CharacterRole;
}

export interface SelectionHistoryItem {
  id: number;
  timestamp: number;
}

export interface AdminCredentials {
  username: string;
  password: string;
}