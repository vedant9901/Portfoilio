/**
 * @param {*} request - No request is used
 */
 export function PostSharedData(firestoreConnection) {
    return new Promise((resolve, reject) => {
     try{
      const databaseRef = firestoreConnection.collection('portfolio_resume_data');
      databaseRef.doc('shared_data').set({
          "projects": [{
              "title": "Animal Shelter",
              "description": "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
              "technologies": [{
                  "class": "devicon-angularjs-plain",
                  "name": "Angular"
              }, {
                  "class": "devicon-typescript-plain",
                  "name": "TypeScript"
              }, {
                  "class": "devicon-csharp-plain",
                  "name": "C#"
              }],
              "images": ["images/portfolio/animal-shelter/p1.jpg", "images/portfolio/animal-shelter/p2.jpg"],
              "url": "",
              "startDate": "2020"
          }, {
              "technologies": [{
                  "class": "devicon-react-original",
                  "name": "React"
              }, {
                  "class": "devicon-javascript-plain",
                  "name": "JavaScript"
              }],
              "description": "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
              "images": ["images/portfolio/photography/p1.jpg", "images/portfolio/photography/p2.jpg"],
              "startDate": "2018",
              "title": "Photography",
              "url": "https://github.com"
          }, {
              "title": "3D Object Viewer",
              "description": "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
              "technologies": [{
                  "class": "devicon-angularjs-plain",
                  "name": "Angular"
              }, {
                  "name": "TypeScript",
                  "class": "devicon-typescript-plain"
              }, {
                  "class": "devicon-csharp-plain",
                  "name": "C#"
              }],
              "images": ["images/portfolio/adventure/p1.jpg", "images/portfolio/adventure/p2.jpg"],
              "startDate": "2015",
              "url": "https://github.com"
          }],
          "basic_info": {
              "section_name": {
                  "about": "About me",
                  "experience": "Experience",
                  "skills": "Skills",
                  "projects": "Projects"
              },
              "description_header": "Hi",
              "description": "👋 I'm Vedant Brahmbhatt. I'm working with newest front-end frameworks like Angular, React . What you are seeing now is my Portfolio .If you want to get in touch please call the action button ! Thank you 💜"
          },
          "experience": [
              {
                  "company": "Oizom Instruments Pvt Ltd.",
                  "title": "Software Developer",
                  "mainTech": ["Angular 5"],
                  "technologies": ["HTML", "CSS", "SCSS", "jQuery", "JavaSript", "Highcharts"],
                  "years": "MAR 2021 - JUNE 2021 (4 Months)"
              },
  
              {
                  "company": "Genuin Inc.",
                  "years": "DEC 2020 - FEB 2021 (3 Months)",
                  "technologies": ["HTML", "CSS", "JavaSript", "axios", "NodeJS", "React"],
                  "title": "Software Developer",
                  "mainTech": ["ReactJS"]
              }, 
  
              {
                  "technologies": ["HTML", "CSS", "SCSS", "jQuery", "JavaSript", "Highcharts"],
                  "mainTech": ["Angular"],
                  "title": "Jr. Software Developer",
                  "company": "Oizom Instrument Pvt Ltd.",
                  "years": "SEP 2019 - DEC 2020 (1 yr 4 Months)"
              }, 
  
              {
                  "years": "AUG 2018- APRIL 2019 (5 Months)",
                  "mainTech": [".NET", "SQL"],
                  "technologies": ["HTML", "CSS", ".NET", "SQL", "JavaSript", "Crystal Report", "jQuery"],
                  "title": "Software Engineer Intern",
                  "company": "ETECH GLOBAL SERVICES, INFOCITY, GANDHINAGAR"
              },
  
              {
                  "mainTech": ["Salesforce"],
                  "years": "SEPT 2018",
                  "title": "Salesforce Trainee",
                  "company": "INCAPSULATE",
                  "technologies": ["Salesforce", "Apex"]
              }, 
  
              {
                  "years": "JAN 2016 – MAY 2016 (5 Months)",
                  "technologies": ["HTML", "CSS", ".NET", "JavaSript", "SQL", "Crystal Report","Bootstrap", "Employee Management System"],
                  "mainTech": [".NET"],
                  "title": "Software Engineer Intern",
                  "company": "ETECH GLOBAL SERVICES, INFOCITY, GANDHINAGAR"
              },
  
              {
                  "years": "MAY 2016 - AUG 2016 (4 Months)",
                  "technologies": ["Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint", "Basic Typing", "Basic Computer", "Using Internet"],
                  "mainTech": ["Basic Computer"],
                  "title": "Computer Instructor",
                  "company": "SUPATH NGO"
              }]
      })
  
        // let response = new Object()
        // firestoreConnection.collection('portfolio_shared_data').get().then(function(snapshot){
        //   snapshot.forEach(function(doc){
        //    response = doc.data()
        //   })
        //   resolve(response)
        // })
     }
     catch(e){console.log(e)}
    })
  }


/**
 * @param {*} request - No request is used
 */
export function postResumeData(firestoreConnection) {
  return new Promise((resolve, reject) => {
   try{
     const databaseRef = firestoreConnection.collection('portfolio_resume_data');
        databaseRef.doc('shared_data').set({
            basic_info: {
                social: [{
                url: "https://github.com/vedant9901",
                name: "github",
                class: "fab fa-github"
                }, {
                class: "fab fa-linkedin",
                url: "https://www.linkedin.com/in/vedant-brahmbhatt",
                name: "linkedin"
                }],
                titles: ["Software Developer"],
                name: "Vedant Brahmbhatt",
                image: "hello_vedant.jpg"
            },
            skills: {
                icons: [{
                    name: "HTML5",
                    class: "devicon-html5-plain",
                    level: "95"
                }, {
                    class: "devicon-css3-plain",
                    name: "CSS3",
                    level: "95"
                }, {
                    class: "devicon-angularjs-plain",
                    name: "Angular",
                    level: "80"
                }, {
                    class: "devicon-react-plain",
                    level: "95",
                    name: "ReactJS"
                }, {
                    level: "95",
                    class: "devicon-nodejs-plain",
                    name: "NodeJS"
                }, {
                    name: "JavaSript",
                    level: "95",
                    class: "devicon-javascript-plain"
                }, {
                    name: "Bootstrap",
                    class: "devicon-bootstrap-plain",
                    level: "95"
                }, {
                    level: "45",
                    name: "PHP",
                    class: "devicon-php-plain"
                }, {
                    name: "C",
                    class: "devicon-c-plain",
                    level: "45"
                }, {
                    class: "devicon-cplusplus-plain",
                    level: "30",
                    name: "C++"
                }, {
                    name: "MongoDB",
                    level: "50%",
                    class: "devicon-mongodb-plain"
                }, {
                    level: "2",
                    class: "devicon-git-plain",
                    name: "Git "
                }, {
                    name: "Github",
                    level: "95",
                    class: "devicon-github-plain"
                }, {
                    name: "Visual Studio",
                    class: "devicon-visualstudio-plain",
                    level: "100"
                }, {
                    class: "devicon-photoshop-plain",
                    level: "100",
                    name: "Photoshop"
                }]
            }
        })
      // let response = new Object()
      // firestoreConnection.collection('portfolio_shared_data').get().then(function(snapshot){
      //   snapshot.forEach(function(doc){
      //    response = doc.data()
      //   })
      //   resolve(response)
      // })
   }
   catch(e){console.log(e)}
  })
}
