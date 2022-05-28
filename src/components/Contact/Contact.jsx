import React, { useState } from "react";
import emailjs from "emailjs-com";
import Alert from "../alerts/Alert";
import * as yup from "yup";
const serviceId = import.meta.env.VITE_APP_SERVICEID;
const templateId = import.meta.env.VITE_APP_TEMPLATEID;
const userId = import.meta.env.VITE_APP_PUBLICKEY;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setALertMessage] = useState(
    "Message sent successfully !"
  );
  const closeAlert = () => setShowAlert(false);

  let schema = yup.object().shape({
    email: yup.string().email().required(),
  });
  const sendEmail = async () => {
    try {
      const isValidEmail = await schema.isValid({ email });
      if (!isValidEmail) {
        setALertMessage("invalid Email");
        setError(true);
        setShowAlert(true);
        return;
      }
      if (!message || !name) {
        setALertMessage("please fill all the required input");
        setError(true);
        setShowAlert(true);
        return;
      }

      setError(false);
      setShowAlert(false);
      setLoading(true);

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          message,
        },
        userId
      );

      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      setALertMessage("Message sent successfully !");
      setError(false);
      setShowAlert(true);
    } catch (error) {
      setLoading(false);
      setError(true);
      setALertMessage(" Something went wrong try again!");
      setShowAlert(true);
    }
  };

  return (
    <section className="relative block py-24 lg:pt-0 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-6/12 px-4">
            <div
              className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              data-aos="fade-up-right"
            >
              <div className="flex-auto p-5 lg:p-10 bg-orange-500 text-white">
                <h4 className="text-2xl font-semibold">
                  Want to work with us?
                </h4>
                <p className="leading-relaxed mt-1 mb-4">
                  Complete this form and we will get back to you in 24 hours.
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    for="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full text-black "
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                    style={{ transition: "all 0.15s ease 0s" }}
                    value={name}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full text-black"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ transition: "all 0.15s ease 0s" }}
                    value={email}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    for="message"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    cols="80"
                    className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full text-black"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    value={message}
                  ></textarea>
                </div>
                <div className="text-center mt-6">
                  {loading ? (
                    <button
                      type="button"
                      className="bg-gray-900  text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      disabled
                    >
                      <div className="flex flex-row items-center justify-center">
                        <svg
                          class="animate-spin bg-red-700 h-5  w-5 mr-3 "
                          viewBox="0 0 24 24"
                        ></svg>
                        <div>Processing...</div>
                      </div>
                    </button>
                  ) : (
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all 0.15s ease 0s" }}
                      onClick={sendEmail}
                    >
                      {" "}
                      {"Send Message"}
                    </button>
                  )}
                  {showAlert && (
                    <Alert
                      bg={error ? "bg-red-100" : "bg-teal-100"}
                      txt={error ? "text-red-700" : "text-teal-700"}
                      brd={error ? "border-red-400" : "border-teal-400"}
                      iconColor={error ? "text-red-500" : "text-teal-500"}
                      alertMessage={alertMessage}
                      closeAlert={closeAlert}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
