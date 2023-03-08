import { Component } from '@angular/core';
import { dataset } from '../modele/guides';
import { formguides } from '../modele/guides';
interface formulaireDSIN{
  id:Number;
  name: String;
  link: String;
}

@Component({
  selector: 'app-formguides',
  templateUrl: './formguides.component.html',
  styleUrls: ['./formguides.component.css']
})
export class FormguidesComponent {
  little='angular-bootstrap-scaffolding';
  filter:String='';

  from:Array<formguides> = dataset;

}
