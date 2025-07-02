import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Briefcase, Search, ChevronDown } from 'lucide-react';

const mockDoctors = [
  {
    id: 1,
    name: 'Dr. John Smith',
    specialization: 'Cardiology',
    experience: '10+ years',
    rating: 4.8,
    avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=3b82f6&color=fff',
    bio: 'Expert in treating heart conditions and promoting cardiovascular wellness.'
  },
  {
    id: 2,
    name: 'Dr. Emily Clark',
    specialization: 'Dermatology',
    experience: '8 years',
    rating: 4.9,
    avatar: 'https://ui-avatars.com/api/?name=Emily+Clark&background=ec4899&color=fff',
    bio: 'Specializing in skin health, from acne to complex dermatological issues.'
  },
  {
    id: 3,
    name: 'Dr. Michael Brown',
    specialization: 'Pediatrics',
    experience: '15 years',
    rating: 4.7,
    avatar: 'https://ui-avatars.com/api/?name=Michael+Brown&background=22c55e&color=fff',
    bio: 'Dedicated to providing comprehensive healthcare for children and adolescents.'
  },
  {
    id: 4,
    name: 'Dr. Sarah Wilson',
    specialization: 'Neurology',
    experience: '12 years',
    rating: 4.9,
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Wilson&background=8b5cf6&color=fff',
    bio: 'Focused on diagnosing and treating disorders of the nervous system.'
  },
    {
    id: 5,
    name: 'Dr. David Lee',
    specialization: 'Orthopedics',
    experience: '9 years',
    rating: 4.6,
    avatar: 'https://ui-avatars.com/api/?name=David+Lee&background=f97316&color=fff',
    bio: 'Expert in musculoskeletal injuries and joint replacement surgeries.'
  },
  {
    id: 6,
    name: 'Dr. Jessica Martinez',
    specialization: 'Oncology',
    experience: '11 years',
    rating: 4.8,
    avatar: 'https://ui-avatars.com/api/?name=Jessica+Martinez&background=64748b&color=fff',
    bio: 'Compassionate care for cancer patients using the latest treatment protocols.'
  }
];

const specializations = [
    'All', 'Cardiology', 'Dermatology', 'Pediatrics', 'Neurology', 'Orthopedics', 'Oncology'
]

const Doctors = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpec, setSelectedSpec] = useState('All');

    const filteredDoctors = mockDoctors.filter(doctor => 
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedSpec === 'All' || doctor.specialization === selectedSpec)
    );

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Find Your Doctor</h1>
            <p className="text-lg text-gray-600">Search for the best healthcare professionals.</p>
        </motion.div>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search by doctor's name..."
                    className="input-field pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="relative">
                <select
                    className="input-field appearance-none pr-8"
                    value={selectedSpec}
                    onChange={(e) => setSelectedSpec(e.target.value)}
                >
                    {specializations.map(spec => <option key={spec} value={spec}>{spec}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-full h-56 object-cover rounded-t-xl mb-4"
            />
            <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h2>
                <div className="flex items-center text-gray-600 mb-2">
                    <Briefcase size={16} className="mr-2 text-primary-600" />
                    <span>{doctor.specialization}</span>
                </div>
                 <div className="flex items-center text-gray-600 mb-4">
                    <Star size={16} className="mr-2 text-yellow-500" />
                    <span>{doctor.rating}/5.0 • {doctor.experience} experience</span>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{doctor.bio}</p>
                <Link
                    to={`/book-appointment/${doctor.id}`}
                    className="btn-primary mt-auto text-center"
                >
                    Book Appointment
                </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Doctors; 