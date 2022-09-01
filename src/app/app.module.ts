import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoFormComponent } from "./todo/todo-form/todo-form.component";
import { TodoItemsComponent } from "./todo/todo-items/todo-items.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TodoParentComponent } from "./todo/todo-parent/todo-parent.component";

@NgModule({
	declarations: [AppComponent, TodoItemsComponent, TodoFormComponent, TodoParentComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
