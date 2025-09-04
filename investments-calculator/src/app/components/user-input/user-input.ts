import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInputComponent {
  private investmentService = inject(InvestmentService);

  selectedInitialInvestment = signal('0');
  selectedAnnualInvestment = signal('0');
  selectedExpectedReturn = signal('5');
  selectedDuration = signal('10');

  submit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.selectedInitialInvestment(),
      annualInvestment: +this.selectedAnnualInvestment(),
      expectedReturn: +this.selectedExpectedReturn(),
      duration: +this.selectedDuration(),
    });

    this.selectedAnnualInvestment.set('0');
    this.selectedInitialInvestment.set('0');
    this.selectedExpectedReturn.set('5');
    this.selectedDuration.set('10');
  }
}
