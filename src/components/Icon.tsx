import { Suspense } from "react";
import { IIcon, IProps } from "../interfaces";
import Loading from "./Loading";

const Icon = ({
  value,
  label,
  props: {
    setIsMainContent,
    setYourPicked,
    ROCK,
    PAPER,
    SCISSORS,
    LIZARD,
    SPOCK,
  },
}: IIcon & IProps) => {
  const handleClick = (): void => {
    setIsMainContent(true);
    setYourPicked(label);
  };

  const handleGradientClass = (): string => {
    switch (label) {
      case ROCK:
        return `bg-rock-gradient`;
      case PAPER:
        return `bg-paper-gradient`;
      case SCISSORS:
        return `bg-scissors-gradient`;
      case LIZARD:
        return `bg-lizard-gradient`;
      case SPOCK:
        return `bg-spock-gradient`;
      default:
        return "";
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div
        onClick={handleClick}
        className={`rounded-full h-100 w-100 ${handleGradientClass()} grid justify-center items-center shadow-inner-bottom cursor-pointer`}
      >
        <div
          className={`rounded-full h-75 w-75 bg-slate-200 grid justify-center items-center shadow-inner-top`}
        >
          <img src={value} alt={label} className="h-35" />
        </div>
      </div>
    </Suspense>
  );
};

export default Icon;
