import "dotenv/config";

import {
    addresstable,categorytable,citytable,commenttable,drivertable,
    menu_itemtable,order_menu_itemtable,order_statustable,orderstable,
    restauranttable,statetable,status_catalogtable,userstable,restaurant_ownertable
} from "./schema"
import {faker} from "@faker-js/faker";

async function seed(){
    for(let x=0; x<10;x++) {
        //query details of the database table
    }
}