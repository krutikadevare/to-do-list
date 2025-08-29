import { TodoList } from './components/TodoList';
import { Star, Flower, Sparkles, Heart, Sun } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 sparkle text-yellow-400">
        <Star className="h-6 w-6" fill="currentColor" />
      </div>
      <div className="absolute top-32 right-16 flower-float text-amber-500">
        <Flower className="h-8 w-8" fill="currentColor" />
      </div>
      <div className="absolute top-20 right-32 sparkle text-yellow-300">
        <Sparkles className="h-5 w-5" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 left-16 flower-float text-yellow-400">
        <Flower className="h-6 w-6" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 right-20 sparkle text-amber-400">
        <Star className="h-7 w-7" fill="currentColor" />
      </div>
      <div className="absolute top-40 left-1/4 bounce-gentle text-orange-300">
        <Sun className="h-6 w-6" />
      </div>
      <div className="absolute bottom-40 right-1/3 bounce-gentle text-yellow-500">
        <Sun className="h-5 w-5" />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sun className="h-10 w-10 text-amber-500 bounce-gentle" />
            <Star className="h-8 w-8 text-yellow-400 sparkle" fill="currentColor" />
            <h1 className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-400 bg-clip-text text-transparent">
              ☀️ To-Do List ☀️
            </h1>
            <Star className="h-8 w-8 text-yellow-400 sparkle" fill="currentColor" />
            <Sun className="h-10 w-10 text-amber-500 bounce-gentle" />
          </div>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-yellow-400" fill="currentColor" />
            Brighten your day with positive productivity!
            <Sparkles className="h-4 w-4 text-yellow-400" fill="currentColor" />
          </p>
        </div>
        
        <TodoList />
      </div>
    </div>
  );
}