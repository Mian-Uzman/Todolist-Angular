import { Component, Input, OnInit } from "@angular/core";
import { TestService } from "src/app/services/test.service";

@Component({
	selector: "app-todo-items",
	templateUrl: "./todo-items.component.html",
	styleUrls: ["./todo-items.component.css"],
})
export class TodoItemsComponent implements OnInit {
	constructor(private testService: TestService) {}

	@Input() text = "";
	@Input() completed = false;
	@Input() todoId = 0;

	updatedText: string = "";

	toggleEdit: boolean = false;

	ngOnInit(): void {}

	changeCompleteStatus() {
		this.completed = !this.completed;
		this.updateTodoItem();
	}

	toggleEditContainer() {
		this.toggleEdit = !this.toggleEdit;
	}

	deleteTodoItem() {
		this.testService.deleteTodo(this.todoId).subscribe(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	updateTodoItem() {
		this.testService
			.updateTodo(this.todoId, { text: this.text, completed: this.completed })
			.subscribe(
				(res) => {
					console.log(res);
				},
				(err) => {
					console.log(err);
				}
			);
	}
}
