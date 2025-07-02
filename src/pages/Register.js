import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { UserPlus, User, Shield } from 'lucide-react';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [userType, setUserType] = useState('patient');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [consultationFee, setConsultationFee] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = {
      name,
      email,
      password,
      userType,
      ...(userType === 'doctor' && {
        specialization,
        experience,
        consultationFee,
      })
    };
    const res = await register(userData);
    setLoading(false);
    if (res.success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card w-full max-w-md p-8"
      >
        <div className="flex items-center space-x-2 mb-6">
          <UserPlus className="text-primary-600" />
          <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">User Type</label>
            <div className="flex space-x-4">
              <button
                type="button"
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg border transition-colors duration-200 ${userType === 'patient' ? 'bg-primary-50 border-primary-600 text-primary-700' : 'bg-white border-gray-300 text-gray-600'}`}
                onClick={() => setUserType('patient')}
              >
                <User size={16} />
                <span>Patient</span>
              </button>
              <button
                type="button"
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg border transition-colors duration-200 ${userType === 'doctor' ? 'bg-primary-50 border-primary-600 text-primary-700' : 'bg-white border-gray-300 text-gray-600'}`}
                onClick={() => setUserType('doctor')}
              >
                <Shield size={16} />
                <span>Doctor</span>
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="you@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {userType === 'doctor' && (
            <>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Specialization</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g. Cardiology"
                  value={specialization}
                  onChange={e => setSpecialization(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Experience</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g. 10+ years"
                  value={experience}
                  onChange={e => setExperience(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Consultation Fee ($)</label>
                <input
                  type="number"
                  className="input-field"
                  placeholder="e.g. 150"
                  value={consultationFee}
                  onChange={e => setConsultationFee(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center space-x-2"
            disabled={loading}
          >
            <span>{loading ? 'Creating account...' : 'Register'}</span>
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 font-medium hover:underline">
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register; 