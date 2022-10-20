import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";


export default function Home() {
  const { locales } = useRouter();
  const intl = useIntl();

  const logo = intl.formatMessage({ id: "page.home.logo" });
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });
  const header_title = intl.formatMessage({ id: "page.home.header.title" });
  const header_description = intl.formatMessage({ id: "page.home.header.description" });

  return (
    <div className="flex flex-col">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;500;900&display=swap" rel="stylesheet"/>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`flex flex-col py-10 bg-no-repeat bg-cover bg-[url('/images/header-image.jpg')] `}>
        <nav className="text-white flex flex-row justify-between w/12">
          <a href="/" className="text-xl indent-10 font-light tracking-large text-start">{title}</a>
          <div className="flex flex-row gap-36 text-xl font-light px-20">
            <a href="/">LOTS</a>
            <a href="/">CONTACTEZ</a>
            <span className="flex flex-row gap-1">
              <a href="/fr">FR</a>
              /
              <a className="text-secondary" href="/en">EN</a>
            </span>
          </div>
        </nav>
        <div className="flex flex-row justify-end w-full py-20 h-auto mt-20 pr-20">
          <div className="flex flex-col justify-end w-1/2">
            <h2 className="text-center text-white text-2xl font-light">{header_description}</h2>
          </div>
          <div className="flex flex-col px-10 w-1/2 h-auto">
            <div className="self-start">
              <img className="w-72 h-48" src={logo} />
            </div>
            <div className="text-white text-center text-start px-40 mt-20 gap-20">
              <h2 className="text-4xl font-normal uppercase leading-loose">{header_title}</h2>
              <a href="#contact" className="uppercase text-white font-light bg-dark-blue py-4 rounded-lg w-1/2 self-center px-14 mt-10">Contact US</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <h3 className="text-2xl font-light mb-10">THE LOTS</h3>
        <session className="flex flex-row py-20 px-40">
          <div className="w-1/2 gap-20">
            <div className="text-gray-400 font-light flex flex-col gap-10">
              <p>
                The real estate lots are located along Maple and Poissant roads, halfway between the Village and the ski center. They are intimate, wooded and located a few meters from the Enlever marmite hiking trail and the Sutton River.
              </p>
              <p>
                In addition, in order to preserve the ecosystem, the natural state of the site and to allow direct access to pedestrian paths for certain lots, approximately 11,900 m2 of land will be ceded to the municipality. (5,300 m2 during phase A and 6,600 m2 during the development of phase B, to be confirmed by the city).
              </p>
            </div>
          </div>
          <div className="w-1/2 px-20 font-light ">
            <div>
              <h4 className="text-2xl font-light">Phase A</h4>
              <div className="flex flex-col gap-4">
                <p className="indent-4">
                  11 lots are offered. Most lots have sewer service and have an entrance on Maple Street. They are all located in residential zoning with the possibility of building a single-family, two-family or three-family home. Lots 1 to 10 have an area varying between 2,000 m2 and 4,000 m2.
                </p>
                <p className="indent-4">
                  Lot 11 located along the Sutton River has an area of 10,868.90 m2 or 2.68 acres. A true haven of peace in nature with a superb view of the Sutton River. Residential zoning allows the construction of a single-family residence.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="text-2xl font-light">Phase B</h4>
              <p>
                Coming soon.
              </p>
            </div>
          </div>
        </session>
        <session className="flex flex-col py-20 bg-secondary">
          <h4 className="text-center text-2xl font-light">CONTACT FORM</h4>
          <div>
            <form>

            </form>
          </div>
        </session>
      </main>
      <footer className="flex flex-col pt-20 pb-0 px-10 bg-no-repeat bg-cover bg-[url('/images/footer-image.jpg')] gap-20">
        <div className="grid grid-cols-5">
          <h3 className="col-start-2 col-span-3 text-center text-white text-4xl">INTERESTED? WE ARE HERE FOR YOU</h3>
          <div className="col-start-2 col-span-3 self-center px-72 py-44">
            <div className="flex flex-col text-2xl bg-dark-blue py-16 gap-10">
              <h3 className="text-center self-center text-white font-light w-8/12">REACH OUT WITH ANY QUESTIONS OR INQUIRIES</h3>
              <a href="#contact" className="px-28 py-5 bg-white text-dark-blue self-center text-xl rounded-lg uppercase font-light">contact us</a>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2">
          <div className="grid-col-span-2 grid grid-cols-3 pl-20 gap-10">
            <img className="col-span-2 w-72 h-48" src={logo} />
            <div className="flex flex-col">
              <nav className="self-center flex flex-col text-white text-xl font-light gap-4">
                <a href="#lots">LOTS</a>
                <a href="#contact">CONTACT</a>
              </nav>
            </div>
            <div className="flex flex-row gap-10">
              <a href="" target="_blank">
                <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.34121 0.985256C3.96313 1.54255 2.87564 3.13456 2.79227 6.18078L2.74232 8.00854H1.57673H0.411133V10.4226V12.8366H1.59032H2.76951V18.7682V24.6998H5.19726H7.62501V18.7718V12.8438L9.74061 12.8057L11.8562 12.7676L11.9397 11.733C11.9858 11.164 12.0722 10.0948 12.132 9.35708L12.2405 8.01571L10.0368 7.97764L7.8331 7.93957V6.72014C7.8331 5.01074 7.88623 4.97377 10.3456 4.97377H12.203V2.90461V0.835449L9.53252 0.849243C8.06366 0.856968 6.62769 0.918077 6.34121 0.985256Z" fill="white" />
                </svg>
              </a>
              <a href="" target="_blank">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.327 0.862373C2.90865 1.37782 1.19097 3.02596 0.474584 5.51812C0.203505 6.46113 -0.00739231 14.4696 0.163879 17.3142C0.387405 21.0273 1.70425 23.0555 4.51914 24.0225C6.08046 24.5588 15.9857 24.694 18.8268 24.2178C21.3721 23.791 23.1094 22.1588 23.8733 19.4763C24.2366 18.201 24.2494 6.91608 23.8892 5.62164C23.1298 2.89345 21.2325 1.15984 18.5905 0.77996C17.0597 0.559969 6.43616 0.625819 5.327 0.862373ZM17.1294 2.50917C21.6483 2.85699 22.3064 4.11456 22.3034 12.397C22.3002 22.0348 21.9661 22.4591 14.2473 22.6296C5.49088 22.8233 3.51488 22.3298 2.42331 19.6766C1.7925 18.1437 1.86625 7.33389 2.52124 5.30668C2.85451 4.27498 3.97268 3.15405 4.97855 2.8431C6.1573 2.47885 13.9523 2.2646 17.1294 2.50917ZM17.7547 4.96995C16.9622 5.40672 16.857 6.33651 17.525 7.00076C18.0892 7.56176 18.6218 7.59889 19.1974 7.11737C20.4292 6.08673 19.159 4.1959 17.7547 4.96995ZM10.7548 6.66657C9.1088 6.9862 7.33846 8.36706 6.59964 9.90767C3.68991 15.9753 11.4349 21.4907 16.2048 16.7477C20.4053 12.5709 16.5997 5.53148 10.7548 6.66657ZM13.8229 8.71301C17.7935 10.7138 16.4522 16.7176 12.0309 16.7341C7.27197 16.7517 6.16871 10.0963 10.665 8.49489C11.6079 8.15909 12.9008 8.24845 13.8229 8.71301Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full self-center py-5">
          <p className="text-center text-white font-light text-md">All rights reserved. Chairlift6 Properties. 2022</p>
        </div>
      </footer>
    </div>
  )
}
