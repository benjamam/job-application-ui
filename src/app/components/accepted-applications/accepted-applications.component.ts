import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { ApplicationsService } from 'src/app/services/applications.service';
import { AcceptedApplication } from './accepted-applications.model';

@Component({
  selector: 'app-accepted-applications',
  templateUrl: './accepted-applications.component.html',
  styleUrls: ['./accepted-applications.component.scss']
})
export class AcceptedApplicationsComponent implements OnInit {
  acceptedApplications$: Observable<AcceptedApplication[]>;

  constructor(private applicationService: ApplicationsService) { }

  ngOnInit(): void {
    this.acceptedApplications$ = this.applicationService.getApplications();
  }

}
