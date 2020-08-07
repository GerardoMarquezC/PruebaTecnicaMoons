export class Datasource {
    data: Array<Item>;
    points: Array<any>;
    pallete: Array<string>;
    title: string;
    numberOption: Intl.NumberFormatOptions
    locales: string;
    //contructor
    constructor(data: Array<Item>, title: string, numberOption: Intl.NumberFormatOptions,locales: string = "es-MX", points: Array<any>) {
        this.data = data;
        this.points = points;
        this.title = title;
        this.pallete = data.map((i) => i.color);
        this.numberOption= numberOption;
        this.locales = locales;
    }
}

export class Item {
    key: string;
    value: number;
    color?: string;
    //constructor 
    constructor(key: string, value: number,color: string = '#FFF') {
        this.key = key;
        this.value = value;
        this.color = color
    }
}

export class Point{
    x: number;
    y: number;
    color?: string;
    //constructor 
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}