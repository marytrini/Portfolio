import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsItem = (props) => {
  const { title, img, liveUrl, keyword, GitHub_respository } = props.item;
  return (
    <div className="dark:bg-dark-features bg-light-features 2xl:w-3/4 group pt-[30px] pr-5 pb-5 pl-5 rounded-xl mb-[30px] hover:mt-5 sm:w-fit shadow-md shadow-slate-800 dark:shadow-sm dark:shadow-slate-400">
      <h6 className="mb-5 bg-transparent text-dark-title font-bold text-xl font-pop">
        {title}
      </h6>
      <div className="flex flex-wrap gap-2 bg-transparent text-base">
        {keyword.map((item, index) => (
          <span
            className="pt-[10px] pb-[10px] pr-[5px] pl-[5px] dark:bg-slate-600 bg-light-secondary_feat text-xs mx-1 my-1 rounded-lg"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center mt-[30px] bg-transparent">
        <Image
          alt="project-img"
          src={img}
          width="380"
          height="250"
          className="rounded-lg"
        />
      </div>
      <div className="bg-transparent mt-[30px]  hidden group-hover:block">
        <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
          <button className="border-2 border-solid border-rose-500 rounded-lg mr-4 font-semibold p-1 hover:bg-black hover:text-teal-400 text-light-title dark:text-dark-text">
            Launch
          </button>
        </Link>
        <Link
          href={GitHub_respository}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border-2 border-solid border-rose-500 rounded-lg mr-4 font-semibold p-1 hover:bg-black hover:text-teal-400 text-light-title dark:text-dark-text">
            GitHub repository
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsItem;
