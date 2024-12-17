'use client'
import { useState } from "react";
import { Statistics } from "./Statistics";
export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      id="about"
      className="container py-24 sm:py-32 bg-gray-100"
    >
      <div className="flex flex-col justify-center py-12 text-center border rounded-lg bg-white shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src={'/assets/scc-banner-03.jpg'}
            alt="test"
            className="w-[800px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <div className="flex flex-col justify-between bg-green-0 p-6 rounded-lg">
            <div className="pb-6">
              <h2 className="my-5 text-4xl font-bold md:text-5xl">
                <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
                About  {" "}
                </span>
                Shan Community College
              </h2>
              <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
                Welcome to Shan Community College. This unique institution was founded in 2017 by the leaders of the Kaw Dai Organization in collaboration with several community-based organizations in Shan State, Myanmar. 
              </p>
              {isExpanded && (
                <>
                  <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
                    Shan Community College was founded to broaden the Kaw Dai education programs after 17 years of empowering young adults. The motto, sustainable, community, and identity, is at the center of our mission. 
                  </p>
                  <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
                    This guiding principle emphasizes our dedication to integrating local wisdom with a global perspective, embracing the concept of "glocalization." Our vision for education centers on sustainability and community orientation, striving to empower individuals while bolstering the resilience of the community.
                  </p>
                  <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
                    The focus on identity highlights the importance of maintaining one’s own culture while respecting others, thereby emphasizing the necessity of acknowledging diverse cultures and perspectives. This ensures that our students graduate with a global mindset that values both individual cultural identity and cross-cultural understanding.
                  </p>
                  <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
                    In 2019, Shan Community College strengthened its dedication to forward-thinking education through a pivotal collaboration. We signed a Memorandum of Understanding (MoU) with Chiang Rai Rajabhat University (CRRU) on the Thai-Myanmar border, making a significant step in the pursuit of innovative education.
                  </p>
                  <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
                    Celebrating the success of our collaborations with CRRU, we are enthusiastic about extending our collaborative efforts with other institutions in Asia and around the world. 
                  </p>
                </>
              )}
              <button 
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                onClick={toggleDescription}
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            </div>

            <Statistics />
            <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
