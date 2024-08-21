import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, name: 'Learn Angular', completed: false },
    { id: 2, name: 'Build a project', completed: false },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Partial<Task>) {
    if (!task.name) {
      throw new Error('Task name is required');
    }

    const newTask: Task = {
      id: this.tasks.length + 1,
      name: task.name,
      completed: task.completed || false
    };
    this.tasks.push(newTask);
  }

  editTask(id: number, updatedTask: Task) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask, id };
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
