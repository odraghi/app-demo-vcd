import { Component, OnInit } from "@angular/core";
import { MessageService } from "./../message.service";
import {Blockdevices} from './../blockdevices';
import {BlockdevicesService} from './../blockdevices.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  private blockdevices: Blockdevices;

  constructor(
    private messageService: MessageService,
    private blockdevicesService: BlockdevicesService
  ) { }

  ngOnInit() {
    this.messageService.clear();
    this.getBlockdevices();
  }

  getBlockdevices(): void {
    this.messageService.add("Send a query to back..");
    this.blockdevicesService
      .getBlockdevices()
      .subscribe(blockdevices => (this.blockdevices = blockdevices));
  }
}
