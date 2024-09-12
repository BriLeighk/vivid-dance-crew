import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Team() {

    const [teamMembers, setTeamMembers] = useState([
        { name: 'Bri Kirchgessner', role: 'Internal President', instagram: 'https://www.instagram.com/brianaballetofficial/', image: '/bri.jpg' },
        { name: 'Urmika Banerjee', role: 'External President', instagram: 'https://www.instagram.com/urmika.banerjee14/', image: '/urmika.jpg' },

        { name: 'Erika Huang', role: 'Co-Performance Director', instagram: 'https://www.instagram.com/eriiiiika_h/', image: '/erika.jpg' },
        { name: 'Connie Zhao', role: 'Co-Performance Director', instagram: 'https://www.instagram.com/c.onniez/', image: '/connie.jpg' },
        { name: 'Kelley Zhang', role: 'Co-Performance Director', instagram: 'https://www.instagram.com/k_zhang123/', image: '/kelley.jpg' },

        { name: 'Molly Cleary', role: 'Production Manager', instagram: 'https://www.instagram.com/molly.cco/', image: '/molly.jpg' },

        { name: 'Linglin Huang', role: 'Co-Dance Manager', instagram: 'https://www.instagram.com/00hhhxx/', image: '/linglin.jpg' },
        { name: 'Jazzy Braxton', role: 'Co-Dance Manager', instagram: 'https://www.instagram.com/j.provvb/', image: '/jazzy.jpg' },
        
        { name: 'Allie Moreton', role: 'Co-Social Media Manager', instagram: 'https://www.instagram.com/alliemoreton/', image: '/allie.jpg' },
        { name: 'Eleanor Zhang', role: 'Co-Social Media Manager', instagram: 'https://www.instagram.com/j7_ez_61/', image: '/eleanor.jpg' },
    ]);

    return (
        <div className="mt-10">
            <div className="flex justify-center mb-10">
            
            {/* For small screens, display one of each star color */}
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#A790C6] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#A790C6] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#A790C6] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B297E0] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B297E0] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B297E0] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B9A8E0] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B9A8E0] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B9A8E0] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#BDB5EC] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#BDB5EC] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#BDB5EC] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#D5BBED] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#D5BBED] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#D5BBED] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#E5C3DE] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#E5C3DE] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#E5C3DE] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />        
        </div>

        <div className="flex justify-center">
            
            <div className="max-w-7xl px-6 lg:px-8 pt-10 flex justify-center flex-col">
                <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-center mb-10 text-[#785C92]">Our Team</h2>
                <div className="flex flex-col items-center w-full">
                    

                    <div className="flex justify-center gap-x-14 flex-row flex-wrap">
                        <div className="flex justify-center flex-col"> 
                            <h1 className="text-xl font-bold tracking-tight sm:text-2xl text-center text-[#785C92] mb-2">Presidents</h1>
                            <div className="flex justify-center gap-x-4 mb-16">
                                {teamMembers.slice(0, 2).map((member, index) => (
                                    <div key={index} className="flex flex-col items-center bg-[#C4B5EE] border-4 border-[#DED3FF] rounded-lg p-4 shadow-lg h-[180px] w-[135px] sm:h-[240px] sm:w-[180px] justify-center">
                                        <img src={member.image} alt={member.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#DED3FF] wrap-none" />
                                        <h3 className="mt-2 sm:mt-4 text-sm sm:text-lg font-semibold text-white">{member.name}</h3>
                                        <p className="sm:mt-2 text-xs sm:text-sm text-[#785C92] font-semibold text-center">{member.role}</p>
                                        <div className="flex justify-center sm:mt-2">
                                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white mx-2 cursor-pointer">
                                                <FontAwesomeIcon icon={faInstagram} size="xl" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center flex-col">
                            <h1 className="text-xl font-bold tracking-tight sm:text-2xl text-center text-[#785C92] mb-2">Performance Directors</h1>
                            <div className="flex justify-center gap-x-4 mb-16 flex-wrap gap-y-4">
                                
                                {teamMembers.slice(2, 5).map((member, index) => (
                                    <div key={index} className="flex flex-col items-center bg-[#C4B5EE] border-4 border-[#DED3FF] rounded-lg p-4 shadow-lg h-[180px] w-[135px] sm:h-[240px] sm:w-[180px] justify-center">
                                        <img src={member.image} alt={member.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#DED3FF]" />
                                        <h3 className="mt-2 sm:mt-4 text-sm sm:text-lg font-semibold text-white">{member.name}</h3>
                                        <p className="sm:mt-2 text-xs sm:text-sm text-[#785C92] font-semibold text-center">{member.role}</p>
                                        <div className="flex justify-center sm:mt-2">
                                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white mx-2 cursor-pointer">
                                                <FontAwesomeIcon icon={faInstagram} size="xl" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-x-10 flex-row flex-wrap">
                        <div className="flex justify-center flex-col">
                            <h1 className="text-xl font-bold tracking-tight sm:text-2xl text-center text-[#785C92] mb-2">Dance Managers</h1>
                            <div className="flex justify-center gap-x-4 mb-16">
                                {teamMembers.slice(6, 8).map((member, index) => (
                                    <div key={index} className="flex flex-col items-center bg-[#C4B5EE] border-4 border-[#DED3FF] rounded-lg p-4 shadow-lg h-[180px] w-[135px] sm:h-[240px] sm:w-[180px] justify-center">
                                        <img src={member.image} alt={member.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#DED3FF]" />
                                        <h3 className="mt-2 sm:mt-4 text-sm sm:text-lg font-semibold text-white">{member.name}</h3>
                                        <p className="sm:mt-2 text-xs sm:text-sm text-[#785C92] font-semibold text-center">{member.role}</p>
                                        <div className="flex justify-center sm:mt-2">
                                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white mx-2 cursor-pointer">
                                                <FontAwesomeIcon icon={faInstagram} size="xl" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center flex-col">
                            <h1 className="text-xl font-bold tracking-tight sm:text-2xl text-center text-[#785C92] mb-2">Production</h1>
                            <div className="flex justify-center gap-x-4 mb-16">
                                {teamMembers.slice(5, 6).map((member, index) => (
                                    <div key={index} className="flex flex-col items-center bg-[#C4B5EE] border-4 border-[#DED3FF] rounded-lg p-4 shadow-lg h-[180px] w-[135px] sm:h-[240px] sm:w-[180px] justify-center">
                                        <img src={member.image} alt={member.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#DED3FF]" />
                                        <h3 className="mt-2 sm:mt-4 text-sm sm:text-lg font-semibold text-white">{member.name}</h3>
                                        <p className="sm:mt-2 text-xs sm:text-sm text-[#785C92] font-semibold text-center">{member.role}</p>
                                        <div className="flex justify-center sm:mt-2">
                                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white mx-2 cursor-pointer">
                                                <FontAwesomeIcon icon={faInstagram} size="xl" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex justify-center flex-col">
                            <h1 className="text-xl font-bold tracking-tight sm:text-2xl text-center text-[#785C92] mb-2">Social Media Managers</h1>
                            <div className="flex justify-center gap-x-4 mb-16">
                                {teamMembers.slice(8, 10).map((member, index) => (
                                    <div key={index} className="flex flex-col items-center bg-[#C4B5EE] border-4 border-[#DED3FF] rounded-lg p-4 shadow-lg h-[180px] w-[135px] sm:h-[240px] sm:w-[180px] justify-center">
                                        <img src={member.image} alt={member.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#DED3FF]" />
                                        <h3 className="mt-2 sm:mt-4 text-sm sm:text-lg font-semibold text-white">{member.name}</h3>
                                        <p className="sm:mt-2 text-xs sm:text-sm text-[#785C92] font-semibold text-center">{member.role}</p>
                                        <div className="flex justify-center sm:mt-2">
                                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white mx-2 cursor-pointer">
                                                <FontAwesomeIcon icon={faInstagram} size="xl" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    
                                            
                </div>
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
        </div>
        
    )
}