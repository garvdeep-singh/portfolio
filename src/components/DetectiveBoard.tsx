import React, { useState } from 'react';
import { Paperclip, MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import profileImage from '@/assets/garvdeep-profile.jpg';
import projectIkipendence from '@/assets/project-ikipendence.jpg';
import projectPersonality from '@/assets/project-personality-game.jpg';
import achievementMap from '@/assets/achievement-map.jpg';
import Magnifier from "@/components/MagnifierCursor";

interface ModalData {
  type: 'case-file' | 'project' | 'console' | 'skills' | 'resume' | 'contact' | null;
  content?: any;
}

export const DetectiveBoard = () => {
  const [modalData, setModalData] = useState<ModalData>({ type: null });

  const openModal = (type: ModalData['type'], content?: any) => {
    setModalData({ type, content });
  };

  const closeModal = () => {
    setModalData({ type: null });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden cursor-detective">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-muted-foreground/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_6px_hsl(var(--string-glow)/0.9)]" />
              <span className="typewriter font-bold tracking-wide">Detective Portfolio</span>
            </div>
            <div className="hidden md:flex items-center gap-6 typewriter text-sm">
              <button onClick={() => openModal('case-file')} className="hover:underline underline-offset-4">Case File</button>
              <button onClick={() => openModal('skills')} className="hover:underline underline-offset-4">Skills</button>
              <button
  onClick={() => openModal('project', { index: 0 })}
  className="hover:underline underline-offset-4"
>
  Projects
</button>
               <button onClick={() => openModal('console')} className="hover:underline underline-offset-4">Evidence Console</button>
              <button onClick={() => openModal('resume')} className="hover:underline underline-offset-4">Resume</button>
              <button onClick={() => openModal('contact')} className="hover:underline underline-offset-4">Contact</button>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" className="typewriter hidden md:inline-flex" onClick={() => openModal('case-file')}>Open Case</Button>
            </div>
          </div>
        </div>
      </nav>
      {/* Spotlight effect */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      
      {/* Cork board background */}
      <div className="absolute inset-0 cork-texture" />
      
      {/* Investigation strings - background layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
  {/** Desktop lines */}
  <g className="hidden md:block">
    <line x1="50%" y1="45%" x2="15%" y2="25%" className="stroke-string stroke-[4px] opacity-80" />
    <line x1="55%" y1="50%" x2="85%" y2="30%" className="stroke-string stroke-[4px] opacity-80" />
    <line x1="15%" y1="30%" x2="25%" y2="75%" className="stroke-string stroke-[4px] opacity-80" />
    <line x1="80%" y1="35%" x2="75%" y2="75%" className="stroke-string stroke-[4px] opacity-80" />
  </g>


</svg>
      
      {/* Evidence pins and items */}
      <div className="relative z-10 pt-20 md:pt-24 pb-8 min-h-screen">

        
        {/* Central Case File (About Me) */}
        
        <div 
          className="relative md:absolute top-6 md:top-1/2 left-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 cursor-pointer mx-auto md:mx-0 max-w-[20rem] mt-6 md:mt-0"
          onClick={() => openModal('case-file')}
        >
          
          {/* Suspicious Note on Top */}
          {/* <Magnifier zoom={2.5} size={180}> */}
<div className="absolute -top-12 left-1/2 transform -translate-x-1/2 -rotate-6 text-yellow-700 font-handwritten text-sm text-center shadow-lg px-4 py-1 bg-paper-aged/80 border border-muted rounded w-80 z-20">
  "Suspected of solving complex problems with coffee ☕"
</div>
          <div className="evidence-pin -top-2 -left-2" />
          <div className="case-file p-6 w-72 h-[22rem] sm:w-80 sm:h-96 relative z-10">
            <div className="absolute top-2 left-4 w-16 h-6 bg-paper-old border border-muted-foreground/30 rounded-sm">
              <div className="typewriter text-xs text-center pt-1">CASE FILE</div>
            </div>
            
            <div className="mt-8">
              <h2 className="typewriter text-xl font-bold mb-4 text-center">Garvdeep Singh</h2>
              
              <div className="polaroid w-32 mx-auto mb-4" style={{ transform: 'rotate(-5deg)' }}>
                <img src={profileImage} alt="Garvdeep Singh" className="w-full h-24 object-cover" />
                <div className="handwritten text-xs text-center mt-1">Prime Suspect</div>
              </div>
              
              <div className="typewriter text-sm space-y-2">
                <p><strong>Subject:</strong> CS Engineering Student</p>
                <p><strong>Specialization:</strong> WebD & DSA</p>
                <p><strong>Status:</strong> Active Developer</p>
                <p><strong>First Spotted:</strong> 2023</p>
              </div>
            </div>
          </div>
        </div>
        {/* </Magnifier> */}


        <div 
  className="block md:absolute top-6 left-4 md:top-28 md:left-16 cursor-pointer"
  onClick={() => openModal('skills')}
>
  <div className="evidence-pin -top-2 -left-2" />
  <div className="evidence-document p-3 w-56 transform rotate-3">
    <div className="badge-confidential absolute top-1 right-2">CONFIDENTIAL</div>
    
    <div className="typewriter text-center mb-2">
      <h3 className="font-bold text-sm">TECHNICAL COMPETENCY</h3>
      <h3 className="font-bold text-sm">REPORT</h3>
      <div className="border-b border-muted-foreground/30 my-1" />
    </div>
    
    <div className="typewriter text-[11px] space-y-2">
      <div>
        <h4 className="font-bold mb-1">LANGUAGES:</h4>
        <p>C++ ████████░░</p>
        <p>HTML/CSS ████████░░</p>
        <p>Python ██████░░░░</p>
        <p>Javascript ██████░░░░</p>
      </div>
      
      <div>
        <h4 className="font-bold mb-1">FRAMEWORKS:</h4>
        <p>• React.js</p>
        <p>• Node.js</p>
        <p>• Express.js</p>
      </div>
      
      <div>
        <h4 className="font-bold mb-1">SOFT SKILLS:</h4>
        <p>• Problem Solving</p>
        <p>• Team Collaboration</p>
        <p>• Creative Thinking</p>
      </div>
    </div>
  </div>
</div>
        
        {/* Project Evidence (Top Right) */}
        <div 
          className="block md:absolute top-6 right-4 md:top-20 md:right-20 cursor-pointer"
          // onClick={() => openModal('project', { title: 'Wall of Passion', image: projectIkipendence })}
          onClick={() =>
  openModal('project', {
    title: 'Wall of Passion',
    image: projectIkipendence,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    summary: 'Collaborative note-sharing platform for NIT Jalandhar students with role-based access and responsive design.',
    live: 'https://ikipendence.com/wallofpassion',
    code: 'https://github.com/garvdeep-singh/Wall_of_Passion'
  })
}
        >
          <div className="evidence-pin -top-2 -left-2" />
          <div className="polaroid w-48 transform -rotate-6">
            <img src={projectIkipendence} alt="Ikipendence Project" className="w-full h-32 object-cover" />
            <div className="typewriter text-sm text-center mt-2">
              Exhibit A - Wall of Passion
            </div>
          </div>
        </div>
        
        <div 
          className="block md:absolute top-36 right-4 md:top-32 md:right-32 cursor-pointer"
          // onClick={() => openModal('project', { title: 'Personality Game', image: projectPersonality })}
          onClick={() =>
  openModal('project', {
    title: 'Personality Game',
    image: projectPersonality,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    summary: 'Interactive personality quiz game with dynamic scoring, responsive UI, and smooth animations.',
    live: 'https://ikipendence.com/personalitygame',
    code: 'https://github.com/garvdeep-singh/PersonalityGame'
  })
}
        >
          <div className="evidence-pin -top-2 -left-2" />
          <div className="polaroid w-44 transform rotate-12">
            <img src={projectPersonality} alt="Personality Game" className="w-full h-28 object-cover" />
            <div className="typewriter text-sm text-center mt-2">
              Personality Game
            </div>
          </div>
        </div>
        
        {/* Achievement Map (Bottom Left) */}
        {/* <div 
          className="block md:absolute bottom-6 left-4 md:bottom-16 md:left-40 cursor-pointer"
          onClick={() => openModal('achievements')}
        >
          <div className="evidence-pin -top-2 -left-2" />
          <div className="evidence-document w-56 h-44 transform -rotate-12">
            <img src={achievementMap} alt="Achievement Map" className="w-full h-full object-cover rounded" />
            <div className="absolute bottom-2 left-2 handwritten text-white bg-black/70 px-2 py-1 rounded">
              Journey Map
            </div>
          </div>
        </div> */}
        {/* Achievement Map (Bottom Left) */}
<div 
  className="block md:absolute bottom-6 left-4 md:bottom-16 md:left-40 cursor-pointer"
  onClick={() => openModal('resume')}  // ⬅️ instead of 'achievements'
>
  <div className="evidence-pin -top-2 -left-2" />
  <div className="evidence-document w-56 h-44 transform -rotate-12">
    <img src={achievementMap} alt="Achievement Map" className="w-full h-full object-cover rounded" />
    <div className="absolute bottom-2 left-2 handwritten text-white bg-black/70 px-2 py-1 rounded">
      
    </div>
  </div>
</div>
        {/* Contact Business Card (Bottom Right) */}
        <div 
          className="block md:absolute bottom-6 right-4 md:bottom-20 md:right-24 cursor-pointer"
          onClick={() => openModal('contact')}
        >
          <div className="evidence-pin -top-2 -left-2" />
          {/* <div className="evidence-document p-4 w-64 h-40 bg-paper"> */}
          <div className="evidence-document p-6 w-80 max-w-xs h-auto bg-paper">
            <div className="typewriter text-center">
              <h3 className="font-bold text-lg mb-2">DETECTIVE CONTACT</h3>
              {/* <h3 className="font-bold text-lg mb-3">DETECTIVE CONTACT</h3> */}
              <div className="border-b border-muted-foreground/30 my-2" />
              
              <div className="text-sm space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Mail size={14} />
                  <span>garvdeep.work@email.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone size={14} />
                  <span>+91 98779-73123</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  {/* <Github size={14} />
                  <span>github.com/garvdeep-singh</span> */}
                  <Github size={14} />
    <a 
      href="https://github.com/garvdeep-singh" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:underline break-all"
      onClick={(e) => e.stopPropagation()}
    >
      github
    </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Linkedin size={14} />
                  <a 
      href="https://www.linkedin.com/in/garvdeep-singh-b8973a1ab/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:underline"
      onClick={(e) => e.stopPropagation()}
    >
      linkedin
    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <Dialog open={modalData.type !== null} onOpenChange={closeModal}>



          <DialogContent className="bg-transparent p-0 shadow-none flex justify-center items-center overflow-visible">
  {modalData.type === 'case-file' && <CaseFileModal />}
  {modalData.type === 'project' && <ProjectModal project={modalData.content} />}
  {modalData.type === 'console' && <ConsoleModal />}
  {modalData.type === 'skills' && <SkillsModal />}
  {/* {modalData.type === 'achievements' && <AchievementsModal />} */}
  {modalData.type === 'resume' && <ResumeModal />}
  {modalData.type === 'contact' && <ContactModal onClose={closeModal}/>}
</DialogContent>



      </Dialog>
    </div>
  );
};

// Modal Components
const CaseFileModal = () => (
  <div className=" bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[+1deg] hover:rotate-0 transition-transform duration-300">
    <DialogHeader>
      <DialogTitle className="text-2xl">Investigation Notes: Garvdeep Singh</DialogTitle>
    </DialogHeader>
    <div className="mt-4 space-y-4">
      <div className="badge-confidential float-right">CASE SOLVED</div>
      <p className="text-sm leading-relaxed">
        Subject is a passionate Computer Science Engineering student with a proven track record in Web Development and Data Structures & Algorithms (DSA). 
  Specializes in creating engaging user experiences and solving complex programming and algorithmic challenges.
      </p>
      
      <div className="border border-muted p-4 rounded">
        <h4 className="font-bold mb-2">Key Findings:</h4>
        <ul className="text-sm space-y-1 list-disc list-inside">
          <li>Self-taught web developer since 2023</li>
          <li>Strong foundation in Data Structures & Algorithms (DSA)</li>
          <li>Proficient in modern JavaScript frameworks</li>
          <li>Passionate about creating meaningful digital experiences</li>
          <li>Active learner with continuous skill development</li>
          <li>Team player with excellent communication skills</li>
        </ul>
      </div>
      
      <p className="text-sm italic">
        "The evidence clearly shows this individual possesses the technical skills, creativity, 
        and dedication required for any development team." <br></br>Case status: HIGHLY RECOMMENDED.
      </p>
    </div>
  </div>
);






const ProjectModal = ({ project }: { project: any }) => {
  const [currentIndex, setCurrentIndex] = useState(
    project?.index || 0
  );

  const projectsList = [
    {
      title: 'Wall of Passion',
      image: projectIkipendence,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      summary: 'Collaborative note-sharing platform for NIT Jalandhar students with role-based access and responsive design.',
      live: 'https://ikipendence.com/wallofpassion',
      code: 'https://github.com/garvdeep-singh/Wall_of_Passion'
    },
    {
      title: 'Personality Game',
      image: projectPersonality,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      summary: 'Interactive personality quiz game with dynamic scoring, responsive UI, and smooth animations.',
      live: 'https://ikipendence.com/personalitygame',
      code: 'https://github.com/garvdeep-singh/PersonalityGame'
    }
  ];

  const currentProject = projectsList[currentIndex];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % projectsList.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + projectsList.length) % projectsList.length);

  return (
    <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[+2deg] hover:rotate-0 transition-transform duration-300 max-w-xl">
      <DialogHeader>
        <DialogTitle className="text-2xl">Evidence Analysis: {currentProject?.title}</DialogTitle>
      </DialogHeader>
      <div className="mt-4 space-y-4">
        <img src={currentProject?.image} alt={currentProject?.title} className="w-full h-64 object-cover rounded border" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2">Project Details:</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Type:</strong> Web Application</li>
              <li><strong>Role:</strong> Full-Stack Developer</li>
              <li><strong>Duration:</strong> 2-3 weeks</li>
              <li><strong>Status:</strong> Completed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {currentProject?.technologies?.map((tech: string) => (
                <span key={tech} className="badge-confidential text-xs">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-muted p-4 rounded">
          <h4 className="font-bold mb-2">Investigation Summary:</h4>
          <p className="text-sm">{currentProject?.summary}</p>
        </div>
        <div className="flex gap-2">
          {currentProject?.live && (
            <Button variant="outline" size="sm" className="typewriter">
              <a href={currentProject.live} target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            </Button>
          )}
          {currentProject?.code && (
            <Button variant="outline" size="sm" className="typewriter">
              <a href={currentProject.code} target="_blank" rel="noopener noreferrer">
                Examine Code
              </a>
            </Button>
          )}
        </div>

        {/* Add Next/Prev buttons */}
        <div className="flex justify-between mt-4">
          <Button variant="outline" size="sm" onClick={handlePrev}>← Previous</Button>
          <Button variant="outline" size="sm" onClick={handleNext}>Next →</Button>
        </div>
      </div>
    </div>
  );
};


const SkillsModal = () => (
  <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-30">
    <DialogHeader>
      <DialogTitle className="text-2xl">Complete Technical Analysis</DialogTitle>
    </DialogHeader>
    <div className="mt-4 space-y-6">
      <div className="badge-confidential float-right">VERIFIED</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold mb-3">Programming Languages:</h4>
          <div className="space-y-2">
            {[
              { name: 'C++', level: 85 },
              { name: 'HTML/CSS', level: 90 },
              { name: 'Python', level: 70 },
              { name: 'Java', level: 65 }
            ].map(skill => (
              <div key={skill.name} className="text-sm">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-3">Frameworks & Tools:</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'VS Code', 'Postman', 'Github'].map(tool => (
              <div key={tool} className="bg-secondary p-2 rounded text-center">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-3">Soft Skills Assessment:</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <ul className="space-y-1 list-disc list-inside">
            <li>Creative Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Project Management</li>
            <li>Continuous Learning</li>
          </ul>
          <ul className="space-y-1 list-disc list-inside">
            <li>Attention to Detail</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// const AchievementsModal = () => (
//   <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
//     <DialogHeader>
//       <DialogTitle className="text-2xl">Journey Timeline & Achievements</DialogTitle>
//     </DialogHeader>
//     <div className="mt-4 space-y-4">
//       <img src={achievementMap} alt="Achievement Map" className="w-full h-48 object-cover rounded border" />
      
//       <div className="space-y-4">
//         {[
//           { year: '2024', event: 'Hackathon Participation', location: 'TechFest College' },
//           { year: '2023', event: 'Web Development Certification', location: 'Online Course' },
//           { year: '2023', event: 'First Major Project Launch', location: 'Personal Portfolio' },
//           { year: '2022', event: 'Started Web Development Journey', location: 'Self-Learning' }
//         ].map((achievement, index) => (
//           <div key={index} className="flex items-center gap-4 p-3 border border-muted rounded">
//             <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
//             <div className="flex-1">
//               <div className="font-bold">{achievement.event}</div>
//               <div className="text-sm text-muted-foreground">{achievement.year} • {achievement.location}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

const ResumeModal = () => (
  <div className="bg-paper-aged p-6 rounded-lg shadow-lg w-full h-[80vh]">
    <DialogHeader>
      <DialogTitle className="text-2xl">My Resume</DialogTitle>
    </DialogHeader>
    <div className="mt-4 w-full h-full">
      <iframe
        // src="https://drive.google.com/file/d/1KJxHRQSGA13_82DPcnatZvoaCxFoC9As/preview"
        src="/resume.pdf"
        className="w-full h-[70vh] border rounded"
        title="Resume"
      />
    </div>
  </div>
);

const ContactModal = ({ onClose }) => {
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzzvwvzj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        setStatus("success");
        form.reset();

        // Auto-close modal after 2 seconds
        setTimeout(() => {
          setStatus(null);
          onClose?.();
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
      <DialogHeader>
        <DialogTitle className="text-2xl">Open Communication Channel</DialogTitle>
      </DialogHeader>
      <div className="mt-4 space-y-4">
        <p className="text-sm">Ready to discuss potential collaboration or have questions about the case?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() =>
              (window.location.href =
                "mailto:garvdeep.work@email.com?subject=Inquiry")
            }
          >
            <Mail size={16} />
            Send Message
          </Button>

          <Button asChild variant="outline" className="flex items-center gap-2">
            <a
              href="https://github.com/garvdeep-singh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              View GitHub
            </a>
          </Button>

          <Button asChild variant="outline" className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/garvdeep-singh-b8973a1ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://wa.me/919877973123?text=Hi%20Garvdeep,%20I%20would%20like%20to%20schedule%20a%20call.",
                "_blank"
              )
            }
          >
            <Phone size={16} />
            Schedule Call
          </Button>
        </div>

        <div className="border border-muted p-4 rounded">
          <h4 className="font-bold mb-2">Quick Contact Form:</h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border border-muted rounded typewriter text-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border border-muted rounded typewriter text-sm"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              className="w-full p-2 border border-muted rounded typewriter text-sm"
              required
            />
            <Button type="submit" className="w-full typewriter">
              Submit Evidence
            </Button>
          </form>

          {status === "success" && (
            <p className="mt-2 text-green-600 text-sm">
              ✅ Evidence submitted successfully! Closing...
            </p>
          )}
          {status === "error" && (
            <p className="mt-2 text-red-600 text-sm">
              ❌ There was an error. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};







import { useEffect, useRef } from "react";
// import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ConsoleModal = () => {
  const [history, setHistory] = useState<string[]>([
    "Welcome to the Evidence Console. Type 'help' for commands."
  ]);
  const [currentLine, setCurrentLine] = useState("$ ");
  const terminalRef = useRef<HTMLDivElement>(null);


  // --- Handle key input ---
const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    const command = currentLine.slice(2).trim(); // remove "> "
    if (!command) {
      setHistory(prev => [...prev, currentLine]);
      setCurrentLine("$ ");
      return;
    }

    let output = "";
    switch (command.toLowerCase()) {
      case "help":
        output = "Available commands: resume, projects, skills, achievements, contact, clear";
        break;
      case "resume":
        output = "Resume: https://drive.google.com/file/d/1KJxHRQSGA13_82DPcnatZvoaCxFoC9As/view?usp=sharing";
        break;

      case "projects":
        output = "Projects: Wall of Passion, Personality Game";
        break;
      case "contact":
        output = "Email: garvdeep.work@gmail.com | Github: github.com/garvdeep-singh"  ;
        break;
      case "skills":
        output = "C, → C++, → JavaScript, → TypeScript, → Java, → Python, → Node.js, → Express.js, → React.js, → Next.js, → Git/Github";
        break;
      case "achievements":
        output = "Achievements: Hackathons, Certifications, Personal Projects";
        break;
      case "clear":
        setHistory(["Welcome to the Evidence Console. Type 'help' for commands."]);
        setCurrentLine("$ ");
        return;
      default:
        output = `'${command}' is not recognized. Type 'help' for commands.`;
    }

    // only add command and output to history
    setHistory(prev => [...prev, currentLine, output]);
    setCurrentLine("$ ");
  } else if (e.key === "Backspace") {
    setCurrentLine(prev => (prev.length > 2 ? prev.slice(0, -1) : prev));
  } else if (e.key.length === 1) {
    setCurrentLine(prev => prev + e.key);
  }
};
  // --- Auto-scroll to bottom ---
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, currentLine]);

  return (
    <div
      className="bg-black text-green-400 p-4 font-mono text-sm rounded h-96 overflow-y-auto"
      ref={terminalRef}
    >
      <DialogHeader>
        <DialogTitle className="text-2xl text-green-400">
          Evidence Console
        </DialogTitle>
      </DialogHeader>

      <div className="mt-2">
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}

        {/* Active input line with blinking cursor */}
        <div>
          {currentLine}
          <span className="inline-block w-2 animate-blink">█</span>
        </div>

        {/* Hidden input to capture keystrokes */}
        <input
          type="text"
          className="absolute opacity-0 pointer-events-none"
          value={currentLine}
          onChange={() => {}}
          onKeyDown={handleKey}
          autoFocus
        />
      </div>

      {/* Blinking cursor animation */}
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            50.01%, 100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ConsoleModal;


























// import { useEffect, useRef } from "react";
// // import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

// const ConsoleModal = () => {
//   const [history, setHistory] = useState<string[]>([
//     "Welcome to the Evidence Console. Type 'help' for commands."
//   ]);
//   const [currentLine, setCurrentLine] = useState("> ");
//   const [isTyping, setIsTyping] = useState(false);
//   const terminalRef = useRef<HTMLDivElement>(null);

//   // --- Typing animation for output ---
//   const typeLine = (line: string, callback?: () => void) => {
//     setIsTyping(true);
//     let index = 0;

//     // add empty line for animation
//     setHistory(prev => [...prev, ""]);

//     const interval = setInterval(() => {
//       setHistory(prev => {
//         const newHistory = [...prev];
//         newHistory[newHistory.length - 1] += line[index] || "";
//         return newHistory;
//       });

//       index++;
//       if (index >= line.length) {
//         clearInterval(interval);
//         setIsTyping(false);
//         // add a new prompt
//         setHistory(prev => [...prev, "> "]);
//         setCurrentLine("> ");
//         callback?.();
//       }
//     }, 30); // typing speed
//   };

//   // --- Handle key input ---
//   const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (isTyping) return; // ignore input while typing animation runs

//     if (e.key === "Enter") {
//       const command = currentLine.slice(2).trim();
//       if (!command) {
//         setHistory(prev => [...prev, "> "]);
//         setCurrentLine("> ");
//         return;
//       }

//       let output = "";
//       switch (command.toLowerCase()) {
//         case "help":
//           output = "Available commands: resume, projects, skills, achievements, clear";
//           break;
//         case "resume":
//           output = "Resume: https://garvdeep.vercel.app/resume.pdf";
//           break;
//         case "projects":
//           output = "Projects: Wall of Passion, Personality Game";
//           break;
//         case "skills":
//           output = "Skills: C++, Python, JavaScript, React, Node.js...";
//           break;
//         case "achievements":
//           output = "Achievements: Hackathons, Certifications, Personal Projects";
//           break;
//         case "clear":
//           setHistory([]);
//           setCurrentLine("> ");
//           return;
//         default:
//           output = `'${command}' is not recognized. Type 'help' for commands.`;
//       }

//       // save entered command before typing response
//       setHistory(prev => [...prev, currentLine]);
//       setCurrentLine(""); 
//       typeLine(output);
//     } else if (e.key === "Backspace") {
//       setCurrentLine(prev => (prev.length > 2 ? prev.slice(0, -1) : prev));
//     } else if (e.key.length === 1) {
//       setCurrentLine(prev => prev + e.key);
//     }
//   };

//   // --- Auto-scroll to bottom ---
//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [history, currentLine]);

//   return (
//     <div
//       className="bg-black text-green-400 p-4 font-mono text-sm rounded h-96 overflow-y-auto"
//       ref={terminalRef}
//     >
//       <DialogHeader>
//         <DialogTitle className="text-2xl text-green-400">
//           Evidence Console
//         </DialogTitle>
//       </DialogHeader>

//       <div className="mt-2">
//         {history.map((line, idx) => (
//           <div key={idx}>{line}</div>
//         ))}

//         {/* Active input line with blinking cursor */}
//         {!isTyping && (
//           <div>
//             {currentLine}
//             <span className="inline-block w-2 animate-blink">█</span>
//           </div>
//         )}

//         {/* Hidden input to capture keystrokes */}
//         <input
//           type="text"
//           className="absolute opacity-0 pointer-events-none"
//           value={currentLine}
//           onChange={() => {}}
//           onKeyDown={handleKey}
//           autoFocus
//         />
//       </div>

//       {/* Blinking cursor animation */}
//       <style>
//         {`
//           @keyframes blink {
//             0%, 50% { opacity: 1; }
//             50.01%, 100% { opacity: 0; }
//           }
//           .animate-blink {
//             animation: blink 1s step-start infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ConsoleModal;




















// import { useEffect, useRef } from "react";
// // import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

// const ConsoleModal = () => {
//   const [history, setHistory] = useState<string[]>([
//     "Welcome to the Evidence Console. Type 'help' for commands."
//   ]);
//   const [currentLine, setCurrentLine] = useState("> ");
//   const [isTyping, setIsTyping] = useState(false);
//   const terminalRef = useRef<HTMLDivElement>(null);

//   // --- Typing animation ---
//   const typeLine = (line: string, callback?: () => void) => {
//     setIsTyping(true);
//     let index = 0;
//     setHistory(prev => [...prev, ""]); // reserve a new line for typing

//     const interval = setInterval(() => {
//       setHistory(prev => {
//         const newHistory = [...prev];
//         newHistory[newHistory.length - 1] += line[index] || "";
//         return newHistory;
//       });

//       index++;
//       if (index >= line.length) {
//         clearInterval(interval);
//         setIsTyping(false);
//         setHistory(prev => [...prev, "> "]); // new prompt line
//         setCurrentLine("> ");
//         callback?.();
//       }
//     }, 30); // typing speed
//   };

//   // --- Handle key input ---
//   const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (isTyping) return;

//     if (e.key === "Enter") {
//       const command = currentLine.slice(2).trim(); // remove '> '
//       if (!command) {
//         setHistory(prev => [...prev, "> "]);
//         setCurrentLine("> ");
//         return;
//       }

//       let output = "";
//       switch (command.toLowerCase()) {
//         case "help":
//           output = "Available commands: resume, projects, skills, achievements, clear";
//           break;
//         case "resume":
//           output = "Resume: https://garvdeep.vercel.app/resume.pdf";
//           break;
//         case "projects":
//           output = "Projects: Wall of Passion, Personality Game";
//           break;
//         case "skills":
//           output = "Skills: C++, Python, JavaScript, React, Node.js...";
//           break;
//         case "achievements":
//           output = "Achievements: Hackathons, Certifications, Personal Projects";
//           break;
//         case "clear":
//           setHistory([]);
//           setCurrentLine("> ");
//           return;
//         default:
//           output = `'${command}' is not recognized. Type 'help' for commands.`;
//       }

//       // save the entered command first
//       setHistory(prev => [...prev, currentLine]);
//       setCurrentLine(""); // clear so we don’t duplicate
//       typeLine(output);
//     } else if (e.key === "Backspace") {
//       setCurrentLine(prev => (prev.length > 2 ? prev.slice(0, -1) : prev));
//     } else if (e.key.length === 1) {
//       setCurrentLine(prev => prev + e.key);
//     }
//   };

//   // --- Auto scroll to bottom ---
//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [history, currentLine]);

//   return (
//     <div
//       className="bg-black text-green-400 p-4 font-mono text-sm rounded h-96 overflow-y-auto"
//       ref={terminalRef}
//     >
//       <DialogHeader>
//         <DialogTitle className="text-2xl text-green-400">Evidence Console</DialogTitle>
//       </DialogHeader>

//       <div className="mt-2">
//         {history.map((line, idx) => (
//           <div key={idx}>{line}</div>
//         ))}

//         {/* Active input line */}
//         {!isTyping && (
//           <div>
//             {currentLine}
//             <span className="inline-block w-2 animate-blink">█</span>
//           </div>
//         )}

//         {/* Hidden input field to capture keystrokes */}
//         <input
//           type="text"
//           className="absolute opacity-0 pointer-events-none"
//           value={currentLine}
//           onChange={() => {}}
//           onKeyDown={handleKey}
//           autoFocus
//         />
//       </div>
//     </div>
//   );
// };

// export default ConsoleModal;


























// import { useEffect, useRef } from "react";
// // import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

// const ConsoleModal = () => {
//   const [history, setHistory] = useState<string[]>([
//     "Welcome to the Evidence Console. Type 'help' for commands.",
//     "> "
//   ]);
//   const [currentLine, setCurrentLine] = useState("> ");
//   const [isTyping, setIsTyping] = useState(false);
//   const terminalRef = useRef<HTMLDivElement>(null);

//   // Typing animation for output
//   // const typeLine = (line: string, callback?: () => void) => {
//   //   setIsTyping(true);
//   //   let index = 0;
//   //   setHistory(prev => [...prev, ""]); // add empty line for typing

//   //   const interval = setInterval(() => {
//   //     setHistory(prev => {
//   //       const newHistory = [...prev];
//   //       newHistory[newHistory.length - 1] += line[index];
//   //       return newHistory;
//   //     });
//   //     index++;
//   //     if (index === line.length) {
//   //       clearInterval(interval);
//   //       setIsTyping(false);
//   //       setHistory(prev => [...prev, "> "]); // new prompt after output
//   //       setCurrentLine("> ");
//   //       callback?.();
//   //     }
//   //   }, 20);
//   // };

//   // // Handle key presses
//   // const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
//   //   if (isTyping) return;

//   //   if (e.key === "Enter") {
//   //     const command = currentLine.slice(2).trim(); // remove '> '
//   //     if (!command) {
//   //       setHistory(prev => [...prev, "> "]);
//   //       setCurrentLine("> ");
//   //       return;
//   //     }

//   //     let output = "";
//   //     switch (command.toLowerCase()) {
//   //       case "help":
//   //         output =
//   //           "Available commands: resume, projects, skills, achievements, clear";
//   //         break;
//   //       case "resume":
//   //         output = "Resume: https://garvdeep.vercel.app/resume.pdf";
//   //         break;
//   //       case "projects":
//   //         output = "Projects: Wall of Passion, Personality Game";
//   //         break;
//   //       case "skills":
//   //         output = "Skills: C++, Python, JavaScript, React, Node.js...";
//   //         break;
//   //       case "achievements":
//   //         output =
//   //           "Achievements: Hackathons, Certifications, Personal Projects";
//   //         break;
//   //       case "clear":
//   //         setHistory(["> "]);
//   //         setCurrentLine("> ");
//   //         return;
//   //       default:
//   //         output = `'${command}' is not recognized. Type 'help' for commands.`;
//   //     }

//   //     // Add command to history and animate output
//   //     setHistory(prev => [...prev.slice(0, -1), currentLine]); // replace current prompt
//   //     setCurrentLine(""); // clear input for animation
//   //     typeLine(output);
//   //   } else if (e.key === "Backspace") {
//   //     setCurrentLine(prev => (prev.length > 2 ? prev.slice(0, -1) : prev));
//   //   } else if (e.key.length === 1) {
//   //     setCurrentLine(prev => prev + e.key);
//   //   }
//   // };

//   // Typing animation for output
// const typeLine = (line: string, callback?: () => void) => {
//   setIsTyping(true);
//   let index = 0;

//   setHistory(prev => [...prev, ""]); // add empty line to type into

//   const interval = setInterval(() => {
//     setHistory(prev => {
//       const newHistory = [...prev];
//       if (newHistory.length === 0) newHistory.push(""); // safety
//       newHistory[newHistory.length - 1] += line[index] || "";
//       return newHistory;
//     });

//     index++;
//     if (index === line.length) {
//       clearInterval(interval);
//       setIsTyping(false);
//       setHistory(prev => [...prev, "> "]); // add new prompt after output
//       setCurrentLine("> ");
//       callback?.();
//     }
//   }, 20);
// };

// // Handle key presses
// const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
//   if (isTyping) return;

//   if (e.key === "Enter") {
//     const command = currentLine.slice(2).trim(); // remove '> '
//     if (!command) {
//       setHistory(prev => [...prev, "> "]);
//       setCurrentLine("> ");
//       return;
//     }

//     let output = "";
//     switch (command.toLowerCase()) {
//       case "help":
//         output =
//           "Available commands: resume, projects, skills, achievements, clear";
//         break;
//       case "resume":
//         output = "Resume: https://garvdeep.vercel.app/resume.pdf";
//         break;
//       case "projects":
//         output = "Projects: Wall of Passion, Personality Game";
//         break;
//       case "skills":
//         output = "Skills: C++, Python, JavaScript, React, Node.js...";
//         break;
//       case "achievements":
//         output =
//           "Achievements: Hackathons, Certifications, Personal Projects";
//         break;
//       case "clear":
//         setHistory(["> "]);
//         setCurrentLine("> ");
//         return;
//       default:
//         output = `'${command}' is not recognized. Type 'help' for commands.`;
//     }

//     // Save the entered command as is, before animating output
//     setHistory(prev => [...prev.slice(0, -1), currentLine]);
//     typeLine(output); // animate output
//   } else if (e.key === "Backspace") {
//     setCurrentLine(prev => (prev.length > 2 ? prev.slice(0, -1) : prev));
//   } else if (e.key.length === 1) {
//     setCurrentLine(prev => prev + e.key);
//   }
// };
//   // Scroll to bottom when history updates
//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [history, currentLine]);

//   return (
//     <div className="bg-black text-green-400 p-4 font-mono text-sm rounded h-96 overflow-y-auto" ref={terminalRef}>
//       <DialogHeader>
//         <DialogTitle className="text-2xl text-green-400">Evidence Console</DialogTitle>
//       </DialogHeader>
//       <div className="mt-2">
//         {history.map((line, idx) => (
//           <div key={idx}>{line}</div>
//         ))}
//         <div>
//           {currentLine}
//           <span className="inline-block w-2 animate-blink">█</span>
//         </div>
//         <input
//           type="text"
//           className="absolute opacity-0 pointer-events-none"
//           value={currentLine}
//           onChange={() => {}}
//           onKeyDown={handleKey}
//           autoFocus
//         />
//       </div>
//     </div>
//   );
// };

// export default ConsoleModal;




















// import { useEffect, useRef } from 'react';
// // import { , DialogTitle } from './YourDialogComponents'; // adjust imports if needed

// const ConsoleModal = () => {
//   const [history, setHistory] = useState<string[]>([
//     "Welcome to the Evidence Console. Type 'help' for commands."
//   ]);
//   const [currentLine, setCurrentLine] = useState('> ');
//   const [isTyping, setIsTyping] = useState(false);
//   const terminalRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   // Focus input on mount
//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   // Scroll to bottom when history updates
//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [history, currentLine]);

//   // Typing animation for output
//   const typeLine = (line: string, callback?: () => void) => {
//     setIsTyping(true);
//     let index = 0;
//     setHistory(prev => [...prev, '']); // add new line to type into

//     const interval = setInterval(() => {
//       setHistory(prev => {
//         const newHistory = [...prev];
//         newHistory[newHistory.length - 1] += line[index];
//         return newHistory;
//       });

//       index++;
//       if (index === line.length) {
//         clearInterval(interval);
//         setIsTyping(false);
//         setHistory(prev => [...prev, '> ']); // add new prompt
//         setCurrentLine('> ');
//         callback?.();
//       }
//     }, 20); // adjust speed (ms per character)
//   };

//   // Handle input key events
//   const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (isTyping) return;

//     if (e.key === 'Enter') {
//       const command = currentLine.slice(2).trim(); // remove '> '

//       setHistory(prev => [...prev, currentLine]); // save command
//       setCurrentLine(''); // clear for typing output

//       if (!command) {
//         setHistory(prev => [...prev, '> ']);
//         setCurrentLine('> ');
//         return;
//       }

//       let output = '';
//       switch (command.toLowerCase()) {
//         case 'help':
//           output = "Available commands: resume, projects, skills, achievements, clear";
//           break;
//         case 'resume':
//           output = "Resume: https://garvdeep.vercel.app/resume.pdf";
//           break;
//         case 'projects':
//           output = "Projects: Wall of Passion, Personality Game";
//           break;
//         case 'skills':
//           output = "Skills: C++, Python, JavaScript, React, Node.js...";
//           break;
//         case 'achievements':
//           output = "Achievements: Hackathons, Certifications, Personal Projects";
//           break;
//         case 'clear':
//           setHistory([]);
//           setCurrentLine('> ');
//           return;
//         default:
//           output = `'${command}' is not recognized. Type 'help' for commands.`;
//       }

//       typeLine(output);
//     } else if (e.key === 'Backspace') {
//       setCurrentLine(prev => (prev.length > 2 ? prev.slice(0, -1) : prev));
//     } else if (e.key.length === 1) {
//       setCurrentLine(prev => prev + e.key);
//     }
//   };

//   return (
//     <div className="typewriter bg-paper-aged p-4 rounded-lg shadow-lg transform rotate-0 transition-transform duration-300 max-w-2xl w-full">
//       <DialogHeader>
//         <DialogTitle className="text-2xl">Evidence Console</DialogTitle>
//       </DialogHeader>

//       <div
//         ref={terminalRef}
//         className="bg-black text-green-400 p-4 font-mono text-sm rounded h-96 overflow-y-auto"
//         onClick={() => inputRef.current?.focus()} // click to focus
//       >
//         {history.map((line, idx) => (
//           <div key={idx}>{line}</div>
//         ))}
//         <div className="flex">
//           <span>{currentLine}</span>
//           <span className="inline-block w-2 animate-blink">█</span>
//         </div>
//       </div>

//       {/* Hidden input to capture typing */}
//       <input
//         ref={inputRef}
//         type="text"
//         value={currentLine.slice(2)} // remove '> ' prefix
//         onChange={(e) => setCurrentLine('> ' + e.target.value)}
//         onKeyDown={handleKey}
//         className="absolute opacity-0 pointer-events-none"
//         autoFocus
//       />
//     </div>
//   );
// };

// export default ConsoleModal;



















// import { useEffect, useRef } from 'react';

// const ConsoleModal = () => {
//   const [history, setHistory] = useState<string[]>([
//     "Welcome to the Evidence Console. Type 'help' for commands."
//   ]);
//   const [currentLine, setCurrentLine] = useState('> ');
//   const [isTyping, setIsTyping] = useState(false);
//   const terminalRef = useRef<HTMLDivElement>(null);

//   // Typing animation effect for command outputs
//   // const typeLine = (line: string, callback?: () => void) => {
//   //   setIsTyping(true);
//   //   let index = 0;
//   //   const interval = setInterval(() => {
//   //     setHistory(prev => [...prev.slice(0, -1), prev[prev.length - 1] + line[index]]);
//   //     index++;
//   //     if (index === line.length) {
//   //       clearInterval(interval);
//   //       setIsTyping(false);
//   //       setHistory(prev => [...prev, '> ']); // add new prompt
//   //       callback?.();
//   //     }
//   //   }, 20);
//   // };

//   const typeLine = (line: string, callback?: () => void) => {
//   setIsTyping(true);
//   let index = 0;
//   setHistory(prev => [...prev, '']); // add empty line to type into

//   const interval = setInterval(() => {
//     setHistory(prev => {
//       const newHistory = [...prev];
//       newHistory[newHistory.length - 1] += line[index];
//       return newHistory;
//     });

//     index++;
//     if (index === line.length) {
//       clearInterval(interval);
//       setIsTyping(false);
//       setHistory(prev => [...prev, '> ']); // new prompt after output
//       setCurrentLine('> ');
//       callback?.();
//     }
//   }, 20);
// };

//   // Handle key presses
//   const handleKey = (e: KeyboardEvent) => {
//     if (isTyping) return;

//     if (e.key === 'Enter') {
//       const command = currentLine.slice(2).trim(); // remove '> '
//       if (!command) {
//         setHistory(prev => [...prev, '> ']);
//         setCurrentLine('> ');
//         return;
//       }

//       let output = '';
//       switch (command.toLowerCase()) {
//         case 'help':
//           output = "Available commands: resume, projects, skills, achievements, clear";
//           break;
//         case 'resume':
//           output = "Resume: https://garvdeep.vercel.app/resume.pdf";
//           break;
//         case 'projects':
//           output = "Projects: Wall of Passion, Personality Game";
//           break;
//         case 'skills':
//           output = "Skills: C++, Python, JavaScript, React, Node.js...";
//           break;
//         case 'achievements':
//           output = "Achievements: Hackathons, Certifications, Personal Projects";
//           break;
//         case 'clear':
//           setHistory([]);
//           setCurrentLine('> ');
//           return;
//         default:
//           output = `'${command}' is not recognized. Type 'help' for commands.`;
//       }

//       setHistory(prev => [...prev, currentLine]); // save entered command
//       setCurrentLine(''); // clear current line for animation
//       typeLine(output); // animate output
//     } else if (e.key === 'Backspace') {
//       setCurrentLine(prev => (prev.length > 2 ? prev.slice(0, -1) : prev));
//     } else if (e.key.length === 1) {
//       setCurrentLine(prev => prev + e.key);
//     }
//   };

//   // Attach key listener
//   useEffect(() => {
//     window.addEventListener('keydown', handleKey);
//     return () => window.removeEventListener('keydown', handleKey);
//   }, [currentLine, isTyping]);

//   // Scroll to bottom
//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [history, currentLine]);

//   return (
//     // <div
//     //   ref={terminalRef}
//     //   className="fixed inset-0 z-50 bg-black text-green-400 p-4 font-mono text-sm overflow-y-auto"
//     // >
//     //   {history.map((line, idx) => (
//     //     <div key={idx}>{line}</div>
//     //   ))}
//     //   <div>
//     //     {currentLine}
//     //     <span className="inline-block w-2 animate-blink">█</span>
//     //   </div>
//     // </div>

//     <div
//   ref={terminalRef}
//   className="bg-black text-green-400 p-4 font-mono text-sm rounded h-96 overflow-y-auto"
// >
//   {history.map((line, idx) => (
//     <div key={idx}>{line}</div>
//   ))}
//   <div>
//     {currentLine}
//     <span className="inline-block w-2 animate-blink">█</span>
//   </div>
// </div>
//   );
// };

// export default ConsoleModal;



























// import { useEffect, useRef } from 'react';

// const ConsoleModal = () => {
//   const [input, setInput] = useState('');
//   const [history, setHistory] = useState<string[]>([
//     "Welcome to the Evidence Console. Type 'help' for commands."
//   ]);
//   const [displayedHistory, setDisplayedHistory] = useState<string[]>([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const historyRef = useRef<HTMLDivElement>(null);

//   // Typing animation effect
//   const typeLine = (line: string, callback?: () => void) => {
//     setIsTyping(true);
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayedHistory(prev => {
//         const newPrev = [...prev];
//         if (!newPrev[newPrev.length - 1]?.startsWith('>')) {
//           newPrev.push('');
//         }
//         newPrev[newPrev.length - 1] += line[index];
//         return newPrev;
//       });
//       index++;
//       if (index === line.length) {
//         clearInterval(interval);
//         setIsTyping(false);
//         callback?.();
//       }
//     }, 20); // typing speed (ms per character)
//   };

//   const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter' && input.trim() && !isTyping) {
//       const command = input.trim();
//       let output = '';

//       switch (command.toLowerCase()) {
//         case 'help':
//           output = "Available commands: resume, projects, skills, achievements, clear";
//           break;
//         case 'resume':
//           output = "Resume: https://garvdeep.vercel.app/resume.pdf";
//           break;
//         case 'projects':
//           output = "Projects: Wall of Passion, Personality Game";
//           break;
//         case 'skills':
//           output = "Skills: C++, Python, JavaScript, React, Node.js...";
//           break;
//         case 'achievements':
//           output = "Achievements: Hackathons, Certifications, Personal Projects";
//           break;
//         case 'clear':
//           setHistory([]);
//           setDisplayedHistory([]);
//           setInput('');
//           return;
//         default:
//           output = `'${command}' is not recognized. Type 'help' for commands.`;
//       }

//       setHistory(prev => [...prev, `> ${command}`, output]);
//       setDisplayedHistory(prev => [...prev, `> ${command}`]);
//       setInput('');

//       // Animate output
//       typeLine(output);
//     }
//   };

//   // Scroll to bottom when history updates
//   useEffect(() => {
//     if (historyRef.current) {
//       historyRef.current.scrollTop = historyRef.current.scrollHeight;
//     }
//   }, [displayedHistory]);

//   return (
//     <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-0 transition-transform duration-300 max-w-xl w-full">
//       <DialogHeader>
//         <DialogTitle className="text-2xl">Evidence Console</DialogTitle>
//       </DialogHeader>

//       <div
//         className="bg-black text-green-400 p-4 rounded h-64 overflow-y-auto font-mono text-sm mb-2"
//         ref={historyRef}
//       >
//         {displayedHistory.map((line, idx) => (
//           <div key={idx}>{line}</div>
//         ))}
//         <span className="animate-blink">█</span>
//       </div>

//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={handleCommand}
//         placeholder="Type a command..."
//         className="w-full p-2 border border-muted rounded bg-black text-green-400 font-mono text-sm"
//         disabled={isTyping}
//       />
//     </div>
//   );
// };












// const ConsoleModal = () => {
//   const [input, setInput] = useState('');
//   const [history, setHistory] = useState<string[]>([
//     "Welcome to the Evidence Console. Type 'help' for commands."
//   ]);

//   const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       const command = input.trim();
//       let output = '';

//       switch (command.toLowerCase()) {
//         case 'help':
//           output = "Available commands: resume, projects, skills, achievements, clear";
//           break;
//         case 'resume':
//           output = "Resume: https://garvdeep.vercel.app/resume.pdf";
//           break;
//         case 'projects':
//           output = "Projects: Wall of Passion, Personality Game";
//           break;
//         case 'skills':
//           output = "Skills: C++, Python, JavaScript, React, Node.js...";
//           break;
//         case 'achievements':
//           output = "Achievements: Hackathons, Certifications, Personal Projects";
//           break;
//         case 'clear':
//           setHistory([]);
//           setInput('');
//           return;
//         default:
//           output = `'${command}' is not recognized. Type 'help' for commands.`;
//       }

//       setHistory(prev => [...prev, `> ${command}`, output]);
//       setInput('');
//     }
//   };

//   return (
//     <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-0 transition-transform duration-300 max-w-xl w-full">
//       <DialogHeader>
//         <DialogTitle className="text-2xl">Evidence Console</DialogTitle>
//       </DialogHeader>

//       <div className="bg-black text-green-400 p-4 rounded h-64 overflow-y-auto font-mono text-sm mb-2">
//         {history.map((line, idx) => (
//           <div key={idx}>{line}</div>
//         ))}
//       </div>

//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={handleCommand}
//         placeholder="Type a command..."
//         className="w-full p-2 border border-muted rounded bg-black text-green-400 font-mono text-sm"
//       />
//     </div>
//   );
// };











































// import React, { useState } from 'react';
// import { Paperclip, MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';

// // --- Mock Components for Standalone Example ---
// // In your actual project, you would import these from your UI library.
// const Button = ({ children, className, ...props }) => (
//   <button className={`px-4 py-2 border rounded ${className}`} {...props}>
//     {children}
//   </button>
// );

// const Dialog = ({ children, open, onOpenChange }) => {
//   if (!open) return null;
//   return (
//     <div 
//       className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
//       onClick={() => onOpenChange(false)}
//     >
//       {children}
//     </div>
//   );
// };

// const DialogContent = ({ children, className }) => (
//   <div className={`relative ${className}`} onClick={(e) => e.stopPropagation()}>
//     {children}
//   </div>
// );

// const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;
// const DialogTitle = ({ children, className }) => <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;

// // --- Mock Image Imports ---
// // Using placeholders to make the code runnable. Replace these with your actual asset imports.
// const profileImage = "https://placehold.co/128x96/f3eada/334155?text=Profile";
// const projectIkipendence = "https://placehold.co/192x128/f3eada/334155?text=Exhibit+A";
// const projectPersonality = "https://placehold.co/176x112/f3eada/334155?text=Exhibit+B";
// const achievementMap = "https://placehold.co/224x176/334155/f3eada?text=Journey+Map";


// // --- Main DetectiveBoard Component ---

// interface ModalData {
//   type: 'case-file' | 'project' | 'skills' | 'achievements' | 'contact' | null;
//   content?: any;
// }

// export const DetectiveBoard = () => {
//   const [modalData, setModalData] = useState<ModalData>({ type: null });

//   const openModal = (type: ModalData['type'], content?: any) => {
//     setModalData({ type, content });
//   };

//   const closeModal = () => {
//     setModalData({ type: null });
//   };

//   // NOTE: I'm defining some CSS classes here to replicate your original styles
//   // since I don't have your global CSS file. You won't need this <style> block.
//   const GlobalStyles = () => (
//     <style>{`
//       :root {
//         --background: 224 71.4% 4.1%;
//         --foreground: 210 20% 98%;
//         --muted: 215 27.9% 16.9%;
//         --muted-foreground: 217.9 10.6% 64.9%;
//         --primary: 210 20% 98%;
//         --string-glow: 210 20% 98%;
//         --paper: 220 13% 91%;
//         --paper-old: 48 33% 94%;
//         --paper-aged: 39 52% 85%;
//       }
//       .bg-background { background-color: hsl(var(--background)); color: hsl(var(--foreground)); }
//       .bg-paper { background-color: hsl(var(--paper)); }
//       .bg-paper-old { background-color: hsl(var(--paper-old)); }
//       .bg-paper-aged { background-color: hsl(var(--paper-aged)); }
//       .border-muted-foreground\\/20 { border-color: hsla(var(--muted-foreground), 0.2); }
//       .border-muted { border-color: hsl(var(--muted)); }
//       .bg-secondary { background-color: hsl(var(--muted)); }
//       .bg-primary { background-color: hsl(var(--primary)); }
//       .text-muted-foreground { color: hsl(var(--muted-foreground)); }
//       .typewriter { font-family: 'Courier New', Courier, monospace; }
//       .handwritten { font-family: 'Brush Script MT', cursive; }
//       .cork-texture { background-image: url('https://www.transparenttextures.com/patterns/cork-wallet.png'); opacity: 0.8; }
//       .stroke-string { stroke: hsl(var(--primary)); }
//       .evidence-pin { position: absolute; width: 1.25rem; height: 1.25rem; background-color: #ef4444; border-radius: 9999px; box-shadow: 0 2px 4px rgba(0,0,0,0.2); border: 2px solid white; }
//       .case-file, .evidence-document, .polaroid { background-color: hsl(var(--paper-old)); border: 1px solid hsla(var(--muted-foreground), 0.3); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
//       .polaroid { padding: 0.5rem; }
//       .badge-confidential { color: #b91c1c; font-weight: bold; border: 2px solid #b91c1c; padding: 2px 4px; transform: rotate(10deg); font-size: 0.75rem; }
//     `}</style>
//   );

//   return (
//     <div className="min-h-screen bg-background relative overflow-hidden">
//       <GlobalStyles /> {/* You can remove this line */}
//       {/* Top Navigation */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-muted-foreground/20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex h-14 items-center justify-between">
//             <div className="flex items-center gap-3">
//               <span className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_6px_hsl(var(--string-glow)/0.9)]" />
//               <span className="typewriter font-bold tracking-wide">Detective Portfolio</span>
//             </div>
//             <div className="hidden md:flex items-center gap-6 typewriter text-sm">
//               <button onClick={() => openModal('case-file')} className="hover:underline underline-offset-4">Case File</button>
//               <button onClick={() => openModal('skills')} className="hover:underline underline-offset-4">Skills</button>
//               <button onClick={() => openModal('project', { title: 'Ikipendence Wall', image: projectIkipendence })} className="hover:underline underline-offset-4">Projects</button>
//               <button onClick={() => openModal('achievements')} className="hover:underline underline-offset-4">Achievements</button>
//               <button onClick={() => openModal('contact')} className="hover:underline underline-offset-4">Contact</button>
//             </div>
//             <div className="flex items-center gap-2">
//               <Button size="sm" variant="outline" className="typewriter hidden md:inline-flex" onClick={() => openModal('case-file')}>Open Case</Button>
//             </div>
//           </div>
//         </div>
//       </nav>
      
//       {/* Cork board background */}
//       <div className="absolute inset-0 cork-texture" />
      
//       {/* Investigation strings - background layer */}
//       <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
//         {/** Desktop lines */}
//         <g className="hidden md:block">
//           <line x1="50%" y1="45%" x2="15%" y2="25%" className="stroke-string" strokeWidth="2" opacity="0.7" />
//           <line x1="55%" y1="50%" x2="85%" y2="30%" className="stroke-string" strokeWidth="2" opacity="0.7" />
//           <line x1="20%" y1="30%" x2="25%" y2="75%" className="stroke-string" strokeWidth="2" opacity="0.7" />
//           <line x1="80%" y1="35%" x2="75%" y2="75%" className="stroke-string" strokeWidth="2" opacity="0.7" />
//         </g>

//         {/** UPDATED Mobile lines */}
//         <g className="block md:hidden">
//             <line x1="50%" y1="15%" x2="20%" y2="30%" className="stroke-string" strokeWidth="1.5" opacity="0.7" />
//             <line x1="50%" y1="15%" x2="80%" y2="30%" className="stroke-string" strokeWidth="1.5" opacity="0.7" />
//             <line x1="30%" y1="35%" x2="70%" y2="55%" className="stroke-string" strokeWidth="1.5" opacity="0.7" />
//             <line x1="70%" y1="55%" x2="30%" y2="75%" className="stroke-string" strokeWidth="1.5" opacity="0.7" />
//         </g>
//       </svg>
      
//       {/* ======================================================================
//         === RESPONSIVE LAYOUT FIX APPLIED HERE ===============================
//         ====================================================================== */}
//       <div className="relative z-10 pt-24 pb-12 min-h-screen flex flex-col items-center gap-12 md:block">
        
//         {/* Central Case File (About Me) */}
//         <div 
//           className="relative md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 cursor-pointer max-w-[20rem]"
//           onClick={() => openModal('case-file')}
//         >
//           <div className="evidence-pin -top-2 -left-2" />
//           <div className="case-file p-6 w-72 h-[22rem] sm:w-80 sm:h-96 relative">
//             <div className="absolute top-2 left-4 w-16 h-6 bg-paper-old border border-muted-foreground/30 rounded-sm">
//               <div className="typewriter text-xs text-center pt-1">CASE FILE</div>
//             </div>
//             <div className="mt-8">
//               <h2 className="typewriter text-xl font-bold mb-4 text-center">Garvdeep Singh</h2>
//               <div className="polaroid w-32 mx-auto mb-4" style={{ transform: 'rotate(-5deg)' }}>
//                 <img src={profileImage} alt="Garvdeep Singh" className="w-full h-24 object-cover" />
//                 <div className="handwritten text-xs text-center mt-1">Prime Suspect</div>
//               </div>
//               <div className="typewriter text-sm space-y-2">
//                 <p><strong>Subject:</strong> CS Engineering Student</p>
//                 <p><strong>Specialization:</strong> Web Development</p>
//                 <p><strong>Status:</strong> Active Developer</p>
//                 <p><strong>First Spotted:</strong> 2022</p>
//               </div>
//               <div className="handwritten text-red-600 text-sm mt-4 transform -rotate-2">
//                 "Suspected of solving complex problems with coffee ☕"
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Skills Report */}
//         <div 
//           className="relative md:absolute md:top-28 md:left-16 cursor-pointer"
//           onClick={() => openModal('skills')}
//         >
//           <div className="evidence-pin -top-2 -left-2" />
//           <div className="evidence-document p-3 w-56 transform rotate-3">
//             <div className="badge-confidential absolute top-1 right-2">CONFIDENTIAL</div>
//             <div className="typewriter text-center mb-2">
//               <h3 className="font-bold text-sm">TECHNICAL COMPETENCY</h3>
//               <h3 className="font-bold text-sm">REPORT</h3>
//               <div className="border-b border-muted-foreground/30 my-1" />
//             </div>
//             <div className="typewriter text-[11px] space-y-2">
//               <div>
//                 <h4 className="font-bold mb-1">LANGUAGES:</h4>
//                 <p>C++ ████████░░</p>
//                 <p>HTML/CSS ████████░░</p>
//                 <p>Python ██████░░░░</p>
//                 <p>Java ██████░░░░</p>
//               </div>
//               <div>
//                 <h4 className="font-bold mb-1">FRAMEWORKS:</h4>
//                 <p>• React.js</p><p>• Node.js</p><p>• Express.js</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Project Evidence (Top Right) */}
//         <div 
//           className="relative md:absolute md:top-20 md:right-20 cursor-pointer"
//           onClick={() => openModal('project', { title: 'Ikipendence Wall', image: projectIkipendence })}
//         >
//           <div className="evidence-pin -top-2 -left-2" />
//           <div className="polaroid w-48 transform -rotate-6">
//             <img src={projectIkipendence} alt="Ikipendence Project" className="w-full h-32 object-cover" />
//             <div className="handwritten text-sm text-center mt-2">Exhibit A - Wall of Passion</div>
//           </div>
//         </div>
        
//         <div 
//           className="relative md:absolute md:top-64 md:right-32 cursor-pointer"
//           onClick={() => openModal('project', { title: 'Personality Game', image: projectPersonality })}
//         >
//           <div className="evidence-pin -top-2 -left-2" />
//           <div className="polaroid w-44 transform rotate-12">
//             <img src={projectPersonality} alt="Personality Game" className="w-full h-28 object-cover" />
//             <div className="handwritten text-sm text-center mt-2">Exhibit B - Mind Reader</div>
//           </div>
//         </div>
        
//         {/* Achievement Map (Bottom Left) */}
//         <div 
//           className="relative md:absolute md:bottom-16 md:left-40 cursor-pointer"
//           onClick={() => openModal('achievements')}
//         >
//           <div className="evidence-pin -top-2 -left-2" />
//           <div className="evidence-document w-56 h-44 transform -rotate-12">
//             <img src={achievementMap} alt="Achievement Map" className="w-full h-full object-cover rounded" />
//             <div className="absolute bottom-2 left-2 handwritten text-white bg-black/70 px-2 py-1 rounded">Journey Map</div>
//           </div>
//         </div>
        
//         {/* Contact Business Card (Bottom Right) */}
//         <div 
//           className="relative md:absolute md:bottom-20 md:right-24 cursor-pointer"
//           onClick={() => openModal('contact')}
//         >
//           <div className="evidence-pin -top-2 -left-2" />
//           <div className="evidence-document p-6 w-80 max-w-xs h-auto bg-paper transform rotate-2">
//             <div className="typewriter text-center">
//               <h3 className="font-bold text-lg mb-2">DETECTIVE CONTACT</h3>
//               <div className="border-b border-muted-foreground/30 my-2" />
//               <div className="text-sm space-y-2">
//                 <div className="flex items-center justify-center gap-2"><Mail size={14} /><span>garvdeep.work@email.com</span></div>
//                 <div className="flex items-center justify-center gap-2"><Phone size={14} /><span>+91 98779-73123</span></div>
//                 <div className="flex items-center justify-center gap-2">
//                   <Github size={14} />
//                   <a href="https://github.com/garvdeep-singh" target="_blank" rel="noopener noreferrer" className="hover:underline break-all" onClick={(e) => e.stopPropagation()}>github.com/garvdeep-singh</a>
//                 </div>
//                 <div className="flex items-center justify-center gap-2">
//                   <Linkedin size={14} />
//                   <a href="https://www.linkedin.com/in/garvdeep-singh-b8973a1ab/" target="_blank" rel="noopener noreferrer" className="hover:underline" onClick={(e) => e.stopPropagation()}>linkedin.com/in/garvdeep-singh</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Modals */}
//       <Dialog open={modalData.type !== null} onOpenChange={closeModal}>
//         <DialogContent className="bg-transparent p-0 border-none shadow-none flex justify-center items-center overflow-visible max-w-2xl w-[90%]">
//           {modalData.type === 'case-file' && <CaseFileModal />}
//           {modalData.type === 'project' && <ProjectModal project={modalData.content} />}
//           {modalData.type === 'skills' && <SkillsModal />}
//           {modalData.type === 'achievements' && <AchievementsModal />}
//           {modalData.type === 'contact' && <ContactModal onClose={closeModal}/>}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// // --- Modal Components (Unchanged from your original) ---

// const CaseFileModal = () => (
//   <div className="bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[+1deg] hover:rotate-0 transition-transform duration-300">
//     <DialogHeader>
//       <DialogTitle className="typewriter text-2xl">Investigation Notes: Garvdeep Singh</DialogTitle>
//     </DialogHeader>
//     <div className="mt-4 space-y-4 typewriter">
//       <div className="badge-confidential float-right">CASE SOLVED</div>
//       <p className="text-sm leading-relaxed">
//         Subject is a passionate Computer Science Engineering student with a proven track record in web development. 
//         Specializes in creating engaging user experiences and solving complex programming challenges.
//       </p>
//       <div className="border border-muted p-4 rounded">
//         <h4 className="font-bold mb-2">Key Findings:</h4>
//         <ul className="text-sm space-y-1 list-disc list-inside">
//           <li>Self-taught web developer since 2022</li>
//           <li>Strong foundation in modern JavaScript frameworks</li>
//           <li>Passionate about creating meaningful digital experiences</li>
//           <li>Active learner with continuous skill development</li>
//           <li>Team player with excellent communication skills</li>
//         </ul>
//       </div>
//       <p className="text-sm italic handwritten">
//         "The evidence clearly shows this individual possesses the technical skills, creativity, 
//         and dedication required for any development team. Case status: HIGHLY RECOMMENDED."
//       </p>
//     </div>
//   </div>
// );

// const ProjectModal = ({ project }) => (
//   <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[+2deg] hover:rotate-0 transition-transform duration-300">
//     <DialogHeader>
//       <DialogTitle className="text-2xl">Evidence Analysis: {project?.title}</DialogTitle>
//     </DialogHeader>
//     <div className="mt-4 space-y-4">
//       <img src={project?.image} alt={project?.title} className="w-full h-64 object-cover rounded border" />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <h4 className="font-bold mb-2">Project Details:</h4>
//           <ul className="text-sm space-y-1">
//             <li><strong>Type:</strong> Web Application</li>
//             <li><strong>Role:</strong> Full-Stack Developer</li>
//             <li><strong>Duration:</strong> 2-3 weeks</li>
//             <li><strong>Status:</strong> Completed</li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold mb-2">Technologies Used:</h4>
//           <div className="flex flex-wrap gap-2">
//             <span className="badge-confidential text-xs">HTML5</span>
//             <span className="badge-confidential text-xs">CSS3</span>
//             <span className="badge-confidential text-xs">JavaScript</span>
//             <span className="badge-confidential text-xs">React</span>
//           </div>
//         </div>
//       </div>
//       <div className="border border-muted p-4 rounded">
//         <h4 className="font-bold mb-2">Investigation Summary:</h4>
//         <p className="text-sm">
//           This evidence demonstrates the subject's ability to create functional, 
//           user-friendly web applications from concept to completion. Shows strong 
//           understanding of modern development practices and user experience design.
//         </p>
//       </div>
//       <div className="flex gap-2">
//         <Button variant="outline" size="sm" className="typewriter">View Live Demo</Button>
//         <Button variant="outline" size="sm" className="typewriter">Examine Code</Button>
//       </div>
//     </div>
//   </div>
// );

// const SkillsModal = () => (
//     <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
//       <DialogHeader>
//         <DialogTitle className="text-2xl">Complete Technical Analysis</DialogTitle>
//       </DialogHeader>
//       <div className="mt-4 space-y-6">
//         <div className="badge-confidential float-right">VERIFIED</div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="font-bold mb-3">Programming Languages:</h4>
//             <div className="space-y-2">
//               {[
//                 { name: 'C++', level: 85 },
//                 { name: 'HTML/CSS', level: 90 },
//                 { name: 'Python', level: 70 },
//                 { name: 'Java', level: 65 }
//               ].map(skill => (
//                 <div key={skill.name} className="text-sm">
//                   <div className="flex justify-between mb-1">
//                     <span>{skill.name}</span>
//                     <span>{skill.level}%</span>
//                   </div>
//                   <div className="w-full bg-muted rounded-full h-2">
//                     <div className="bg-primary h-2 rounded-full" style={{ width: `${skill.level}%` }}/>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div>
//             <h4 className="font-bold mb-3">Frameworks & Tools:</h4>
//             <div className="grid grid-cols-2 gap-2 text-sm">
//               {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'VS Code', 'Figma', 'Bootstrap'].map(tool => (
//                 <div key={tool} className="bg-secondary p-2 rounded text-center">{tool}</div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div>
//           <h4 className="font-bold mb-3">Soft Skills Assessment:</h4>
//           <div className="grid grid-cols-2 gap-4 text-sm">
//             <ul className="space-y-1 list-disc list-inside">
//               <li>Creative Problem Solving</li>
//               <li>Team Collaboration</li>
//               <li>Project Management</li>
//             </ul>
//             <ul className="space-y-1 list-disc list-inside">
//               <li>Attention to Detail</li>
//               <li>Communication</li>
//               <li>Adaptability</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// const AchievementsModal = () => (
//   <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
//     <DialogHeader>
//       <DialogTitle className="text-2xl">Journey Timeline & Achievements</DialogTitle>
//     </DialogHeader>
//     <div className="mt-4 space-y-4">
//       <img src={achievementMap} alt="Achievement Map" className="w-full h-48 object-cover rounded border" />
//       <div className="space-y-4">
//         {[
//           { year: '2024', event: 'Hackathon Participation', location: 'TechFest College' },
//           { year: '2023', event: 'Web Development Certification', location: 'Online Course' },
//           { year: '2023', event: 'First Major Project Launch', location: 'Personal Portfolio' },
//           { year: '2022', event: 'Started Web Development Journey', location: 'Self-Learning' }
//         ].map((achievement, index) => (
//           <div key={index} className="flex items-center gap-4 p-3 border border-muted rounded">
//             <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
//             <div className="flex-1">
//               <div className="font-bold">{achievement.event}</div>
//               <div className="text-sm text-muted-foreground">{achievement.year} • {achievement.location}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const ContactModal = ({ onClose }) => {
//   const [status, setStatus] = useState<null | "success" | "error">(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       const res = await fetch("https://formspree.io/f/mzzvwvzj", {
//         method: "POST",
//         body: formData,
//         headers: { Accept: "application/json" }
//       });

//       if (res.ok) {
//         setStatus("success");
//         form.reset();
//         setTimeout(() => {
//           setStatus(null);
//           onClose?.();
//         }, 2000);
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
//       <DialogHeader>
//         <DialogTitle className="text-2xl">Open Communication Channel</DialogTitle>
//       </DialogHeader>
//       <div className="mt-4 space-y-4">
//         <p className="text-sm">Ready to discuss potential collaboration or have questions about the case?</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <Button variant="outline" className="flex items-center justify-center gap-2" onClick={() => (window.location.href = "mailto:garvdeep.work@email.com?subject=Inquiry")}>
//             <Mail size={16} /> Send Message
//           </Button>
//           <Button asChild variant="outline" className="flex items-center justify-center gap-2">
//             <a href="https://github.com/garvdeep-singh" target="_blank" rel="noopener noreferrer"><Github size={16} /> View GitHub</a>
//           </Button>
//           <Button asChild variant="outline" className="flex items-center justify-center gap-2">
//             <a href="https://www.linkedin.com/in/garvdeep-singh-b8973a1ab/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> Connect on LinkedIn</a>
//           </Button>
//           <Button variant="outline" className="flex items-center justify-center gap-2" onClick={() => window.open("https://wa.me/919877973123?text=Hi%20Garvdeep", "_blank")}>
//             <Phone size={16} /> Schedule Call
//           </Button>
//         </div>
//         <div className="border border-muted p-4 rounded">
//           <h4 className="font-bold mb-2">Quick Contact Form:</h4>
//           <form onSubmit={handleSubmit} className="space-y-3">
//             <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border border-muted rounded typewriter text-sm" required />
//             <input type="email" name="email" placeholder="Your Email" className="w-full p-2 border border-muted rounded typewriter text-sm" required />
//             <textarea name="message" placeholder="Your Message" rows={3} className="w-full p-2 border border-muted rounded typewriter text-sm" required />
//             <Button type="submit" className="w-full typewriter">Submit Evidence</Button>
//           </form>
//           {status === "success" && <p className="mt-2 text-green-600 text-sm">✅ Evidence submitted successfully! Closing...</p>}
//           {status === "error" && <p className="mt-2 text-red-600 text-sm">❌ There was an error. Please try again.</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetectiveBoard;












































