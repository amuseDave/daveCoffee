import Section from "./Section";
import handMade from "../assets/handmade.jpg";
import bestPrice from "../assets/best-price.jpg";
export default function Sections() {
  return (
    <>
      <Section
        img={handMade}
        title="High Quality Hand Made Beans"
        left
        multiple={1}
      />
      <Section
        img={bestPrice}
        title="We offer best price!"
        right
        multiple={2}
      />
    </>
  );
}
