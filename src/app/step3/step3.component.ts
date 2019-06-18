import { Component, OnInit } from "@angular/core";
import { MessageService } from "./../message.service";
import {Blockdevices} from './../blockdevices';
import {BlockdevicesService} from './../blockdevices.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  
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
    this.blockdevicesService
      .getBlockdevices()
      .subscribe(blockdevices => (
        this.blockdevices = blockdevices
        ));
  }

}
