import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {MdToolBarColorService} from '../../+services/mdToolBarColor/md-tool-bar-color.service'

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private title:Title,
  private mdToolBarColorService:MdToolBarColorService) { }

  ngOnInit() {
    this.mdToolBarColorService.setColor('accent');
    this.title.setTitle('à propos')
  }

}
