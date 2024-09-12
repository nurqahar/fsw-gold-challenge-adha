import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import NotFound from "./pages/NotFound";
import CrudTable from "./pages/CrudTable";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import Teachers from "./pages/Teachers";
import Classes from "./pages/Classes";
import TeachingNotes from "./pages/TeachingNotes";
import Students from "./pages/Students";
import Subjects from "./pages/Subjects";

export default function App() {
  return (
    <BrowserRouter>
      <LandingPage />
      <Routes>
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/teaching_notes" element={<TeachingNotes />} />
        <Route path="/students" element={<Students />} />
        <Route path="/subject" element={<Subjects />} />
        <Route path="/crud" element={<CrudTable />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
