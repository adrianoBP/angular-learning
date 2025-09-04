import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../models/investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  selectedInitialInvestment = signal('0');
  selectedAnnualInvestment = signal('0');
  selectedExpectedReturn = signal('5');
  selectedDuration = signal('10');

  submit() {
    this.calculate.emit({
      initialInvestment: +this.selectedInitialInvestment(),
      annualInvestment: +this.selectedAnnualInvestment(),
      expectedReturn: +this.selectedExpectedReturn(),
      duration: +this.selectedDuration(),
    });
  }
}
