import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Powered by <b><a href="https://thefitnesspalace.com" target="_blank">FITNESS PALACE</a></b> 2017</span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-reddit"></a>
    </div>
  `,
})
export class FooterComponent {
}
