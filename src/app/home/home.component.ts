import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", function () {
      const tabs = document.querySelectorAll(".nav-link");
      const tabContents = document.querySelectorAll(".tab-content");

      tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          tabs.forEach((t) => t.classList.remove("active"));
          tabContents.forEach((content) => content.classList.remove("active"));

          tab.classList.add("active");
          tabContents[index].classList.add("active");
        });
      });
    });
  }
}