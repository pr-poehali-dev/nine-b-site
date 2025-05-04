
import React from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Students = () => {
  const students = [
    { id: 1, name: 'Алексей Иванов', role: 'Староста', avatar: 'https://source.unsplash.com/random/200x200/?boy,1' },
    { id: 2, name: 'Мария Петрова', role: 'Зам. старосты', avatar: 'https://source.unsplash.com/random/200x200/?girl,1' },
    { id: 3, name: 'Дмитрий Сидоров', role: 'Спортивный сектор', avatar: 'https://source.unsplash.com/random/200x200/?boy,2' },
    { id: 4, name: 'Екатерина Смирнова', role: 'Культурный сектор', avatar: 'https://source.unsplash.com/random/200x200/?girl,2' },
    { id: 5, name: 'Павел Кузнецов', role: 'Редколлегия', avatar: 'https://source.unsplash.com/random/200x200/?boy,3' },
    { id: 6, name: 'Анна Соколова', role: 'Учебный сектор', avatar: 'https://source.unsplash.com/random/200x200/?girl,3' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Ученики 9Б класса</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <Card key={student.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex items-center">
                <Avatar className="w-20 h-20 mb-2">
                  <AvatarImage src={student.avatar} />
                  <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl mt-2">{student.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{student.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
