const ServiceAdvantages = () => {
  return (
    <>
      <div id="why-us">
        <h1 className=" fw-bolder">Why Us</h1>
        <p className=" mt-3">Mengapa harus pilih Binar Car Rental?</p>
      </div>

      <div className="d-flex flex-row gap-5 fs-6">
        <div className=" border border-1 rounded-3 p-4 w-50">
          <img src="icons/ok.png" alt="ok" />
          <h5 className="my-3">Mobil Lengkap</h5>
          <p className="">
            Tersedia banyak pilihan mobil, kondisi masih baru, bersih
            dan terawat
          </p>
        </div>

        <div className=" border border-1 rounded-3 w-50 p-4">
          <img src="icons/icon_price.png" alt="price" />
          <h5 className="my-3">Harga Murah</h5>
          <p>
            Harga murah dan bersaing, bisa bandingkan harga kami
            dengan rental mobil lain
          </p>
        </div>

        <div className="border border-1 rounded-3 w-50 p-4">
          <img src="icons/icon_24hrs.png" alt="ok" />
          <h5 className="my-3">Layanan 24 Jam</h5>
          <p>
            Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
            juga tersedia di akhir minggu
          </p>
        </div>

        <div className=" border border-1 rounded-3 w-50 p-4">
          <img src="icons/icon_professional.png" alt="ok" />
          <h5 className="my-3">Sopir Profesional</h5>
          <p>
            Sopir yang profesional, berpengalaman, jujur, ramah dan
            selalu tepat waktu
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceAdvantages;
