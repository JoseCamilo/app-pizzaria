import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showEntrar = false;
  invalidUser = false;

  @ViewChild('loginForm', {static: false}) loginForm: Form;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openCardapio() {
    this.router.navigateByUrl('/cardapio');
  }

  openCadastro() {
    this.router.navigateByUrl('/cadastro');
  }

  onSubmitLogin() {
    if (this.loginForm.value.cpf !== '38918245807' ||
    this.loginForm.value.senha !== '3153') {
      this.invalidUser = true;
    } else {
      this.invalidUser = false;
      this.router.navigateByUrl('/menu');
    }
  }
}
