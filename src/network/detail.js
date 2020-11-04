import {request} from "./request";

export function getDetail(id) {
  return request({
    url: '/detail',
    params: {
      id
    }
  })
}

export class GoodsInfo {
  constructor(itemInfo){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.highNowPrice
  }
}
