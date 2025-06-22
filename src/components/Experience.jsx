import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          Experience
        </motion.h2>

        {/* Used Car Guys */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-violet-700 dark:text-violet-400">
            Sales & Purchasing Executive
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            The Used Car Guys GmbH · April 2024 – Present · Sindelfingen, Germany
          </p>
          <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-400">
            <li>Facilitating the US military automotive sales for multiple locations in Germany</li>
            <li>Working with Salesforce CRM to streamline customer interactions</li>
            <li>Bridging digital tools with traditional automotive sales systems</li>
          </ul>
        </div>

        {/* Self-employed Business */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-violet-700 dark:text-violet-400">
            Founder – Marketing Solid Foundations, LLC
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Remote · 2012 – 2016 (Closed due to relocation)
          </p>
          <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-400">
            <li>SEO and digital growth consulting for small businesses</li>
            <li>Created web funnels and optimized Google My Business presence</li>
          </ul>
        </div>

        {/* Banking / Healthcare */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-violet-700 dark:text-violet-400">
            Business Banking & Healthcare Admin Roles
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            USA · 1995 – 2012
          </p>
          <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-400">
            <li>Loan officer, branch manager, and business development roles</li>
            <li>Also held supervisory admin roles in healthcare facilities</li>
          </ul>
        </div>

        {/* CV Downloads */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/assets/cv/UK-CV-Terry-Lombardi.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition"
          >
            <FaFileDownload className="mr-2" />
            Download UK CV
          </a>

          <a
            href="/assets/cv/German-CV-Terry-Lombardi.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            <FaFileDownload className="mr-2" />
            Download German CV
          </a>
        </div>
      </div>
    </section>
  );
}
