import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  isRegister: false;
  currentUser: User;
  constructor(private modalService: NgbModal,
              private authenticationService: AuthenticationService,
              private router: Router,
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit(): void {
    console.log(this.currentUser);
  }

  openModal() {
    this.modalService.open(LoginComponent);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
