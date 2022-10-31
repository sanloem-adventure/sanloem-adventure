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
  const interest = intl.formatMessage({ id: "page.home.contact.form.interest" })

  return (
    <session id="contact" className="flex flex-col md:py-10 bg-secondary gap-10 w-full max-w-[1390px] mx-auto xs:py-10">
      <div className="w-full flex flex-row">
        <div className="w-7/12 flex flex-col">
          <h4 className="self-end ext-center text-2xl font-light">{contact_title}</h4>
        </div>
      </div>
      <div className="flex sm:flex-row xs:flex-col w-full">
        <div className="flex flex-col gap-10 sm:w-8/12 xs:px-4">
          <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-6 w-full font-light">
            <label className="flex flex-col sm:flex-row gap-4 w-full md:justify-end">
              <span className="xs:text-start text-right w-5/12 uppercase">{contact_first_name}</span>
              <input type="text" name="first_name" className="rounded-lg w-full md:w-7/12 px-4 py-2"/>
            </label>
            <label className="flex flex-col sm:flex-row gap-4 w-full justify-end">
              <span className="xs:text-start text-right w-5/12 uppercase">{contact_name_name}</span>
              <input type="text" name="last_name" className="rounded-lg w-full md:w-7/12 px-4 py-2"/>
            </label>
            <label className="flex flex-col sm:flex-row gap-4 w-full justify-end">
              <span className="xs:text-start text-right w-5/12 uppercase">{contact_email}</span>
              <input type="email" name="email" className="rounded-lg w-full md:w-7/12 px-4 py-2"/>
            </label>
            <div className="flex flex-row w-full">
              <div className="self-end sm:w-9/12 flex flex-col gap-6">
                <label className="flex flex-col sm:flex-row gap-4 w-full justify-end pr-3">
                  <span className="xs:self-start self-center sm:text-right sm:w-40 uppercase font-light">{contact_phone}</span>
                  <input type="text" name="phone" className="sm:w-5/12 h-10 rounded-lg px-4 sm:py-2" />
                </label>
                <label className="flex flex-col sm:flex-row gap-4 w-full justify-end sm:pr-3">
                  <span className="xs:text-start self-center w-full sm:text-right sm:w-40 font-light text-sm">{interest}</span>
                  <input type="text" name="interest" className="rounded-lg h-10  sm:w-5/12 px-4 py-2"/>
                </label>
              </div>
              <div className="sm:w-3/12 flex flex-col self-end pl-10 justify-end">
                <button type="submit" className="self-end text-white bg-dark-blue px-4 py-2 rounded-lg w-full">{contact_submit}</button>
              </div>
            </div>
          </form>
        </div>
        <div className="xs:mt-16 self-start justify-start flex flex-col xs:px-4 sm:pl-16 sm:w-4/12 gap-2 sm:gap-6 w-full">
          <h4 className="text-start text-xl font-light">OUR CONTACT INFO</h4>
          <div className="self-start flex flex-col">
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