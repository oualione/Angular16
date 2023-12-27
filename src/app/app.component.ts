import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = signal('su27');

  vote =signal<number>(0);

  actions = signal<string[]>([]);


   like(){
    this.vote.update((oldValue) => oldValue + 1);
    this.actions.mutate((value) => value.push('Like'));
    console.log(this.actions());
  }

   dislike(){
    // this.vote.set(this.vote() - 1);
    this.vote.update((oldValue) => {
      if(oldValue){
        this.actions.mutate((value) => value.push('Dislike'));
        console.log(this.actions());
        return oldValue - 1
      }
      return 0;
    });
    
  }

}
