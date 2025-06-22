export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          I’m open to new opportunities! Whether it’s tech, data, or digital strategy, I’d love to hear from you.
        </p>

        <form
          action="mailto:terrell.lombardi@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 dark:text-white"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
