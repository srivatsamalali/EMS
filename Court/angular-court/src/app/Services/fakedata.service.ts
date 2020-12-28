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
        dept:'EEE',
        attendance:87,
        book:'Wings of Fire',
        reason:'To read',
        author:'A.P.J.AbdulKalam'
       
    },

    {
      id:2,
      Name:'Peter',
      dept:'E & C',
      attendance:87,
      book:'Wings of Fire',
      reason:'To read',
      author:'A.P.J.AbdulKalam'
     
  },

  {
        id:3,
        Name:'Thomas',
        dept:'CSE',
        attendance:87,
        book:'Wings of Fire',
        reason:'To read',
        author:'A.P.J.AbdulKalam'
   
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
