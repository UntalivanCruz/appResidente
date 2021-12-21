import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewResidente } from 'src/app/api/models';

import { ResidenteControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-residente',
  templateUrl: './residente.component.html',

  styleUrls: ['./residente.component.css']
})
export class ResidenteComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder,
    private residenteService:ResidenteControllerService
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      identificacion: [55555, [Validators.required]],
      nombre: ['Pablo Armenia', [Validators.required]],
      telefono: [6666, [Validators.required]],
    });

    this.guardar();
  }

  guardar():void{
    
    this.residenteService.create({body:this.validateForm.value}).subscribe(respuesta=>{
      console.log(respuesta);
    })
  }
}
