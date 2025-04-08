import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-8 shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">AMOGH KRISHNA</h1>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" /> +91 8861043472
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" /> amoghkrishna55@gmail.com
          </div>
          <div className="flex items-center">
            <Linkedin className="w-4 h-4 mr-2" /> amoghkrishna55
          </div>
          <div className="flex items-center">
            <Github className="w-4 h-4 mr-2" /> amoghkrishna55
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" /> Bangalore, Karnataka, India
          </div>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">OBJECTIVE</h2>
        <p className="text-sm">
          A Computer Science student skilled in machine learning and full-stack
          development, with proficiency in Python, C++, Java, TypeScript, Swift,
          and Rust. I aim to enhance my coding expertise and contribute to
          impactful software projects. With experience in tools like TensorFlow,
          React, and NodeJS, and frameworks like PyTorch and Scikit-learn, I
          seek to apply my problem-solving skills to real-world challenges. I am
          eager to grow as a developer and contribute to meaningful,
          cutting-edge technologies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">EDUCATION</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Bachelor of Technology in Computer Science and Engineering
          </h3>
          <div className="text-sm">
            <p className="font-medium">Lovely Professional University</p>
            <p>Jalandhar, Punjab | 2026</p>
            <p>CGPA: 8.05</p>
            <p>
              Relevant Coursework: Data Structures and Algorithms, Operating
              Systems, Database Management Systems, Artificial Intelligence,
              Computer Networks, Software Engineering
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Senior Secondary School Certificate (12th Grade)
          </h3>
          <div className="text-sm">
            <p className="font-medium">Narayana PU College</p>
            <p>Bangalore, Karnataka | 2022</p>
            <p>Percentage: 89%</p>
            <p>
              Key Subjects: Physics, Chemistry, Mathematics, Computer Science
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Secondary School Certificate (10th Grade)
          </h3>
          <div className="text-sm">
            <p className="font-medium">The New Indian School</p>
            <p>Riffa, Bahrain | 2020</p>
            <p>Percentage: 89%</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">TECHNICAL SKILLS</h2>
        <ul className="list-disc list-inside text-sm">
          <li>
            <span className="font-medium">Programming Languages:</span> Python,
            C++, Java, TypeScript, Swift, Rust
          </li>
          <li>
            <span className="font-medium">Tools/Technologies:</span> Figma,
            Transformers, NodeJS, After Effects, Davinci Resolve, ExpressJS
          </li>
          <li>
            <span className="font-medium">Operating Systems:</span> Mac OS,
            Linux
          </li>
          <li>
            <span className="font-medium">Databases:</span> MySQL, MongoDB,
            PostgreSQL
          </li>
          <li>
            <span className="font-medium">Frameworks:</span> Scikit-learn,
            TensorFlow, NumPy, Pandas, React, Svelte, Streamlit, Tauri,
            React-Native
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">PROJECTS</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">SixthSense</h3>
          <p className="text-sm font-medium">
            Tools: ExpressJS, React-Native, TensorFlow
          </p>
          <p className="text-sm">
            Description: SixthSense is a revolutionary mobile application
            designed to transform how visually impaired individuals navigate and
            interact with the world around them. Our mission is to enhance
            awareness, promote independence, and improve the quality of life for
            the blind community.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">CodeCrafter</h3>
          <p className="text-sm font-medium">Tools: NodeJS, PyTorch, Swift</p>
          <p className="text-sm">
            Description: An application designed to answer code-related
            questions. It generates answers using the Falcon-7B model locally on
            my machine. Independently completed, demonstrating self-reliance and
            proficiency.
          </p>
        </div>
      </section>
    </div>
  );
}
