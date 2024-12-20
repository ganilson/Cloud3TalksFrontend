import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

interface Event {
  id: string;
  title: string;
  date: Date;
  description: string;
  meetingLink: string;  // Adicionamos o link da reunião

}

export const EventCalendar = () => {
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'Cloud Architecture Workshop',
      date: new Date(2024, 3, 15),
      description: 'Learn about modern cloud architecture patterns and best practices.',
      meetingLink: 'https://meet.google.com/xyz-abc-def' // Exemplo de link do Google Meet

    },
    {
      id: '2',
      title: 'DevOps Masterclass',
      date: new Date(2024, 3, 20),
      description: 'Deep dive into DevOps practices and tools.',
      meetingLink: 'https://meet.google.com/xyz-abc-def' // Exemplo de link do Google Meet

    }
  ]);

  const addToGoogleCalendar = (event: Event) => {
    // Convert to the user's local time zone if needed
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const eventDateInTimeZone = toZonedTime(event.date, timeZone);

    const startTime = format(eventDateInTimeZone, "yyyyMMdd'T'HHmmss'Z'");
    const endTime = format(
      toZonedTime(new Date(event.date.getTime() + 2 * 60 * 60 * 1000), timeZone),
      "yyyyMMdd'T'HHmmss'Z'"
    );
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(event.description)}`;
    
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
      <div className="grid gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <div className="flex items-center mt-2 text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{format(event.date, 'MMMM d, yyyy')}</span>
                  <Clock className="h-5 w-5 ml-4 mr-2" />
                  <span>{format(event.date, 'h:mm a')}</span>
                </div>
                <p className="mt-2 text-gray-600">{event.description}</p>
              </div>
              <button
                onClick={() => addToGoogleCalendar(event)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                aria-label={`Add ${event.title} to Google Calendar`}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Add to Calendar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
