import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
}
)



export class AppComponent {
  title = 'my-app';
  value = 'some value';
  disable = true;

  date = "init date"

  time = "init time"

  clr_text = "red"
  bg_style = "background_color : white;"
  text_style = "font_color : red;"

  public refreshData(){
    this.http.get('http://127.0.0.1:5003/calendar/date').toPromise().then(res =>{
      this.date = res['date']
      console.log(this.date);

    }).catch(err=> {console.log(err)});

    this.http.get('http://127.0.0.1:5003/calendar/time').toPromise().then(res =>{
      this.time = res['time']
      console.log(this.time);
    }).catch(err=> {console.log(err)});

    this.http.get('http://127.0.0.1:5003/theme/colors').toPromise().then(res =>{
      this.clr_text = res['font_color']
      this.bg_style = "background-color : " + res['background_color'] + ";"
      this.text_style = "color : " + res['font_color'] + ";"

      console.log(this.bg_style , this.text_style);
    }).catch(err=> {console.log(err)});


  }

  constructor(private readonly http:HttpClient){    
    this.refreshData()
    setInterval(() => {
      this.refreshData();
    }, 5000);
  }

}

