import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useAuth } from '../contexts/AuthContext';
import { User, Clock } from 'lucide-react';

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

const AppointmentCalendar = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const appointmentsForDay = mockAppointments.filter(
    (appt) => appt.date === formatDate(selectedDate)
  );

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">My Appointments Calendar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="w-full"
          />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Appointments on {selectedDate.toLocaleDateString()}</h2>
          {appointmentsForDay.length === 0 ? (
            <p className="text-gray-600">No appointments for this day.</p>
          ) : (
            <ul className="space-y-4">
              {appointmentsForDay.map((appt) => (
                <li key={appt.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-center space-x-3 mb-1">
                    <Clock className="text-primary-600" size={18} />
                    <span className="font-medium text-gray-900">{appt.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700 text-sm">
                    <User size={16} />
                    <span>{user?.userType === 'doctor' ? appt.patient : appt.doctor}</span>
                  </div>
                  <div className="mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${appt.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {appt.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalendar; 