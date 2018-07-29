import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
isPhone: Observable<boolean> = this.breakpointObserver
.observe(Breakpoints.HandsetPortrait)
.pipe(
  map(x => x.matches)
)
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
