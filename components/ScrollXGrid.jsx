import { SecondaryBtn } from "./Btn";

const ScrollXGrid = ({ children }) => {
  return (
    <div className="mx-3 p-3">
      <div className="flex flex-row items-center justify-start overflow-x-scroll">
        {children}
      </div>
      <div className="flex flex-row justify-center my-5 md:justify-start md:px-5">
        <SecondaryBtn title="Load more..." />
      </div>
    </div>
  );
};

export default ScrollXGrid;
