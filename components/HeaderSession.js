import React from 'react'
import Link from 'next/link'

const HeaderSession = ({ header_title, header_description, title, logo }) => {
  return (
    <div className={`flex flex-col w-full h-auto`}>
      <img
        width="100%"
        height="100%"
        src="/images/header-image.jpg"
        className="absolute object-contain md:object-cover"
        alt="header image"
      />
      <nav className="md:flex-row md:justify-between absolute flex flex-col w-full">
        <Link href="/">
          <a className="md:mt-10 md:indent-10 2xl:text-xl xl:text-lg md:text-normal md:tracking-[.5em] indent-6 mt-4 text-sm font-light tracking-[.2em] text-start text-white">{title}</a>
        </Link>
        <div className="2xl:pl-60 2xl:gap-48 2xl:pl-60 2xl:relative xl:pl-32 xl:relative xl:gap-32 md:flex-row md:w-1/2 md:py-8 md:text-lg sm:absolute sm:left-0 text-sm self-end py-5 px-5 w-full flex flex-col items-end font-light text-white gap-2">
          <Link href="/#lot">
            <a>LOTS</a>
          </Link>
          <Link href="/#contact">
            <a>CONTACTE</a>
          </Link>
          <span className="flex flex-row gap-1">
            <Link href="fr">
              <a>FR</a>
            </Link>
            /
            <Link href="en">
              <a className="text-secondary">EN</a>
            </Link>
          </span>
        </div>
      </nav>
      <div className="xl:relative aboslute flex flex-col xl:flex-row w-full">
        <div className="xl:top-auto xl:self-end items-end top-28 left-6 xl:relative absolute flex xl:flex-col xl:pl-20 xl:w-6/12 xl:py-28 py-11">
          <h2 className="uppercase xl:absolute relative xl:top-36 xl:self-start 2xl:top-80 2xl:text-3xl text-white xl:text-xl text-[10px] font-light">{header_description}</h2>
        </div>
        <div className="flex flex-col px-10 xl:w-7/12 items-center xl:pb-10 xl:mt-36">
          <div className="flex flex-col xl:self-center self-center">
            <img className="xl:relative absolute xl:left-auto left-6 xl:top-auto top-16 w-28 h-16 xl:w-64 xl:h-40" src={logo} />
          </div>
          <div className="flex flex-col self-center text-white xl:mt-10 mt-16 xl:gap-8 gap-10">
            <div className="flex flex-col xl:px-44 xl:visible invisible">
              <h2 className="2xl:visible xl:visible invisible text-center text-3xl font-normal uppercase leading-loose">{header_title}</h2>
            </div>
            <a href="#contact" className="xl:relative absolute xl:top-auto top-28 xl:right-auto xl:self-center xl:right-auto right-4 uppercase xl:text-normal xl:text-xl text-xs text-center text-white font-light bg-dark-blue py-1 px-2 xl:py-4 rounded-lg xl:w-4/12 xl:px-2 xl:mt-2 mt-10">Contact US</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSession