export interface TicketProps {
  id: string;
  dateRange: string;
  title: string;
  description: string;
  status: "Resolved" | "Pending";
  priority: "High" | "Low";
  tags: string[];
  comments: number;
  edits: number;
  action: string;
  handleTicketClick?: any;
}