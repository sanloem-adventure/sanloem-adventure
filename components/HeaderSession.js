import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

const HeaderSession = ({ header_title, header_description, title, logo, contact }) => {

  const router = useRouter()

  return (
    <div className={`flex flex-col mx-auto w-full sm:min-h-[670px] bg-no-repeat bg-cover xs:bg-contain bg-[url('/images/header-image.jpg')]`}>
      <nav className="z-20 md:flex-row flex flex-col w-full md:justify-between md:mt-8">
        <Link href="/">
          <a className="md:w-1/2 w-full sm:indent-10 2xl:text-xl xl:text-lg sm:tracking-[.5em] indent-6 mt-10 sm:text-lg text-sm font-light tracking-[.2em] text-start text-white md:text-sm">{title}</a>
        </Link>
        <div className="text-sm py-5 md:py-0 md:w-1/2 w-full md:flex-row flex flex-col xs:flex-col-reverse font-light text-white 2xl:gap-40 xl:gap-32 lg:gap-36 xl:justify-start lg:justify-end xl:pro-0 lg:pr-10 xl:pl-40 sm:gap-6 xl:text-lg md:items-start md:justify-end items-end  self-end gap-4 lg:pr-0 md:pr-10 pr-4 lg:pr-20">
          <AnchorLink className="cursor-pointe" href="#lot">
            LOTS
          </AnchorLink>
          <AnchorLink className="hover:cursor-pointer" href="#contact">
            CONTACT
          </AnchorLink>
          <span className="flex flex-row gap-1">
            <Link href={`/${router.locale === 'fr' ? 'en' : 'fr'}`} locale={'fr'}>
              <a className={`${router.locale === 'fr' ? 'text-secondary' : ''} hover:cursor-pointer`}>FR</a>
            </Link>
            /
          <Link href={`${router.locale === 'en' ? 'fr' : 'en'}` } locale={'en'}>
              <a className={`${router.locale === 'en' ? 'text-secondary' : ''} hover:cursor-pointer`}>EN</a>
            </Link>
          </span>
        </div>
      </nav>
      <div className={`flex flex-col md:flex-row w-ful 2xl:pt-28 2xl:pl-48`}>
        <div className="absolute md:relative top-20 md:top-auto w-full flex flex-col md:w-1/2 self-start mb-20 self-end items-center xs:items-start px-10 h-16 pt-16 pt-20">
          <h2 className={`uppercase xs:text-center text-white text-xl font-light ${router.locale === 'fr' ? 'xs:text-[9px]' : 'xs:text-[10px]'}`}>{header_description}</h2>
        </div>
        <div className="flex flex-col md:w-7/12 items-center xl:pb-10 2xl:gap-10 xl:mt-20 lg:mt-20 mt-10 max-w-2xl px-6">
          <div className="flex flex-col self-cetner">
            <img className="md:relative absolute z-20 md:left-auto left-6 md:top-auto top-20 w-22 h-16 md:w-60 md:h-48" src={logo} />
          </div>
          <div className="xs:hidden flex flex-col self-start text-white md:mt-10 -mt-20 xl:gap-8 gap-10 lg:mr-20 md:mr-20 w-full">
            <AnchorLink className={`md:relative xs:hidden sm:top-auto top-28 sm:right-auto sm:self-center sm:right-auto right-4 uppercase sm:text-normal xl:text-xl text-xs text-center text-white font-light bg-dark-blue py-1 px-2 sm:py-3 sm:px-6 rounded-lg xl:mt-2 mt-14 xs:w-3/12 ${router.locale === 'fr' ? 'w-6/12 xs:w-4/12 xs:text-[10px]' : 'w-5/12'}`} href="#contact">{contact}</AnchorLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSession
