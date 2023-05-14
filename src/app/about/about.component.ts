import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person.model';
import { PersonService} from '../service/person.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  Person: Person = new Person("","","");
  constructor(public PersonService: PersonService) {

  }
  ngOnInit(): void {
    this.PersonService.getPerson().subscribe(data =>{this.Person = data})
  }
}
