// app/games/page.tsx
import Link from "next/link";

export default function GamesPage() {
  const games = ["Chess", "Sudoku", "Tetris"];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Games</h1>
      <ul className="list-disc pl-6">
        {games.map((game) => (
          <li key={game}>
            <Link href={`/dashboard/game?name=${game}`}>{game}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
