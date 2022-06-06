import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questionnaire = [ {
    "question" : "Aké sú tvoje prvé pocity keď vstaneš?",
    "answers": [
      {
        "points": 1,
        "answer": "Mám chuť zavrieť sa pred svetom"
      },
      {
        "points": 2,
        "answer": "Hľadám motiváciu prečo vkročiť do nového dňa"
      },
      {
        "points": 3,
        "answer": "Teším sa na nový deň"
      }
    ]
    },
    {
    "question" : "Aké sú tvoje pocity počas dňa?",
    "answers": [
      {
        "points": 1,
        "answer": "Citím sa nedocenený a pre svoje okolie nedostatočný"
      },
      {
        "points": 2,
        "answer": "Snažím sa motivovať po zvyšok dňa"
      },
      {
        "points": 3,
        "answer": "Citím sa šťaštný vo svojom prostredí"
      }
  ]
  },
  {
    "question" : "Aké sú tvoje pocity tesne pred spaním?",
    "answers": [
      {
        "points": 1,
        "answer": "Som deprimovaný po celom dni"
      },
      {
        "points": 2,
        "answer": "Viem nájsť pozitívne chvíle vo svojom dni"
      },
      {
        "points": 3,
        "answer": "Som vďačný za dnešok a teším sa na nový deň"
      }
  ]
  },
  {
    "question" : "Ako vnímaš, keď sa v tvojom živote objaví problém alebo prekážka?",
    "answers": [
      {
        "points": 1,
        "answer": "Zrazí ma to k zemi"
      },
      {
        "points": 2,
        "answer": "Trápim sa s myšlienkami, ale nakoniec ju prekonám"
      },
      {
        "points": 3,
        "answer": "Teším sa, že možem prekonať ďalšiu výzvu"
      }
  ]
  }];
  formPoints: number[] = new Array(this.questionnaire.length).fill(0,0);
  maxScore: number = this.questionnaire.length * 3;
  result: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(questionNr:number, answerNr:number){
    let question = this.questionnaire[questionNr];

    this.formPoints[questionNr] = question.answers[answerNr].points;

  }

  onSubmit(form: NgForm) {
    
    let score = 0;
    for(let i = 0; i < this.formPoints.length; i++){ 
      if(this.formPoints[i] == 0){
        this.result = 'Otázka ' + (i + 1) + ' nebola vyplnená!'; return;
      }
      score += this.formPoints[i];
    }

    if(score/this.maxScore <= 0.34){ this.result = 'Dnes nie je tvoj deň!' }
    else if(score/this.maxScore <= 0.50){ this.result ='Nevzdávaj sa, nie je to také zlé!' }
    else if(score/this.maxScore <= 0.75){ this.result ='Máš sa fajn, pokračuj v tom!' }
    else{ this.result = 'Máš sa skvele!' }

    form.reset;
  }

}