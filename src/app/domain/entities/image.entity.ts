
export default class Image{

    private url: string
    
    private alt: string

    constructor(url:string,alt:string) {
        this.url = url
        this.alt = alt
    }

    public setUrl(url: string) :void{
        this.url = url;
    }

    public getUrl():string {
        return this.url;
    }

    public setAlt(alt: string):void {
        this.alt = alt;
    }

    public getAlt(): string{
        return this.alt;
    }

}