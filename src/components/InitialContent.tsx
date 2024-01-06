import { Suspense } from "react";
import PentagonImage from "../assets/bg-pentagon.svg";
import LizardImage from "../assets/icon-lizard.svg";
import PaperImage from "../assets/icon-paper.svg";
import RockImage from "../assets/icon-rock.svg";
import ScissorsImage from "../assets/icon-scissors.svg";
import SpockImage from "../assets/icon-spock.svg";
import { IProps } from "../interfaces";
import Icon from "./Icon";
import Loading from "./Loading";

const InitialContent = ({ props }: IProps) => {
  const { ROCK, PAPER, SCISSORS, LIZARD, SPOCK } = props;

  //need refactor
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative">
        <img src={PentagonImage} alt="Pentagon" className="h-[220px]" />
        <div className="absolute bottom-[-50px] right-0 hover:md:scale-[1.1] md:transition-all">
          <Icon value={RockImage} label={ROCK} props={props} />
        </div>
        <div className="absolute top-[40px] right-[-40px] hover:md:scale-[1.1] md:transition-all">
          <Icon value={PaperImage} label={PAPER} props={props} />
        </div>
        <div className="absolute top-[-50px] left-[28.5%] hover:md:scale-[1.1] md:transition-all">
          <Icon value={ScissorsImage} label={SCISSORS} props={props} />
        </div>
        <div className="absolute bottom-[-50px] left-0 hover:md:scale-[1.1] md:transition-all">
          <Icon value={LizardImage} label={LIZARD} props={props} />
        </div>
        <div className="absolute top-[40px] left-[-40px] hover:md:scale-[1.1] md:transition-all">
          <Icon value={SpockImage} label={SPOCK} props={props} />
        </div>
      </div>
    </Suspense>
  );
};

export default InitialContent;
