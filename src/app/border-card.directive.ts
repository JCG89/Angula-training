import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appBorderCard]",
})
export class BorderCardDirective {
  private _initial_color: string = "#f5f5f5";
  private _color_default: string = "#009688";
  private _default_height: number = 180;
  constructor(private el: ElementRef) {
    this.setHeight(this._default_height);
    this.setBorder(this._initial_color);
  }
  @Input("appBorderCard") borderColor: string;
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this._color_default);
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this._initial_color);
  }
  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
