import { Image } from "react-bootstrap";
import "./FilterMessage.css";

const FilterMessage = () => {
  return (
    <>
      <div className="text-center message mt-5">
        <Image
          className="message-img"
          src="./images/car-loan.png"
        />
        <div className="mt-3">
          <h5>Data mobil tidak tersedia / belum dicari</h5>
        </div>
      </div>
    </>
  );
};

export default FilterMessage;
