const ProjectList = [
    {
        id: 9,
        name: 'Unified Video',
        description: 'Extensive backend work creating and maintaining the API used by Unified Video and other front-end user interfaces.',
        link: 'https://www.unifiedvideo.com/',
        github: false,
        technologies: ['Python', 'Flask', 'PostgreSQL', 'EC2', 'S3', 'SQS', 'CentOS', 'Bash', 'UDP', 'Jenkins', 'PostGIS', 'Jinja2', 'VirtualBox'],
        images: ['UnifiedVideo/Home.png', 'UnifiedVideo/Industries.png', 'UnifiedVideo/Products.png', 'UnifiedVideo/TechSpecs.png'],
        imageSize: 'medium'
    },
    {
        id: 10,
        name: 'Axxion.org',
        description: 'A long-running personal project that seeks to push the boundaries of human perception through commerce, music, cinematography, and design. Our species is ready to take the next leap forward, and Axxion will be there to facilitate the jump when the time comes.',
        link: 'https://www.axxion.org',
        github: false,
        technologies: ['React', 'Context API','Nodemailer', 'Stripe API', 'SASS', 'React Router', 'AWS'],
        images: ['Axxion/home.png', 'Axxion/store.png', 'Axxion/about.png', 'Axxion/contact.png'],
        imageSize: 'medium'
    },
    {
        id: 11,
        name: 'Patient 31',
        description: 'A social distancing mobile app designed during the COVID-19 pandemic. Simple counting and history screens help keep track of how many people are interacted with on a daily basis. This was a humanity driven development project, released for free and constructed under donated time.',
        link: false,
        github: false,
        technologies: ['ReactNative', 'Figma'],
        images: ['Patient31/home1.png', 'Patient31/home2.png', 'Patient31/statistics.png', 'Patient31/info.png'],
        imageSize: 'large'
    },
    {
        id: 8,
        name: 'MotionDSP Subscription',
        description: 'The MotionDSP software subscription portal - giving you access to industry leading tools for advanced image processing and computer vision software for public safety, security, government, and defense applications.',
        link: 'https://www.motiondsp.com/',
        github: false,
        technologies: ['Javascript', 'Wordpress', 'SQS', 'S3', 'PHP', 'Stripe', 'EMS', 'Python', 'CentOS', 'CSS'],
        images: ['MotionDSP/Home.png', 'MotionDSP/Buy.png', 'MotionDSP/Checkout-1.png', 'MotionDSP/Checkout-2.png', 'MotionDSP/Checkout-3.png'],
        imageSize: 'medium'
    },
    {
        id: 7,
        name: 'Sydney Eliza Florals',
        description: 'A full-featured web application for the best florist around - Sydney Kerr.',
        link: false,
        github: 'https://github.com/Olafaloofian/Creative-Success',
        technologies: ['React', 'Node', 'PostgreSQL', 'Express', 'Massive', 'GraphQL', 'Nodemailer', 'Multer', 'Context API', 'React Router', 'SASS', 'Bcrypt', 'Express Sessions'],
        images: ['SydneyElizaFlorals/Home.png', 'SydneyElizaFlorals/About.png', 'SydneyElizaFlorals/Contact.png', 'SydneyElizaFlorals/Portfolio.png', 'SydneyElizaFlorals/PortfolioItem.png', 'SydneyElizaFlorals/Login.png'],
        imageSize: 'medium'
    },
    {
        id: 5,
        name: 'Not Just a Cover Letter',
        description: 'Reading through a pile of cover letters is a little old fasioned! This web app shows hiring managers different curated presentations that replace the traditional resume/coverletter application scheme.',
        link: 'https://notjustacoverletter.com',
        github: 'https://github.com/Olafaloofian/NotJustACoverLetter',
        technologies: ['React', 'S3', 'Cloudfront', 'ACM', 'Spectacle', 'Context API', 'React Router', 'SASS', 'Webpack'],
        images: ['NotJustaCoverLetter/Home.png', 'NotJustaCoverLetter/HomeFail.png', 'NotJustaCoverLetter/HomeSuccess.png', 'NotJustaCoverLetter/Slide.png', 'NotJustaCoverLetter/Slide-1.png', 'NotJustaCoverLetter/Slide-2.png', 'NotJustaCoverLetter/Slide-3.png'],
        imageSize: 'medium'
    },
    {
        id: 6,
        name: 'Cornerstone Manor Apartments',
        description: 'A simple, stylish website for Cornerstone Manor apartments in Mesa, Arizona.',
        link: 'https://cornerstonemanorapartments.com/',
        github: 'https://github.com/Olafaloofian/Cornerstone-Manor',
        technologies: ['Javascript', 'CSS', 'HTML'],
        images: ['CornerstoneManorApartments/Home.png', 'CornerstoneManorApartments/HomeBottom.png', 'CornerstoneManorApartments/Menu.png', 'CornerstoneManorApartments/Contact.png', 'CornerstoneManorApartments/Gallery.png', 'CornerstoneManorApartments/GalleryBottom.png'],
        imageSize: 'medium'
    },
    {
        id: 4,
        name: 'DevMountain Student Tracker',
        description: 'An online tool for students and staff at DevMountain. This app keeps track of assignments completed and overall course progress.',
        link: false,
        github: false,
        technologies: ['React', 'Node', 'PostgreSQL', 'Express', 'Massive', 'Context API', 'Enzyme', 'React Router', 'SASS', 'Bcrypt', 'Express Sessions', 'ChartJS'],
        images: ['DevMountain_Tracker/addcompetency.png', 'DevMountain_Tracker/competencies.png', 'DevMountain_Tracker/staff.png', 'DevMountain_Tracker/dashboard.png','DevMountain_Tracker/studentcompetencies.png'],
        imageSize: 'medium'
    },
    // {
    //     id: 1,
    //     name: 'Axxion Health',
    //     description: 'A hybrid e-commerce/blog website that allows users to read about and buy health-related products.',
    //     link: 'https://www.theaxxionlifestyle.com',
    //     github: 'https://github.com/Olafaloofian/Axxion-Lifestyle',
    //     technologies: ['React', 'Node', 'PostgreSQL', 'Express', 'Massive', 'Redux','Nodemailer', 'Stripe API', 'SASS', 'React Router', 'Digital Ocean'],
    //     images: ['Axxion_Health/home.png', 'Axxion_Health/articles.png', 'Axxion_Health/articlecategories.png', 'Axxion_Health/articlebottom.png', 'Axxion_Health/articlecomment.png',
    //     'Axxion_Health/productlist.png', 'Axxion_Health/finalcart.png'],
    //     imageSize: 'medium'
    // },
    // {
    //     id: 2,
    //     name: 'Finder',
    //     description: 'A web app that connects applicants and recruiters with a simple, Tinder-like swiping interface.',
    //     link: false,
    //     github: 'https://github.com/Olafaloofian/Finder',
    //     technologies: ['React', 'Node', 'PostgreSQL', 'Express', 'Massive', 'Context API','Nodemailer', 'Stripe API', 'SASS', 'React Router', 'Chai', 'Enzyme', 'Jest', 'Cypress', 'Google Maps API', 'Pusher ChatKit', 'Material UI', 'Redis'],
    //     images: ['Finder/homenouser.png', 'Finder/profilemain.png', 'Finder/usersettings.png', 'Finder/jobmap.png', 'Finder/matchfound.png', 'Finder/chatting.png'],
    //     imageSize: 'large'
    // },
    // {
    //     id: 3,
    //     name: 'Chuck Norris Jokes',
    //     description: "A fun project that showcases proficiency in RESTful API's and React by generating and saving random Chuck Norris jokes",
    //     link: 'https://chucknorrisjokes.now.sh',
    //     github: 'https://github.com/Olafaloofian/Chuck-Norris-Jokes',
    //     technologies: ['React', 'Node', 'Express', "RESTful API's", 'CSS'],
    //     images: ['Chuck_Norris/home.png'],
    //     imageSize: 'medium'
    // }
]

export default ProjectList