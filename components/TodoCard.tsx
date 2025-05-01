"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TodoStatusBadge } from "@/components/TodoStatusBadge";
import { Todo } from "@/types/todo";
import { useTodoStore } from "@/store/todoStore";
import { Pencil, Trash2 } from "lucide-react";
import { format } from "date-fns";

interface TodoCardProps {
  todo: Todo;
  onEdit: (todo: Todo) => void;
}

export function TodoCard({ todo, onEdit }: TodoCardProps) {
  const { deleteTodo } = useTodoStore();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 300);
  };

  return (
    <Card
      className={`transition-all duration-300 hover:shadow-md ${
        isDeleting ? "scale-95 opacity-0" : "scale-100 opacity-100"
      }`}
    >
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{todo.name}</h3>
          <div className="flex items-center space-x-2">
            <TodoStatusBadge status={todo.status} />
            <p className="text-xs text-muted-foreground">
              Updated {format(new Date(todo.updatedAt), "MMM d, yyyy")}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{todo.description}</p>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(todo)}
          className="w-9 h-9 p-0"
        >
          <Pencil size={16} />
          <span className="sr-only">Edit</span>
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={handleDelete}
          className="w-9 h-9 p-0"
        >
          <Trash2 size={16} />
          <span className="sr-only">Delete</span>
        </Button>
      </CardFooter>
    </Card>
  );
}