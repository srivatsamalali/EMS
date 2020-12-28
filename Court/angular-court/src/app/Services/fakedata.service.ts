import { Injectable } from '@angular/core';
import { Case } from './fakedata';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  private _bookings:Case[]=[
    {
        id:1,
        Name:'John',
        Case:'Divorse Case',
        Contact:'87876656'
       
    },

    {
      id:2,
      Name:'Peter',
      Case:'Property Case',
      Contact:'867659876'
     
  },

  {
    id:3,
    Name:'Alen',
    Case:'Murder Case',
    Contact:'86545434567'
   
}

]
  constructor() { 

  }

  /**
   * name
   */
  public fakedata() {
    console.log(this.fakedata);
    return [...this._bookings];

  }

  getCase(caseId:any){
    return {
      ...this._bookings.find(c=>{
        return c.id==caseId;
      })
    }
  }
}
