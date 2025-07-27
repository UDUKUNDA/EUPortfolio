import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
       

       <div class="max-w-3xl mx-auto text-gray-800 dark:text-gray-200 leading-relaxed text-[17px] font-medium space-y-4">
  <p>
    I’m a passionate <span class="font-semibold text-blue-600 dark:text-blue-400">Software Engineer</span> with a strong foundation in Computer Science and a drive to bridge technology with real-world impact—especially in 
    <span class="italic">AI/ML, Bioinformatics, Data Science, and Health Tech</span>. My expertise spans full-stack development, where I craft secure, scalable applications using modern tools like 
    <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">Node.js</code>, 
    <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">Express.js</code>, 
    <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">Docker</code>, 
    <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">GraphQL</code>, and 
    <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">MS SQL Server</code>.
  </p>

  <p>
    Currently, I’m developing an <span class="font-semibold">Internal IPPIS Support Portal</span> for Rwanda’s Ministry of Public Services and Labor—designing APIs, optimizing databases, and deploying containerized solutions to streamline public-sector operations. My work revolves around turning complex problems into intuitive, efficient systems—whether it’s financial tools built with 
    <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">Laravel</code> & 
    <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">Livewire</code> or backend services powered by 
    <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">TypeScript</code> & 
    <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">PostgreSQL</code>.
  </p>

  <p>
    Beyond code, I value <span class="text-blue-600 dark:text-blue-400">collaboration, empathy, and resilient problem-solving</span>. Technology thrives when it serves people—which is why I’m constantly learning and exploring how AI and data-driven solutions can revolutionize fields like healthcare and public services.
  </p>

  <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-600">
    <p class="font-semibold text-blue-700 dark:text-blue-300">Let’s connect if you’re into:</p>
    <ul class="list-disc list-inside mt-2 space-y-1">
      <li><span class="font-medium">AI/ML, Bioinformatics, or Health Tech</span></li>
      <li><span class="font-medium">Full-stack development & scalable architecture</span></li>
      <li><span class="font-medium">Tech for social impact</span></li>
    </ul>
  </div>

  <p>
    When I’m not debugging or deploying, I’m probably diving into research papers on machine learning or brainstorming how to merge tech with global good. <span class="text-lg">🚀</span>
  </p>
</div>

    {/*  
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    */}
    </div>
  );
};

export default AboutMeText;
