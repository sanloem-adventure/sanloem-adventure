import React from 'react'
import { useIntl } from "react-intl";

const ContactForm = () => {
  const intl = useIntl();

  const contact_title = intl.formatMessage({ id: "page.home.contact.title" })
  const contact_subtitle = intl.formatMessage({ id: "page.home.contact.subtitle" })
  const contact_first_name = intl.formatMessage({ id: "page.home.contact.form.firstname" })
  const contact_name_name = intl.formatMessage({ id: "page.home.contact.form.lastname" })
  const contact_phone = intl.formatMessage({ id: "page.home.contact.form.phone" })
  const contact_email = intl.formatMessage({ id: "page.home.contact.form.email" })
  const contact_submit = intl.formatMessage({ id: "page.home.contact.form.submit" })
  const interest = intl.formatMessage({ id: "page.home.contact.form.interest" })

  return (
    <session id="contact" className="flex flex-col xs:px-10 sm:py-20 bg-secondary gap-10 w-full mx-auto xs:py-10 px-4 py-10">
      <div className="w-full flex flex-row">
        <div className="md:w-7/12 w-full flex flex-col">
          <h4 className="md:self-end self-center text-center xs:text-xl text-2xl font-light">{contact_title}</h4>
        </div>
      </div>
      <div className="flex lg:flex-row  flex-col w-full">
        <div className="flex flex-col gap-10 md:w-8/12 xs:px-4">
          <form name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            action="/thank-you"
            onSubmit="submit"
            className="flex flex-col gap-6 w-full font-light">
            <label className="flex flex-col md:flex-row gap-4 w-full md:justify-end">
              <span className="text-start md:text-right w-full md:w-5/12 uppercase">{contact_first_name}</span>
              <input type="text" name="first_name" className="rounded-lg w-full md:w-7/12 px-4 py-2"/>
            </label>
            <label className="flex flex-col md:flex-row gap-4 w-full justify-end">
              <span className="text-start md:text-right w-full md:w-5/12 uppercase">{contact_name_name}</span>
              <input type="text" name="last_name" className="rounded-lg w-full md:w-7/12 px-4 py-2"/>
            </label>
            <label className="flex flex-col md:flex-row gap-4 w-full justify-end">
              <span className="text-start md:text-right w-full md:w-5/12 uppercase">{contact_email}</span>
              <input type="email" name="email" className="rounded-lg w-full md:w-7/12 px-4 py-2"/>
            </label>
            <div className="flex flex-col gap-10 md:flex-row w-full 2xl:pl-5 md:pl-11">
              <div className="self-end w-full xl:w-9/12 md:w-10/12 flex flex-col gap-6">
                <label className="flex flex-col md:flex-row gap-4 w-full justify-end md:pr-3">
                  <span className="self-start md:text-end md:self-center md:w-40 uppercase font-light">{contact_phone}</span>
                  <input type="text" name="phone" className="md:w-5/12 h-10 rounded-lg md:px-0 px-4 md:py-2" />
                </label>
                <label className="flex flex-col md:flex-row gap-4 w-full justify-end sm:pr-3">
                  <span className="self-start md:text-end  md:self-center w-full md:w-40 font-light text-sm">{interest}</span>
                  <input type="text" name="interest" className="rounded-lg h-10 md:w-5/12 px-4 py-2"/>
                </label>
              </div>
              <div className="md:w-3/12 w-full flex flex-col self-end md:pl-10 justify-end">
                <button type="submit" className="uppercase self-end text-white bg-dark-blue px-4 py-2 rounded-lg w-full">{contact_submit}</button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-16 md:self-center self-start justify-start flex flex-col px-4 sm:pl-16 md:w-4/12 gap-2 md:gap-6 w-full">
          <h4 className="text-center md:text-start text-xl font-light">{contact_subtitle}</h4>
          <div className="self-center md:self-start flex flex-col">
            <div className="flex flex-row gap-4">
              <span className="font-light">email</span>
              <span>info@ts6.ca</span>
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-sm font-light">phone</span>
              <span className="text-sm">514-476-3449</span>
            </div>
          </div>
        </div>
      </div>
    </session>
  )
}

export default ContactForm