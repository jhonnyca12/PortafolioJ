import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactameComponent } from './components/contactame/contactame.component';
import { MiPortafolioComponent } from './components/mi-portafolio/mi-portafolio.component';

const routes: Routes = [
  { path: 'mi-Portafolio', component: MiPortafolioComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contactame', component: ContactameComponent },
    { path: '**', redirectTo: '/mi-Portafolio', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
