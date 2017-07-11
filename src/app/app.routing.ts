import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CaveEntranceComponent } from './cave-entrance/cave-entrance.component';
import { MeetGolemComponent } from './meet-golem/meet-golem.component';
import { ExploreCaveComponent } from './explore-cave/explore-cave.component';
import { AfterFightGolemComponent } from './after-fight-golem/after-fight-golem.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'createCharacter',
    component: CreateCharacterComponent
  },
  {
    path:'createCharacter/caveEntrance',
    component: CaveEntranceComponent
  },
  {
    path: 'createCharacter/caveEntrance/meetGolem',
    component: MeetGolemComponent
  },
  {
    path: 'caveEntrance/exploreCave',
    component: ExploreCaveComponent
  },
  {
    path: "createCharacter/caveEntrance/meetGolem/afterFightGolem",
    component: AfterFightGolemComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
