import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img1 from "../assets/bg_images.png"
function C() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-90px)]">
      <div className="w-full h-[50vh] max-w-screen-md">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          centerMode
        >
          <div>
            <div className="bg-white h-[300px] drop-shadow-xl flex flex-col justify-center">
              <p className="font-semibold">
                {" "}
                &quot;I highly recommend Memoire for their Creatives and
                Marketing &quot;
              </p>

              <p className="mt-10">XYZ</p>
            </div>
          </div>
          <div>
            <div className="bg-white h-[300px] drop-shadow-xl  flex flex-col justify-center">
              <p className="font-semibold">
                {" "}
                &quot;I highly recommend Memoire for their Creatives and
                Marketing &quot;
              </p>

              <p className="mt-10">XYZ</p>
            </div>
          </div>
          <div>
            <div className="bg-white h-[300px] drop-shadow-xl flex flex-col justify-center">
              <p className="font-semibold">
                {" "}
                &quot;I highly recommend Memoire for their Creatives and
                Marketing &quot;
              </p>

              <p className="mt-10">XYZ</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default C;
