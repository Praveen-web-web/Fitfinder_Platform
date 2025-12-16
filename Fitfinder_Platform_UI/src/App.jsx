import { useState } from 'react';
import './index.css';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { AdminLogin } from './components/AdminLogin';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <ContactUs />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      case 'register':
        return <RegisterPage onNavigate={setCurrentPage} />;
      case 'admin':
        return <AdminLogin onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
