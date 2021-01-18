import { fstat } from "fs";

import fs from 'fs';
import path from 'path';

export default class Items {

    static itemsFilePath = path.join(__dirname, '/assets/items.json');
    constructor() {

    }
    static loadItems() {
        const raw = fs.readFileSync(this.itemsFilePath, 'utf8');
        Items.data = JSON.parse(raw);
        return Items.data;
    }
    

}