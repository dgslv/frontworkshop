import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public nome: string = "Felipe"
  public nomeClasse: string = "classe-teste"

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
  
  mudaNome() {
    this.nome = "Ricardo asdasdadas"
  }

}
