import './RentalCard.css';
import Button from '../../components/Button';

const RentalCard = () => {
  return (
    <>
      <div className="rounded-3 text-white rental-card p-5">
        <h1 className="fw-bold fs-1">
          Sewa Mobil di Karang Joang Sekarang
        </h1>
        <p className="pt-3 fs-4  fw-light text-wrap text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
        <div className="mt-5">
          <Button position={'p-2'} text={'Mulai sewa mobil'} />
        </div>
      </div>
    </>
  );
};

export default RentalCard;
