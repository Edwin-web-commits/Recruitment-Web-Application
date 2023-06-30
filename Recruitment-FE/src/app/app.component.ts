import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public links = [
    {name: 'Candidates', href: '/', icon: 'table_rows'},
    {name: 'Clients', href: '/clients', icon: 'view_list'},
    {name:'Profile',href:'/profile',icon:'manage_accounts'},
    {name:'Register',href:'/register',icon:'person_add'},
    {name: 'Login', href: '/login', icon: 'login'},
    {name: 'Logout', href: '/logout', icon: 'logout'},
    
    
    ];
  
  title = 'Recruitment-App';
}
