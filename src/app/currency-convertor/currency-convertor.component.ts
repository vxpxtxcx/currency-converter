import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.scss'],
})
export class CurrencyConvertorComponent implements OnInit {
  //simple app to convert usd to inr at a rate of 1.5 on click of button
  usd_to_inr_rate: number = 76.33;
  price_in_usd: number = 1;
  price_in_inr = this.price_in_usd * this.usd_to_inr_rate;
  usdToInr(usd: number) {
    return usd * this.usd_to_inr_rate;
  }
  convertUsdToInr() {
    this.price_in_inr = this.usdToInr(this.price_in_usd);
  }

  constructor() {}

  ngOnInit(): void {}
}
