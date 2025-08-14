import React, { useState } from 'react';
import { Paperclip, MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import profileImage from '@/assets/garvdeep-profile.jpg';
import projectIkipendence from '@/assets/project-ikipendence.jpg';
import projectPersonality from '@/assets/project-personality-game.jpg';
import achievementMap from '@/assets/achievement-map.jpg';

interface ModalData {
  type: 'case-file' | 'project' | 'skills' | 'achievements' | 'contact' | null;
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
              <button onClick={() => openModal('project', { title: 'Ikipendence Wall', image: projectIkipendence })} className="hover:underline underline-offset-4">Projects</button>
              <button onClick={() => openModal('achievements')} className="hover:underline underline-offset-4">Achievements</button>
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
      <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {/* String from case file to skills report */}
        <line x1="50%" y1="45%" x2="15%" y2="25%" className="stroke-string stroke-[4px] opacity-80" />
        
        {/* String from case file to projects */}
        <line x1="55%" y1="50%" x2="85%" y2="30%" className="stroke-string stroke-[4px] opacity-80" />
        
        {/* String from skills to achievements */}
        <line x1="20%" y1="30%" x2="25%" y2="75%" className="stroke-string stroke-[4px] opacity-80" />
        
        {/* String from projects to contact */}
        <line x1="80%" y1="35%" x2="75%" y2="75%" className="stroke-string stroke-[4px] opacity-80" />
      </svg>
      
      {/* Evidence pins and items */}
      <div className="relative z-10 pt-20 md:pt-24 pb-8 min-h-screen">
        
        {/* Central Case File (About Me) */}
        <div 
          className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 cursor-pointer mx-auto md:mx-0 mt-6 md:mt-0 max-w-[20rem]"
          onClick={() => openModal('case-file')}
        >
          <div className="evidence-pin -top-2 -left-2" />
          <div className="case-file p-6 w-72 h-[22rem] sm:w-80 sm:h-96 relative">
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
                <p><strong>Specialization:</strong> Web Development</p>
                <p><strong>Status:</strong> Active Developer</p>
                <p><strong>First Spotted:</strong> 2022</p>
              </div>
              
              <div className="handwritten text-red-600 text-sm mt-4 transform -rotate-2">
                "Suspected of solving complex problems with coffee ☕"
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Report (Top Left) */}
        <div 
          className="hidden md:block absolute top-16 left-16 cursor-pointer"
          onClick={() => openModal('skills')}
        >
          <div className="evidence-pin -top-2 -left-2" />
          <div className="evidence-document p-4 w-64 h-80 transform rotate-3">
            <div className="badge-confidential absolute -top-2 -right-2">CONFIDENTIAL</div>
            
            <div className="typewriter text-center mb-4">
              <h3 className="font-bold">TECHNICAL COMPETENCY</h3>
              <h3 className="font-bold">REPORT</h3>
              <div className="border-b border-muted-foreground/30 my-2" />
            </div>
            
            <div className="typewriter text-xs space-y-3">
              <div>
                <h4 className="font-bold mb-1">LANGUAGES:</h4>
                <p>JavaScript ████████░░</p>
                <p>HTML/CSS ████████░░</p>
                <p>Python ██████░░░░</p>
                <p>Java ██████░░░░</p>
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
          className="hidden md:block absolute top-20 right-20 cursor-pointer"
          onClick={() => openModal('project', { title: 'Ikipendence Wall', image: projectIkipendence })}
        >
          <div className="evidence-pin -top-2 -left-2" />
          <div className="polaroid w-48 transform -rotate-6">
            <img src={projectIkipendence} alt="Ikipendence Project" className="w-full h-32 object-cover" />
            <div className="handwritten text-sm text-center mt-2">
              Exhibit A - Wall of Passion
            </div>
          </div>
        </div>
        
        <div 
          className="hidden md:block absolute top-32 right-32 cursor-pointer"
          onClick={() => openModal('project', { title: 'Personality Game', image: projectPersonality })}
        >
          <div className="evidence-pin -top-2 -left-2" />
          <div className="polaroid w-44 transform rotate-12">
            <img src={projectPersonality} alt="Personality Game" className="w-full h-28 object-cover" />
            <div className="handwritten text-sm text-center mt-2">
              Exhibit B - Mind Reader
            </div>
          </div>
        </div>
        
        {/* Achievement Map (Bottom Left) */}
        <div 
          className="hidden md:block absolute bottom-16 left-40 cursor-pointer"
          onClick={() => openModal('achievements')}
        >
          <div className="evidence-pin -top-2 -left-2" />
          <div className="evidence-document w-56 h-44 transform -rotate-12">
            <img src={achievementMap} alt="Achievement Map" className="w-full h-full object-cover rounded" />
            <div className="absolute bottom-2 left-2 handwritten text-white bg-black/70 px-2 py-1 rounded">
              Journey Map
            </div>
          </div>
        </div>
        
        {/* Contact Business Card (Bottom Right) */}
        <div 
          className="hidden md:block absolute bottom-20 right-24 cursor-pointer"
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
        {/* <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {modalData.type === 'case-file' && <CaseFileModal />}
          {modalData.type === 'project' && <ProjectModal project={modalData.content} />}
          {modalData.type === 'skills' && <SkillsModal />}
          {modalData.type === 'achievements' && <AchievementsModal />}
          {modalData.type === 'contact' && <ContactModal />}
        </DialogContent> */}
        
        {/* <DialogContent className="bg-transparent p-0 shadow-none max-w-2xl max-h-[80vh] overflow-y-auto">
  {modalData.type === 'case-file' && <CaseFileModal />}
  {modalData.type === 'project' && <ProjectModal project={modalData.content} />}
  {modalData.type === 'skills' && <SkillsModal />}
  {modalData.type === 'achievements' && <AchievementsModal />}
  {modalData.type === 'contact' && <ContactModal />}
</DialogContent> */}


          <DialogContent className="bg-transparent p-0 shadow-none flex justify-center items-center overflow-visible">
  {modalData.type === 'case-file' && <CaseFileModal />}
  {modalData.type === 'project' && <ProjectModal project={modalData.content} />}
  {modalData.type === 'skills' && <SkillsModal />}
  {modalData.type === 'achievements' && <AchievementsModal />}
  {modalData.type === 'contact' && <ContactModal />}
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
        Subject is a passionate Computer Science Engineering student with a proven track record in web development. 
        Specializes in creating engaging user experiences and solving complex programming challenges.
      </p>
      
      <div className="border border-muted p-4 rounded">
        <h4 className="font-bold mb-2">Key Findings:</h4>
        <ul className="text-sm space-y-1 list-disc list-inside">
          <li>Self-taught web developer since 2022</li>
          <li>Strong foundation in modern JavaScript frameworks</li>
          <li>Passionate about creating meaningful digital experiences</li>
          <li>Active learner with continuous skill development</li>
          <li>Team player with excellent communication skills</li>
        </ul>
      </div>
      
      <p className="text-sm italic">
        "The evidence clearly shows this individual possesses the technical skills, creativity, 
        and dedication required for any development team. Case status: HIGHLY RECOMMENDED."
      </p>
    </div>
  </div>
);

const ProjectModal = ({ project }: { project: any }) => (
  <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[+2deg] hover:rotate-0 transition-transform duration-300">
    <DialogHeader>
      <DialogTitle className="text-2xl">Evidence Analysis: {project?.title}</DialogTitle>
    </DialogHeader>
    <div className="mt-4 space-y-4">
      <img src={project?.image} alt={project?.title} className="w-full h-64 object-cover rounded border" />
      
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
            <span className="badge-confidential text-xs">HTML5</span>
            <span className="badge-confidential text-xs">CSS3</span>
            <span className="badge-confidential text-xs">JavaScript</span>
            <span className="badge-confidential text-xs">React</span>
          </div>
        </div>
      </div>
      
      <div className="border border-muted p-4 rounded">
        <h4 className="font-bold mb-2">Investigation Summary:</h4>
        <p className="text-sm">
          This evidence demonstrates the subject's ability to create functional, 
          user-friendly web applications from concept to completion. Shows strong 
          understanding of modern development practices and user experience design.
        </p>
      </div>
      
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="typewriter">
          View Live Demo
        </Button>
        <Button variant="outline" size="sm" className="typewriter">
          Examine Code
        </Button>
      </div>
    </div>
  </div>
);

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
              { name: 'JavaScript', level: 85 },
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
            {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'VS Code', 'Figma', 'Bootstrap'].map(tool => (
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

const AchievementsModal = () => (
  <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
    <DialogHeader>
      <DialogTitle className="text-2xl">Journey Timeline & Achievements</DialogTitle>
    </DialogHeader>
    <div className="mt-4 space-y-4">
      <img src={achievementMap} alt="Achievement Map" className="w-full h-48 object-cover rounded border" />
      
      <div className="space-y-4">
        {[
          { year: '2024', event: 'Hackathon Participation', location: 'TechFest College' },
          { year: '2023', event: 'Web Development Certification', location: 'Online Course' },
          { year: '2023', event: 'First Major Project Launch', location: 'Personal Portfolio' },
          { year: '2022', event: 'Started Web Development Journey', location: 'Self-Learning' }
        ].map((achievement, index) => (
          <div key={index} className="flex items-center gap-4 p-3 border border-muted rounded">
            <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
            <div className="flex-1">
              <div className="font-bold">{achievement.event}</div>
              <div className="text-sm text-muted-foreground">{achievement.year} • {achievement.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// const ContactModal = () => (
//   <div className="typewriter bg-paper-aged p-6 rounded-lg shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
//     <DialogHeader>
//       <DialogTitle className="text-2xl">Open Communication Channel</DialogTitle>
//     </DialogHeader>
//     <div className="mt-4 space-y-4">
//       <p className="text-sm">Ready to discuss potential collaboration or have questions about the case?</p>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* <Button variant="outline" className="flex items-center gap-2">
//           <Mail size={16} />
//           Send Message
//         </Button> */}
//         <Button
//   variant="outline"
//   className="flex items-center gap-2"
//   onClick={() => window.location.href = 'mailto:garvdeep.work@email.com?subject=Inquiry'}
// >
//   <Mail size={16} />
//   Send Message
// </Button>
//         <Button asChild variant="outline" className="flex items-center gap-2">
//   <a href="https://github.com/garvdeep-singh" target="_blank" rel="noopener noreferrer">
//     <Github size={16} />
//     View GitHub
//   </a>
// </Button>
//         <Button asChild variant="outline" className="flex items-center gap-2">
//   <a href="https://www.linkedin.com/in/garvdeep-singh-b8973a1ab/" target="_blank" rel="noopener noreferrer">
//     <Linkedin size={16} />
//     Connect on LinkedIn
//   </a>
// </Button>
//         <Button
//   variant="outline"
//   className="flex items-center gap-2"
//   onClick={() => window.open('https://wa.me/919877973123?text=Hi%20Garvdeep,%20I%20would%20like%20to%20schedule%20a%20call.', '_blank')}
// >
//   <Phone size={16} />
//   Schedule Call
// </Button>
//       </div>
      
//       {/* <div className="border border-muted p-4 rounded">
//         <h4 className="font-bold mb-2">Quick Contact Form:</h4>
//         <div className="space-y-3">
//           <input 
//             type="text" 
//             placeholder="Your Name" 
//             className="w-full p-2 border border-muted rounded typewriter text-sm"
//           />
//           <input 
//             type="email" 
//             placeholder="Your Email" 
//             className="w-full p-2 border border-muted rounded typewriter text-sm"
//           />
//           <textarea 
//             placeholder="Your Message" 
//             rows={3}
//             className="w-full p-2 border border-muted rounded typewriter text-sm"
//           />
//           <Button className="w-full typewriter">Submit Evidence</Button>
//         </div>
//       </div> */}

//       <div className="border border-muted p-4 rounded">
//   <h4 className="font-bold mb-2">Quick Contact Form:</h4>

//   <form
//     action="https://formspree.io/f/mzzvwvzj" // replace with your endpoint
//     method="POST"
//     className="space-y-3"
//   >
//     <input 
//       type="text" 
//       name="name"
//       placeholder="Your Name" 
//       className="w-full p-2 border border-muted rounded typewriter text-sm"
//       required
//     />
//     <input 
//       type="email" 
//       name="email"
//       placeholder="Your Email" 
//       className="w-full p-2 border border-muted rounded typewriter text-sm"
//       required
//     />
//     <textarea 
//       name="message"
//       placeholder="Your Message" 
//       rows={3}
//       className="w-full p-2 border border-muted rounded typewriter text-sm"
//       required
//     />
//     <Button type="submit" className="w-full typewriter">Submit Evidence</Button>
//   </form>
// </div>
//     </div>
//   </div>
// );


// import { useState } from "react";

// const ContactModal = () => {
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
//           <Button
//             variant="outline"
//             className="flex items-center gap-2"
//             onClick={() =>
//               (window.location.href =
//                 "mailto:garvdeep.work@email.com?subject=Inquiry")
//             }
//           >
//             <Mail size={16} />
//             Send Message
//           </Button>

//           <Button asChild variant="outline" className="flex items-center gap-2">
//             <a
//               href="https://github.com/garvdeep-singh"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Github size={16} />
//               View GitHub
//             </a>
//           </Button>

//           <Button asChild variant="outline" className="flex items-center gap-2">
//             <a
//               href="https://www.linkedin.com/in/garvdeep-singh-b8973a1ab/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Linkedin size={16} />
//               Connect on LinkedIn
//             </a>
//           </Button>

//           <Button
//             variant="outline"
//             className="flex items-center gap-2"
//             onClick={() =>
//               window.open(
//                 "https://wa.me/919877973123?text=Hi%20Garvdeep,%20I%20would%20like%20to%20schedule%20a%20call.",
//                 "_blank"
//               )
//             }
//           >
//             <Phone size={16} />
//             Schedule Call
//           </Button>
//         </div>

//         <div className="border border-muted p-4 rounded">
//           <h4 className="font-bold mb-2">Quick Contact Form:</h4>
//           <form onSubmit={handleSubmit} className="space-y-3">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="w-full p-2 border border-muted rounded typewriter text-sm"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               className="w-full p-2 border border-muted rounded typewriter text-sm"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={3}
//               className="w-full p-2 border border-muted rounded typewriter text-sm"
//               required
//             />
//             <Button type="submit" className="w-full typewriter">
//               Submit Evidence
//             </Button>
//           </form>

//           {status === "success" && (
//             <p className="mt-2 text-green-600 text-sm">
//               ✅ Evidence submitted successfully!
//             </p>
//           )}
//           {status === "error" && (
//             <p className="mt-2 text-red-600 text-sm">
//               ❌ There was an error. Please try again.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };




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