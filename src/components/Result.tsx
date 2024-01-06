import { Suspense } from "react";
import { IProps } from "../interfaces";
import Loading from "./Loading";

const Result = ({
  props: { setIsMainContent, setShowResult, result: res, isDraw },
}: IProps) => {
  const handleClick = (): void => {
    setIsMainContent(false);
    setShowResult(false);
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="font-bold text-center pb-3 text-4xl">
        {isDraw ? res : `You ${res}`}
      </div>
      <div
        onClick={handleClick}
        className="bg-white text-neutral-dark-text px-8 py-3 rounded-md text-xs text-center cursor-pointer font-bold"
      >
        Play Again
      </div>
    </Suspense>
  );
};

export default Result;
