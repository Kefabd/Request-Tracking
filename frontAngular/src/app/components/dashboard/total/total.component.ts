import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../../services/dashboard/demande-data.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent implements OnInit{
  length : number;

  constructor(private demandesData : DemandesData) { }

  ngOnInit(): void {
    this.getLengthOfDemandes();
  }

  getLengthOfDemandes(){
    this.demandesData.getAllData().subscribe((res: any)  => {
      console.log(res);
      this.length = res.length;
    });
  }

}
