import React from "react";
import AnimationServices from "./subcomponents/serviceCard";
import UiUxDesign from "./subcomponents/serviceCard2";

const Service = () => {
  return (
    <div>
      <div className="text-5xl text-center my-28 font-[50] text-white">Services</div>
      <div>
        <AnimationServices
          Sno="1"
          imageURL="https://cdn.mos.cms.futurecdn.net/Bdd9TqytLkJoqePAYNzxgc-1200-80.jpg"
          title="Animation Services"
          subtext="(2D/3D)"
          whiteCardTitle="Motion to Movies"
          purpleCardTitle="Professional Videos"
        />{" "}
        <UiUxDesign
          Sno="2"
          imageURL="https://cdn.mos.cms.futurecdn.net/Bdd9TqytLkJoqePAYNzxgc-1200-80.jpg"
          imageURL2="https://cdn.mos.cms.futurecdn.net/Bdd9TqytLkJoqePAYNzxgc-1200-80.jpg"
          title="UI/UX"
          subtext="Design"
          blackCardTitle="User Experience Design"
        />
        <AnimationServices
          Sno="3"
          imageURL="https://cdn.mos.cms.futurecdn.net/Bdd9TqytLkJoqePAYNzxgc-1200-80.jpg"
          title="Video"
          subtext="graphy"
          whiteCardTitle="Motion to Movies"
          purpleCardTitle="Professional Videos"
        />{" "}
        <UiUxDesign
          Sno="4"
          imageURL="https://cdn.mos.cms.futurecdn.net/Bdd9TqytLkJoqePAYNzxgc-1200-80.jpg"
          imageURL2="https://cdn.mos.cms.futurecdn.net/Bdd9TqytLkJoqePAYNzxgc-1200-80.jpg"
          title="photo"
          subtext="graphy"
          blackCardTitle="Capturing Moments"
        />
        <AnimationServices
          Sno="5"
          imageURL="https://cdn.mos.cms.futurecdn.net/Bdd9TqytLkJoqePAYNzxgc-1200-80.jpg"
          title="Post"
          subtext="Production"
          whiteCardTitle="Motion to Movies"
          purpleCardTitle="Professional Videos"
        />{" "}
        <UiUxDesign
          Sno="6"
          imageURL="https://cdn.mos.cms.futurecdn.net/Bdd9TqytLkJoqePAYNzxgc-1200-80.jpg"
          imageURL2="https://cdn.mos.cms.futurecdn.net/Bdd9TqytLkJoqePAYNzxgc-1200-80.jpg"
          title="Graphic"
          subtext="Design"
          blackCardTitle="Capturing Moments"
        />
      </div>
    </div>
  );
};

export default Service;
