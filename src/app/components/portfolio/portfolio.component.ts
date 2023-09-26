import { Component, OnInit } from '@angular/core';
import { environment } from 'environment';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Project } from 'src/app/interfaces/project';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public projects$: Observable<Project[]> | undefined

  constructor (
    private portfolioService: PortfolioService
  ) {}
  ngOnInit(): void {
    try {
      this.getProjects()
    }
    catch (err) {
      console.log(err)
    }
  }


  testProjects = environment.prevProjects

  getProjects () {
    console.log('check 1')
    this.projects$ = this.portfolioService.getProjectsObservable()
  }

  



}
