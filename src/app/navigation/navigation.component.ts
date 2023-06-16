import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isLoggedIn(): boolean {
    // Check if the user is logged in
    // Implement your authentication logic here
    // Return true if logged in, false otherwise
    return false;
  }

  logout(): void {
    // Implement logout functionality here
    // Clear any user authentication tokens or data
  }

}
