import { Component, OnInit, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { build, Image, truthy, SmartComponent } from '@caiu/library';
import { Store } from '@ngrx/store';

@Component({
  selector: 'rowdy-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent extends SmartComponent implements OnInit {

  @Input() backgroundImage: string;
  @Input() showHelp = true;
  @Input() navbar;
  _hasWallpaper = true;

  constructor(
    public store: Store<any>,
    public dialog: MatDialog) {
    super(store);
  }

  @Input() set hasWallpaper(value: boolean) {
    this._hasWallpaper = value;
  }

  get hasWallpaper(): boolean {
    return this._hasWallpaper && !this.mobile;
  }

  get hasBackgroundImage(): boolean {
    return truthy(this.backgroundImage) && !this.hasWallpaper;
  }

  get images(): Image[] {
    return [
      build(Image, { src: 'assets/1.jpg', height: 677, width: 500 }),
      build(Image, { src: 'assets/2.jpg', height: 691, width: 500 }),
      build(Image, { src: 'assets/3.jpg', height: 405, width: 300 }),
      build(Image, { src: 'assets/4.jpg', height: 499, width: 375 }),
      build(Image, { src: 'assets/5.jpg', height: 615, width: 461 }),
      build(Image, { src: 'assets/6.jpg', height: 320, width: 256 }),
      build(Image, { src: 'assets/7.jpg', height: 495, width: 359 }),
      build(Image, { src: 'assets/8.jpg', height: 895, width: 640 }),
      build(Image, { src: 'assets/9.jpg', height: 300, width: 212 }),
      build(Image, { src: 'assets/10.jpg', height: 300, width: 223 }),
      build(Image, { src: 'assets/11.jpg', height: 350, width: 625 }),
      build(Image, { src: 'assets/12.jpg', height: 552, width: 980 }),
      build(Image, { src: 'assets/13.jpg', height: 851, width: 750 }),
      build(Image, { src: 'assets/14.jpg', height: 200, width: 340 }),
      build(Image, { src: 'assets/15.jpg', height: 1080, width: 1920 }),
      build(Image, { src: 'assets/16.jpg', height: 720, width: 1280 }),
      build(Image, { src: 'assets/17.jpg', height: 720, width: 1280 }),
      build(Image, { src: 'assets/18.jpg', height: 720, width: 1280 }),
      build(Image, { src: 'assets/19.jpg', height: 309, width: 250 }),
      build(Image, { src: 'assets/20.jpg', height: 500, width: 641 }),
      build(Image, { src: 'assets/21.jpg', height: 320, width: 480 }),
      build(Image, { src: 'assets/22.jpg', height: 493, width: 740 }),
      build(Image, { src: 'assets/23.jpg', height: 540, width: 960 }),
      build(Image, { src: 'assets/24.jpg', height: 1365, width: 2048 }),
      build(Image, { src: 'assets/25.jpg', height: 683, width: 1024 }),
      build(Image, { src: 'assets/26.jpg', height: 360, width: 480 }),
      build(Image, { src: 'assets/27.jpg', height: 433, width: 770 }),
      build(Image, { src: 'assets/28.jpg', height: 400, width: 620 }),
      build(Image, { src: 'assets/29.jpg', height: 1680, width: 3200 }),
      build(Image, { src: 'assets/30.jpg', height: 698, width: 1200 }),
    ];
  }

  get contentWidth(): number {
    return this.windowWidth - this.offsetLeft;
  }

  get mobile(): boolean {
    return this.windowWidth < 1000;
  }

  get offsetLeft(): number {
    return 0;
  }

  get offsetTop(): number {
    return this.navbar ? 130 : 64;
  }

  get menuWidth(): number {
    return this.windowWidth;
  }

  get windowHeight(): number {
    return parseInt(localStorage.getItem('WINDOW_HEIGHT'), 10) - 64;
  }

  set windowHeight(value: number) {
    localStorage.setItem('WINDOW_HEIGHT', value.toString());
  }

  get windowWidth(): number {
    return parseInt(localStorage.getItem('WINDOW_WIDTH'), 10);
  }

  set windowWidth(value: number) {
    localStorage.setItem('WINDOW_WIDTH', value.toString());
  }

  ngOnInit() {
    this.windowHeight = parseInt(localStorage.getItem('WINDOW_HEIGHT'), 10);
    this.windowWidth = parseInt(localStorage.getItem('WINDOW_WIDTH'), 10);
  }

  @HostListener('window:load', ['$event'])
  onLoad(e: any) {
    this.windowHeight = e && e.currentTarget && e.currentTarget.innerHeight ? e.currentTarget.innerHeight : 0;
    this.windowWidth = e && e.currentTarget && e.currentTarget.innerWidth ? e.currentTarget.innerWidth : 0;
    // console.log('\n\nwindow:load', this.windowWidth, this.windowHeight);
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    this.windowHeight = e && e.currentTarget && e.currentTarget.innerHeight ? e.currentTarget.innerHeight : 0;
    this.windowWidth = e && e.currentTarget && e.currentTarget.innerWidth ? e.currentTarget.innerWidth : 0;
    // console.log('\n\nwindow:resize', this.windowWidth, this.windowHeight);
  }

}
