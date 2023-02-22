import { Component, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent {
  constructor(private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', 'lightgray');
  }

list=
[{
      "Imageurl":"../../assets/java.jfif",
      "Title":"Java Crash course",
      "Author":"Subash",
      "Description":"Learn the java fully ",
      "Language":"Java"
    },
    {
      "Imageurl":"../../assets/python.png",
      "Title":"Python Crash course",
      "Author":"Subash",
      "Description":"Learn the Python fully ",
      "Language":"Python"
    },
    {
      "Imageurl":"../../assets/python1.png",
      "Title":"Python Master course",
      "Author":"Subash",
      "Description":"Learn the master python fully ",
      "Language":"Python"
    },
    {
      "Imageurl":"../../assets/spring.jfif",
      "Title":"Spring Crash course",
      "Author":"Subash",
      "Description":"Learn the java  spring fully ",
      "Language":"Java"
    }
// copy
,
{
  "Imageurl":"../../assets/java.jfif",
  "Title":"Java Crash course",
  "Author":"Subash",
  "Description":"Learn the java fully ",
  "Language":"Java"
},
{
  "Imageurl":"../../assets/python.png",
  "Title":"Java Crash course",
  "Author":"Subash",
  "Description":"Learn the Python fully ",
  "Language":"Python"
},
{
  "Imageurl":"../../assets/python1.png",
  "Title":"Java Crash course",
  "Author":"Subash",
  "Description":"Learn the master python fully ",
  "Language":"Python"
},
{
  "Imageurl":"../../assets/spring.jfif",
  "Title":"Java Crash course",
  "Author":"Subash",
  "Description":"Learn the java  spring fully ",
  "Language":"Java"
}

  ]

}
