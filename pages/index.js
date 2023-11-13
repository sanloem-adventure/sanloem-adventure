import Head from 'next/head'
import { useIntl } from "react-intl";
import LotSession from '../components/LotSession';
import HeaderSession from '../components/HeaderSession';
import ContactForm from '../components/ContactForm';
import ChairLift from '../components/ChairLift';
import Footer from '../components/Footer';

export default function Home() {
  const intl = useIntl();

  const sutton_title = intl.formatMessage({ id: "page.home.suttonsession.title" })
  const sutton_description = intl.formatMessage({ id: "page.home.suttonsession.description" })

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });
  const header_title = intl.formatMessage({ id: "page.home.header.title" });
  const contact = intl.formatMessage({ id: "page.home.header.contact" });
  const logo = intl.formatMessage({ id: "page.home.logo" });

  const footer_title = intl.formatMessage({id: "page.home.footer.title"})
  const footer_box_title = intl.formatMessage({id: "page.home.footer.box.title"})
  const footer_box_contact = intl.formatMessage({id: "page.home.footer.box.contact"})
  const footer_detail = intl.formatMessage({id: "page.home.footer.details"})

  return (
    <div className="flex flex-col">
      <Head>
        <title>TRIBE ISLAND ADVENTURES</title>
        <meta name="description" content="Join us today for great island adventure on koh rong sanloem" />
      </Head>
      <main className="flex flex-col h-full px-10 justify-center items-center pt-10">
        <div className="py-10 text-center">
          <h1 className="xl:text-2xl">BOOK YOUR ACTIVITIES ON THE ISLAND NOW WITH US!</h1>
          <h1 className="xl:text-2xl">+85516777631</h1>
        </div>
        <div className="flex min-h-2/4 flex-col  xl:flex-row justify-center items-center">
          <img width="50%" src="images/tribe-adventures.png" />
          <img width="50%" src="images/bensgarden-poster.png"/>
        </div>
      </main>
    </div>
  )
}
