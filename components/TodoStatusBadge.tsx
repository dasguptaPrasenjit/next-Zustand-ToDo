import { Badge } from "@/components/ui/badge";
import { TodoStatus } from "@/types/todo";
import { getStatusColor } from "@/lib/utils";

interface TodoStatusBadgeProps {
  status: TodoStatus;
}

export function TodoStatusBadge({ status }: TodoStatusBadgeProps) {
  const statusLabels = {
    "todo": "To Do",
    "in-progress": "In Progress",
    "done": "Done"
  };

  return (
    <Badge className={`${getStatusColor(status)}`}>
      {statusLabels[status]}
    </Badge>
  );
}