import api from "./api";

// Get all reminders
export const getReminders = async () => {
  try {
    const response = await api.get("/reminder");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add new reminder
export const addReminder = async (data) => {
  try {
    const response = await api.post("/reminder", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update reminder
export const updateReminder = async (id, data) => {
  try {
    const response = await api.put(`/reminder/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete reminder
export const deleteReminder = async (id) => {
  try {
    const response = await api.delete(`/reminder/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};