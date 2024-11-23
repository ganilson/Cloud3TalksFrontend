import React, { useState, useEffect } from 'react';
import { socket } from '../services/socket';
import { Video, Users } from 'lucide-react';

interface Webinar {
  id: string;
  title: string;
  date: string;
  speaker: string;
  participants: number;
}

export const WebinarSection = () => {
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [registrationEmail, setRegistrationEmail] = useState('');

  useEffect(() => {
    // Listen for real-time updates
    socket.on('webinar-update', (updatedWebinar) => {
      setWebinars(current =>
        current.map(w => w.id === updatedWebinar.id ? updatedWebinar : w)
      );
    });

    return () => {
      socket.off('webinar-update');
    };
  }, []);

  const handleRegistration = (webinarId: string) => {
    if (!registrationEmail) return;
    
    socket.emit('register-webinar', {
      webinarId,
      email: registrationEmail
    });
    
    setRegistrationEmail('');
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Webinars</h2>
        <div className="grid gap-6">
          {webinars.map((webinar) => (
            <div key={webinar.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{webinar.title}</h3>
                  <p className="text-gray-600 mt-2">Speaker: {webinar.speaker}</p>
                  <div className="flex items-center mt-2 text-gray-600">
                    <Video className="h-5 w-5 mr-2" />
                    <span>{webinar.date}</span>
                    <Users className="h-5 w-5 ml-4 mr-2" />
                    <span>{webinar.participants} registered</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 border rounded-md mb-2"
                    value={registrationEmail}
                    onChange={(e) => setRegistrationEmail(e.target.value)}
                  />
                  <button
                    onClick={() => handleRegistration(webinar.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};