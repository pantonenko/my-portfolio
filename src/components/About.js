function About() {
  return (
    <div className="max-w-3xl mx-auto text-center py-16 px-6">
      <img
        src="/headshot.jpg"
        alt="Polina Antonenko"
        className="w-40 h-40 rounded-full mx-auto shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">Polina Antonenko</h1>
      <blockquote className="italic text-gray-600 mb-6">
        “Humans are allergic to change. They love to say, ‘We’ve always done it this way.’ I try to
        fight that. That’s why I have a clock on my wall that runs counterclockwise.”
        <br />– Grace Hopper
      </blockquote>
      <p className="text-lg leading-relaxed text-gray-700">
        Hello! I’m a Computer Engineering student at the University of Florida. My research focuses
        on estimating power usage of AI using Edge Intelligence. I’m passionate about cybersecurity,
        hardware, the environment, and improving the world around us.
      </p>
    </div>
  );
}
export default About;