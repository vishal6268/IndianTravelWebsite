import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Star, Users, Award, TrendingUp, Smile, Calendar, Phone, Mail, MapPinned, Facebook, Twitter, Instagram, Youtube, Send, Menu, X, Package, Briefcase, Heart, Camera, Mountain, Plane, Hotel, Utensils, Shield } from 'lucide-react';

const IndianTravelWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
    {
      name: 'Taj Mahal, Agra',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
      price: '₹5,999',
      duration: '2 Days',
      rating: 5,
      description: 'Marvel at the eternal symbol of love',
      location: 'Uttar Pradesh',
      highlights: ['Sunrise at Taj Mahal', 'Agra Fort', 'Local cuisine']
    },
    {
      name: 'Jaipur, Rajasthan',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop',
      price: '₹8,499',
      duration: '3 Days',
      rating: 5,
      description: 'Explore the Pink City\'s majestic forts',
      location: 'Rajasthan',
      highlights: ['Amber Fort', 'City Palace', 'Hawa Mahal']
    },
    {
      name: 'Kerala Backwaters',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop',
      price: '₹12,999',
      duration: '4 Days',
      rating: 5,
      description: 'Cruise through serene backwaters',
      location: 'Kerala',
      highlights: ['Houseboat stay', 'Ayurvedic spa', 'Village tours']
    },
    {
      name: 'Goa Beaches',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop',
      price: '₹7,999',
      duration: '3 Days',
      rating: 5,
      description: 'Relax on golden sandy beaches',
      location: 'Goa',
      highlights: ['Beach hopping', 'Water sports', 'Night markets']
    },
    {
      name: 'Varanasi, UP',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop',
      price: '₹6,499',
      duration: '2 Days',
      rating: 5,
      description: 'Experience spiritual enlightenment',
      location: 'Uttar Pradesh',
      highlights: ['Ganga Aarti', 'Boat ride', 'Temple visits']
    },
    {
      name: 'Ladakh Adventure',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      price: '₹18,999',
      duration: '5 Days',
      rating: 5,
      description: 'Journey to the land of high passes',
      location: 'Jammu & Kashmir',
      highlights: ['Pangong Lake', 'Nubra Valley', 'Monasteries']
    },
    {
      name: 'Manali Hill Station',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      price: '₹9,999',
      duration: '4 Days',
      rating: 5,
      description: 'Discover mountain paradise',
      location: 'Himachal Pradesh',
      highlights: ['Rohtang Pass', 'Solang Valley', 'Adventure sports']
    },
    {
      name: 'Mysore Heritage',
      image: 'https://images.unsplash.com/photo-1608211757165-c8d4f7c3860d?w=800&h=600&fit=crop',
      price: '₹6,999',
      duration: '3 Days',
      rating: 5,
      description: 'Explore royal heritage',
      location: 'Karnataka',
      highlights: ['Mysore Palace', 'Brindavan Gardens', 'Silk shopping']
    },
    {
      name: 'Darjeeling Tea Gardens',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      price: '₹10,499',
      duration: '4 Days',
      rating: 5,
      description: 'Experience tea country beauty',
      location: 'West Bengal',
      highlights: ['Toy train ride', 'Tea plantations', 'Kanchenjunga views']
    }
  ];

  const packages = [
    {
      name: 'Golden Triangle Explorer',
      duration: '7 Days / 6 Nights',
      price: '₹24,999',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      destinations: ['Delhi', 'Agra', 'Jaipur'],
      includes: ['4-star hotels', 'All meals', 'Private transport', 'Guide services'],
      type: 'Heritage & Culture'
    },
    {
      name: 'Rajasthan Royal Experience',
      duration: '10 Days / 9 Nights',
      price: '₹45,999',
      image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800&h=600&fit=crop',
      destinations: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
      includes: ['Heritage hotels', 'All meals', 'Camel safari', 'Cultural shows'],
      type: 'Luxury Heritage'
    },
    {
      name: 'Kerala Paradise Package',
      duration: '6 Days / 5 Nights',
      price: '₹32,999',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&h=600&fit=crop',
      destinations: ['Cochin', 'Munnar', 'Thekkady', 'Alleppey'],
      includes: ['Houseboat stay', 'Hill station resort', 'Ayurvedic massage', 'All transfers'],
      type: 'Nature & Wellness'
    },
    {
      name: 'Himalayan Adventure Trek',
      duration: '8 Days / 7 Nights',
      price: '₹38,999',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      destinations: ['Leh', 'Nubra Valley', 'Pangong Lake'],
      includes: ['Camping', 'All meals', 'Permits', 'Experienced guides'],
      type: 'Adventure'
    },
    {
      name: 'Goa Beach Bliss',
      duration: '5 Days / 4 Nights',
      price: '₹18,999',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
      destinations: ['North Goa', 'South Goa'],
      includes: ['Beach resort', 'Water sports', 'Cruise party', 'Breakfast included'],
      type: 'Beach & Leisure'
    },
    {
      name: 'Spiritual India Journey',
      duration: '9 Days / 8 Nights',
      price: '₹29,999',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop',
      destinations: ['Varanasi', 'Rishikesh', 'Haridwar', 'Amritsar'],
      includes: ['Hotels', 'Temple visits', 'Ganga Aarti', 'Yoga sessions'],
      type: 'Spiritual & Cultural'
    }
  ];

  const blogPosts = [
    {
      title: '10 Hidden Gems in Rajasthan You Must Visit',
      excerpt: 'Discover the lesser-known treasures of Rajasthan beyond the usual tourist spots. From secret lakes to ancient temples...',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&h=400&fit=crop',
      date: 'January 15, 2026',
      author: 'Priya Sharma',
      category: 'Destinations'
    },
    {
      title: 'Best Time to Visit Kerala Backwaters',
      excerpt: 'Planning a Kerala trip? Learn about the ideal seasons, weather patterns, and what to expect during your houseboat journey...',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
      date: 'January 10, 2026',
      author: 'Rajesh Kumar',
      category: 'Travel Tips'
    },
    {
      title: 'Ladakh Road Trip: Complete Guide for 2026',
      excerpt: 'Everything you need to know about planning an epic Ladakh road trip including routes, permits, and packing essentials...',
      image: 'https://images.unsplash.com/photo-1585252585995-c7c8c7f59c6d?w=600&h=400&fit=crop',
      date: 'January 5, 2026',
      author: 'Vikram Singh',
      category: 'Adventure'
    },
    {
      title: 'Indian Street Food: A Culinary Journey',
      excerpt: 'Explore India\'s vibrant street food culture from Delhi\'s chaat to Mumbai\'s vada pav. A foodie\'s ultimate guide...',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop',
      date: 'December 28, 2025',
      author: 'Ananya Patel',
      category: 'Food & Culture'
    },
    {
      title: 'Photography Tips for Taj Mahal at Sunrise',
      excerpt: 'Capture the perfect shot of the Taj Mahal during golden hour. Pro tips from professional travel photographers...',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop',
      date: 'December 20, 2025',
      author: 'Arjun Mehta',
      category: 'Photography'
    },
    {
      title: 'Sustainable Travel in India: How to Be a Responsible Tourist',
      excerpt: 'Learn how to minimize your environmental impact while exploring India. Tips for eco-friendly accommodations and practices...',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop',
      date: 'December 15, 2025',
      author: 'Meera Reddy',
      category: 'Sustainable Travel'
    }
  ];

  const services = [
    { icon: Users, title: '5000+ Local Guides', desc: 'Expert guides across India' },
    { icon: Award, title: '100% Trusted Agency', desc: 'Licensed & verified' },
    { icon: TrendingUp, title: '12+ Years Experience', desc: 'Industry leaders' },
    { icon: Smile, title: '99% Happy Travelers', desc: 'Outstanding satisfaction' }
  ];

  const popularDestinations = ['Taj Mahal', 'Jaipur', 'Kerala', 'Goa', 'Varanasi', 'Ladakh', 'Manali', 'Rishikesh'];

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Tours', page: 'tours' },
    { name: 'Packages', page: 'packages' },
    { name: 'Blog', page: 'blog' },
    { name: 'About Us', page: 'about' },
    { name: 'Contact', page: 'contact' }
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const renderHome = () => (
    <>
      {/* Hero Banner */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
            Discover Incredible India
          </h2>
          
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <input
                  type="text"
                  list="destinations"
                  placeholder="Where would you like to go?"
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full px-4 py-4 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                />
                <datalist id="destinations">
                  {popularDestinations.map((dest) => (
                    <option key={dest} value={dest} />
                  ))}
                </datalist>
                <MapPin className="absolute right-3 top-4 text-gray-400" size={24} />
              </div>
              
              <div className="relative">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-4 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                />
                <Calendar className="absolute right-3 top-4 text-gray-400 pointer-events-none" size={24} />
              </div>
              
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Search Tours
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">Featured Tours</p>
            <h2 className="text-5xl font-bold text-gray-900">Popular Destinations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.slice(0, 6).map((dest, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(dest.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{dest.name}</h3>
                  <p className="text-gray-600 mb-4">{dest.description}</p>
                  <p className="text-orange-600 font-bold text-2xl mb-4">{dest.price} / Person</p>
                  
                  <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-3">
                    <div className="flex items-center">
                      <Clock size={18} className="mr-2" />
                      <span className="font-semibold">{dest.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={18} className="mr-2" />
                      <span className="font-semibold text-sm">{dest.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderTours = () => (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">Explore India</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">All Tour Destinations</h2>
          <p className="text-gray-600 text-lg">Choose from our handpicked collection of India's most beautiful destinations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
                  {dest.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(dest.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                  <span className="ml-2 text-gray-600">({dest.rating}.0)</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{dest.name}</h3>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Tour Highlights:</h4>
                  <ul className="space-y-1">
                    {dest.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center">
                        <span className="text-orange-500 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-3">
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2" />
                    <span className="font-semibold">{dest.duration}</span>
                  </div>
                  <button className="bg-white text-orange-500 px-4 py-1 rounded-lg font-bold hover:bg-orange-50 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderPackages = () => (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">Special Offers</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Tour Packages</h2>
          <p className="text-gray-600 text-lg">Carefully curated packages for unforgettable journeys across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                  {pkg.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock size={18} className="mr-2" />
                  <span>{pkg.duration}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <MapPin size={18} className="mr-2 text-orange-500" />
                    Destinations:
                  </h4>
                  <p className="text-gray-600 text-sm">{pkg.destinations.join(' → ')}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Package size={18} className="mr-2 text-orange-500" />
                    Package Includes:
                  </h4>
                  <ul className="space-y-1">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Starting from</span>
                    <span className="text-3xl font-bold text-orange-600">{pkg.price}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Packages?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Hotel, title: 'Best Accommodations', desc: 'Handpicked hotels and resorts' },
              { icon: Utensils, title: 'Authentic Cuisine', desc: 'Experience local flavors' },
              { icon: Shield, title: 'Travel Insurance', desc: 'Comprehensive coverage included' },
              { icon: Camera, title: 'Photo Opportunities', desc: 'Guided photography sessions' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-orange-500" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );

  const renderBlog = () => (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">Travel Inspiration</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 text-lg">Travel tips, destination guides, and stories from incredible India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors flex items-center">
                  Read More
                  <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-10 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );

  const renderAbout = () => (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">About Us</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Your Trusted India Travel Partner</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=1000&fit=crop"
              alt="Indian Culture"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-red-500 text-white p-8 rounded-2xl shadow-xl">
              <p className="text-5xl font-bold">12+</p>
              <p className="text-lg">Years Experience</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2014, Incredible India Tours began with a simple vision: to share the magic of India with travelers from around the world. What started as a small family business has grown into one of India's most trusted travel companies, serving thousands of happy travelers each year.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We specialize in creating unforgettable journeys across India's diverse landscapes, from the snow-capped Himalayas to the tropical beaches of Kerala. Our expert team ensures every trip is a perfect blend of culture, adventure, and comfort.
            </p>
            
            <div className="space-y-4 mb-8">
              {['Personalized tour experiences', 'Best price guarantee', '24/7 customer support', 'Safe and secure travel'].map((item, idx) => (
                <label key={idx} className="flex items-center text-gray-700 font-medium">
                  <input type="checkbox" checked readOnly className="mr-3 w-5 h-5 accent-orange-500" />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission & Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion for Travel',
                desc: 'We love what we do and it shows in every detail of your journey'
              },
              {
                icon: Users,
                title: 'Customer First',
                desc: 'Your satisfaction and safety are our top priorities'
              },
              {
                icon: Award,
                title: 'Excellence',
                desc: 'We maintain the highest standards in everything we do'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50,000+', label: 'Happy Travelers' },
              { number: '5,000+', label: 'Tours Completed' },
              { number: '150+', label: 'Destinations' },
              { number: '99%', label: 'Satisfaction Rate' }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Rajesh Kumar', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
              { name: 'Priya Sharma', role: 'Operations Head', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
              { name: 'Vikram Singh', role: 'Tour Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
              { name: 'Ananya Patel', role: 'Customer Relations', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' }
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="font-bold text-gray-900">{member.name}</h4>
                <p className="text-orange-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg">We're here to help plan your perfect India adventure</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <MapPinned className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Office Address</h4>
                    <p className="text-gray-600">
                      123 Tourist Plaza, Connaught Place<br />
                      New Delhi - 110001, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Phone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone Numbers</h4>
                    <p className="text-gray-600">
                      +91 11 4567 8900<br />
                      +91 98765 43210 (24/7 Support)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Mail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email Addresses</h4>
                    <p className="text-gray-600">
                      info@incredibleindiatours.com<br />
                      support@incredibleindiatours.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, color: 'bg-blue-600' },
                    { icon: Twitter, color: 'bg-blue-400' },
                    { icon: Instagram, color: 'bg-pink-600' },
                    { icon: Youtube, color: 'bg-red-600' }
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <button
                        key={idx}
                        className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity`}
                      >
                        <Icon size={20} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-bold">9:00 AM - 7:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-bold">10:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-bold">Closed</span>
                </p>
              </div>
              <p className="mt-4 text-sm opacity-90">Emergency support available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent cursor-pointer" onClick={() => setCurrentPage('home')}>
                Incredible India
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setCurrentPage(item.page)}
                  className={`font-medium transition-colors duration-200 ${
                    currentPage === item.page
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 ${
                    currentPage === item.page
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="pt-20">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'tours' && renderTours()}
        {currentPage === 'packages' && renderPackages()}
        {currentPage === 'blog' && renderBlog()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'contact' && renderContact()}
      </div>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-16 px-4">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&h=1080&fit=crop)',
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-400">About Us</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner for exploring incredible India. We create unforgettable journeys across India's diverse landscapes.
              </p>
              <div className="flex space-x-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                  <button key={idx} className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Quick Links</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.page}>
                    <button
                      onClick={() => setCurrentPage(item.page)}
                      className="hover:text-orange-400 cursor-pointer transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Popular Tours</h3>
              <ul className="space-y-3">
                {['Golden Triangle', 'Rajasthan Heritage', 'Kerala Getaway', 'Himalayan Adventure'].map((item) => (
                  <li key={item} className="hover:text-orange-400 cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <span>Connaught Place, New Delhi - 110001</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <span>+91 11 4567 8900</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2" />
                  <span>info@incredibleindia.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">© 2026 Incredible India Tours. All rights reserved. | Designed with ❤️ for travelers</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default IndianTravelWebsite;