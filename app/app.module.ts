import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile.component';
import { SearchformComponent } from './components/searchform.component';

// Services
import { WarcraftService } from './services/warcraft.service';
import {MsToTime} from "./pipes/mstotime.pipes";
import {Dificulty} from "./pipes/dificulty.pipes";

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule],
  declarations: [AppComponent, ProfileComponent, SearchformComponent, MsToTime, Dificulty],
  bootstrap: [AppComponent],
  providers: [WarcraftService]

})
export class AppModule { }
