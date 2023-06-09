import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover = "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png";
  contentTitle = "Minha notícia";
  contentDescription = "Olá,Mundo!";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      console.log(value)
    })
  }
  
}
