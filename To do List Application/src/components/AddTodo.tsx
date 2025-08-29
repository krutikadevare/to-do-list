import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Star, Sparkles, Sun } from 'lucide-react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Sun className="h-5 w-5 text-amber-500 bounce-gentle" />
        <span className="text-amber-700">Add some sunshine to your day!</span>
        <Star className="h-4 w-4 text-yellow-400 sparkle" fill="currentColor" />
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          placeholder="🌟 What amazing thing will you accomplish today? 🌟"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border-2 border-yellow-300 focus:border-amber-400 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 placeholder:text-amber-600/70"
        />
        <Button 
          type="submit" 
          disabled={!text.trim()}
          className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white rounded-xl px-6 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
        >
          <Sun className="h-4 w-4 mr-2" />
          Add ☀️
        </Button>
      </form>
    </div>
  );
}