import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class TestService {
	constructor(private httpClient: HttpClient) {}

	baseURL: string = "http://localhost:3000/todolist";

	getTodos() {
		return this.httpClient.get(this.baseURL + "/todos");
	}
	addTodo(data: any) {
		return this.httpClient.post(this.baseURL + "/add_todo", { text: data });
	}
	deleteTodo(todoId: any) {
		return this.httpClient.delete(this.baseURL + `/todo/${todoId}`);
	}
	updateTodo(todoId: any, data: any) {
		return this.httpClient.put(this.baseURL + `/todo/${todoId}`, {
			text: data.text,
			completed: data.completed,
		});
	}
}
