import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { CharacterRole } from '../types';

interface AdminPanelProps {
  onAddCharacter: (name: string, imageUrl: string, role: CharacterRole) => void;
}

const roles: { value: CharacterRole; label: string }[] = [
  { value: 'defender', label: 'Defender' },
  { value: 'duelist', label: 'Duelist' },
  { value: 'strategist', label: 'Strategist' },
];

export function AdminPanel({ onAddCharacter }: AdminPanelProps) {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [role, setRole] = useState<CharacterRole>('duelist');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(email, password);
    if (!result.success) {
      setError(result.error || 'Login failed');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !imageUrl) {
      setError('All fields are required');
      return;
    }
    onAddCharacter(name, imageUrl, role);
    setName('');
    setImageUrl('');
    setRole('duelist');
    setError('');
  };

  if (!user) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Lock className="w-6 h-6 text-red-500 mr-2" />
          <h2 className="text-xl font-bold text-white">Admin Login</h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Add New Character</h2>
        <button
          onClick={logout}
          className="text-red-500 hover:text-red-400 text-sm"
        >
          Logout
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Character Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div>
          <input
            type="url"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as CharacterRole)}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          >
            {roles.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          Add Character
        </button>
      </form>
    </div>
  );
}