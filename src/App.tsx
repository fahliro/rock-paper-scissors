/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, lazy, useState } from "react";
import Loading from "./components/Loading";
import { ItemType, Result } from "./enums";
import { IStates, ITimer } from "./interfaces";
const Rules = lazy(() => import("./components/Rules"));
const RulesButton = lazy(() => import("./components/RulesButton"));
const Content = lazy(() => import("./components/Content"));
const Score = lazy(() => import("./components/Score"));

const App = () => {
  const [isMainContent, setIsMainContent] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showRules, setShowRules] = useState<boolean>(false);
  const [yourPicked, setYourPicked] = useState<ItemType>();
  const [theHousePicked, setTheHousePicked] = useState<ItemType>();
  const [timer, setTimer] = useState<ITimer>({
    result: 0,
    theHousePicked: 0,
  });
  const [result, setResult] = useState<Result>();
  const [score, setScore] = useState<number>(0);

  //need refactor
  const defaultWidth: string = "1366px";

  const isDesktop: boolean = window.matchMedia(
    `(min-width: ${defaultWidth})`
  ).matches;

  const ROCK: ItemType = ItemType.ROCK;
  const PAPER: ItemType = ItemType.PAPER;
  const SCISSORS: ItemType = ItemType.SCISSORS;
  const LIZARD: ItemType = ItemType.LIZARD;
  const SPOCK: ItemType = ItemType.SPOCK;

  const isWin: boolean = result === Result.WIN;
  const isLose: boolean = result === Result.LOSE;
  const isDraw: boolean = result === Result.DRAW;

  const props: IStates = {
    isMainContent,
    setIsMainContent,
    showResult,
    setShowResult,
    showRules,
    setShowRules,
    yourPicked,
    setYourPicked,
    theHousePicked,
    setTheHousePicked,
    timer,
    setTimer,
    result,
    setResult,
    ROCK,
    PAPER,
    SCISSORS,
    LIZARD,
    SPOCK,
    isWin,
    isLose,
    isDraw,
    score,
    setScore,
  };

  return (
    <Suspense fallback={<Loading />}>
      <div
        className="h-screen bg-radial-gradient grid text-white uppercase overflow-hidden
        
        md:justify-center md:items-center"
      >
        <div
          className={`relative p-4 
          
          ${isDesktop && `w-1366 h-599`}
          
          md:p-0 tracking-widest`}
        >
          <div
            className="grid grid-cols-12
          
          md:grid-cols-11 md:mt-5"
          >
            <div
              className="col-span-12
            
            md:col-start-4 md:col-span-5"
            >
              <Score props={props} />
            </div>
          </div>
          <div className="grid justify-center mt-24">
            <Content props={props} />
          </div>
          <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2
          
          md:right-5 md:left-auto md:transform-none md:translate-x-0"
          >
            <RulesButton props={props} />
          </div>
        </div>
      </div>
      {showRules && (
        <div
          className={`z-30 absolute top-0 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:bg-black/[.5] w-full h-full`}
        >
          <Rules props={props} />
        </div>
      )}
    </Suspense>
  );
};

export default App;
