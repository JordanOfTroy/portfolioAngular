import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { environment } from 'environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  // testProjects = [
  //   {
  //     name: 'Test Project 1',
  //     description: "That's it mister! you just lost your brain priviliges! i'm so cold, i can use my nose drippings as chopsticks. you mean what we thought they thought we think and thought they thought? isn't this great squidward? it's just the 3 of us. you, me, and this brick wall you built between us. you're a man now, spongebob, and it's time you started acting like one. ",
  //     url: "https://panipsum.com/",
  //     imageURL: 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-10100201-scaled.jpg',
  //     stack: ['Javascript', 'SASS', 'React', 'Node', 'SQL/Postgres']
  //   },
  //   {
  //     name: 'Test Project 2',
  //     description: "That's it mister! you just lost your brain priviliges! i'm so cold, i can use my nose drippings as chopsticks. you mean what we thought they thought we think and thought they thought? isn't this great squidward? it's just the 3 of us. you, me, and this brick wall you built between us. you're a man now, spongebob, and it's time you started acting like one. ",
  //     url: "https://panipsum.com/",
  //     imageURL: 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-10100201-scaled.jpg',
  //     stack: ['Javascript', 'SASS', 'Angular', 'Firebase']
  //   },
  //   {
  //     name: 'Test Project 3',
  //     description: "That's it mister! you just lost your brain priviliges! i'm so cold, i can use my nose drippings as chopsticks. you mean what we thought they thought we think and thought they thought? isn't this great squidward? it's just the 3 of us. you, me, and this brick wall you built between us. you're a man now, spongebob, and it's time you started acting like one. ",
  //     url: "https://panipsum.com/",
  //     imageURL: 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-10100201-scaled.jpg',
  //     stack: ['Javascript', 'SASS', 'React', 'Node', 'SQL/Postgres']
  //   },
  // ]

  testProjects = environment.prevProjects



}
