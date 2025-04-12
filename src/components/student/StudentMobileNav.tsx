
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  ShoppingCart,
  BrainCircuit,
  Languages,
  Settings,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const StudentMobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const menuItems = [
    {
      name: t('dashboard'),
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: '/student/dashboard',
    },
    {
      name: t('myEnrollments'),
      icon: <BookOpen className="h-5 w-5" />,
      href: '/student/my-enrollments',
    },
    {
      name: t('buyCourses'),
      icon: <ShoppingCart className="h-5 w-5" />,
      href: '/student/buy-courses',
    },
    {
      name: t('aiTutor'),
      icon: <BrainCircuit className="h-5 w-5" />,
      href: '/student/ai-tutor',
    },
    {
      name: t('languageBud'),
      icon: <Languages className="h-5 w-5" />,
      href: '/student/language-bud',
    },
    {
      name: t('settings'),
      icon: <Settings className="h-5 w-5" />,
      href: '/student/settings',
    },
  ];

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Link to="/student/dashboard" className="flex items-center">
          <h1 className="text-xl font-bold hero-gradient">{t('appName')}</h1>
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {isOpen && (
        <div className="absolute top-[69px] left-0 right-0 bg-background border-b border-border z-50 animate-fadeIn">
          <nav className="px-4 py-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
            
            <Link
              to="/logout"
              className="flex items-center px-3 py-3 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <LogOut className="h-5 w-5 mr-3" />
              {t('logout')}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default StudentMobileNav;
