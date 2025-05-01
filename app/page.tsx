"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { TodoHeader } from "@/components/TodoHeader";
import { FilterBar } from "@/components/FilterBar";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      
      <TodoHeader />
      <FilterBar />
      <TodoList />
    </main>
  );
}