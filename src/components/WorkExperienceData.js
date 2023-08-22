import { v4 as uuidv4 } from 'uuid';

export const WorkExperienceData = [
  {
    jobname: 'Software Engineer',
    companyname: 'JP Morgan Chase',
    description: "Python backend Software Engineer. Scripts developer in Python for financial internal tools. Object Oriented Programming, Unit Testing, Code reviews, Agile Methodologies. Certified AWS Cloud Practitioner",
    datestarted: 'Dec 2021',
    dateended: 'Actuality',
    technologies: 'HTML, CSS, Scrum, Agile, UnitTests, OOP, GIT, Python, SQL, React, AWS',
    id: uuidv4()
  },
  {
    jobname: 'Developer',
    companyname: 'Exxon Mobil',
    description: "Dashboard development used as reporting and monitoring tools. Infrastructure, network and UX monitoring through Splunk, AppDynamics, Tableau and PowerBI. Machine Learning services offered by Splunk. Agile methodology under Scrum framework.",
    datestarted: 'Dec 2019',
    dateended: 'Dec 2021',
    technologies: 'HTML, CSS, Scrum, Agile, UnitTests, OOP, GIT, Python, SQL,Splunk, PowerBi, Tableau',
    id: uuidv4()
  },
  {
    jobname: 'RPA Bot Developer',
    companyname: 'Everis',
    description: "Robotic Process Automation using Automation Anywhere. Develop end to end project plans with bots that emulate human behavior. Provide development and testing support.",
    datestarted: 'June 2019',
    dateended: 'Dec 2019',
    technologies: ["App Dynamics"],
    id: uuidv4()
  }
  ];