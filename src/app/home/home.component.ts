import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  activeNavTab: string = "";
  activeNavSubTab: string = "";
  activeNavSubTabChildItem: string = "";
  isLoggedIn$: Observable<boolean>;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  isMenuOpen: boolean = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private http: HttpClient
  ) { }

  ngOnInit() { }

  setAlActiveTab(mainTab = "", subTab = "", childTab = "") {
    this.activeNavTab = mainTab;
    this.activeNavSubTab = subTab;
    this.activeNavSubTabChildItem = childTab;
    setTimeout(() => {
      var elem = document.getElementById("sidebar-with-scrollbar");
      elem.scrollTop = elem.scrollHeight;
    }, 100);
  }

  menuToggle() {
    if (this.isMenuOpen == true) this.isMenuOpen = false;
    else this.isMenuOpen = true;
  }
}
