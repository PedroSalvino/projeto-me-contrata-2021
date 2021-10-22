import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'cadastro', component: CadastroComponent },
      { path: 'contato', component: ContatoComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CadastroComponent,
    ContatoComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
