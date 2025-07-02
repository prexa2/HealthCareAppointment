import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const mockDoctor = {
  id: 1,
  name: 'Dr. John Smith',
  specialization: 'Cardiology',
  experience: '10+ years',
  rating: 4.8,
  consultationFee: 150,
  avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=3b82f6&color=fff',
};

const AppointmentBooking = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Appointment booked successfully!');
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Book Appointment</h1>
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={mockDoctor.avatar}
            alt={mockDoctor.name}
            className="w-16 h-16 rounded-full border-2 border-primary-200"
          />
          <div>
            <div className="font-semibold text-lg text-gray-900">{mockDoctor.name}</div>
            <div className="text-gray-600 text-sm">{mockDoctor.specialization} • {mockDoctor.experience}</div>
            <div className="text-primary-600 font-medium text-sm">${mockDoctor.consultationFee} per consultation</div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <div className="flex items-center space-x-2">
              <Calendar size={16} className="text-primary-600" />
              <input
                type="date"
                className="input-field"
                value={date}
                onChange={e => setDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Time</label>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-primary-600" />
              <input
                type="time"
                className="input-field"
                value={time}
                onChange={e => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Reason for Visit</label>
            <textarea
              className="input-field"
              placeholder="Describe your symptoms or reason for appointment"
              value={reason}
              onChange={e => setReason(e.target.value)}
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center space-x-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <CheckCircle className="animate-spin" size={18} />
                <span>Booking...</span>
              </>
            ) : (
              <>
                <CheckCircle size={18} />
                <span>Book Appointment</span>
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AppointmentBooking; 