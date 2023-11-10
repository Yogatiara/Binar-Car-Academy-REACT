import { ScaleLoader } from "react-spinners";

const Loading = ({ loading }) => {
  return (
    <>
      <div>
        <div className=" z-1  position-fixed  bottom-50 end-50">
          <ScaleLoader
            color={"#000000"}
            loading={loading}
            size={20}
          />
        </div>
        <span className="overlay" />
      </div>
    </>
  );
};

export default Loading;
