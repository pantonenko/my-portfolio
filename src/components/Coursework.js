function Coursework() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Coursework</h2>

        <p className="mb-4 text-gray-700">
          <strong>Major:</strong> Computer Engineering
        </p>

        <h3 className="text-xl font-semibold mb-3">Selected Courses</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Data Structures & Algorithms</li>
          <li>Computer & Information Security</li>
          <li>Information and Database Systems</li>
          <li>Application of Discrete Structures</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Other Distinctions</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Awards: </li>
          <li>Dean’s List (2024–2025)</li>
          <li>NCWIT Aspirations in Computing Award (2024)</li>
          <li>Clubs: </li>
          <li>CS Kickstart</li>
          <li>Society of Women Engineers (SWE)</li>
          <li>Women in Computer Science & Engineering (WiCSE)</li>
        </ul>
      </div>
    </div>
  );
}

export default Coursework;