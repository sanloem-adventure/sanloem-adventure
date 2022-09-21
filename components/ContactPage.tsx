import {NextPage} from "next";
import { useRouter } from "next/router";
import React, {useState} from "react";

const ContactPage: NextPage = () => {

    const [submitterName, setSubmitterName] = useState("");
    const router = useRouter();
    const confirmationScreenVisible = router.query?.success && router.query.success === "true";
    const formVisible = !confirmationScreenVisible;

    //define confirmation message
    const ConfirmationMessage = (
        <React.Fragment>
            <div className="flex flex-col justify-between p-4">
                <div className="bg-green-500 border-l-4 border-green-600 text-white-700 p-4 mb-2" role="alert">
                    <p className="font-bold">Merci d'avoir soumis ce formulaire.</p>
                    <p>Nous reviendrons vers vous bientôt.</p>
                </div>
                <button className="bg-sky-900 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase" onClick={() => router.replace("/", undefined, { shallow: true })}> Soumettre un autre</button>
            </div>
        </React.Fragment>
    );

    //define contact form
    const ContactForm = (
        <form className="rounded px-8 pt-6 pb-4 mb-1" method="POST"
              name="contact-form"
              action="?success=true" data-netlify="true" data-netlify-honeypot="bot-field">

            <input
                type="hidden"
                name="subject"
                value={`You've got mail from ${submitterName}`}
            />
            <input type="hidden" name="form-name" value="contact-form" />
            <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
            </p>

            <div className="mb-4 text-left">
                <label className="block text-gray-700 text-sm font-bold mb-2 uppercase" htmlFor="fullName">
                    Nom, Prénom *
                </label>
                <input required  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       id="name" name="name"  onChange={(e) => setSubmitterName(e.target.value)} type="text" placeholder="Nom, Prénom" />
            </div>
            <div className="mb-4 text-left">
                <label className="block text-gray-700 text-sm font-bold mb-2 uppercase" htmlFor="email">
                Courriel *
                </label>
                <input required  id="email" placeholder="Courriel" type="email" className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email"/>

            </div>
            {/*<label className="block text-gray-700 text-sm font-bold mb-2 uppercase"  htmlFor="message">Message *</label>*/}
            {/*<textarea id="message" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>*/}
            <div className="flex justify-end">
                <button
                    className="bg-sky-900 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Envoi
                </button>
            </div>
        </form>
    );





    return (

            <section className="flex justify-center w-full  bg-tertiary">
                <div className="w-full max-w-md">
                    {formVisible ? ContactForm : ConfirmationMessage}
                </div>
            </section>
    );
}

export default ContactPage;