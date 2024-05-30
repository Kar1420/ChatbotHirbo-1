import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MostrarQrComponent } from '../mostrar-qr/mostrar-qr.component';
@Component({
  selector: 'app-list-qr',
  standalone: true,
  imports: [],
  templateUrl: './list-qr.component.html',
  styleUrl: './list-qr.component.css'
})
export class ListQrComponent {
  arrayQr: any[] = [];
  constructor(
    private http: AuthService,
    public dialog: MatDialog,
  ) {

  }

  ngOnInit() {
    this.http.mostrarQrs().subscribe((data: any) => {
      this.arrayQr = data;

    })
  }
  mostrarQr(code: any) {
    localStorage.setItem('codeqr', code);
    const dialogRef = this.dialog.open(MostrarQrComponent, {
      width: '30%',
      height: '60%',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
