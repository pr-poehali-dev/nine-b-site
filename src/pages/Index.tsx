
import React from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-700">9Б класс</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Добро пожаловать на сайт нашего дружного 9Б класса! Здесь вы найдете информацию о наших учениках, достижениях и предстоящих мероприятиях.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Наши ученики</CardTitle>
              <CardDescription>Познакомьтесь с учениками нашего класса</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">В нашем классе учится 25 талантливых учеников. У каждого есть свои увлечения и достижения.</p>
              <Button asChild className="w-full">
                <a href="/students">Подробнее</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Достижения</CardTitle>
              <CardDescription>Наши победы и успехи</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">9Б активно участвует в олимпиадах, конкурсах и спортивных соревнованиях, занимая призовые места.</p>
              <Button asChild className="w-full">
                <a href="/achievements">Подробнее</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Мероприятия</CardTitle>
              <CardDescription>Текущие и будущие события</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Экскурсии, классные часы, праздники и другие интересные мероприятия нашего класса.</p>
              <Button asChild className="w-full">
                <a href="/events">Подробнее</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
