import React from 'react';
import { Parallax } from 'react-parallax';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      bgImageAlt="Cloud Technology"
      strength={200}
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Welcome to Cloud3Talks
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-12">
            Join the future of cloud computing discussions and knowledge sharing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#upcoming-events"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Upcoming Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#join-webinar"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Join Webinar
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </Parallax>
  );
};