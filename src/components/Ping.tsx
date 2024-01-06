import { Suspense } from "react";
import { IPing } from "../interfaces";
import Loading from "./Loading";

const Ping = ({ bg, w, h, mdw, mdh }: IPing) => {
  return (
    <Suspense fallback={<Loading />}>
      <div
        className={`${bg} ${w} ${h} ${mdw} ${mdh} absolute opacity-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full`}
      ></div>
    </Suspense>
  );
};

export default Ping;
