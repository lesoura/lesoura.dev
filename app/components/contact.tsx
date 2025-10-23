import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-3xl px-6 py-32 flex flex-col items-center text-center text-black"
    >
      <h2 className="text-4xl font-bold mb-4 text-[#c39449] uppercase tracking-wide">
        get in touch
      </h2>
      <p className="text-zinc-700 mb-6">
        feel free to reach out via email or connect on github / linkedin.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="mailto:marvirtlester.mb@gmail.com"
          className="flex items-center justify-center gap-2 w-40 px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition"
        >
          <FaEnvelope /> Email
        </a>

        <a
          href="https://github.com/lesoura"
          target="_blank"
          className="flex items-center justify-center gap-2 w-40 px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/marvirt-lester-bajao-79056a303/"
          target="_blank"
          className="flex items-center justify-center gap-2 w-40 px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}
