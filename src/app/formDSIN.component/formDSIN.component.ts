import { Component } from '@angular/core';
import { dataset } from '../modele/DSIN';
import { formDSIN } from '../modele/DSIN';
interface formulaireDSIN{
  id:Number;
  name: String;
  link: String;
}

@Component({
  selector: 'app-formDSIN',
  templateUrl: './FormDSIN.Component.html',
  styleUrls: ['./formDSIN.component.css']
})


export class FormDSINComponent {
  little='angular-bootstrap-scaffolding';
  filter:String='';

  from:Array<formDSIN> = dataset;

}
