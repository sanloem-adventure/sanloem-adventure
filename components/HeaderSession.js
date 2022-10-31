import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

const HeaderSession = ({ header_title, header_description, title, logo, contact }) => {

  const router = useRouter()

  return (
    <div className={`flex flex-col mx-auto xl:w-[1390px] xl:h-[670px] sm:max-w-[1390px] bg-no-repeat bg-contain bg-[url('/images/header-image.jpg')]`}>
      <nav className="z-20 sm:flex-row flex flex-col w-full sm:justify-between">
        <Link href="/">
          <a className="sm:w-1/2 md:mt-10 md:indent-10 2xl:text-xl xl:text-lg md:text-normal sm:tracking-[.5em] indent-6 mt-4 text-sm font-light tracking-[.2em] text-start text-white">{title}</a>
        </Link>
        <div className="sm:flex-row sm:w-1/2 sm:py-8 sm:text-lg text-sm py-5 w-full flex flex-col font-light text-white sm:gap-32 sm:pl-40 xs:items-end self-end xs:gap-4 xs:pr-4">
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
      <div className={`flex flex-col xl:flex-row w-full`}>
        <div className="xs:absolute xs:top-24 w-full flex flex-col sm:w-1/2 xs:self-start mb-20 sm:self-end items-center xs:px-6 px-10 h-16 xs:pt-16 pt-20">
          <h2 className={`uppercase xs:self-start text-white text-xl font-light ${router.locale === 'fr' ? 'xs:text-[9px]' : 'xs:text-[10px]'}`}>{header_description}</h2>
        </div>
        <div className="flex flex-col xl:w-7/12 items-center xl:pb-10 sm:mt-16 max-w-2xl px-6">
          <div className="flex flex-col sm:self-start sm:pl-28 self-center">
            <img className="xs:absolute z-20 xs:left-6 sm:top-auto xs:top-20 w-22 h-16 sm:w-60 sm:h-36" src={logo} />
          </div>
          <div className="flex flex-col self-start text-white sm:mt-10 mt-16 xs:-mt-20 xl:gap-8 gap-10 sm:mr-40">
            <div className={`flex flex-col ${router.locale === 'fr' ? 'sm:px-16' : 'sm:px-20'} 2xl:visible sm:visible invisible`}>
              <h2 className="sm:visible invisible text-center text-3xl font-normal uppercase leading-loose">{header_title}</h2>
            </div>
            <a href="#contact" className={`sm:relative sm:top-auto xs:absolute top-28 sm:right-auto sm:self-center sm:right-auto right-4 uppercase sm:text-normal xl:text-xl text-xs text-center text-white font-light bg-dark-blue py-1 px-2 sm:py-3 sm:px-6 rounded-lg xl:mt-2 mt-14 xs:w-3/12 ${router.locale === 'fr' ? 'w-6/12 xs:w-4/12 xs:text-[10px]': 'w-5/12'}`}>{contact}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSession
