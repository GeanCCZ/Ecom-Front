import Image from "./image.entity";

export default class Icon{

    private label: string;

    private image: Image;

    constructor(label: string, image: Image) {
        this.label = label;
        this.image = image;
    }

    public setLabel(label: string):void {
        this.label = label;
    }

    public getLabel():string {
        return this.label;
    }

    public setImage(image: Image) :void{
        this.image = image;
    }

    public getImage(): Image{
        return this.image;
    }

}