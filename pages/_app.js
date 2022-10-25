import '../styles/globals.css'
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../lang/en.json";
import fr from "../lang/fr.json";

const messages = {
  en,
  fr
};

function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  );
}

export default MyApp
