function Resume() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Resume</h2>
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
            Download CV
          </button>
        </a>

        <h3 className="text-xl font-semibold mt-6 mb-3">Highlights</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>UF USP/AI Research Scholar (2025-2026)</li>
          <li>Research Intern at UF's SCAN Lab (2023)</li>
          <li>Developer of NiViyni App & Website (2022 – Present)</li>
        </ul>
      </div>
    </div>
  );
}
export default Resume;