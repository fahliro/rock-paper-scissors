import { Suspense } from "react";
import Logo from "../assets/logo-bonus.svg";
import { IProps } from "../interfaces";
import Loading from "./Loading";

const Score = ({ props: { score } }: IProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="grid grid-cols-2 border-2 border-solid border-neutral-header-outline p-3 md:p-5 rounded-lg">
        <div className="grid items-center">
          <img src={Logo} alt="Logo" className="w-[80px] md:w-[90px]" />
        </div>
        <div className="grid justify-end">
          <div className="bg-slate-200 rounded-lg text-center grid justify-center content-center py-3 px-8">
            <div className="text-neutral-score-text">Score</div>
            <div className="text-neutral-dark-text text-5xl font-bold">
              {score}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Score;
