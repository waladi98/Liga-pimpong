import React from "react";

const About = () => {
  return (
    <div className="lg:container pb-28 pt-28 " id="about">
      <div className="flex flex-wrap items-center justify-center  w-full">
        <div className="w-1/2 text-lg px-24">
          <img
            className="ml-auto transform scale-110 -rotate-6 rounded-lg"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            width="400px"
            alt=""
          />
        </div>
        <div className=" w-1/2 px-10">
          <h1 className="font-bold text-3xl py-5 uppercase">
            Selamat Datang <br />
            Di ....
          </h1>
          <div className="border-4 border-primary rounded-lg" />
          <h3 className="font-semibold py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            repudiandae in animi distinctio quia aliquid obcaecati maiores quas
            fuga qui quaerat unde eaque odit, sequi ad illo. Amet itaque
            nesciunt tenetur ex officiis perferendis ea excepturi sit, ducimus
            quas eaque magni nisi laboriosam debitis ratione, non aliquid unde
            enim! Ut veritatis provident ex beatae placeat doloribus a id modi
            consequuntur, sed praesentium, itaque possimus fugit repellat
            excepturi corporis numquam accusantium nesciunt adipisci. A maxime,
            voluptatem excepturi dolores quisquam distinctio quo iste. Molestiae
            voluptas quibusdam earum ducimus? Ea asperiores quibusdam officiis,
            deleniti aperiam minima dignissimos accusantium perferendis, ducimus
            enim aspernatur repudiandae!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
