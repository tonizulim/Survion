import type { RatingAnswersProps } from "../../types";

export function RatingAnswers({ question }: RatingAnswersProps) {
  const width =
    ((Number(question.rating) - Number(question.minRating)) /
      (Number(question.maxRating) - Number(question.minRating))) *
    100;

  return (
    <>
      {question.responses == 0 && (
        <div className="m-4 p-6 w-full md:w-3xl rounded-2xl border-2 shadow-lg">
          <p>There are no answers</p>
        </div>
      )}
      <div className="mx-4 flex flex-row justify-between">
        <p>{question.minRating}</p>
        <p>average rating:{question.rating}</p>
        <p>{question.maxRating}</p>
      </div>
      <div className="m-4 rounded-2xl border-2 shadow-lg flex flex-row justify-between bg-muted overflow-hidden">
        <div
          className="h-full p-4 bg-blue-500 transition-all duration-300 text-amber-50"
          style={{
            width: `${width}%`,
          }}
        >
          {question.responses != 0 && <p>{question.rating}</p>}
        </div>
      </div>
    </>
  );
}
