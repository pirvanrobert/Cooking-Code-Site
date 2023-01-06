import "./Projects.css";
import ImageSlider from "./Slider/ImageSlider";
import { DataSlider } from "./Slider/DataSlider";

function ImageSlideShow() {
  return (
    <>
      <h2>Few of my projects</h2>
      <ImageSlider slides={DataSlider} />
    </>
  );
}
export default ImageSlideShow;
