import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRedBlack]'
})
export class RedBlackDirective implements OnInit {

  element: ElementRef;

  constructor(private _ef: ElementRef) {
    _ef.nativeElement.style.color = "black";
    _ef.nativeElement.style.backgroundColor = "blue";
    _ef.nativeElement.style.fontSize = "2rem";
    _ef.nativeElement.style.fontWeight = "bold";
    this.element = _ef

    console.log(_ef.nativeElement);
  }

  ngOnInit(): void {
    this.element.nativeElement.innerHTML += " - Hello! Mahesh";
  }

}
