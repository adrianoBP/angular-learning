import { Component, input, LOCALE_ID } from '@angular/core';
import { InvestmentResult } from '../../models/investment-result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css',
})
export class InvestmentResultComponent {
  results = input<InvestmentResult[]>();
}
