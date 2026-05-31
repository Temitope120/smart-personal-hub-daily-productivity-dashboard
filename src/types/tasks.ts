export type Status = "todo" | "inprogress" | "completed" | "done";

export type Task = {
  id: number;
  title: string;
  status: Status;
  milestoneId: number | null;
};