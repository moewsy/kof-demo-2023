import { Player } from "./base.js";
import {GIF} from '/static/js/utils/gif.js'


export class Kyo extends Player {
    constructor(root, info) {
        super(root, info);

        this.init_animations();
    }

    init_animations() {
        let outer = this;
        let offsets = [0, -22, -22, -140, 0, 0, 0];
        for (let i = 0; i < 7; i ++ ) {
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,  // pics count
                frame_rate: 5,  // change pic each 5 frames
                offset_y: offsets[i],
                scale: 2,
                loaded: false  // if all pics are ready
            });

            gif.onload = () => {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;
            }
        }
    }
}