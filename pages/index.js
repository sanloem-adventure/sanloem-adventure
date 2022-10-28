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
  const header_description = intl.formatMessage({ id: "page.home.header.description" });
  const contact = intl.formatMessage({ id: "page.home.header.contact" });
  const logo = intl.formatMessage({ id: "page.home.logo" });

  const footer_title = intl.formatMessage({id: "page.home.footer.title"})
  const footer_box_title = intl.formatMessage({id: "page.home.footer.box.title"})
  const footer_box_contact = intl.formatMessage({id: "page.home.footer.box.contact"})
  const footer_detail = intl.formatMessage({id: "page.home.footer.details"})

  return (
    <div className="flex flex-col max-w-{1280px} min-w-{1280px}">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="flex flex-col max-w-{1280px} min-w-{1280px} h-full">
        <HeaderSession title={title} header_title={header_title} header_description={header_description} logo={logo} contact={contact}/>
        <LotSession/>
        <ContactForm/>
        <ChairLift sutton_title={sutton_title} sutton_description={sutton_description} />
      </main>
      <Footer logo={logo} footer_title={footer_title} footer_box_title={footer_box_title} footer_box_contact={footer_box_contact} footer_detail={footer_detail} />
    </div>
  )
}
