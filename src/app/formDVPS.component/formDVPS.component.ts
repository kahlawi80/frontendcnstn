import { Component } from '@angular/core';
import { dataset, formDVPS } from '../modele/DVPS';

interface formulaireDVPS{
  id:Number;
  name: String;
  link: String;
}


@Component({
  selector: 'app-formDVPS',
  templateUrl: './formDVPS.component.html',
  styleUrls: ['./formDVPS.component.css']
})
export class FormDVPSComponent {
  little='angular-bootstrap-scaffolding';
  filter:String='';

  from:Array<formDVPS> = dataset;
}
