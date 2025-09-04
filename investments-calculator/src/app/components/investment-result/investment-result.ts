import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css',
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.investmentResults());
}
