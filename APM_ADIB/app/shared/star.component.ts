import {Component, Input, OnChanges} from '@angular/core'

@Component({
    selector:'sm-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth:number;
    @Input() rating:number;

    ngOnChanges():void{
        this.starWidth = this.rating * 86 / 5;
    }
}

