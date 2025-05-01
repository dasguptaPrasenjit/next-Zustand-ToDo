import { Button } from "@/components/ui/button";
import { useTodoStore } from "@/store/todoStore";
import { ClipboardList } from "lucide-react";

export function EmptyState() {
  const { filteredStatus } = useTodoStore();
  
  const getMessage = () => {
    if (filteredStatus === 'all') {
      return "You don't have any todos yet";
    } else {
      const statusMessages = {
        'todo': "No items in To Do",
        'in-progress': "No items In Progress",
        'done': "No completed items"
      };
      return statusMessages[filteredStatus as keyof typeof statusMessages] || "No items found";
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
        <ClipboardList className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{getMessage()}</h3>
      <p className="text-muted-foreground mb-4">
        {filteredStatus === 'all' 
          ? "Add your first todo item to get started"
          : "Try changing the filter or adding new todos"}
      </p>
    </div>
  );
}