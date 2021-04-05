import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SamplePostComponent } from './sample-post/sample-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component : HomeComponent
  },
  {
    path: "about",
    component : AboutComponent
  },
  {
    path: "contact",
    component : ContactComponent
  },
  {
    path: "sample post",
    component : SamplePostComponent
  },
  {
    path: "**",
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
