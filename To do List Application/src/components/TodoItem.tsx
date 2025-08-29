import React from 'react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Trash2, Flower, Star, Sun, Sparkles } from 'lucide-react';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className={`flex items-center gap-3 p-4 border-2 rounded-xl transition-all duration-200 ${
      todo.completed 
        ? 'bg-gradient-to-r from-yellow-100 to-amber-100 border-amber-300 shadow-sm' 
        : 'bg-gradient-to-r from-white to-yellow-50 border-yellow-300 shadow-md hover:shadow-lg hover:border-amber-400'
    }`}>
      <div className="relative">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="border-2 border-amber-400 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
        />
        {todo.completed && (
          <Sun 
            className="h-4 w-4 text-amber-500 absolute -top-1 -right-1 bounce-gentle" 
          />
        )}
      </div>
      
      <div className="flex-1 flex items-center gap-2">
        {!todo.completed && (
          <Star className="h-3 w-3 text-yellow-500 sparkle" fill="currentColor" />
        )}
        <span 
          className={`${
            todo.completed 
              ? 'line-through text-muted-foreground' 
              : 'text-foreground'
          }`}
        >
          {todo.text}
        </span>
        {todo.completed && (
          <Sparkles className="h-3 w-3 text-amber-500 sparkle" fill="currentColor" />
        )}
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(todo.id)}
        className="text-amber-500 hover:text-amber-700 hover:bg-yellow-100 rounded-xl transition-colors duration-200"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}