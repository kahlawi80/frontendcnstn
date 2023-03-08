import { Component } from '@angular/core';
import { dataset } from '../modele/logiciels';
import { formlogiciels } from '../modele/logiciels';
interface formulaireDSIN{
  id:Number;
  name: String;
  link: String;
}

@Component({
  selector: 'app-formlogiciels',
  templateUrl: './formlogiciels.component.html',
  styleUrls: ['./formlogiciels.component.css']
})
export class FormlogicielsComponent {
  little='angular-bootstrap-scaffolding';
  filter:String='';

  from:Array<formlogiciels> = dataset;

}
