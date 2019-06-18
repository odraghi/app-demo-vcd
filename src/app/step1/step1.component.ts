import { Hostname } from "./../hostname";
import { HostnameService } from "./../hostname.service";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "./../message.service";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.css"]
})
export class Step1Component implements OnInit {
  private hostname: Hostname;

  constructor(
    private messageService: MessageService,
    private hostnameService: HostnameService
  ) {}

  ngOnInit() {
    this.messageService.clear();
    this.getHostname();
  }

  getHostname(): void {
    this.hostnameService
      .getHostname()
      .subscribe(hostname => (this.hostname = hostname));
  }
}
