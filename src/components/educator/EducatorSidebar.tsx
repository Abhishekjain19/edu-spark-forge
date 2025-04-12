
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Upload,
  DollarSign, 
  Settings,
  LogOut
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';

const EducatorSidebar: React.FC = () => {
  const { t } = useLanguage();
  const { signOut } = useAuth();
  const location = useLocation();
  
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
    <div className="min-h-screen w-64 bg-sidebar border-r border-sidebar-border hidden md:block">
      <div className="p-4">
        <h2 className="text-xl font-bold hero-gradient">{t('appName')}</h2>
      </div>
      
      <div className="px-3 py-2">
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="absolute bottom-0 w-64 p-4 border-t border-sidebar-border">
        <Link
          to="/logout"
          className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <LogOut className="h-5 w-5 mr-3" />
          {t('logout')}
        </Link>
      </div>
    </div>
  );
};

export default EducatorSidebar;
