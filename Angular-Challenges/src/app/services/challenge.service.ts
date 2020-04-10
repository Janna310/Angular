import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChallengeService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    const url = 'https://grandcircusco.github.io/demo-apis/blog-posts.json';

    return this.httpClient.get(url);
  }
}
