import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any;
  public pass: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.user == 'test' && this.pass == 'vungoccong') {
      localStorage.setItem('currenUser', 'currenUser')
      var returnUrl = this.route.snapshot.queryParams.returnUrl || ['/'];
      this.router.navigate([returnUrl]);
      return true;
    }
    alert('Tài khoản và mật khẩu k đúng')
  }
}
