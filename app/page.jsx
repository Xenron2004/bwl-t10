'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiChevronLeft, FiChevronRight, FiUsers, FiCalendar } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa'; 
import Logos from "../components/assets/Bwlt.png"
import Logoss from "../components/assets/Bwltt.png"
import Image from 'next/image';

const highlights = [
  {
    id: 1,
    title: "BWL Season 1 Registration Open",
    description: "Join the most exciting cricket league in Rajasthan",
    image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg"
  },
  {
    id: 2,
    title: "Professional Training Programs",
    description: "Train with certified coaches and former players",
    image: "https://images.pexels.com/photos/1308713/pexels-photo-1308713.jpeg"
  },
  {
    id: 3,
    title: "State-of-the-art Facilities",
    description: "Play on world-class cricket grounds",
    image: "https://images.pexels.com/photos/163403/cricket-ball-game-leather-163403.jpeg"
  }
];

const teams = [
  { name: "Jaipur Warriors", logo: "JW", color: "bg-red-600" },
  { name: "Udaipur Royals", logo: "UR", color: "bg-blue-600" },
  { name: "Jodhpur Titans", logo: "JT", color: "bg-purple-600" },
  { name: "Kota Kings", logo: "KK", color: "bg-green-600" },
  { name: "Bikaner Bulls", logo: "BB", color: "bg-orange-600" },
  { name: "Ajmer Eagles", logo: "AE", color: "bg-indigo-600" },
  { name: "Alwar Lions", logo: "AL", color: "bg-yellow-600" },
  { name: "Bharatpur Blazers", logo: "BZ", color: "bg-pink-600" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen cricket-bg flex items-center">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 mt-[-40px] text-center items-center justify-center flex flex-col">
            {/* Logo */}
            <Image src={Logoss} alt="BWL" height={200} width={200} />
            {/* <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-black font-bold text-6xl">R</span>
            </div> */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              BWL
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-yellow-400 mb-6">
              Bharat Warriors League
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the most prestigious cricket league in India. Register now and become part of cricket history.
            </p>
            <Link href="/register" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
              <FaTrophy />
              <span>Register Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Carousel */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">League Highlights</h2>
          
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {highlights.map((highlight) => (
                  <div key={highlight.id} className="w-full flex-shrink-0">
                    <div className="relative h-96">
                      <img
                        src={highlight.image}
                        alt={highlight.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-8 text-white">
                          <h3 className="text-3xl font-bold mb-2">{highlight.title}</h3>
                          <p className="text-xl text-gray-300">{highlight.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <FiChevronRight size={24} />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">RSPL Teams</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team, index) => (
              <div key={index} className="team-card p-6 rounded-xl text-center">
                <div className={`w-20 h-20 ${team.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-2xl">{team.logo}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{team.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 p-8 rounded-xl">
              <FiUsers className="text-5xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
              <p className="text-gray-300">Registered Players</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 p-8 rounded-xl">
              <FaTrophy className="text-5xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">8</h3>
              <p className="text-gray-300">Teams</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 p-8 rounded-xl">
              <FiCalendar className="text-5xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">3</h3>
              <p className="text-gray-300">Months Season</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}