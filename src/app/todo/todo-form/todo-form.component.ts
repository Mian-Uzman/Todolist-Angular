import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TestService } from "src/app/services/test.service";

@Component({
	selector: "app-todo-form",
	templateUrl: "./todo-form.component.html",
	styleUrls: ["./todo-form.component.css"],
})
export class TodoFormComponent implements OnInit {
	@Input() newTodoText = "";
	editText = "";
	constructor(private testService: TestService) {}
	@Output() todoAdd = new EventEmitter();

	addTodo() {
		this.todoAdd.emit(this.newTodoText);
	}

	ngOnInit(): void {}

	addNewTodo() {
		this.testService.addTodo(this.newTodoText).subscribe(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
