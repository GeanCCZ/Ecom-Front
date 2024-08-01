import Image from "./image.entity";

export default class Icon{

    label: string;

    image: Image;

    constructor(label: string, image: Image) {
        this.label = label;
        this.image = image;
    }

    setLabel(label: string):void {
        this.label = label;
    }

    getLabel():string {
        return this.label;
    }

    setImage(image: Image) :void{
        this.image = image;
    }

    getImage(): Image{
        return this.image;
    }

}