import React, { useState } from 'react';
import { events as initialEvents } from '../data/data.js';
import { RiArrowRightUpLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [events, setEvents] = useState(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ name: '', date: '', time: '', image: '', category: 'religious', description: '', location: '' });

  const categories = ['Religious', 'Social', 'Charity'];

  const filterEvents = (category) => {
    if (category === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category.toLowerCase() === category.toLowerCase()));
    }
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
      setNewEvent({ name: '', date: '', time: '', image: '', category: 'religious', description: '', location: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 pt-24">
      <h1 className="bg-gradient-to-r from-[#03b8f5] to-black bg-clip-text text-transparent text-center text-4xl font-bold pb-1">✦ Upcoming Events</h1>
      <div className='overflow-auto'>

      <div className="flex justify-center space-x-4 my-4 whitespace-nowrap px-2 min-w-[500px]">
        <button onClick={() => filterEvents('All')} className="flex-shrink-0 px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">All</button>
        {categories.map(category => (
          <button key={category} onClick={() => filterEvents(category)} className="flex-shrink-0 px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">{category}</button>
        ))}
        <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 border-green-700 flex-shrink-0">Add Event</button>
      </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center " style={{zIndex: 60}} onClick={() => setShowForm(false)}>
          <div className="absolute bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto " style={{zIndex: 60}} onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">Add New Event</h2>
            <form onSubmit={addEvent}>
              <input type="text" name="name" placeholder="Event Name" value={newEvent.name} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <input type="time" name="time" value={newEvent.time} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <select name="category" value={newEvent.category} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required>
                {categories.map(category => (
                  <option key={category} value={category.toLowerCase()}>{category}</option>
                ))}
              </select>
              <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
              <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
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
              <p className="text-gray-600 flex items-center gap-2"><span><FaRegCalendarAlt /></span>{event.date}</p>
              <p className="text-gray-700 flex items-center gap-2"><span><IoTime /></span>{event.time}</p>
              <p className="text-gray-700 flex items-center gap-2"><span><IoLocationSharp /></span>{event.location}</p>
              <p className="pt-5 text-gray-700">{event.description}</p>
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