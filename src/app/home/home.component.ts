import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    const buttonContainer = document.getElementById("button-container");

    if (buttonContainer) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
          buttonContainer.classList.remove("hidden");
        } else {
          buttonContainer.classList.add("hidden");
        }
      });
    }
  }

 
  redirectToFacebook() {
    // Cambia esta URL por la que deseas redirigir
    window.location.href = "https://www.facebook.com/profile.php?id=100085309147765&mibextid=LQQJ4d";
  }


  redirectToInstagram() {
    // Cambia esta URL por la que deseas redirigir
    window.location.href = "https://instagram.com/wow_gelato?igshid=OGQ5ZDc2ODk2ZA==";
  }


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

  // ... otros métodos y propiedades de la clase ...
}
