import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Case } from '../Services/fakedata';
import { FakedataService } from '../Services/fakedata.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  singleCase!: any;
  constructor(private activatedeRoute : ActivatedRoute ,private router : Router, private dataService:FakedataService) { 
    
  }

  ngOnInit(): void {

    
    this.activatedeRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('caseId')){
        return;
      }

      let caseId = paramMap.get('caseId');
      console.log(caseId);
      this.getCase(caseId);
    }

    
    );
   
  }

  getCase(caseId: any){
    this.singleCase=this.dataService.getCase(caseId);
  }

}

