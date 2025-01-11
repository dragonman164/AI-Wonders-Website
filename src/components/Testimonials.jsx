import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="container relative z-1">
        <Heading
          className="md:max-w-md lg:max-w-2xl font-bold"
          title="What our students have to say?"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[38rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 font-bold mb-5">{item.title}</h5>
                <span className="h3">&#8220;</span>
              {item.text.map((mainText, index)=> (
                 <p key={index} className="body-2 mb-6 text-n-3">{mainText}</p>
              )) }
                <span className="h3">&#8221;</span>
                <div className="flex items-center mt-auto">
                  <img
                  className="mr-5"
                    src={item.iconUrl}
                    width={40}
                    height={40}
                    alt={item.title}
                  />
                  <p className="ml-auto text-small font-code font-bold text-n-1 uppercase tracking-wider">
                    - {item.customer}
                  </p>
                  {/* <Arrow /> */}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
