export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">
        Priyadarshini V 🚀
      </h1>

      <p className="text-xl text-gray-400 mb-8 text-center max-w-xl">
        AIML Engineer | Building intelligent systems and real-world AI solutions
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-cyan-500 rounded-lg text-black font-semibold hover:bg-cyan-400 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}