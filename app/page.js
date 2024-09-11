'use client'

import Header from "./Components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Newsletter from './Components/Newsletter';
import Team from './Components/Team';

export default function Home() {
  return (
    <div>
    <div className="bg-[#C4B5EE] rounded-lg pt-4 pb-4 shadow-lg">
      <Header />
      <div className="relative isolate px-6 lg:px-8 border-4 border-[#DED3FF] ml-4 mr-4 rounded-lg">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white" style={{ 

              }}>
              VIVID Dance Crew
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#785C92] font-bold " style={{ }}>
            We are a dance group located at the University of Wisconsin-Madison that specializes in K-Pop and Hip-hop dance covers. 
            As a group, we take on the roles of directors, film crew, editors, and performers in the production of our cover videos, 
            which we proudly showcase on our YouTube channel.
            Our goal is to provide a platform for dancers of all levels to hone their talents in a welcoming and safe environment.

            </p>
            <div className="flex justify-center mt-4 z-1000">
              <a href="https://www.instagram.com/vividdancecrew" target="_blank" rel="noopener noreferrer" className="text-white mx-2 cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="http://www.youtube.com/@VIVIDDANCECREW" target="_blank" rel="noopener noreferrer" className="text-white mx-2 cursor-pointer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://www.tiktok.com/@vividdancecrew23" target="_blank" rel="noopener noreferrer" className="text-white mx-2 cursor-pointer">
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
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
    <About />
    <Gallery />
    {'<Team />'}
    <Newsletter />
    </div>
    
  );
}
