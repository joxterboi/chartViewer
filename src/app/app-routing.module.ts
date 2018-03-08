import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from "./components/search/search.component";
import { ChartComponent } from "./components/chart/chart.component";
import { FullScreenComponent } from "./components/full-screen/full-screen.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'fullcreen', component: FullScreenComponent },
  { path: '**', component: NotFoundComponent }
]


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
