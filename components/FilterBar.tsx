"use client";

import { Button } from "@/components/ui/button";
import { TodoStatus, TodoStatusOptions } from "@/types/todo";
import { useTodoStore } from "@/store/todoStore";

export function FilterBar() {
  const { filteredStatus, setFilteredStatus, todos } = useTodoStore();
  
  const getStatusCount = (status: TodoStatus) => {
    return todos.filter(todo => todo.status === status).length;
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={filteredStatus === 'all' ? "default" : "outline"}
        size="sm"
        onClick={() => setFilteredStatus('all')}
      >
        All ({todos.length})
      </Button>
      
      {TodoStatusOptions.map((status) => (
        <Button
          key={status.value}
          variant={filteredStatus === status.value ? "default" : "outline"}
          size="sm"
          onClick={() => setFilteredStatus(status.value as TodoStatus)}
        >
          {status.label} ({getStatusCount(status.value as TodoStatus)})
        </Button>
      ))}
    </div>
  );
}