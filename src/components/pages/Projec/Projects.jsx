import "./Projects.css";
import ImageSlider from "./Slider/ImageSlider";
import { DataSlider } from "./Slider/DataSlider";

function ImageSlideShow() {
  return (
    <>
      <h2>Press the Image</h2>
      <ImageSlider slides={DataSlider} />
    </>
  );
}
export default ImageSlideShow;
