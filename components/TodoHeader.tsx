"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { TodoForm } from "@/components/TodoForm";

export function TodoHeader() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Todo List</h1>
        <p className="text-muted-foreground">Manage your tasks efficiently</p>
      </div>
      
      <Button onClick={() => setIsFormOpen(true)} className="shrink-0">
        <PlusCircle className="mr-2 h-4 w-4" />
        Add New Todo
      </Button>
      
      <TodoForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
      />
    </div>
  );
}