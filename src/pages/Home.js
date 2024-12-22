import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Home/Baner';
import About from '../components/Home/about';
import Banifits from '../components/Home/benifits';
import JobRole from '../components/Home/jobRole';
import Footer from '../components/Home/fotter';
import Contact from '../components/Home/contact';
// import jobRole from '../components/Home/jobRole';



const Home = () => {
    const jobRoles = [
        ['Process Engineer', 'Chemical Plant Manager', 'Environmental Engineer', 'Quality Control Engineer', 'Materials Scientist'],
        ['Safety Engineer', 'Product Development Engineer', 'Research and Development (R&D) Chemist', 'Process Control Engineer', 'Manufacturing Engineer'],
    ];

    const courses = [
        { image: '/assets/image-10.png', name: 'Electrical and Electronics', rating: 4.5 },
        { image: '/assets/Frame 2300-5.png', name: 'Mechanical Engineering', rating: 4 },
        { image: '/assets/Frame 2420.png', name: '  Hotel Management', rating: 5 },
    ];
    return (
        <div className='bg-blue-100 overflow-hidden'>
           <div className='p-0 sm:p-10'>
           <Header/>
            <Banner/>
            <About/>
            <Banifits/>
            <JobRole jobRoles={jobRoles} courses={courses} />
           </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;