
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { SignupcomponentComponent } from './components/signup/signupcomponent/signupcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { BouchraService } from './services/bouchra.service';

import { ReactiveFormsModule } from '@angular/forms';
import {FormEtudiantComponent} from './form-etudiant/form-etudiant.component';
import { FormulaireAttestationBourseComponent } from './formulaire-attestation-bourse/formulaire-attestation-bourse.component';
import { FormulaireCertificatScolariteComponent } from './formulaire-certificat-scolarite/formulaire-certificat-scolarite.component';
import { FormulaireConventionStageComponent } from './formulaire-convention-stage/formulaire-convention-stage.component';
import { FormulaireReleveNotesComponent } from './formulaire-releve-notes/formulaire-releve-notes.component';
import { FormulaireTerrainSportComponent } from './formulaire-terrain-sport/formulaire-terrain-sport.component';


import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { Profile2Component } from './components/profile2/profile2.component';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TotalComponent } from './components/dashboard/total/total.component';
import { ApprouvedComponent } from './components/dashboard/approuved/approuved.component';
import { MainComponent } from './components/dashboard/main/main.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { PendingComponent } from './components/dashboard/pending/pending.component';
import { EnCoursComponent } from './components/en-cours/en-cours.component';
import { Total2Component } from './components/dashboard2/total2/total2.component';
import { Main2Component } from './components/dashboard2/main2/main2.component';
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';
import { Pending2Component } from './components/dashboard2/pending2/pending2.component';
import { Approuved2Component } from './components/dashboard2/approuved2/approuved2.component';
import { Approved2Component } from './components/dashboard2/approved2/approved2.component';
import { Encours2Component } from './components/dashboard2/encours2/encours2.component';
import { FooterComponent } from './components/footer/footer.component';
// import { EnCoursComponent } from './components/enCours/enCours.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    SignupcomponentComponent,
    Profile2Component,
    AdministrateurComponent,
    EtudiantComponent,
    FormEtudiantComponent,
    FormulaireAttestationBourseComponent,
    FormulaireCertificatScolariteComponent,
    FormulaireConventionStageComponent,
    FormulaireReleveNotesComponent,
    FormulaireTerrainSportComponent,
    TotalComponent,
    ApprouvedComponent,
    MainComponent,
    DashboardComponent,
    NavbarComponent,
    ApprovedComponent,
    SidebarComponent,
    PendingComponent,
    EnCoursComponent,
    Total2Component,
    Main2Component,
    Dashboard2Component,
    Pending2Component,
    Approuved2Component,
    Approved2Component,
    Encours2Component,
    FooterComponent
  ],
  
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    // SidebarComponent,
  ],
  providers: [BouchraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
