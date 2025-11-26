import type { TextQuestionAnswersProps } from "../types/TextQuestionAnswersProps";

export function TextQuestionAnswers({ answers }: TextQuestionAnswersProps) {
  if (!answers || answers.length === 0) {
    return (
      <div className="m-4 p-6 w-full md:w-3xl rounded-2xl border-2 shadow-lg">
        <p>There are no answers</p>
      </div>
    );
  }

  return (
    <>
      {answers.map((a, index) => (
        <div key={index} className="m-4 p-6 rounded-2xl border-2 shadow-lg">
          <p>{a}</p>
        </div>
      ))}
    </>
  );
}
