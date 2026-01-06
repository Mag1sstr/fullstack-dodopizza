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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(cardCount)].map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      )}
    </>
  );
};

export default Skeleton;
