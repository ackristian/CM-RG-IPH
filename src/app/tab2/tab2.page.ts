import { Component, OnInit } from '@angular/core';
import { IphserviceService } from '../servico/iphservice.service';
import { Article } from '../interfaces/news';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  articles: Article[] = [];

  categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  categoriasTraduzidas: {[key: string]: string} = {
    business: 'Negócios',
    entertainment: 'Entretenimento',
    general: 'Geral',
    health: 'Saúde',
    science: 'Ciência',
    sports: 'Esportes',
    technology: 'Tecnologia'
  };
  selecionarCategoria:string = this.categories[0];
  constructor(private iphService: IphserviceService) {}
  
  ngOnInit() {
    this.respostaApi();
  }

  respostaApi() {
    this.iphService.getPorCaregoria(this.selecionarCategoria).subscribe((articles) => {
      this.articles = [...articles];
    });
  }


  segmentChanged(event: any) {
    this.selecionarCategoria = event.detail.value;
    this.respostaApi();
    console.log(this.selecionarCategoria);
  }

  
}
