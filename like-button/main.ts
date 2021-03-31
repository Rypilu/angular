import { LikeComponent } from './like.component'

let component = new LikeComponent(10, true);
component.onClick();
// back tick not single quote
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);
