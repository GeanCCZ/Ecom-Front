
export default class Image{

    url: string
    
    alt: string

    constructor(url:string,alt:string) {
        this.url = url
        this.alt = alt
    }

    setUrl(url: string) :void{
        this.url = url;
    }

    getUrl():string {
        return this.url;
    }

    setAlt(alt: string):void {
        this.alt = alt;
    }

    getAlt(): string{
        return this.alt;
    }

}