"use client";
import Image from "next/image";
import Card from "./(components)/Card";
import CustomInputField from "./(components)/CustomInputField";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="flex flex-col flex-wrap ">
      <div>
        <div className="flex flex-col items-center justify-center py-10">
          <h1 className="font-extrabold text-4xl uppercase bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            YouTube Video Downloder.
          </h1>
          <br />
          <div className="flex">
            <h1 className="font-extrabold text-4xl uppercase bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Download as an &nbsp;
            </h1>
            <TypeAnimation
              sequence={["MP3.", 1500, " MP4.", 1500]}
              wrapper="span"
              speed={450}
              className="font-extrabold text-4xl uppercase bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="flex items-center justify-center pb-10">
          <CustomInputField />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Card
            img="https://i.ytimg.com/vi/sjMKlaksguA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtZZbDu_YICoRvE7djxmfhWnDD5g"
            url="https://www.youtube.com/watch?v=sjMKlaksguA"
            title=" Azure Load Balancer Tutorial | Azure Load Balancer | All About Load Balancer | Edureka Rewind "
          />
          <Card
            img="https://i.ytimg.com/vi/sjMKlaksguA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtZZbDu_YICoRvE7djxmfhWnDD5g"
            url="https://www.youtube.com/watch?v=sjMKlaksguA"
            title=" Azure Load Balancer Tutorial | Azure Load Balancer | All About Load Balancer | Edureka Rewind "
          />
          <Card
            img="https://i.ytimg.com/vi/sjMKlaksguA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtZZbDu_YICoRvE7djxmfhWnDD5g"
            url="https://www.youtube.com/watch?v=sjMKlaksguA"
            title=" Azure Load Balancer Tutorial | Azure Load Balancer | All About Load Balancer | Edureka Rewind "
          />
          <Card
            img="https://i.ytimg.com/vi/sjMKlaksguA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtZZbDu_YICoRvE7djxmfhWnDD5g"
            url="https://www.youtube.com/watch?v=sjMKlaksguA"
            title=" Azure Load Balancer Tutorial | Azure Load Balancer | All About Load Balancer | Edureka Rewind "
          />
          <Card
            img="https://i.ytimg.com/vi/sjMKlaksguA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtZZbDu_YICoRvE7djxmfhWnDD5g"
            url="https://www.youtube.com/watch?v=sjMKlaksguA"
            title=" Azure Load Balancer Tutorial | Azure Load Balancer | All About Load Balancer | Edureka Rewind "
          />
          <Card
            img="https://i.ytimg.com/vi/sjMKlaksguA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtZZbDu_YICoRvE7djxmfhWnDD5g"
            url="https://www.youtube.com/watch?v=sjMKlaksguA"
            title=" Azure Load Balancer Tutorial | Azure Load Balancer | All About Load Balancer | Edureka Rewind "
          />
        </div>
      </div>
    </main>
  );
}
