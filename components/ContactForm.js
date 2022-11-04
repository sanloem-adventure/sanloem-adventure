import React, { useState, useLayoutEffect } from 'react'
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

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
  const after_submit = intl.formatMessage({ id: "page.home.contact.form.after_submit" })

  const router = useRouter()
  const { contact_success, lang } = router.query
  const [isSuccess, setIsSuccess] = useState(true)


  useLayoutEffect(()=>{
    lang !== undefined ? router.push(`/${lang}/?contact_success=true`) : ''
  })

  return (
    <session id="contact" className="flex flex-col xs:px-10 sm:py-20 bg-secondary gap-10 w-full mx-auto xs:py-10 px-4 py-10">
      {contact_success && isSuccess ? <div className="z-50 fixed top-10 w-full"> <div className="mx-auto lg:w-4/12 sm:w-10/12 rounded-lg text-center text-white text-lg px-4 py-2 bg-primary relative"><p>{after_submit}</p> <span className="absolute top-3 right-4 cursor-pointer text-sm rounded-full" onClick={() => setIsSuccess(false)}>x</span></div></div> : ''}
      <div className="w-full flex flex-row">
        <div className="md:w-7/12 w-full flex flex-col">
          <h4 className="md:self-end self-center text-center xs:text-xl text-2xl font-light">{contact_title}</h4>
        </div>
      </div>
      <div className="flex lg:flex-row  flex-col w-full">
        <div className="flex flex-col gap-10 md:w-8/12 xs:px-4">
          <form name="contact"
            action={`/?lang=${router.locale}/?contact_success=true`}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="flex flex-col gap-6 w-full font-light">
            <p hidden>
              <label>
                <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="first_name" className="flex flex-col md:flex-row gap-4 w-full md:justify-end">
              <span className="text-start md:text-right w-full md:w-5/12 uppercase">{contact_first_name}</span>
              <input id="first_name" type="text" required name="first_name" className="rounded-lg w-full md:w-7/12 px-4 py-2"/>
            </label>
            <label htmlFor="last_name" className="flex flex-col md:flex-row gap-4 w-full justify-end">
              <span className="text-start md:text-right w-full md:w-5/12 uppercase">{contact_name_name}</span>
              <input id="last_name" type="text" required name="last_name" className="rounded-lg w-full md:w-7/12 px-4 py-2"/>
            </label>
            <label htmlFor="email" className="flex flex-col md:flex-row gap-4 w-full justify-end">
              <span className="text-start md:text-right w-full md:w-5/12 uppercase">{contact_email}</span>
              <input id="email" type="email" required name="email" className="rounded-lg w-full md:w-7/12 px-4 py-2"/>
            </label>
            <div className="flex flex-col gap-10 md:flex-row w-full 2xl:pl-5 md:pl-11">
              <div className="self-end w-full xl:w-9/12 md:w-10/12 flex flex-col gap-6">
                <label htmlFor="phone" className="flex flex-col md:flex-row gap-4 w-full justify-end md:pr-3">
                  <span className="self-start md:text-end md:self-center md:w-40 uppercase font-light">{contact_phone}</span>
                  <input id="phone" type="text" name="phone" className="md:w-5/12 h-10 rounded-lg px-4 md:py-2" />
                </label>
                <label htmlFor="interest" className="flex flex-col md:flex-row gap-4 w-full justify-end sm:pr-3">
                  <span className="self-start md:text-end  md:self-center w-full md:w-40 font-light text-sm">{interest}</span>
                  <input id="interest" type="text" name="interest" className="rounded-lg h-10 md:w-5/12 px-4 py-2"/>
                </label>
              </div>
              <div className="md:w-3/12 w-full flex flex-col self-end md:pl-10 justify-end">
                <button type="submit" className="uppercase self-end text-white bg-dark-blue px-4 py-2 rounded-lg w-full">{contact_submit}</button>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:mt-0 md:self-center lg:self-start sm:mt-20 sm:self-center sm:w-full self-start justify-start flex flex-col px-4 md:w-4/12 gap-2 md:gap-6 w-full">
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