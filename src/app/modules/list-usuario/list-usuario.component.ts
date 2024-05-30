import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UsuarioComponent } from '../usuario/usuario.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-list-usuario',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './list-usuario.component.html',
  styleUrl: './list-usuario.component.css'
})
export class ListUsuarioComponent {
  loginForm: any;
  constructor(
    public dialog: MatDialog,
    private auth: AuthService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private location: Location
  ) {
  }

  crearUsuario() {
    const dialogRef = this.dialog.open(UsuarioComponent, {
      width: '60%',
      height: '80%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit(): void {
    this.auth.loginBS(this.loginForm.value).subscribe({
      next: data => {
        if (data.success) {
          this.router.navigate(['/listaUsuario']).then(() => {
            this.location.replaceState('/listaUsuario');  // Reemplaza el estado del historial
          });
        } else {
          this.toastr.error('Por favor, verifica las credenciales proporcionadas....', 'Error', {
            positionClass: 'toast-bottom-left',
          });
        }
      }
    });

  }
}
