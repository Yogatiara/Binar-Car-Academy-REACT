import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState, useContext } from "react";

import "./CarFilter.css";
import Button from "../../Button";
import { CarContext } from "../../../context/Car";

const CarFilter = ({ onClick }) => {
  const { handleDriverTypeCar, filterExecute, handleStartDate } =
    useContext(CarContext);

  return (
    <>
      <div className="p-3 car-filter rounded-2 bg-white z-0  position-absolute shadow d-flex flex-row gap-3">
        <div>
          <label htmlFor="driver-type">Tipe Driver</label>
          <div className="w-form">
            <Form.Select
              aria-label="Default select example"
              onClick={onClick}
              onChange={(e) =>
                handleDriverTypeCar(e.target.value)
              }
            >
              <option disabled>Pilih tipe driver</option>
              <option value={true}>Dengan Sopir</option>
              <option value={false}>
                Tanpa Sopir(Lepas Kunci)
              </option>
            </Form.Select>
          </div>
        </div>

        <div className="d-flex flex-column">
          <label htmlFor="date">Tanggal</label>
          <input
            type="date"
            onChange={(e) => handleStartDate(e.target.value)}
            className="date-picker border rounded-2 "
          />
        </div>

        <div>
          <label htmlFor="driver-type">Waktu Jemput/Ambil</label>
          <div className="w-form">
            <Form.Select
              aria-label="Default select example"
              onClick={onClick}
            >
              <option>Pilih Waktu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>

        <div>
          <label htmlFor="date">Jumlah Penumpang</label>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="email"
                placeholder="Jumlah Penumpang"
              />
            </Form.Group>
          </Form>
        </div>
        <div className="button-search">
          <Button
            position={"p-2"}
            text={"Cari Mobil"}
            onClick={filterExecute}
          >
            Cari mobil
          </Button>
        </div>
      </div>
    </>
  );
};

CarFilter.propTypes = {
  onClick: PropTypes.func,
};

export default CarFilter;
