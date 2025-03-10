import React from 'react';
import event1 from '../image/event-1.png'
import event2 from '../image/event-2.png'
import event3 from '../image/event-3.png'
const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Easter Sunday Service</p>
          <p className='px-2'>March 20</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Event Details</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={event1}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Good Friday Service</p>
          <p className='px-2'>April 3</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Event Details</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={event2}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Eid-ul-Fitr</p>
          <p className='px-2'>March 30</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Event Details</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={event3}
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
