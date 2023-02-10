import { Routes, Route } from 'react-router-dom';
import Menu from 'modules/Menu/Menu';
import HomePage from 'pages/HomePage/HomePage';
import PostPage from 'pages/PostPage/PostPage';
import ContactsPage from 'pages/ContactsPage/ContactPage';
import NotPage from 'pages/NotPage/NotPage';

export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </div>
  );
};
