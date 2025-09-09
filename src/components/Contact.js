function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Contact Me</h2>

        <p className="mb-4">
          📧 Email:{" "}
          <a
            href="mailto:pantonenko@ufl.edu"
            className="text-indigo-600 hover:underline"
          >
            pantonenko@ufl.edu
          </a>
        </p>

        <p className="mb-4">
          🔗 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/antonenkopolina"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            linkedin.com/in/antonenkopolina
          </a>
        </p>

        <p>
          📝 GitHub:{" "}
          <a
            href="https://github.com/pantonenko"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            github.com/pantonenko
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;