import React from "react";

export interface TaskProps {
  task: {
    id?: number;
    title?: string;
    state?: string;
  };
  onArchiveTask?: string;
  onPinTask?: string;
}

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) {
  return (
    <div className="list-item">
      <label htmlFor="title" aria-label={title}>
        <input type="text" value={title} readOnly={true} name="title" />
      </label>
    </div>
  );
}
