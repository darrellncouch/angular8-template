import { Component } from "@angular/core";

@Component({
    selector: "main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"]
})
export class Main {
    title = 'unamed-ngx';
    public isNavbarOpen: boolean = true;
    public navbarClass =  "navbar__drawer"
    public contentClass = "navbar__content"
    public titleClass = "logo-container__title";
    public buttonClass = "logo-container__button"
  
  
    public toggle(): void {
      this.isNavbarOpen = !this.isNavbarOpen;
      this.navbarClass = this.isNavbarOpen ? "navbar__drawer" : "navbar__drawer--folded";
      this.contentClass = this.isNavbarOpen ? "navbar__content" : "navbar__content--folded"
      this.titleClass = this.isNavbarOpen ? "logo-container__title" : "logo-container__title--folded";
      this.buttonClass = this.isNavbarOpen ? "logo-container__button": "logo-container__button--folded";
      console.log(this.navbarClass)
    }
  
}