import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Calendar, User } from 'lucide-react';

const mockDoctor = {
  id: 1,
  name: 'Dr. John Smith',
  specialization: 'Cardiology',
  experience: '10+ years',
  rating: 4.8,
  consultationFee: 150,
  bio: 'Passionate about patient care and heart health. Over a decade of experience in cardiology.',
  avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=3b82f6&color=fff',
};

const mockAppointments = [
  {
    id: 1,
    date: '2024-06-10',
    time: '10:00 AM',
    patient: 'Alice Brown',
    status: 'Confirmed',
  },
  {
    id: 2,
    date: '2024-06-12',
    time: '2:00 PM',
    patient: 'Bob Green',
    status: 'Pending',
  },
];

const DoctorProfile = () => {
  useParams();
  // In a real app, fetch doctor by id
  const doctor = mockDoctor;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        <img
          src={doctor.avatar}
          alt={doctor.name}
          className="w-32 h-32 rounded-full border-4 border-primary-200 shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-primary-600 font-semibold">{doctor.specialization}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{doctor.experience}</span>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <Star className="text-yellow-400" size={18} />
            <span className="font-medium text-gray-700">{doctor.rating} / 5.0</span>
          </div>
          <div className="mb-2 text-gray-700">Consultation Fee: <span className="font-semibold text-primary-600">${doctor.consultationFee}</span></div>
          <p className="text-gray-600 mb-2">{doctor.bio}</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Upcoming Appointments</h2>
        <ul className="space-y-4">
          {mockAppointments.map((appt) => (
            <li key={appt.id} className="border-b pb-4 last:border-b-0 last:pb-0">
              <div className="flex items-center space-x-3 mb-1">
                <Calendar className="text-primary-600" size={18} />
                <span className="font-medium text-gray-900">{appt.date} at {appt.time}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 text-sm">
                <User size={16} />
                <span>{appt.patient}</span>
              </div>
              <div className="mt-1">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${appt.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {appt.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorProfile; 