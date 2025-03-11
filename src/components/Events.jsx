import React, { useState } from 'react';
import { events as initialEvents } from '../data/data.js';
import { RiArrowRightUpLine } from "react-icons/ri";

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [events, setEvents] = useState(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ name: '', date: '', time: '', image: '' });

  const filterEvents = (timeRange) => {
    const now = new Date();
    const filtered = events.filter((event) => {
      const eventDate = new Date(event.date);
      if (timeRange === 'today') return eventDate.toDateString() === now.toDateString();
      if (timeRange === 'tomorrow') {
        const tomorrow = new Date();
        tomorrow.setDate(now.getDate() + 1);
        return eventDate.toDateString() === tomorrow.toDateString();
      }
      if (timeRange === 'this_week') {
        const weekEnd = new Date();
        weekEnd.setDate(now.getDate() + (7 - now.getDay()));
        return eventDate >= now && eventDate <= weekEnd;
      }
      if (timeRange === 'next_month') {
        const nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        const nextMonthEnd = new Date(nextMonthStart.getFullYear(), nextMonthStart.getMonth() + 1, 0);
        return eventDate >= nextMonthStart && eventDate <= nextMonthEnd;
      }
      return true;
    });
    setFilteredEvents(filtered);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewEvent((prev) => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (newEvent.name && newEvent.date && newEvent.time && newEvent.image) {
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      setFilteredEvents(updatedEvents);
      setNewEvent({ name: '', date: '', time: '', image: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="bg-gradient-to-r from-[#03b8f5] to-black bg-clip-text text-transparent text-center text-4xl font-bold pb-1">✦ Upcoming Events</h1>
      <div className="flex justify-center space-x-4 my-4 overflow-auto">
        <button onClick={() => setFilteredEvents(events)} className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">All Events</button>
        <button onClick={() => filterEvents('today')} className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">Today</button>
        <button onClick={() => filterEvents('tomorrow')} className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">Tomorrow</button>
        <button onClick={() => filterEvents('this_week')} className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">This Week</button>
        <button onClick={() => filterEvents('next_month')} className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">Next Month</button>
        <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-green-600 text-white hover:bg-green-700">Add Event</button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setShowForm(false)}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">Add New Event</h2>
            <form onSubmit={addEvent}>
              <input type="text" name="name" placeholder="Event Name" value={newEvent.name} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <input type="time" name="time" value={newEvent.time} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded mb-2" required />
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Add Event</button>
              <button type="button" onClick={() => setShowForm(false)} className="w-full mt-2 bg-red-600 text-white p-2 rounded">Cancel</button>
            </form>
          </div>
        </div>
      )}

      <div className="2xl:mx-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300 p-4">
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="font-bold text-xl mt-2">{event.name}</h2>
              <p className="text-gray-600">{formatDate(event.date)}</p>
              <p className="text-gray-700">{event.time}</p>
              <button className='w-full mt-5 flex justify-center items-center bg-[#1f2a37] rounded-lg text-white'>Event Details<span><RiArrowRightUpLine /></span></button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No events found</p>
        )}
      </div>
    </div>
  );
};

export default Events;
