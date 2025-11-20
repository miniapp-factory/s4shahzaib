"use client";

import { useState } from "react";
import QuizResult from "./quiz-result";

export default function Quiz() {
  const questions = [
    {
      question: "What is your favorite type of food?",
      options: [
        { text: "Fish", animal: "cat" },
        { text: "Meat", animal: "dog" },
        { text: "Berries", animal: "fox" },
        { text: "Seeds", animal: "hamster" },
        { text: "Grass", animal: "horse" },
      ],
    },
    {
      question: "Which activity do you enjoy most?",
      options: [
        { text: "Sleeping", animal: "cat" },
        { text: "Playing fetch", animal: "dog" },
        { text: "Hunting", animal: "fox" },
        { text: "Running in a cage", animal: "hamster" },
        { text: "Racing", animal: "horse" },
      ],
    },
    {
      question: "What is your preferred environment?",
      options: [
        { text: "Indoor", animal: "cat" },
        { text: "Outdoor", animal: "dog" },
        { text: "Forest", animal: "fox" },
        { text: "Cage", animal: "hamster" },
        { text: "Field", animal: "horse" },
      ],
    },
    {
      question: "How do you like to communicate?",
      options: [
        { text: "Purrs", animal: "cat" },
        { text: "Barks", animal: "dog" },
        { text: "Howls", animal: "fox" },
        { text: "Squeaks", animal: "hamster" },
        { text: "Neighs", animal: "horse" },
      ],
    },
    {
      question: "What is your favorite pastime?",
      options: [
        { text: "Chasing mice", animal: "cat" },
        { text: "Fetching sticks", animal: "dog" },
        { text: "Sneaking around", animal: "fox" },
        { text: "Chewing nuts", animal: "hamster" },
        { text: "Galloping", animal: "horse" },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (animal: string) => {
    const newAnswers = [...answers, animal];
    setAnswers(newAnswers);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      const counts: Record<string, number> = {};
      newAnswers.forEach((a) => (counts[a] = (counts[a] || 0) + 1));
      const max = Math.max(...Object.values(counts));
      const winner = Object.keys(counts).find((k) => counts[k] === max) || "cat";
      setResult(winner);
    }
  };

  if (result) {
    return <QuizResult animal={result} onRetake={() => { setAnswers([]); setResult(null); setCurrent(0); }} />;
  }

  const { question, options } = questions[current];
  const shuffled = [...options].sort(() => Math.random() - 0.5);

  return (
    <div className="w-full max-w-md text-center">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="flex flex-col gap-2">
        {shuffled.map((opt) => (
          <button
            key={opt.text}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
            onClick={() => handleAnswer(opt.animal)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
