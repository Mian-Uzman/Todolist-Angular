import { Component, OnInit } from "@angular/core";
import { TestService } from "src/app/services/test.service";

@Component({
	selector: "app-todo-parent",
	templateUrl: "./todo-parent.component.html",
	styleUrls: ["./todo-parent.component.css"],
})
export class TodoParentComponent implements OnInit {
	constructor(private testService: TestService) {}
	todos: any[] = [];
	numberOfTodos: number = 0;
	ngOnInit(): void {
		this.getAllTodos();
	}
	getAllTodos() {
		this.testService.getTodos().subscribe(
			(data: any) => {
				this.todos = data.data;
				this.numberOfTodos = this.todos.length;
			},
			(err) => {
				console.error(err);
			}
		);
	}
}
