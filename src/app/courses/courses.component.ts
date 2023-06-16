import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    { title: 'Java Course', description: 'Learn Java programming', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczajFgzNmGEHv9a0T91q9Q2AN_B1iRHPNNAtP2dt3FwgTjOb5ROZY5u-uziIFHeM-ELA&usqp=CAU' },
    { title: 'Python Course', description: 'Explore Python programming', image: 'https://c8.alamy.com/comp/2C4DNBF/finger-touching-tablet-with-web-technology-icons-and-data-science-inscription-web-technology-concept-2C4DNBF.jpg' },
    // Add more courses as needed
  ];
  isLoggedIn = false;
  showPopup = false;
  popupMessage = '';
  constructor(private router: Router) {}
  navigateTo(course: any) {
    if (this.isLoggedIn) {
      this.router.navigate(['/courses']);
    } else {
      this.popupMessage = 'Please log in to continue.';
      this.showPopup = true;
      this.router.navigate(['/login']);
    }
  }
  searchQuery: string = '';
  get filteredCourses() {
    if (this.searchQuery.trim() === '') {
      return this.courses;
    } else {
      return this.courses.filter(course =>
        course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      }

    }

}
