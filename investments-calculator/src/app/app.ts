import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { UserInputComponent } from './components/user-input/user-input';
import { InvestmentResultComponent } from './components/investment-result/investment-result';
import { InvestmentResult } from './models/investment-result.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  resultsData = signal<InvestmentResult[] | undefined>(undefined);
}
