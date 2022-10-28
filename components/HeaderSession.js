import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

const HeaderSession = ({ header_title, header_description, title, logo, contact }) => {

  const router = useRouter()


  return (
    <div className={`flex flex-col h-auto xs:h-[200px] sm:h-[757.55px] md:max-w-{1024px} bg-no-repeat bg-cover bg-[url('/images/header-image.jpg')]`}>
      <nav className="z-20 md:flex-row lg:flex-row md:justify-between absolute flex flex-col w-full">
        <Link href="/">
          <a className="md:mt-10 md:indent-10 2xl:text-xl xl:text-lg md:text-normal md:tracking-[.5em] indent-6 mt-4 text-sm font-light tracking-[.2em] text-start text-white">{title}</a>
        </Link>
        <div className="2xl:pl-60 2xl:gap-48 2xl:pl-60 2xl:relative xl:pl-32 md:relative xl:relative md:gap-28 xl:gap-32 md:flex-row md:w-1/2 md:py-8 md:text-lg xs:absolute xs:left-0 text-sm self-end py-5 px-5 w-full flex flex-col items-end font-light text-white gap-2">
          <Link href="/#lot">
            <a className="cursor-pointe">LOTS</a>
          </Link>
          <Link href="/#contact">
            <a className="hover:cursor-pointer">CONTACT</a>
          </Link>
          <span className="flex flex-row gap-1">
            <Link href={`/${router.locale === 'fr' ? 'en' : 'fr'}`} locale={false}>
              <a className={`${router.locale === 'fr' ? 'text-secondary' : ''} hover:cursor-pointer`}>FR</a>
            </Link>
            /
          <Link href={`${router.locale === 'en' ? 'fr' : 'en'}` } locale={false}>
              <a className={`${router.locale === 'en' ? 'text-secondary' : ''} hover:cursor-pointer`}>EN</a>
            </Link>
          </span>
        </div>
      </nav>
      <div className={`flex flex-col xl:flex-row w-full ${router.locale === 'fr' ? 'xs:mt-20 mt-4' : 'mt-20'}`}>
        <div className="xs:absolute xs:w-full flex flex-col w-1/2 xs:self-start self-end items-center xs:px-6 px-10 h-16 xs:pt-16 pt-20">
          <h2 className={`uppercase xs:self-start text-white sm:text-2xl text-xl font-light ${router.locale === 'fr' ? 'xs:text-[9px]' : 'xs:text-[10px]'}`}>{header_description}</h2>
        </div>
        <div className="flex flex-col xl:w-7/12 items-center xl:pb-10 xl:mt-36 max-w-2xl px-6">
          <div className="flex flex-col xl:self-center self-center">
            <img className="xl:left-auto xs:absolute left-6 xl:top-auto top-16 w-28 h-16 xl:w-64 xl:h-40" src={logo} />
          </div>
          <div className="flex flex-col self-center text-white xl:mt-10 mt-16 xl:gap-8 gap-10">
            <div className="flex flex-col xl:px-44 2xl:visible xl:visible md:visible lg:visible invisible">
              <h2 className="2xl:visible lg:visible md:visible xl:visible invisible text-center text-3xl font-normal uppercase leading-loose">{header_title}</h2>
            </div>
            <a href="#contact" className="xl:relative xl:top-auto xs:absolute top-28 xl:right-auto xl:self-center xl:right-auto right-4 uppercase xl:text-normal xl:text-xl text-xs text-center text-white font-light bg-dark-blue py-1 px-2 xl:py-4 rounded-lg xl:w-4/12 xl:px-2 xl:mt-2 mt-10">{contact}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSession