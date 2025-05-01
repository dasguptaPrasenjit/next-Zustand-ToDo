"use client";

import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useTodoStore } from "@/store/todoStore";
import { TodoCard } from "@/components/TodoCard";
import { TodoForm } from "@/components/TodoForm";
import { Todo } from "@/types/todo";
import { EmptyState } from "@/components/EmptyState";

export function TodoList() {
  const { getFilteredTodos } = useTodoStore();
  const [selectedTodo, setSelectedTodo] = useState<Todo | undefined>(undefined);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");
  
  const todos = getFilteredTodos();

  const handleEditTodo = (todo: Todo) => {
    setSelectedTodo(todo);
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setSelectedTodo(undefined);
  };

  if (todos.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} onEdit={handleEditTodo} />
        ))}
      </div>
      
      <TodoForm
        todo={selectedTodo}
        open={isFormOpen}
        onOpenChange={handleFormClose}
      />
    </>
  );
}