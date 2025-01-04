import React, { useState } from 'react';
import Button from './Button';
import Arrow from '../assets/svg/Arrow';

const Carousel = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto my-5">
  <div className="overflow-hidden relative h-96"> {/* Increased parent height */}
    {content.map((elem, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-transform transform ${
          index === currentIndex ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h5 className="h5 font-bold">Year {elem.year}</h5>
        <div className="p-4 mt-1 mb-5 overflow-y-scroll h-96"> {/* Increased scrollable area height */}
          <h2 className="text-lg font-bold mb-4 mt-2">Topics to be covered:</h2>
          <table className="min-w-full table-auto border-collapse border border-gray-300"> {/* Added min height */}
            <thead>
              <tr className="bg-n-6">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">#</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Topic</th>
              </tr>
            </thead>
            <tbody>
              {elem.topics.map((topic, index) => (
                <tr key={index} className="even:bg-n-6">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}.</td>
                  <td className="border border-gray-300 px-4 py-2">{topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>

  <Button
    onClick={prevSlide}
    className="max-w-1 mt-10 mr-[40.75rem] absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
  >
    {'<'}
  </Button>

  <Button
    onClick={nextSlide}
    className="max-w-1 mt-10 absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
  >
    {'>'}
  </Button>
</div>

  );
};

export default Carousel;