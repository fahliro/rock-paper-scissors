/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, lazy, useEffect } from "react";
import { ItemType, Result as Res } from "../enums";
import { IProps, ITimer } from "../interfaces";
import ItemPicked from "./ItemPicked";
import Loading from "./Loading";
const Result = lazy(() => import("./Result"));

const MainContent = ({ props }: IProps) => {
  const {
    setShowResult,
    timer,
    setTimer,
    setTheHousePicked,
    showResult,
    ROCK,
    PAPER,
    SCISSORS,
    SPOCK,
    LIZARD,
    yourPicked,
    theHousePicked,
    setResult,
    isWin,
    isLose,
    score,
    setScore,
  } = props;

  const handleClearTimer = (): void => {
    clearTimeout(timer.result);
    clearTimeout(timer.theHousePicked);
  };

  const handleTheHousePicked = (): ItemType => {
    const items: ItemType[] = Object.values(ItemType);
    const random: number = Math.floor(Math.random() * items.length);

    return items[random];
  };

  const handleSetTimer = (): void => {
    setTimer((prev: ITimer) => ({
      ...prev,
      result: setTimeout(() => setTheHousePicked(handleTheHousePicked()), 2000),
    }));
    setTimer((prev: ITimer) => ({
      ...prev,
      theHousePicked: setTimeout(() => setShowResult(true), 3000),
    }));
  };

  const handleReset = (): void => {
    setTheHousePicked(undefined);
    setShowResult(false);
  };

  const handleSetResult = (): void => {
    switch (yourPicked) {
      case ROCK:
        if (theHousePicked === LIZARD || theHousePicked === SCISSORS) {
          setResult(Res.WIN);
        } else if (theHousePicked === PAPER || theHousePicked === SPOCK) {
          setResult(Res.LOSE);
        } else if (theHousePicked === ROCK) {
          setResult(Res.DRAW);
        }
        break;
      case SCISSORS:
        if (theHousePicked === PAPER || theHousePicked === LIZARD) {
          setResult(Res.WIN);
        } else if (theHousePicked === SPOCK || theHousePicked === ROCK) {
          setResult(Res.LOSE);
        } else if (theHousePicked === SCISSORS) {
          setResult(Res.DRAW);
        }
        break;
      case PAPER:
        if (theHousePicked === ROCK || theHousePicked === SPOCK) {
          setResult(Res.WIN);
        } else if (theHousePicked === SCISSORS || theHousePicked === LIZARD) {
          setResult(Res.LOSE);
        } else if (theHousePicked === PAPER) {
          setResult(Res.DRAW);
        }
        break;
      case LIZARD:
        if (theHousePicked === SPOCK || theHousePicked === PAPER) {
          setResult(Res.WIN);
        } else if (theHousePicked === ROCK || theHousePicked === SCISSORS) {
          setResult(Res.LOSE);
        } else if (theHousePicked === LIZARD) {
          setResult(Res.DRAW);
        }
        break;
      case SPOCK:
        if (theHousePicked === SCISSORS || theHousePicked === ROCK) {
          setResult(Res.WIN);
        } else if (theHousePicked === LIZARD || theHousePicked === PAPER) {
          setResult(Res.LOSE);
        } else if (theHousePicked === SPOCK) {
          setResult(Res.DRAW);
        }
        break;
      default:
        setResult(undefined);
        break;
    }
  };

  useEffect(() => {
    handleClearTimer();
    handleSetTimer();
    return () => handleReset();
  }, []);

  useEffect(() => handleSetResult(), [yourPicked, theHousePicked]);

  useEffect(() => {
    if (showResult) {
      if (isWin && score >= 0) {
        setScore((prev: number) => prev + 1);
      } else if (isLose && score > 0) {
        setScore((prev: number) => prev - 1);
      }
    }
  }, [showResult]);

  return (
    <Suspense fallback={<Loading />}>
      <div
        className={`grid grid-cols-2 ${
          showResult && "md:grid-cols-3"
        } justify-center`}
      >
        <div
          className={`order-1 ${
            isLose && "z-10"
          } grid justify-center mr-5 md:mr-14`}
        >
          <ItemPicked props={props} />
        </div>
        {showResult && (
          <div className="order-3 z-20 md:order-2 col-span-2 md:col-auto grid content-end justify-center items-center pt-10 md:pt-0 md:mx-5">
            <Result props={props} />
          </div>
        )}
        <div
          className={`order-2 ${
            isWin && "z-10"
          } md:order-3 grid justify-center ml-5 md:ml-14`}
        >
          <ItemPicked props={props} isTheHouse={true} />
        </div>
      </div>
    </Suspense>
  );
};

export default MainContent;
