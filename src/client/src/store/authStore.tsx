import create from "zustand";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


interface AuthState {
  token: string;
  login: (username: string, password: string) => void;
  logout: () => void;
  getToken: () => void;
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  return tokenString
}

export const useStore = create<AuthState>((set) => ({
  // initial state
  token: '',
  // methods for manipulating state
  login: async (username, password) => {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
    const login = await response.json();
    if (response.status == 200) {
      toast.success('Login successfully');
      set({ token: login.token })
      sessionStorage.setItem('token', login.token);
    } else {
      toast.success('Login failled');
    }
  },
  logout: () => {
    set({ token: "" })
    sessionStorage.removeItem('token');
  },
  getToken: () => {
    const token = getToken();
    if (token) {
      set({ token: token })
      return;
    }
  }

}));