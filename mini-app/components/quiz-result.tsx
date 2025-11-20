"use client";

import { Button } from "./ui/button";
import AnimalImage from "./animal-image";
import { Share } from "./share";

export default function QuizResult({
  animal,
  onRetake,
}: {
  animal: string;
  onRetake: () => void;
}) {
  const shareText = `I just took the Animal Quiz and I'm most like a ${animal}!`;
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">You are a {animal}!</h2>
      <AnimalImage animal={animal} />
      <div className="flex gap-4">
        <Share text={shareText} />
        <Button variant="outline" onClick={onRetake}>
          Retake Quiz
        </Button>
      </div>
    </div>
  );
}
