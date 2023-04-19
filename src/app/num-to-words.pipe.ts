import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToWords'
})
export class NumToWordsPipe implements PipeTransform {

  transform(value : number): string {
    if(value == null)
      return "";

    const words = ["zero","one","two","three","four","five","six","seven","eight","nine","ten",
                    "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen",
                    "eighteen","nineteen"];
    const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    if(value >=0 && value<=19){
      return words[value];
    }
    if(value >=20 && value <=99){
      let lastDigit = value%10;
      let secondLastDigit = value/10;
      let ans = "";
      ans = tens[secondLastDigit] +" "+ words[lastDigit];
      return ans;
    }
    if(value >=100 && value <= 999){
      return words[value/100] + " hundred" +" "+ tens[value%100] +" "+ words[value%10];
    }
    if(value >=1000 && value <=9999){
      return words[value/1000] + " thousand" +" "+ words[value/100] + " hundred" +" "+ tens[value%100] +" "+ words[value%10];
    }
    return "";
  }
}
