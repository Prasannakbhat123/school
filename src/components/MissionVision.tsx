// src/components/MissionVision.tsx
import React from 'react';

interface MissionVisionProps {
  missionStatement: string;
  visionStatement: string;
  imageSrc?: string; // Optional image to complement
  imageAlt?: string;
}

const MissionVision: React.FC<MissionVisionProps> = ({
  missionStatement,
  visionStatement,
  imageSrc,
  imageAlt = "Our commitment to excellence",
}) => {
  return (
    <section className="py-16 md:py-24 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 border-l-4 pl-4"
                  style={{ borderColor: '#8a64b8' }}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {missionStatement}
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 border-l-4 pl-4"
                  style={{ borderColor: '#8a64b8' }}>
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {visionStatement}
              </p>
            </div>
          </div>

          {/* Optional Image */}
          {imageSrc && (
            <div className="mt-10 md:mt-0">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[500px] grayscale hover:grayscale-0 transition-all duration-500"
                style={{ boxShadow: '0 10px 25px rgba(138, 100, 184, 0.2)' }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
