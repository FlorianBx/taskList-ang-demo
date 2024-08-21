import { Component } from '@angular/core';
import { Task } from '../../services/task.service';
import { TaskService } from '../../services/task.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form-edit.component.html',
  styleUrl: './task-form-edit.component.css'
})
export class TaskFormEditComponent {
  private taskId = 0;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

  taskForm = new FormGroup({
    name: new FormControl(''),
  });

  ngOnInit() {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const task = this.taskForm.value;

      this.taskService.editTask(this.taskId, task as Task);
      this.router.navigate(['/']);
    }
  }
}
