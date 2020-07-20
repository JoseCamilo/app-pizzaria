import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showEntrar = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openCardapio() {
    this.router.navigateByUrl('/cardapio');
  }

  openCadastro() {
    this.router.navigateByUrl('/cadastro');
  }
}
