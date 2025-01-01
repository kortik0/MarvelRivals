import React from 'react';
import { CharacterRole } from '../types';
import { Shield, Swords, Brain } from 'lucide-react';

interface RoleFilterProps {
  selectedRole: CharacterRole | null;
  onSelectRole: (role: CharacterRole | null) => void;
}

const roles: { role: CharacterRole; icon: React.ReactNode; label: string }[] = [
  { role: 'defender', icon: <Shield className="w-5 h-5" />, label: 'Defenders' },
  { role: 'duelist', icon: <Swords className="w-5 h-5" />, label: 'Duelists' },
  { role: 'strategist', icon: <Brain className="w-5 h-5" />, label: 'Strategists' },
];

export function RoleFilter({ selectedRole, onSelectRole }: RoleFilterProps) {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      <button
        onClick={() => onSelectRole(null)}
        className={`px-4 py-2 rounded-lg transition-all duration-200 ${
          selectedRole === null
            ? 'bg-red-600 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
        }`}
      >
        All
      </button>
      {roles.map(({ role, icon, label }) => (
        <button
          key={role}
          onClick={() => onSelectRole(role)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            selectedRole === role
              ? 'bg-red-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          {icon}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}