import { FunctionComponent } from "react";

interface SkeletonProps {
  type: "card";
  cardCount?: number;
}

const Skeleton: FunctionComponent<SkeletonProps> = ({
  type,
  cardCount = 6,
}) => {
  return (
    <>
      {type === "card" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3.125rem]">
          {[...Array(cardCount)].map((_, i) => (
            <div key={i}>
              <div className="h-[260px] bg-[#FDFDFD]  rounded-3xl px-[2rem] py-[1.37rem] mb-4">
                <div className="aspect-square w-full bg-[#F5F5F5] rounded-[50%] skeleton"></div>
              </div>
              <h1 className="bg-[#F9F9F9] h-7.5 rounded-lg mb-4 skeleton"></h1>
              <p className="bg-[#F9F9F9] h-2.5 rounded-lg mb-2 skeleton"></p>
              <p className="max-w-[calc(100%-1rem)] bg-[#F9F9F9] h-2.5 rounded-lg mb-2 skeleton"></p>
              <p className="max-w-[100px] bg-[#F9F9F9] h-2.5 rounded-lg mb-5.5 skeleton"></p>
              <div className="flex items-center justify-between gap-4">
                <div className="max-w-[85px] w-full h-7.5 rounded-lg bg-[#F9F9F9] skeleton"></div>
                <div className="max-w-[125px] w-full h-10.5 rounded-lg bg-[#F9F9F9] skeleton"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Skeleton;
