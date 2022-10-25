import React from 'react'
import { useIntl } from "react-intl";

const ContactForm = () => {
  const intl = useIntl();

  const contact_title = intl.formatMessage({ id: "page.home.contact.title" })
  const contact_first_name = intl.formatMessage({ id: "page.home.contact.form.firstname" })
  const contact_name_name = intl.formatMessage({ id: "page.home.contact.form.lastname" })
  const contact_phone = intl.formatMessage({ id: "page.home.contact.form.phone" })
  const contact_email = intl.formatMessage({ id: "page.home.contact.form.email" })
  const contact_submit = intl.formatMessage({ id: "page.home.contact.form.submit" })

  return (
    <session className="flex flex-col py-10 xl:py-20 bg-secondary gap-10">
      <h4 className="text-center text-2xl font-light">{contact_title}</h4>
      <div className="flex flex-col xl:flex-row w-full">
        <div className="flex flex-col gap-10 w-full xl:w-7/12">
          <form name="contact" method="POST" data-netlify="true" className="slef-center xl:self-end font-light text-sm flex flex-col gap-6 xl:mr-20 xl:px-0 px-10">
            <label className="flex flex-row gap-4 w-full xl:justify-end">
              <span className="self-center text-right w-5/12 uppercase">{contact_first_name}</span>
              <input type="text" name="first_name" className="rounded-lg w-full xl:w-7/12 px-4 py-2" />
            </label>
            <label className="flex flex-row gap-4 w-full justify-end">
              <span className="self-center text-right w-5/12 uppercase">{contact_name_name}</span>
              <input type="text" name="last_name" className="rounded-lg w-full xl:w-7/12 px-4 py-2" />
            </label>
            <div className="flex flex-col xl:flex-row gap-6 justify-end">
              <div className="w-full xl:w-5/12 flex flex-col gap-6">
                <label className="flex flex-row xl:grid xl:grid-cols-2 gap-4 justify-end">
                  <span className="xl:w-full w-5/12 self-center text-right">{contact_phone}</span>
                  <input type="text" name="phone" className="w-full rounded-lg px-4 py-2" />
                </label>
                <label className="flex flex-row xl:grid xl:grid-cols-2 gap-4 justify-end">
                  <span className="xl:w-full w-5/12 self-center text-right">{contact_email}</span>
                  <input type="email" name="email" className="w-full rounded-lg px-4 py-2" />
                </label>
              </div>
              <div className="self-center xl:flex xl:flex-col w-full xl:w-4/12">
                <label className="self-center flex flex-col w-full gap-4">
                  <span className="w-full text-center">LOTS YOU ARE INTERESTED IN</span>
                  <textarea type="text" className="rounded-lg w-auto h-16 text-xl px-4 py-2" />
                </label>
              </div>
            </div>
            <button type="submit" className="xl:self-end text-white bg-dark-blue px-4 py-2 rounded-lg xl:w-4/12 w-full">{contact_submit}</button>
          </form>
        </div>
        <div className="flex flex-col xl:w-4/12 gap-2 xl:gap-6 mt-16 xl:mt-16 w-full">
          <h4 className="text-center">OUR CONTACT INFO</h4>
          <div className="self-center flex flex-col">
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