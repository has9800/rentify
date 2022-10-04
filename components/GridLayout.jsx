import { SecondaryBtn } from "./Btn";

const GridLayout = ({ children }) => {
  return (
    <div className="m-3 md:ml-14 lg:ml-28 p-3">
      <div className="flex flex-row items-center justify-center md:justify-start flex-wrap">
        {children}
      </div>
      <div className="flex flex-row justify-center my-5 md:justify-start md:px-5">
        <SecondaryBtn title="Load more..." />
      </div>
    </div>
  );
};

export default GridLayout;
