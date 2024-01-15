import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";

type RatingStarsProps = { value: any; onChange: (...event: any[]) => void };

export default function RatingStars({ value, onChange }: RatingStarsProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => ({
        checked: index + 1 <= value,
      })),
    [value]
  );

  const handleStarClick = (index: any) => {
    onChange(index + 1);
  };

  return (
    <div className="flex gap-4 cursor-pointer relative">
      {stars.map((s, index: number) => {
        return (
          <Star
            size={48}
            className={`stroke-none ${
              s.checked ? "fill-mainYellow" : "fill-mainGray-700"
            } `}
            onClick={() => handleStarClick(index)}
          />
        );
      })}
    </div>
  );
}
