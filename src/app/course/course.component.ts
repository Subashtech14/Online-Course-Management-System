import { Component,Renderer2, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
 show(){
  const op = this.el.nativeElement.querySelector("#field");
  this.renderer.setStyle(op, 'opacity', 1);
   console.log(op);
}
}
