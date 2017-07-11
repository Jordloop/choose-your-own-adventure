import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CaveEntranceComponent } from './cave-entrance/cave-entrance.component';
import { MeetGolemComponent } from './meet-golem/meet-golem.component';
import { AfterFightGolemComponent } from './after-fight-golem/after-fight-golem.component';
import { ExploreCaveComponent } from './explore-cave/explore-cave.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCharacterComponent,
    CaveEntranceComponent,
    MeetGolemComponent,
    AfterFightGolemComponent,
    ExploreCaveComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
