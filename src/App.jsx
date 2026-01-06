import Image from "./data";
import "remixicon/fonts/remixicon.css";
import { listTools } from "./data";
import { listProyek } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="bg-[#7AB2B2]/30 p-4 rounded-xl gap-6 md:gap-2 flex items-center md:w-fit md:mt-4">
            <img
              src={Image.HeroImage}
              alt=""
              className="w-10 h-10 object-cover rounded-lg"
            />
            <p className="text-[#4D869C] text-[9px] sm:text-[10px] lg:text-[12px] font-bold">
              "Membangun web bukan sekadar hobi, tapi perjalanan."
            </p>
          </div>
          <h1 className="text-xl sm:text-4xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-[#4D869C] py-6 lg:py-5">
            Hi, Maulana Adiatma <br /> in Here!
          </h1>
          <p className="text-justify leading-5 md:leading-7 lg:leading-8 text-xs md:text-sm lg:text-base xl:text-lg">
            Mahasiswa{" "}
            <span className="font-bold text-[#4D869C]">
              Sistem Informasi Universitas Sriwijaya
            </span>{" "}
            yang berfokus pada Front-End Development, Back-End Development, dan
            Machine Learning. Terus mengembangkan kemampuan teknis melalui
            pembelajaran mandiri, proyek, dan eksplorasi teknologi untuk
            membangun solusi digital yang efektif dan berkelanjutan.
          </p>
          <div className="flex gap-6 my-4 md:my-8">
            <a
              href="#"
              className="bg-[#4D869C] text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-white hover:bg-[#4D869C]/80 px-4 py-2 rounded-lg"
            >
              Download CV <i className="ri-file-download-line"></i>
            </a>
            <a
              href="#"
              className="bg-[#4D869C] text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-white hover:bg-[#4D869C]/80 px-4 py-2 rounded-lg"
            >
              Projects <i className="ri-file-list-line"></i>
            </a>
          </div>
        </div>

        <div className="">
          <img
            src={Image.HeroImage}
            alt=""
            className="md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[600px] xl:h-[500px] object-cover rounded-xl shadow-lg md:ml-auto mt-0 md:mt-20 lg:mt-18 xl:mt-0"
          />
        </div>
      </div>
      {/* End Hero Section */}

      {/* About Section */}
      <div className="about mt-10 lg:mt-15 xl:mt-20">
        <div className="bg-[#4D869C]/30 p-4 xl:p-8 rounded-xl md:mx-15 xl:mx-40">
          <div>
            <h1 className="text-[#4D869C] text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold text-center">
              ABOUT ME
            </h1>
            <h3 className="opacity-70 leading-4 sm:leading-5 md:leading-7 lg:leading-8 text-[10px] sm:text-xs md:text-sm xl:text-lg text-justify md:px-4 py-2 xl:py-8">
              Saya memiliki ketertarikan kuat pada pengembangan Full Stack Web.
              Ketertarikan ini sudah saya tekuni sejak kelas 2 SMA, dan terus
              berkembang hingga sekarang melalui perkuliahan, pembelajaran
              mandiri, serta berbagai proyek pengembangan aplikasi. Saya
              menikmati proses membangun aplikasi secara menyeluruh mulai dari
              antarmuka pengguna hingga logika backend dan pengelolaan data.
              Dengan semangat belajar yang konsisten, saya terus mengasah
              kemampuan teknis dan siap berkembang di dunia teknologi serta
              kolaborasi tim.
            </h3>
          </div>
          <div className="flex gap-4 justify-between items-center md:px-4">
            <img
              src={Image.HeroImage}
              alt=""
              className="object-cover rounded-full w-[40px] h-[40px] xl:w-[60px] xl:h-[60px]"
            />
            <div className="flex gap-4 font-semibold">
              <div>
                <h1 className="text-lg sm:text-2xl lg:text-4xl">
                  45 <span className="text-[#4D869C]">+</span>
                </h1>
                <p className="text-[8px] sm:text-xs lg:text-lg">Done Project</p>
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl lg:text-4xl">
                  2 <span className="text-[#4D869C]">+</span>
                </h1>
                <p className="text-[8px] sm:text-xs lg:text-lg">
                  Tahun Pengalaman
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-10 lg:mt-15 xl:mt-20">
          <div>
            <h1 className="text-[#4D869C] text-xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center">
              Tools yang digunakan
            </h1>
            <p className="py-3 sm:py-4 lg:py-8 text-center opacity-70 text-[10px] sm:text-sm xl:text-lg">
              Berikut adalah tools yang saya gunakan dalam pengembangan aplikasi
              yang saya gunakan
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {listTools.map((tool) => (
              <div
                className="group flex border border-[#4D869C] border-b-10 bg-[#D4F6FF]/30 hover:bg-[#C6E7FF]/75 gap-2 p-2 rounded-xl"
                key={tool.id}
              >
                <div>
                  <img
                    src={tool.gambar}
                    alt="Tools Name"
                    className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[55px] md:h-[55px] object-cover rounded-lg"
                  />
                </div>
                <div className="">
                  <h1 className="font-semibold text-[12px] sm:text-[14px] lg:text-[16d8px] xl:text-[20px]">
                    {tool.nama}
                  </h1>
                  <p className="opacity-70 text-[10px] sm:text-[12px] lg:text-[14px]">
                    {tool.ket}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End About Section */}

      {/* Projects Section */}
      <div className="project mt-10 lg:mt-15 xl:mt-20">
        <div>
          <h1 className="text-[#4D869C] text-xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center">
            My Projects
          </h1>
          <p className="py-3 sm:py-4 lg:py-8 text-center opacity-70 text-[12px] sm:text-sm xl:text-lg">
            Berikut adalah project yang sudah saya buat
          </p>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {listProyek.map((proyek) => (
            <div className="border border-[#4D869C] border-b-10 bg-[#D4F6FF]/30 rounded-xl p-4" key={proyek.id}>
              <img src={proyek.gambar} alt="ini gambar" className="object-cover items-center w-full h-[200px]" />
              <div className="my-4">
                <h3 className="py-1 md:py-2 font-bold text-xl">{proyek.nama}</h3>
                <p className="text-[12px] sm:text-sm xl:text-lg justify-center opacity-70 md:mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 justify">
                  {proyek.tools.map((tool, index) => (
                    <div className="text-[12px] sm:text-sm md:text-[12px] xl:text-lg hover:border hover:border-[#4D869C] bg-[#4D869C] hover:bg-white text-white hover:text-[#4D869C] rounded-xl p-2 mt-2" key={index}>
                      <p className="font-semibold">{tool}</p>
                    </div>
                  ))}
                </div>
                {/* <div className="text-center mt-4">
                  <a
                    href="#"
                    className="bg-[#4D869C] rounded-lg text-white hover:bg-white hover:text-[#4D869C] p-2 block border">
                    Lihat Website
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Projects Section */}
    </>
  );
}

export default App;
