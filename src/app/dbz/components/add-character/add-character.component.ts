// Importamos las cosas necesarias de Angular y la interfaz Character
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

// Decorador que define el componente
@Component({
  selector: 'app-add-character',  // Nombre con el que Angular reconoce este componente
  templateUrl: './add-character.component.html',  // Archivo HTML asociado
  styleUrl: './add-character.component.css'  // Archivo de estilos asociado
})
export class AddCharacterComponent {

  // Decorador Output: permite enviar datos del hijo (este componente) al padre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();  // Evento que emitirá un personaje nuevo

  // Inicializamos el personaje vacío
  public character: Character = {
    name: '',   // El nombre del personaje empieza vacío
    power: 0    // El poder también empieza en 0
  };

  // Función que se llama cuando se envía el formulario
  emitCharacter(): void {

    // Si el nombre está vacío, no hacemos nada
    if (this.character.name.length === 0) return;

    // Emitimos el personaje usando el evento onNewCharacter
    this.onNewCharacter.emit(this.character);

    // Reseteamos el personaje para limpiar el formulario
    this.character = { name: '', power: 0 };
  }
}
