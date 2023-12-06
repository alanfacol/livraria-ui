import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  nome: string = "Bunda";
  documento: string = "asdasdasdas";
  dataNascimento: Date = new Date();
  tipoPessoa: string = "PF";
  usuario: string = "alan";
  senha: string = "";

  cadastrarUsuario() {
    console.log('Usuário cadastrado:', {
      nome: this.nome,
      documento: this.documento,
      dataNascimento: this.dataNascimento,
      tipoPessoa: this.tipoPessoa,
      usuario: this.usuario,
      senha: this.senha
    });
  }

  public aplicarMascara(event: Event): void {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    // Aplica a máscara de acordo com o tamanho do valor
    if (inputValue.length <= 11) {
      this.documento = inputValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      this.documento = inputValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4');
    }
  }
}
