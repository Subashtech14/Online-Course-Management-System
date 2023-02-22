import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background', 'url("../../assets/wall.jpg") center center fixed');
  }
}
