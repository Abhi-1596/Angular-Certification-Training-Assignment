import { Component } from '@angular/core';

@Component ({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    mybutton = document.getElementById("myBtn");

    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          this.mybutton.style.display = "block";
        } else {
          this.mybutton.style.display = "none";
        }
      }
    
    goToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}