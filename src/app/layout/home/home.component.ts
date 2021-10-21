import { Component } from "@angular/core";

@Component({
  selector: 'poc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  case = 'home';
  list: Object[];
  constructor() {
    this.list = [
      {
        title: 'Mauris ultricies facilisis',
        subtitle: 'Phasellus scelerisque eget mauris sed venenatis',
        content: 'Mauris ultricies facilisis tortor nec mollis. Phasellus scelerisque eget mauris sed venenatis. Nunc finibus ac dolor ut dignissim. Vivamus hendrerit magna vel tincidunt facilisis. In suscipit ullamcorper posuere. Nulla tempor cursus elementum. Phasellus rutrum id mauris quis aliquet. Vestibulum mollis dolor ac nunc rhoncus, id sollicitudin nulla condimentum. Aenean a dui id lorem pretium vehicula. Nulla cursus eget purus a egestas. Maecenas erat mauris, ultricies at interdum vel, sollicitudin vitae nulla. Quisque at turpis eget sem sollicitudin laoreet. Aenean eu metus ut sapien efficitur porttitor sed et lectus. Integer in aliquam tortor. Aliquam lobortis ante eu ipsum posuere, eu posuere ex tristique. ',
      },
      {
        title: 'Donec laoreet placerat rhoncus',
        subtitle: 'Curabitur mattis faucibus quam nec pellentesque.',
        content:  'Donec laoreet placerat rhoncus. Curabitur mattis faucibus quam nec pellentesque. Phasellus et nibh imperdiet tortor aliquet pretium at ac felis. Phasellus consectetur imperdiet ligula vitae cursus. Praesent imperdiet quam eu ex elementum lobortis. Nunc vitae pretium nisi. Pellentesque vulputate tortor at posuere lacinia. Vestibulum sed arcu ornare, tincidunt felis a, elementum quam. Sed nisi nisi, laoreet eu mi a, consequat dictum ipsum. Etiam imperdiet, metus at pharetra sagittis, mauris est consectetur nulla, congue rutrum nisi sem eget eros. ',
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        subtitle: 'consectetur adipiscing elit',
        content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec consequat augue. Nunc viverra ac nunc quis dapibus. Donec egestas enim vitae massa fringilla, quis sagittis erat rhoncus. Etiam vel ullamcorper dui. Donec consequat nisi eget urna consectetur, a tempus urna iaculis. Fusce dolor lacus, molestie sit amet tellus at, tincidunt ultricies mi. Donec interdum elit a velit dictum, eget vestibulum mi cursus. Fusce non arcu accumsan mauris vehicula consectetur. ',
      }
    ];
  }
}
