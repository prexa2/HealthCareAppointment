import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Calendar, User, Stethoscope, ArrowRight, PlusCircle } from 'lucide-react';

const mockAppointments = [
  {
    id: 1,
    date: '2024-06-10',
    time: '10:00 AM',
    doctor: 'Dr. John Smith',
    patient: 'Alice Brown',
    status: 'Confirmed',
  },
  {
    id: 2,
    date: '2024-06-12',
    time: '2:00 PM',
    doctor: 'Dr. Emily Clark',
    patient: 'Bob Green',
    status: 'Pending',
  },
];

const Dashboard = () => {
  const { user } = useAuth();
  const isDoctor = user?.userType === 'doctor';

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Welcome, {user?.name}!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Link to="/calendar" className="card flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
          <Calendar className="w-8 h-8 text-primary-600 mb-2" />
          <span className="font-semibold text-lg">View Calendar</span>
        </Link>
        {isDoctor ? (
          <Link to="/doctor-profile/1" className="card flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
            <Stethoscope className="w-8 h-8 text-green-600 mb-2" />
            <span className="font-semibold text-lg">My Profile</span>
          </Link>
        ) : (
          <Link to="/patient-profile" className="card flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
            <User className="w-8 h-8 text-blue-600 mb-2" />
            <span className="font-semibold text-lg">My Profile</span>
          </Link>
        )}
        <Link to="/book-appointment/1" className="card flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
          <PlusCircle className="w-8 h-8 text-accent-600 mb-2" />
          <span className="font-semibold text-lg">Book Appointment</span>
        </Link>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Upcoming Appointments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Time</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">{isDoctor ? 'Patient' : 'Doctor'}</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {mockAppointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{appt.date}</td>
                  <td className="px-4 py-2">{appt.time}</td>
                  <td className="px-4 py-2">{isDoctor ? appt.patient : appt.doctor}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${appt.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {appt.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-right">
                    <Link to="/calendar" className="text-primary-600 hover:underline flex items-center space-x-1">
                      <span>View</span>
                      <ArrowRight size={14} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 