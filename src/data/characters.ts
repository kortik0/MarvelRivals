import { Character, CharacterRole } from '../types';

const roles: CharacterRole[] = [
  'strategist', 'duelist', 'duelist', 'defender', 'strategist',
  'defender', 'defender', 'duelist', 'duelist', 'defender',
  'duelist', 'duelist', 'strategist', 'strategist', 'strategist',
  'duelist', 'defender', 'strategist', 'duelist', 'duelist',
  'defender', 'duelist', 'strategist', 'duelist', 'duelist',
  'duelist', 'duelist', 'duelist', 'duelist', 'defender',
  'defender', 'duelist', 'duelist'
];

const names = [
  'Doctor Strange', 'Iron Man', 'Spider-Man', 'Thor', 'Black Panther',
  'Captain America', 'Hulk', 'Black Widow', 'Hawkeye', 'Vision',
  'Scarlet Witch', 'Wolverine', 'Storm', 'Jean Grey', 'Professor X',
  'Deadpool', 'Thing', 'Doctor Doom', 'Star-Lord', 'Gamora',
  'Groot', 'Rocket', 'Magneto', 'Loki', 'Thanos',
  'Winter Soldier', 'Ant-Man', 'Wasp', 'Captain Marvel', 'She-Hulk',
  'Luke Cage', 'Moon Knight', 'Blade'
];

export const characters: Character[] = [
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d21.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d1.png?v=20241123",
  "https://r.res.easebar.com/pic/20241205/7e34f06f-150f-4ad3-8c86-2c7c73e95493.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d24.png?v=20241123",
  "https://r.res.easebar.com/pic/20241205/0f7b7427-3ff1-42d4-a965-3f35d4f49b51.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d2.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d3.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d27.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d5.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d19.png?v=20241123",
  "https://r.res.easebar.com/pic/20241201/18ea989f-ba46-432d-93c3-87463215de53.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d6.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d23.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d7.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d18.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d12.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d11.png?v=20241123",
  "https://r.res.easebar.com/pic/20241201/f3316fba-4c65-4ae7-9b32-30c02b8c2727.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d26.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d20.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d10.png?v=20241123",
  "https://r.res.easebar.com/pic/20241127/32976573-8ea6-401a-86bd-7931248cd94e.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d8.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d15.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d13.png?v=20241123",
  "https://r.res.easebar.com/pic/20241201/aae04d93-a3ac-49d8-a8c3-bb9ab47b2bd9.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d16.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d17.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d4.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d22.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d14.png?v=20241123",
  "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/d25.png?v=20241123",
  "https://r.res.easebar.com/pic/20241205/04d0322f-e929-4b81-81e9-4817a3f221e1.png?v=20241123"
].map((url, index) => ({
  id: index + 1,
  name: names[index],
  imageUrl: url,
  role: roles[index]
}));