import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/services/challenge.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  responseData;

  constructor(private challengeService: ChallengeService) {}

  ngOnInit(): void {
    this.challengeService.getData().subscribe((response) => {
      this.responseData = response;
      console.log(this.responseData.data);
    });
  }
}
