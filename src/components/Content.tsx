import { Suspense, lazy } from "react";
import { IProps } from "../interfaces";
import Loading from "./Loading";
const InitialContent = lazy(() => import("./InitialContent"));
const MainContent = lazy(() => import("./MainContent"));

const Content = ({ props }: IProps) => {
  const { isMainContent } = props;

  return (
    <Suspense fallback={<Loading />}>
      {isMainContent ? (
        <MainContent props={props} />
      ) : (
        <InitialContent props={props} />
      )}
    </Suspense>
  );
};

export default Content;
