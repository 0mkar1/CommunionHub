import tech from '../image/tech.jpg';
import startup from '../image/startup.jpg'
import ai from '../image/ai.jpg'
import music from '../image/music.jpg'
import coding from '../image/coding.jpg'
import art from '../image/art.jpg'
import business from '../image/business.jpg'
import marathon from '../image/marathon.jpg'
import food from '../image/food.jpg'
import photo from '../image/photo.jpg'

export const events = [
  // Today's Events
  {
      id: 1,
      name: 'Temple Fundraiser',
      category: 'religious',
      image: tech,
      time: '10:00 AM IST',
      date: 'Monday, March 10, 2025',
      location: 'Shiv Mandir, Delhi',
      description: 'A fundraiser event to restore and maintain the temple premises.'
  },
  {
      id: 2,
      name: 'Blood Donation Drive',
      category: 'charity',
      image: startup,
      time: '3:30 PM IST',
      date: 'Monday, March 10, 2025',
      location: 'City Hospital, Mumbai',
      description: 'Donate blood and save lives at our community blood drive.'
  },

  // Tomorrow's Events
  {
      id: 3,
      name: 'Charity for Orphans',
      category: 'charity',
      image: ai,
      time: '2:00 PM IST',
      date: 'Tuesday, March 11, 2025',
      location: 'Hope Orphanage, Bangalore',
      description: 'Providing financial and moral support to orphans in need.'
  },
  {
      id: 4,
      name: 'Community Gathering',
      category: 'social',
      image: music,
      time: '6:00 PM IST',
      date: 'Tuesday, March 11, 2025',
      location: 'Community Hall, Hyderabad',
      description: 'A discussion on community welfare and development.'
  },

  // This Week's Events
  {
      id: 5,
      name: 'Festival Celebration',
      category: 'religious',
      image: coding,
      time: '9:00 AM IST',
      date: 'Wednesday, March 12, 2025',
      location: 'ISKCON Temple, Pune',
      description: 'A grand festival celebration with prayers, bhajans, and prasadam.'
  },
  {
      id: 6,
      name: 'Food Donation Drive',
      category: 'charity',
      image: art,
      time: '5:00 PM IST',
      date: 'Thursday, March 13, 2025',
      location: 'Slum Area, Chennai',
      description: 'Providing free meals to underprivileged families.'
  },
  {
      id: 7,
      name: 'Meditation Workshop',
      category: 'religious',
      image: business,
      time: '11:00 AM IST',
      date: 'Saturday, March 15, 2025',
      location: 'Yoga Center, Kolkata',
      description: 'A guided meditation session for inner peace and spirituality.'
  },

  // Next Month's Events
  {
      id: 8,
      name: 'Volunteer for a Cause',
      category: 'social',
     image: marathon,
      time: '7:00 AM IST',
      date: 'Saturday, April 5, 2025',
      location: 'NGO Office, Jaipur',
      description: 'Join our team to help the needy through volunteering work.'
  },
  {
      id: 9,
      name: 'Spiritual Retreat',
      category: 'religious',
      image: food,
      time: '1:00 PM IST',
      date: 'Thursday, April 10, 2025',
      location: 'Ashram, Rishikesh',
      description: 'A retreat to learn about spirituality and self-improvement.'
  },
  {
      id: 10,
      name: 'Prayer and Healing Session',
      category: 'religious',
      image: photo,
      time: '4:00 PM IST',
      date: 'Tuesday, April 15, 2025',
      location: 'Church, Goa',
      description: 'A prayer meeting for mental and physical healing.'
  },
];

export const categories = [
    {
      id: 1,
      name: 'Fast Food',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png',
    },
    {
      id: 2,
      name: 'Pizza',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png',
    },
    {
      id: 3,
      name: 'Wings',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png',
    },
    {
      id: 4,
      name: 'Indian',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png',
    },
    {
      id: 5,
      name: 'Latest Deals',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png',
    },
    {
      id: 6,
      name: 'Restaurant Rewards',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png',
    },
    {
      id: 7,
      name: 'Best Overall',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png',
    },
    {
      id: 8,
      name: 'Shipped Free',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png',
    },
  ];
  
