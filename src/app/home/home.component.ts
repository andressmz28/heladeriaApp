import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const tabs = document.querySelectorAll(".nav-link");
    const tabContents = document.querySelectorAll(".tab-pane");
    console.log(tabContents)

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active", "show"));

        tab.classList.add("active");
        tabContents[index].classList.add("active", "show");
      });
    });
  }
}
