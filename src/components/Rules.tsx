import { Suspense } from "react";
import CloseIcon from "../assets/icon-close.svg";
import RulesImage from "../assets/image-rules-bonus.svg";
import { IProps } from "../interfaces";
import Loading from "./Loading";

const Rules = ({ props: { setShowRules } }: IProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="grid justify-center items-center h-full">
        <div className="md:w-400 bg-white md:rounded-lg p-10 h-screen md:h-auto">
          <div className="grid md:grid-cols-2">
            <div className="text-2xl font-bold text-neutral-dark-text text-center md:text-left">
              RULES
            </div>
            <div className="md:grid md:relative justify-end items-center absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:bottom-auto md:translate-x-0">
              <img
                src={CloseIcon}
                alt="Close"
                className="cursor-pointer"
                onClick={() => setShowRules(false)}
              />
            </div>
          </div>
          <div className="grid justify-center mt-10 md:mt-10">
            <img src={RulesImage} alt="Rules" />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Rules;
