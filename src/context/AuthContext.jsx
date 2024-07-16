import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState,
} from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [student, setStudent] = useState(null); // Add state for student data

  // Function to check if the token is valid
  const checkTokenValidity = useCallback((token) => {
    try {
      const decoded = jwtDecode(token);
      // Check if token is expired
      const isExpired = decoded.exp * 1000 < Date.now();
      return !isExpired;
    } catch (e) {
      return false;
    }
  }, []);

  // Function to get token from localStorage and validate it
  const getToken = useCallback(() => {
    const token = localStorage.getItem("authToken");
    if (token && checkTokenValidity(token)) {
      return token;
    }
    return null;
  }, [checkTokenValidity]);

  const login = (token) => {
    if (checkTokenValidity(token)) {
      localStorage.setItem("authToken", token);
    } else {
      console.error("Invalid token");
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setStudent(null); // Clear student data on logout
  };

  const isAuthenticated = useCallback(() => {
    return !!getToken();
  }, [getToken]);

  // Function to set student data
  const setStudentData = (studentData) => {
    setStudent(studentData);
  };

  // Load student data from localStorage if available
  useEffect(() => {
    const storedStudent = localStorage.getItem("studentData");
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        getToken,
        student,
        setStudentData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
