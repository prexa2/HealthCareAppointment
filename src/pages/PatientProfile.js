import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, Save } from 'lucide-react';

const PatientProfile = () => {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [loading, setLoading] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    await updateProfile({ name, email, avatar });
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-900">My Profile</h1>
        <form onSubmit={handleSave} className="space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <img
              src={avatar}
              alt={name}
              className="w-24 h-24 rounded-full border-4 border-primary-200 shadow-lg mb-2"
            />
            <input
              type="text"
              className="input-field text-center"
              placeholder="Avatar URL"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <div className="flex items-center space-x-2">
              <User size={16} className="text-primary-600" />
              <input
                type="text"
                className="input-field"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-primary-600" />
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center space-x-2"
            disabled={loading}
          >
            <Save size={18} />
            <span>{loading ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default PatientProfile; 