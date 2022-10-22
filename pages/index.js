import Head from 'next/head'
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import LotSession from '../components/LotSession';
import HeaderSession from '../components/HeaderSession';
import ContactForm from '../components/ContactForm';
import ChairLift from '../components/ChairLift';
import Footer from '../components/Footer';

export default function Home() {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });
  const header_title = intl.formatMessage({ id: "page.home.header.title" });
  const header_description = intl.formatMessage({ id: "page.home.header.description" });
  const logo = intl.formatMessage({ id: "page.home.logo" });

  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="flex flex-col w-full h-full">
        <HeaderSession title={title} header_title={header_title} header_description={header_description} logo={logo}/>
        <LotSession/>
        <ContactForm/>
        <ChairLift/>
      </main>
      <Footer logo={logo}/>
    </div>
  )
}
