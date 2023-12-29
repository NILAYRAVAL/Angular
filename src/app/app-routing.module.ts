import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveComponent } from './footer/directive/directive.component';
import { PromountComponent } from './promount/promount.component';
import { Main0Component } from './main0/main0.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path: '', redirectTo: '/HomePage', pathMatch: 'full'},
  {path:'HomePage', component: Main0Component },

  {path:'Header1', component: HeaderComponent,
    children:[
      {path:'Search', component: SearchComponent},
    ],
  },
  {path:'Search', component: SearchComponent},
  {path:'Footer', component: FooterComponent,
    children:[
    {path:'Directive', component: DirectiveComponent},
   ],    
},
{path:'Directive', component: DirectiveComponent},
{path:'Pipe', component:PipesComponent},
{path:'**', component: PromountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
