import { supabase } from "../supabase/supabase";

// Google Login
export const googleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/home`,
    },
  });

  if (error) throw error;
  return data;
};

// Logout
export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
};

// Current Logged-in User
export const getCurrentUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw error;
  return user;
};