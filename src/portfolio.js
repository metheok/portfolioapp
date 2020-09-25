
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Omar Kantroo",
  title: "Hi all, I'm Omar",
  subTitle: emoji("A coding enthusiast 💻 with experience in Web development using JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."),
  resumeLink: "https://www.google.co.in"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/metheok",
  linkedin: "https://www.linkedin.com/in/iamomariqbal/",
  telegram:"https://t.me/iamomariqbal",
  gmail: "eyetinok@gmail.com",
  // gitlab: "https://gitlab.com/metheok",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@metheok",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop interactive Front end / User Interfaces for your web"),
    emoji("⚡ Develop fast SPA's with integration with database"),
    
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Mongo DB",
      fontAwesomeClassname: "fas fa-database"
    },



  ]
};

// Your top 3 proficient stacks/tech experience

// const techStack = {
//   viewSkillBars: true, //Set it to true to show Proficiency Section
//   experience: [
//     {
//       Stack: "Frontend/Design",  //Insert stack or technology you have experience in
//       progressPercentage: "60%"  //Insert relative proficiency in percentage
//     },
//     {
//       Stack: "Backend",
//       progressPercentage: "0%"
//     },
//     {
//       Stack: "Programming",
//       progressPercentage: "60%"
//     }
//   ]
// };


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer(Front End and Backend)",  
      company: "ITenzyme",
      companylogo: require("./assets/images/ITenzymeLogo.jpg"),
      date: "June 2015 – Present",
      desc: "Work experience of over 6+ Years in web design and development, Worked with companies of all magnitudes ranging from a small startup to buzzing product based company",
  
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "NmFiMWU1NDk3NDIyNzIxYmJiZTgxZDAyMGI4MjllMjRlN2IxMjQxZQ==",
  githubUserName: "metheok", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};










const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  twitter: "https://twitter.com/iamomariqbal",
  location:"Kashmir, India",
  telegram:"https://t.me/iamomariqbal",
  email_address: "eyetinok@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, workExperiences, openSource,  contactInfo  };
