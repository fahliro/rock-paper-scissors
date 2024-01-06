import { Suspense } from "react";
import { IProps } from "../interfaces";
import Loading from "./Loading";

const RulesButton = ({ props: { setShowRules } }: IProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <div
        onClick={() => setShowRules(true)}
        className="border-2 border-solid border-white px-10 py-2 rounded-lg cursor-pointer"
      >
        Rules
      </div>
    </Suspense>
  );
};

export default RulesButton;
