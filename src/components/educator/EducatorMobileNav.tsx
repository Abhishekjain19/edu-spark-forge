
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  Upload,
  DollarSign,
  Settings,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';

const EducatorMobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { signOut } = useAuth();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const menuItems = [
    {
      name: t('dashboard'),
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: '/educator/dashboard',
    },
    {
      name: t('myCourses'),
      icon: <BookOpen className="h-5 w-5" />,
      href: '/educator/my-courses',
    },
    {
      name: t('uploadCourse'),
      icon: <Upload className="h-5 w-5" />,
      href: '/educator/upload-course',
    },
    {
      name: 'Revenue',
      icon: <DollarSign className="h-5 w-5" />,
      href: '/educator/revenue',
    },
    {
      name: t('settings'),
      icon: <Settings className="h-5 w-5" />,
      href: '/educator/settings',
    },
  ];

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Link to="/educator/dashboard" className="flex items-center">
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

export default EducatorMobileNav;
