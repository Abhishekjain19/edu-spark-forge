
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  ShoppingCart,
  BrainCircuit,
  Languages,
  Settings,
  LogOut
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StudentSidebar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
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

export default StudentSidebar;
