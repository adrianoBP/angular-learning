import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { UserInputComponent } from './components/user-input/user-input';
import { InvestmentInput } from './models/investment-input.model';
import { InvestmentResultComponent } from './components/investment-result/investment-result';
import { InvestmentResult } from './models/investment-result.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  resultsData?: InvestmentResult[] = undefined;

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData = annualData;
  }
}
