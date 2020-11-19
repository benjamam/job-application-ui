import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcceptedApplication } from '../components/accepted-applications/accepted-applications.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  private applicationURL = 'https://localhost:44385/api/v1/jobapplications';

  constructor(private http: HttpClient) { }

  getApplications(): Observable<AcceptedApplication[]>{
    return this.http.get<AcceptedApplication[]>(this.applicationURL);
  }
}
