import { v4 as uuidv4 } from 'uuid';

export const WorkExperienceData = [
  {
    jobname: 'Software Engineer',
    companyname: 'JP Morgan Chase',
    description: "• Developed and implemented automated scripts in Python using OOP to streamline financial reporting processes resulting in a reduction of financial incidents. • Led and successfully orchestrated the migration from RedisCache to the AMPS server, ensuring a seamless transition and optimized performance. Achieved a notable improvement in throughput by 25% and a reduction in incidents. Coded all necessary scripts and conducted thorough unit tests to guarantee system reliability and stability.  •	Got certified as AWS Cloud Practitioner. •	As Scrum Master, I improved agile methodologies and scrum practices, resulting in a 40% increase in team productivity and throughput of deliverables. ",
    datestarted: 'Dec 2021',
    dateended: 'Actuality',
    technologies: 'Python, OOP, SQL, GIT, AWS, React, Javascript, Unit Testing, Agile Methodologies, Splunk, PowerBi, Tableau',
    id: uuidv4()
  },
  {
    jobname: 'Developer',
    companyname: 'Exxon Mobil',
    description: "•	Infrastructure, network and APM monitoring through Splunk, Appdynamics, Tableau and PowerBi. Automatic triggering actions to take effect if threshold are achieved. • Developed an AI powered chatbot using NLP specifically designed to support incident managers in rapidly retrieving crucial information during ongoing incidents reducing Mean Time To Restore (MTTR) incidents.  •	Developed Python – Flask backend API’s and React Frontend for web applications, ensuring seamless user experience and optimized performance simplifying the analysis of common root causes and enhancing the decision-making process.",
    datestarted: 'Dec 2019',
    dateended: 'Dec 2021',
    technologies: 'Python, Django, Flask, Splunk, PowerBi, Tableau, AppDynamics, React, Git, SQL, Azure, Agile, Unit Testing, OOP',
    id: uuidv4()
  },
  {
    jobname: 'RPA Bot Developer',
    companyname: 'Everis',
    description: "•	Establishing, testing, and overseeing automated workflows to guarantee optimal efficiency in business processes while mitigating the risk of errors. • Got certified as a professional RPA Bot developer using Automation Anywhere tool. ",
    datestarted: 'June 2019',
    dateended: 'Dec 2019',
    technologies: ["Automation Anywhere, RPA, C#, Infrastructure, Agile"],
    id: uuidv4()
  }
  ];