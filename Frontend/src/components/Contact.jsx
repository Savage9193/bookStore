import React from 'react'

function Contact() {
  return (
    <div >
     <div className="w-full" id="contact-me">
  <div className="container pt-10">
    <h1 className="text-5xl text-red-600 pt-20 pl-14">Contact me</h1>
    <h3 className="text-3xl text-blue-700 capitalize pl-14">
      Questions, Thoughts, Or Just Want To Say Hello?
    </h3>

    <div className="flex flex-col mt-6 items-center justify-center">
      <form
        className="flex flex-col gap-8 w-4/5 mx-8 my-8"
        action="https://formspree.io/f/mpzvlkrz"
        method="POST"
        name="contact"
      >
        <div className="w-full">
          <input
            className="bg-gray-100 dark:bg-slate-800 dark:text-white w-full h-10 px-8 text-lg rounded-md shadow-md font-medium border-none mt-7"
            type="text"
            name="A"
            id="A"
            placeholder="Enter your name"
            required
            autoComplete="off"
          />

          <input
            className="bg-gray-100 dark:bg-slate-800 dark:text-white w-full h-10 px-8 text-lg rounded-md shadow-md font-medium border-none mt-7"
            type="email"
            name="email"
            id="email"
            placeholder="demo@gmail.com"
            required
            autoComplete="off"
          />

          <input
            className="bg-gray-100 dark:bg-slate-800 dark:text-white w-full h-10 px-8 text-lg rounded-md shadow-md font-medium border-none mt-7"
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject"
            required
            autoComplete="off"
          />

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="bg-gray-100 dark:bg-slate-800 dark:text-white w-full h-auto pt-4 px-8 text-lg rounded-md shadow-md font-medium border-none mt-7"
            placeholder="Enter your message"
            required
            autoComplete="off"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-pink-500 text-white text-lg px-4 py-2 rounded-md hover:scale-90"
            id="submit-btn"
          >
            Send Message
            <i className="fa-solid fa-paper-plane px-4 text-xl"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact;
