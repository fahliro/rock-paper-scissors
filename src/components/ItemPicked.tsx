/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, lazy } from "react";
import LizardImage from "../assets/icon-lizard.svg";
import PaperImage from "../assets/icon-paper.svg";
import RockImage from "../assets/icon-rock.svg";
import ScissorsImage from "../assets/icon-scissors.svg";
import SpockImage from "../assets/icon-spock.svg";
import { ItemType } from "../enums";
import { IItemPicked, IProps } from "../interfaces";
import Loading from "./Loading";
import Ping from "./Ping";
const Icon = lazy(() => import("./Icon"));

const ItemPicked = ({ props, isTheHouse }: IProps & IItemPicked) => {
  const {
    ROCK,
    PAPER,
    SCISSORS,
    SPOCK,
    LIZARD,
    theHousePicked,
    showResult,
    yourPicked,
    isWin,
    isLose,
  } = props;
  const item: ItemType | undefined = isTheHouse ? theHousePicked : yourPicked;

  const handleImage = ({ type }: { type: ItemType | undefined }): string => {
    switch (type) {
      case ROCK:
        return RockImage;
      case PAPER:
        return PaperImage;
      case SCISSORS:
        return ScissorsImage;
      case SPOCK:
        return SpockImage;
      case LIZARD:
        return LizardImage;
      default:
        return "";
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="order-2 md:order-1 grid justify-center">{`${
        isTheHouse ? "The House Picked" : "You Picked"
      }`}</div>
      <div className="order-1 md:order-2 scale-[1.5] md:scale-[2] mb-10 md:mt-20 md:mb-0 grid justify-center">
        {showResult && ((!isTheHouse && isWin) || (isTheHouse && isLose)) && (
          <>
            <Ping
              bg="bg-slate-50"
              w="w-[220px]"
              h="h-[220px]"
              mdw="md:w-[270px]"
              mdh="md:h-[270px]"
            />
            <Ping
              bg="bg-slate-100"
              w="w-[170px]"
              h="h-[170px]"
              mdw="md:w-[200px]"
              mdh="md:h-[200px]"
            />
            <Ping
              bg="bg-slate-200"
              w="w-[130px]"
              h="h-[130px]"
              mdw="md:w-[150px]"
              mdh="md:h-[150px]"
            />
          </>
        )}
        <div className="z-10">
          {isTheHouse && !theHousePicked ? (
            <div className={`h-100 w-100 grid justify-center items-center`}>
              <div
                className={`rounded-full h-75 w-75 bg-slate-900 opacity-30`}
              ></div>
            </div>
          ) : (
            <Icon
              value={handleImage({ type: item })}
              label={item}
              props={props}
            />
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default ItemPicked;
