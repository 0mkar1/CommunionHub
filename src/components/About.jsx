import React from 'react';

const HeadlineCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600">
          About Communion
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg text-center">
          Connecting people of all faiths through events and community support.
        </p>
        <div className="mt-6 space-y-4 text-gray-700 text-sm sm:text-base">
          <p>
            The <span className="font-semibold text-blue-500">Communion App</span> is a platform designed to bring individuals
            from diverse faiths together. Whether you're looking to participate in
            religious events, engage in discussions, or seek support, Communion is
            here to help foster understanding and unity.
          </p>
          <p>
            Our mission is to build a community where faith and fellowship thrive,
            empowering people to connect, share, and grow spiritually. Join us to
            explore upcoming events, volunteer opportunities, and meaningful
            discussions.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCards;