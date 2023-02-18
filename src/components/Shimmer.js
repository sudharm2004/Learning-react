const Shimmer = () => {
  return (
    <div className="m-3 flex flex-wrap justify-between">
      {Array(20)
        .fill("")
        .map((e, index) => {
          return (
            <div className="m-2 w-64 space-y-1 rounded-md p-3" key={index}>
              <div className="h-40 w-full bg-gray-500"></div>
              <div className="h-3 w-full rounded-2xl bg-gray-500"></div>
              <div className="h-1 w-full rounded-2xl bg-gray-500"></div>
              <div className="h-1 w-full rounded-2xl bg-gray-500"></div>
              <div className="h-1 w-1/2 rounded-2xl bg-gray-500"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
