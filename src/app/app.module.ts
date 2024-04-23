import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShootingStarBackgroundComponent } from './shared/shooting-star-background/shooting-star-background.component';
import { AnimatedHeaderRibbonComponent } from './shared/animated-header-ribbon/animated-header-ribbon.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CardsComponent } from './shared/cards/cards.component';
import { ProjectDisplayComponent } from './shared/project-display/project-display.component';


@NgModule({
  declarations: [
    AppComponent,
    ShootingStarBackgroundComponent,
    AnimatedHeaderRibbonComponent,
    PortfolioComponent,
    CardsComponent,
    ProjectDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
