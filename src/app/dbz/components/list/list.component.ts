import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  @Input()
    public characterList: Character[] = [{
      name:'Trunk',
      power: 10
    }]
  
  //onDeleteId = Index value= number,
  
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  
  
  onDeteteCharacter(index:number):void{
  
     this.onDelete.emit(index);
  
    }
  
  }


