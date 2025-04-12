
import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Award
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import StudentSidebar from '@/components/student/StudentSidebar';
import StudentMobileNav from '@/components/student/StudentMobileNav';
import ProgressChart from '@/components/student/ProgressChart';
import StreakCard from '@/components/student/StreakCard';

// Mock data for demonstration
const courses = [
  { id: 'course1', name: 'Introduction to Programming' },
  { id: 'course2', name: 'Web Development Fundamentals' },
  { id: 'course3', name: 'Advanced JavaScript' },
  { id: 'course4', name: 'Data Structures & Algorithms' },
];

const progressData = {
  weekly: [
    { name: 'Mon', watched: 2, remaining: 5 },
    { name: 'Tue', watched: 3, remaining: 4 },
    { name: 'Wed', watched: 4, remaining: 3 },
    { name: 'Thu', watched: 2, remaining: 5 },
    { name: 'Fri', watched: 5, remaining: 2 },
    { name: 'Sat', watched: 3, remaining: 4 },
    { name: 'Sun', watched: 4, remaining: 3 },
  ],
  monthly: [
    { name: 'Week 1', watched: 12, remaining: 20 },
    { name: 'Week 2', watched: 15, remaining: 17 },
    { name: 'Week 3', watched: 18, remaining: 14 },
    { name: 'Week 4', watched: 22, remaining: 10 },
  ],
};

const StudentDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState('all');
  
  // Mock data for the current user
  const user = {
    name: 'John Doe',
    streak: 14,
    stats: {
      lecturesWatched: 45,
      lecturesRemaining: 15,
      coursesCompleted: 2,
    },
  };

  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />
      
      <div className="flex-1">
        <StudentMobileNav />
        
        <main className="px-4 py-6 md:px-8 md:pt-8 md:pb-16 md:ml-64">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">{t('welcomeBack')}, {user.name}!</h1>
            <p className="text-muted-foreground mt-1">Here's an overview of your learning progress</p>
          </div>
          
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold">{t('yourProgress')}</h2>
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder={t('selectCourse')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card shadow-sm">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{t('lecturesWatched')}</p>
                    <h3 className="text-2xl font-bold">{user.stats.lecturesWatched}</h3>
                  </div>
                  <div className="bg-edu-purple/10 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-edu-purple" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-sm">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{t('lecturesRemaining')}</p>
                    <h3 className="text-2xl font-bold">{user.stats.lecturesRemaining}</h3>
                  </div>
                  <div className="bg-edu-blue/10 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-edu-blue" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-sm">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Courses Completed</p>
                    <h3 className="text-2xl font-bold">{user.stats.coursesCompleted}</h3>
                  </div>
                  <div className="bg-edu-green/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-edu-green" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Progress Chart & Streak Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ProgressChart data={progressData} />
            </div>
            <div>
              <StreakCard currentStreak={user.streak} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
