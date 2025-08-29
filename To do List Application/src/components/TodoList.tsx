import React, { useState } from 'react';
import { AddTodo } from './AddTodo';
import { TodoItem, Todo } from './TodoItem';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Star, Flower, Sparkles, Sun, Zap } from 'lucide-react';

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 border-yellow-300 shadow-2xl bg-gradient-to-br from-white via-yellow-50 to-amber-50 rounded-2xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white relative overflow-hidden">
        <div className="absolute top-2 left-4">
          <Sun className="h-6 w-6 text-yellow-100 bounce-gentle" />
        </div>
        <div className="absolute top-3 right-6">
          <Star className="h-5 w-5 text-amber-100 sparkle" fill="currentColor" />
        </div>
        <div className="absolute bottom-2 right-12">
          <Sparkles className="h-4 w-4 text-yellow-200 sparkle" fill="currentColor" />
        </div>
        
        <CardTitle className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6" fill="currentColor" />
            <span>Goals</span>
            <Sun className="h-5 w-5" />
          </div>
          {totalCount > 0 && (
            <div className="flex items-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-full">
              <Sparkles className="h-4 w-4" fill="currentColor" />
              <span>{completedCount} of {totalCount} shining</span>
              <Star className="h-4 w-4" fill="currentColor" />
            </div>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        <AddTodo onAdd={addTodo} />
        
        {todos.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <div className="mb-4 flex justify-center gap-2">
              <Sun className="h-8 w-8 text-amber-400 bounce-gentle" />
              <Star className="h-10 w-10 text-yellow-400 sparkle" fill="currentColor" />
              <Sun className="h-8 w-8 text-amber-400 bounce-gentle" />
            </div>
            <p className="text-lg text-amber-700">Ready to shine bright today!</p>
            <p className="text-sm mt-2 text-amber-600">☀️ Add your first goal and let's make it happen! ☀️</p>
          </div>
        ) : (
          <div className="space-y-3">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
            
            {completedCount === totalCount && totalCount > 0 && (
              <div className="text-center py-6 mt-6 border-t-2 border-yellow-300">
                <div className="flex justify-center gap-2 mb-2">
                  <Sun className="h-6 w-6 text-amber-500 bounce-gentle" />
                  <Zap className="h-6 w-6 text-yellow-500 sparkle" fill="currentColor" />
                  <Sun className="h-6 w-6 text-amber-500 bounce-gentle" />
                </div>
                <p className="text-amber-700">🌟 Incredible! You're absolutely radiant today! 🌟</p>
                <p className="text-sm mt-1 text-amber-600">Keep spreading that positive energy! ☀️</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}