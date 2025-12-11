/* ========================================
   constants.jsx - Complete Application Constants
   ======================================== */

// ==================== API CONFIGURATION ====================

export const API_BASE_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';

export const API_ENDPOINTS = {
  // Authentication
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REGISTER: '/auth/register',
  REFRESH_TOKEN: '/auth/refresh',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  
  // Patients
  PATIENTS: '/patients',
  PATIENT_SEARCH: '/patients/search',
  PATIENT_HISTORY: '/patients/:id/history',
  
  // Appointments
  APPOINTMENTS: '/appointments',
  APPOINTMENT_SLOTS: '/appointments/slots',
  APPOINTMENT_CALENDAR: '/appointments/calendar',
  
  // Lab Results
  LAB_RESULTS: '/lab-results',
  LAB_CATEGORIES: '/lab-results/categories',
  
  // Messages
  MESSAGES: '/messages',
  MESSAGE_THREADS: '/messages/threads',
  
  // Dashboard
  DASHBOARD_STATS: '/dashboard/stats',
  DASHBOARD_ACTIVITY: '/dashboard/activity',
  
  // Prescriptions
  PRESCRIPTIONS: '/prescriptions',
  MEDICATIONS: '/medications',
  
  // Notifications
  NOTIFICATIONS: '/notifications',
  
  // Settings
  SETTINGS: '/settings',
  PROFILE: '/profile',
};

// ==================== APPLICATION ROUTES ====================

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  
  // Main Routes
  DASHBOARD: '/dashboard',
  PATIENTS: '/patients',
  PATIENT_DETAIL: '/patients/:id',
  APPOINTMENTS: '/appointments',
  APPOINTMENT_DETAIL: '/appointments/:id',
  LAB_RESULTS: '/lab-results',
  MESSAGES: '/messages',
  PRESCRIPTIONS: '/prescriptions',
  
  // Settings
  SETTINGS: '/settings',
  PROFILE: '/profile',
  NOTIFICATIONS: '/notifications',
  
  // Not Found
  NOT_FOUND: '/404',
};

// ==================== APPOINTMENT STATUS ====================

export const APPOINTMENT_STATUS = {
  SCHEDULED: 'scheduled',
  CONFIRMED: 'confirmed',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  NO_SHOW: 'no-show',
  RESCHEDULED: 'rescheduled',
};

export const APPOINTMENT_STATUS_LABELS = {
  [APPOINTMENT_STATUS.SCHEDULED]: 'Scheduled',
  [APPOINTMENT_STATUS.CONFIRMED]: 'Confirmed',
  [APPOINTMENT_STATUS.IN_PROGRESS]: 'In Progress',
  [APPOINTMENT_STATUS.COMPLETED]: 'Completed',
  [APPOINTMENT_STATUS.CANCELLED]: 'Cancelled',
  [APPOINTMENT_STATUS.NO_SHOW]: 'No Show',
  [APPOINTMENT_STATUS.RESCHEDULED]: 'Rescheduled',
};

export const APPOINTMENT_STATUS_COLORS = {
  [APPOINTMENT_STATUS.SCHEDULED]: '#fbbf24',
  [APPOINTMENT_STATUS.CONFIRMED]: '#3b82f6',
  [APPOINTMENT_STATUS.IN_PROGRESS]: '#8b5cf6',
  [APPOINTMENT_STATUS.COMPLETED]: '#10b981',
  [APPOINTMENT_STATUS.CANCELLED]: '#ef4444',
  [APPOINTMENT_STATUS.NO_SHOW]: '#6b7280',
  [APPOINTMENT_STATUS.RESCHEDULED]: '#f59e0b',
};

// ==================== LAB RESULT STATUS ====================

export const LAB_STATUS = {
  NORMAL: 'normal',
  HIGH: 'high',
  LOW: 'low',
  CRITICAL: 'critical',
  PENDING: 'pending',
};

export const LAB_STATUS_LABELS = {
  [LAB_STATUS.NORMAL]: 'Normal',
  [LAB_STATUS.HIGH]: 'High',
  [LAB_STATUS.LOW]: 'Low',
  [LAB_STATUS.CRITICAL]: 'Critical',
  [LAB_STATUS.PENDING]: 'Pending',
};

export const LAB_STATUS_COLORS = {
  [LAB_STATUS.NORMAL]: '#10b981',
  [LAB_STATUS.HIGH]: '#f59e0b',
  [LAB_STATUS.LOW]: '#3b82f6',
  [LAB_STATUS.CRITICAL]: '#ef4444',
  [LAB_STATUS.PENDING]: '#6b7280',
};

// ==================== MESSAGE PRIORITY ====================

export const MESSAGE_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
};

export const MESSAGE_PRIORITY_LABELS = {
  [MESSAGE_PRIORITY.LOW]: 'Low',
  [MESSAGE_PRIORITY.MEDIUM]: 'Medium',
  [MESSAGE_PRIORITY.HIGH]: 'High',
  [MESSAGE_PRIORITY.URGENT]: 'Urgent',
};

export const MESSAGE_PRIORITY_COLORS = {
  [MESSAGE_PRIORITY.LOW]: '#6b7280',
  [MESSAGE_PRIORITY.MEDIUM]: '#3b82f6',
  [MESSAGE_PRIORITY.HIGH]: '#f59e0b',
  [MESSAGE_PRIORITY.URGENT]: '#ef4444',
};

// ==================== DATE & TIME FORMATS ====================

export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  DISPLAY_FULL: 'MMMM DD, YYYY',
  DISPLAY_WITH_TIME: 'MMM DD, YYYY HH:mm',
  DISPLAY_WITH_TIME_12H: 'MMM DD, YYYY hh:mm A',
  API: 'YYYY-MM-DD',
  API_WITH_TIME: 'YYYY-MM-DD HH:mm:ss',
  TIME: 'HH:mm',
  TIME_12H: 'hh:mm A',
  DAY_MONTH: 'MMM DD',
  MONTH_YEAR: 'MMM YYYY',
};

// ==================== PAGINATION ====================

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
  MAX_PAGE_SIZE: 100,
};

// ==================== CHART COLORS ====================

export const CHART_COLORS = {
  PRIMARY: '#3b82f6',
  SECONDARY: '#8b5cf6',
  SUCCESS: '#10b981',
  WARNING: '#f59e0b',
  DANGER: '#ef4444',
  INFO: '#06b6d4',
  LIGHT: '#f3f4f6',
  DARK: '#1f2937',
};

export const CHART_PALETTE = [
  '#3b82f6', // Blue
  '#8b5cf6', // Purple
  '#10b981', // Green
  '#f59e0b', // Orange
  '#ef4444', // Red
  '#06b6d4', // Cyan
  '#ec4899', // Pink
  '#f97316', // Orange-Red
];

// ==================== VALIDATION RULES ====================

export const VALIDATION = {
  // Email
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  EMAIL_MAX_LENGTH: 255,
  
  // Phone
  PHONE_REGEX: /^\+?[\d\s-()]+$/,
  PHONE_MIN_LENGTH: 10,
  PHONE_MAX_LENGTH: 15,
  
  // Password
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  
  // Names
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50,
  NAME_REGEX: /^[a-zA-Z\s'-]+$/,
  
  // Messages
  MAX_MESSAGE_LENGTH: 500,
  MIN_MESSAGE_LENGTH: 1,
  
  // Appointments
  MIN_APPOINTMENT_DURATION: 15, // minutes
  MAX_APPOINTMENT_DURATION: 240, // minutes
  APPOINTMENT_BUFFER: 5, // minutes between appointments
};

// ==================== USER ROLES ====================

export const USER_ROLES = {
  ADMIN: 'admin',
  DOCTOR: 'doctor',
  NURSE: 'nurse',
  RECEPTIONIST: 'receptionist',
  PATIENT: 'patient',
};

export const USER_ROLE_LABELS = {
  [USER_ROLES.ADMIN]: 'Administrator',
  [USER_ROLES.DOCTOR]: 'Doctor',
  [USER_ROLES.NURSE]: 'Nurse',
  [USER_ROLES.RECEPTIONIST]: 'Receptionist',
  [USER_ROLES.PATIENT]: 'Patient',
};

// ==================== BLOOD TYPES ====================

export const BLOOD_TYPES = [
  'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
];

// ==================== GENDER OPTIONS ====================

export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
];

// ==================== APPOINTMENT TYPES ====================

export const APPOINTMENT_TYPES = [
  { value: 'consultation', label: 'Consultation', duration: 30 },
  { value: 'follow-up', label: 'Follow-up', duration: 15 },
  { value: 'physical-exam', label: 'Physical Examination', duration: 45 },
  { value: 'emergency', label: 'Emergency', duration: 60 },
  { value: 'procedure', label: 'Procedure', duration: 90 },
  { value: 'vaccination', label: 'Vaccination', duration: 15 },
];

// ==================== LAB TEST CATEGORIES ====================

export const LAB_TEST_CATEGORIES = [
  { value: 'blood', label: 'Blood Tests' },
  { value: 'urine', label: 'Urine Tests' },
  { value: 'imaging', label: 'Imaging' },
  { value: 'cardiac', label: 'Cardiac Tests' },
  { value: 'microbiology', label: 'Microbiology' },
  { value: 'pathology', label: 'Pathology' },
];

// ==================== COMMON LAB TESTS ====================

export const COMMON_LAB_TESTS = [
  { name: 'Complete Blood Count', category: 'blood', normalRange: '4.5-11.0 x10^9/L' },
  { name: 'Blood Glucose', category: 'blood', normalRange: '70-100 mg/dL' },
  { name: 'Hemoglobin A1C', category: 'blood', normalRange: '< 5.7%' },
  { name: 'Cholesterol Total', category: 'blood', normalRange: '< 200 mg/dL' },
  { name: 'LDL Cholesterol', category: 'blood', normalRange: '< 100 mg/dL' },
  { name: 'HDL Cholesterol', category: 'blood', normalRange: '> 40 mg/dL' },
  { name: 'Triglycerides', category: 'blood', normalRange: '< 150 mg/dL' },
  { name: 'Creatinine', category: 'blood', normalRange: '0.7-1.3 mg/dL' },
  { name: 'TSH', category: 'blood', normalRange: '0.4-4.0 mIU/L' },
];

// ==================== TIME SLOTS ====================

export const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
];

// ==================== NOTIFICATION TYPES ====================

export const NOTIFICATION_TYPES = {
  APPOINTMENT: 'appointment',
  LAB_RESULT: 'lab_result',
  MESSAGE: 'message',
  REMINDER: 'reminder',
  SYSTEM: 'system',
};

// ==================== TARGET PATIENT ====================

export const TARGET_PATIENT = 'Jessica Taylor';

// ==================== LAB RESULTS DATA ====================

export const LAB_RESULTS = [
  {
    id: 1,
    testName: 'Blood Test',
    date: '2024-03-15',
    status: 'completed',
    result: 'Normal',
    category: 'blood'
  },
  {
    id: 2,
    testName: 'CT Scan',
    date: '2024-03-10',
    status: 'completed',
    result: 'Normal',
    category: 'imaging'
  },
  {
    id: 3,
    testName: 'Blood Glucose',
    date: '2024-03-08',
    status: 'completed',
    result: '95 mg/dL',
    category: 'blood'
  },
  {
    id: 4,
    testName: 'Cholesterol Test',
    date: '2024-03-05',
    status: 'completed',
    result: '180 mg/dL',
    category: 'blood'
  },
];

// ==================== LOCAL STORAGE KEYS ====================

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER: 'user',
  THEME: 'theme',
  LANGUAGE: 'language',
  SIDEBAR_STATE: 'sidebarState',
  RECENT_SEARCHES: 'recentSearches',
};

// ==================== ERROR MESSAGES ====================

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  SESSION_EXPIRED: 'Your session has expired. Please login again.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  NOT_FOUND: 'The requested resource was not found.',
  DUPLICATE_ENTRY: 'This entry already exists.',
};

// ==================== SUCCESS MESSAGES ====================

export const SUCCESS_MESSAGES = {
  LOGIN: 'Logged in successfully!',
  LOGOUT: 'Logged out successfully!',
  CREATED: 'Created successfully!',
  UPDATED: 'Updated successfully!',
  DELETED: 'Deleted successfully!',
  SAVED: 'Saved successfully!',
  SENT: 'Sent successfully!',
};

// ==================== EXPORT ALL ====================

export default {
  API_BASE_URL,
  API_ENDPOINTS,
  ROUTES,
  APPOINTMENT_STATUS,
  APPOINTMENT_STATUS_LABELS,
  APPOINTMENT_STATUS_COLORS,
  LAB_STATUS,
  LAB_STATUS_LABELS,
  LAB_STATUS_COLORS,
  MESSAGE_PRIORITY,
  MESSAGE_PRIORITY_LABELS,
  MESSAGE_PRIORITY_COLORS,
  DATE_FORMATS,
  PAGINATION,
  CHART_COLORS,
  CHART_PALETTE,
  VALIDATION,
  USER_ROLES,
  USER_ROLE_LABELS,
  BLOOD_TYPES,
  GENDER_OPTIONS,
  APPOINTMENT_TYPES,
  LAB_TEST_CATEGORIES,
  COMMON_LAB_TESTS,
  TIME_SLOTS,
  NOTIFICATION_TYPES,
  TARGET_PATIENT,
  LAB_RESULTS,
  STORAGE_KEYS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
};