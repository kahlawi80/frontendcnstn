import { Component } from '@angular/core';
import { formDG,dataset } from '../modele/DG';



interface formulaireDG{
  id:Number;
  name: String;
  link: String;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  little='angular-bootstrap-scaffolding';
  filter:String='';

  from:Array<formDG> = dataset;
  

}
