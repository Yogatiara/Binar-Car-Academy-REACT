import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState, useContext } from "react";

import "./CarFilter.css";
import Button from "../../Button";
import { CarContext } from "../../../context/Car";

const CarFilter = () => {
  const {
    handleDriverTypeCar,
    filterExecute,
    handleStartDate,
    handleQuery,
    handleTime,
  } = useContext(CarContext);

  return (
    <>
      <div className="p-3 car-filter rounded-2 bg-white z-0  position-absolute shadow d-flex flex-row gap-3">
        <div>
          <label htmlFor="driver-type">Tipe Driver</label>
          <div className="w-form">
            <Form.Select
              aria-label="Default select example"
              onChange={(e) =>
                handleDriverTypeCar(e.target.value)
              }
            >
              <option value={true || false}>
                Pilih tipe driver
              </option>
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
              onChange={(e) => handleTime(e.target.value)}
            >
              <option>Pilih Waktu</option>
              <option value="08:00">08.00 WITA</option>
              <option value="10:00">10.00 WITA</option>
              <option value="12:00">12.00 WITA</option>
              <option value="14:00">14.00 WITA</option>
              <option value="16:00">16.00 WITA</option>
            </Form.Select>
          </div>
        </div>

        <div>
          <label htmlFor="date">
            Jumlah Penumpang (optionnal)
          </label>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                min={0}
                placeholder="Jumlah Penumpang"
                onChange={(e) => handleQuery(e.target.value)}
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

export default CarFilter;
