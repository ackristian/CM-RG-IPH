import { Component, OnInit } from '@angular/core';
import { IphserviceService } from '../servico/iphservice.service';
import { Article } from '../interfaces/news';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  articles: Article[] = [];
  constructor(private iphService: IphserviceService) {}

  ngOnInit() {
    this.listarNoticias();
  }

  listarNoticias() {
    this.iphService.getTodoas().subscribe(articles => this.articles.push(...articles)) ;
  }
}
