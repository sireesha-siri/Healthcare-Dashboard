/* ========================================
   api.jsx - Complete API Utility Functions
   ======================================== */

import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../utils/constants';

// API Credentials for Basic Auth
const API_USERNAME = 'coalition';
const API_PASSWORD = 'skills-test';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    username: API_USERNAME,
    password: API_PASSWORD
  }
});

// Request interceptor - Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Add request timestamp for debugging
    config.metadata = { startTime: new Date() };
    
    console.log(`[API Request] ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => {
    // Calculate request duration
    const duration = new Date() - response.config.metadata.startTime;
    console.log(`[API Response] ${response.config.url} - ${duration}ms`);
    
    return response;
  },
  (error) => {
    console.error('[API Response Error]', error);
    
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('authToken');
          localStorage.removeItem('user');
          window.location.href = '/login';
          break;
          
        case 403:
          // Forbidden
          console.error('Access forbidden:', data.message);
          break;
          
        case 404:
          // Not found
          console.error('Resource not found:', data.message);
          break;
          
        case 500:
          // Server error
          console.error('Server error:', data.message);
          break;
          
        default:
          console.error(`Error ${status}:`, data.message);
      }
    } else if (error.request) {
      // Request made but no response received
      console.error('No response from server');
    } else {
      // Error in request setup
      console.error('Request setup error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// API Service Methods
export const apiService = {
  // ==================== AUTH ====================
  
  login: async (credentials) => {
    const response = await api.post(API_ENDPOINTS.LOGIN, credentials);
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },
  
  logout: async () => {
    await api.post(API_ENDPOINTS.LOGOUT);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    return true;
  },
  
  register: async (userData) => {
    const response = await api.post(API_ENDPOINTS.REGISTER, userData);
    return response.data;
  },
  
  // ==================== PATIENTS ====================
  
  getPatients: async (params = {}) => {
    const response = await api.get(API_ENDPOINTS.PATIENTS, { params });
    // Handle different response structures
    if (Array.isArray(response.data)) {
      return response.data;
    } else if (response.data?.patients && Array.isArray(response.data.patients)) {
      return response.data.patients;
    } else if (response.data?.data && Array.isArray(response.data.data)) {
      return response.data.data;
    }
    return response.data;
  },
  
  getPatient: async (id) => {
    const response = await api.get(`${API_ENDPOINTS.PATIENTS}/${id}`);
    return response.data;
  },
  
  createPatient: async (patientData) => {
    const response = await api.post(API_ENDPOINTS.PATIENTS, patientData);
    return response.data;
  },
  
  updatePatient: async (id, patientData) => {
    const response = await api.put(`${API_ENDPOINTS.PATIENTS}/${id}`, patientData);
    return response.data;
  },
  
  deletePatient: async (id) => {
    const response = await api.delete(`${API_ENDPOINTS.PATIENTS}/${id}`);
    return response.data;
  },
  
  searchPatients: async (searchTerm) => {
    const response = await api.get(API_ENDPOINTS.PATIENT_SEARCH, {
      params: { q: searchTerm }
    });
    return response.data;
  },
  
  // ==================== APPOINTMENTS ====================
  
  getAppointments: async (params = {}) => {
    const response = await api.get(API_ENDPOINTS.APPOINTMENTS, { params });
    return response.data;
  },
  
  getAppointment: async (id) => {
    const response = await api.get(`${API_ENDPOINTS.APPOINTMENTS}/${id}`);
    return response.data;
  },
  
  createAppointment: async (appointmentData) => {
    const response = await api.post(API_ENDPOINTS.APPOINTMENTS, appointmentData);
    return response.data;
  },
  
  updateAppointment: async (id, appointmentData) => {
    const response = await api.put(`${API_ENDPOINTS.APPOINTMENTS}/${id}`, appointmentData);
    return response.data;
  },
  
  cancelAppointment: async (id, reason) => {
    const response = await api.put(`${API_ENDPOINTS.APPOINTMENTS}/${id}/cancel`, { reason });
    return response.data;
  },
  
  confirmAppointment: async (id) => {
    const response = await api.put(`${API_ENDPOINTS.APPOINTMENTS}/${id}/confirm`);
    return response.data;
  },
  
  rescheduleAppointment: async (id, newDateTime) => {
    const response = await api.put(`${API_ENDPOINTS.APPOINTMENTS}/${id}/reschedule`, {
      dateTime: newDateTime
    });
    return response.data;
  },
  
  // ==================== LAB RESULTS ====================
  
  getLabResults: async (patientId = null) => {
    const params = patientId ? { patientId } : {};
    const response = await api.get(API_ENDPOINTS.LAB_RESULTS, { params });
    return response.data;
  },
  
  getLabResult: async (id) => {
    const response = await api.get(`${API_ENDPOINTS.LAB_RESULTS}/${id}`);
    return response.data;
  },
  
  createLabResult: async (labData) => {
    const response = await api.post(API_ENDPOINTS.LAB_RESULTS, labData);
    return response.data;
  },
  
  updateLabResult: async (id, labData) => {
    const response = await api.put(`${API_ENDPOINTS.LAB_RESULTS}/${id}`, labData);
    return response.data;
  },
  
  deleteLabResult: async (id) => {
    const response = await api.delete(`${API_ENDPOINTS.LAB_RESULTS}/${id}`);
    return response.data;
  },
  
  // ==================== MESSAGES ====================
  
  getMessages: async (params = {}) => {
    const response = await api.get(API_ENDPOINTS.MESSAGES, { params });
    return response.data;
  },
  
  getMessage: async (id) => {
    const response = await api.get(`${API_ENDPOINTS.MESSAGES}/${id}`);
    return response.data;
  },
  
  sendMessage: async (messageData) => {
    const response = await api.post(API_ENDPOINTS.MESSAGES, messageData);
    return response.data;
  },
  
  markMessageRead: async (id) => {
    const response = await api.put(`${API_ENDPOINTS.MESSAGES}/${id}/read`);
    return response.data;
  },
  
  deleteMessage: async (id) => {
    const response = await api.delete(`${API_ENDPOINTS.MESSAGES}/${id}`);
    return response.data;
  },
  
  // ==================== DASHBOARD ====================
  
  getDashboardStats: async () => {
    const response = await api.get(API_ENDPOINTS.DASHBOARD_STATS);
    return response.data;
  },
  
  getRecentActivity: async (limit = 10) => {
    const response = await api.get(`${API_ENDPOINTS.DASHBOARD_STATS}/activity`, {
      params: { limit }
    });
    return response.data;
  },
  
  // ==================== PRESCRIPTIONS ====================
  
  getPrescriptions: async (patientId) => {
    const response = await api.get(API_ENDPOINTS.PRESCRIPTIONS, {
      params: { patientId }
    });
    return response.data;
  },
  
  createPrescription: async (prescriptionData) => {
    const response = await api.post(API_ENDPOINTS.PRESCRIPTIONS, prescriptionData);
    return response.data;
  },
  
  // ==================== NOTIFICATIONS ====================
  
  getNotifications: async () => {
    const response = await api.get(API_ENDPOINTS.NOTIFICATIONS);
    return response.data;
  },
  
  markNotificationRead: async (id) => {
    const response = await api.put(`${API_ENDPOINTS.NOTIFICATIONS}/${id}/read`);
    return response.data;
  },
  
  clearAllNotifications: async () => {
    const response = await api.delete(`${API_ENDPOINTS.NOTIFICATIONS}/all`);
    return response.data;
  },
};

// ==================== CUSTOM FETCH FUNCTIONS ====================
// These are wrapper functions used by components

/**
 * Fetch all patients data
 * @returns {Promise<Array>} Array of patient objects
 */
export const fetchPatientsData = async () => {
  try {
    const data = await apiService.getPatients();
    return data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

/**
 * Fetch a specific patient by name
 * @param {string} name - Patient name to search for
 * @returns {Promise<Object>} Patient object
 */
export const fetchPatientByName = async (name) => {
  try {
    const patients = await apiService.searchPatients(name);
    // Return the first matching patient
    return patients.find(p => p.name === name) || null;
  } catch (error) {
    console.error('Error fetching patient by name:', error);
    throw error;
  }
};

/**
 * Fetch appointments for a specific patient
 * @param {string} patientId - Patient ID
 * @returns {Promise<Array>} Array of appointment objects
 */
export const fetchPatientAppointments = async (patientId) => {
  try {
    const appointments = await apiService.getAppointments({ patientId });
    return appointments;
  } catch (error) {
    console.error('Error fetching patient appointments:', error);
    throw error;
  }
};

/**
 * Fetch lab results for a specific patient
 * @param {string} patientId - Patient ID
 * @returns {Promise<Array>} Array of lab result objects
 */
export const fetchPatientLabResults = async (patientId) => {
  try {
    const labResults = await apiService.getLabResults(patientId);
    return labResults;
  } catch (error) {
    console.error('Error fetching patient lab results:', error);
    throw error;
  }
};

// Utility Functions
export const handleApiError = (error) => {
  if (error.response) {
    return {
      message: error.response.data.message || 'An error occurred',
      status: error.response.status,
      data: error.response.data
    };
  } else if (error.request) {
    return {
      message: 'No response from server. Please check your connection.',
      status: 0
    };
  } else {
    return {
      message: error.message || 'An unexpected error occurred',
      status: -1
    };
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export default api;