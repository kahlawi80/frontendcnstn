import { Component } from '@angular/core';
import { formdsc,dataset } from '../modele/DSC';

interface formulaireDG{
  id:Number;
  name: String;
  link: String;
}

@Component({
  selector: 'app-formDSC',
  templateUrl: './formDSC.component.html',
  styleUrls: ['./formDSC.component.css']
})






export class FormDSCComponent {
  little='angular-bootstrap-scaffolding';
  filter:String='';

  from:Array<formdsc> = dataset;

}
