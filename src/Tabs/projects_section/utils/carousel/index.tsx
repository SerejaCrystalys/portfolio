import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StyledCarousel } from "./__styled";

interface Props {
  name: string;
}

export const ProjectCarousel = ({ name }: Props) => {
  const config = require("../../../../../localization.json");

  return (
    <>
      <StyledCarousel className="crsl" infiniteLoop centerMode>
        {config.utils[name].map((item: any, index: number) => {
          return (
            <img
              key={index}
              src={`/imgs/projects/${name}/${item}.png`}
              alt={"projpic" + index}
            />
          );
        })}
      </StyledCarousel>
    </>
  );
};
