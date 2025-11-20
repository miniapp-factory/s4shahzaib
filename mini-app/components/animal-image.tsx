"use client";

export default function AnimalImage({ animal }: { animal: string }) {
  return (
    <img
      src={`/${animal}.png`}
      alt={animal}
      width={512}
      height={512}
      className="size-[512px]"
    />
  );
}
