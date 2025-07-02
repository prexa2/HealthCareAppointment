import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('healthcare_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('healthcare_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password, userType) => {
    try {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data based on user type
      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: email.split('@')[0],
        userType,
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=3b82f6&color=fff`,
        createdAt: new Date().toISOString(),
      };

      if (userType === 'doctor') {
        mockUser.specialization = 'Cardiology';
        mockUser.experience = '10+ years';
        mockUser.rating = 4.8;
        mockUser.consultationFee = 150;
      }

      setUser(mockUser);
      localStorage.setItem('healthcare_user', JSON.stringify(mockUser));
      
      toast.success(`Welcome back, ${mockUser.name}!`);
      return { success: true };
    } catch (error) {
      toast.error('Login failed. Please try again.');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        ...userData,
        avatar: `https://ui-avatars.com/api/?name=${userData.name}&background=3b82f6&color=fff`,
        createdAt: new Date().toISOString(),
      };

      if (userData.userType === 'doctor') {
        newUser.specialization = userData.specialization || 'General Medicine';
        newUser.experience = userData.experience || '5+ years';
        newUser.rating = 0;
        newUser.consultationFee = userData.consultationFee || 100;
      }

      setUser(newUser);
      localStorage.setItem('healthcare_user', JSON.stringify(newUser));
      
      toast.success(`Welcome to HealthCare Pro, ${newUser.name}!`);
      return { success: true };
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('healthcare_user');
    toast.success('Logged out successfully');
  };

  const updateProfile = (updates) => {
    try {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('healthcare_user', JSON.stringify(updatedUser));
      toast.success('Profile updated successfully');
      return { success: true };
    } catch (error) {
      toast.error('Failed to update profile');
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 