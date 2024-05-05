import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card(props) {
  return (
    <>
      <div
        className={
          "flex flex-row gap-5 w-[700px] min-h-[176px] p-2 rounded-lg bg-[#232643]"
        }
      >
        <Image
          src={props.img}
          alt="Picture of the author"
          width={314}
          height={177}
          // style={{ borderRadius: "5%" }}
          className="rounded-xl min-h-[177px]"
        />
        <div className="flex flex-col gap-3 justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg line-clamp-3 overflow-ellipsis">
              {props.title}
            </h1>
            <h1 className="text-gray-400 text-sm line-clamp-1 overflow-ellipsis">
              <Link href={props.url}>{props.url}</Link>
            </h1>
          </div>
          <div className="flex justify-end gap-1">
            <div className="w-[70px] h-[42px] p-px rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer">
              <div className="bg-[#232643] rounded-md p-2 flex justify-center flex-row items-center hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                MP3
              </div>
            </div>
            <div className="w-[70px] h-[42px] p-px rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer">
              <div className="bg-[#232643] rounded-md p-2 flex justify-center flex-row items-center hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                MP4
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
