import { observable } from "mobx";

export default class Vehicle {
  public id: string;
  @observable public routeTag: string;
  @observable public dirTag: string;
  @observable public lat: string;
  @observable public lon: string;
  @observable public heading: string;

  // @computed get filteredUnpackedItems() {
  //   return this.unpackedItems.filter(item => item.value.includes(this.unpackedItemsFilter));
  // }

  constructor({ id, routeTag, dirTag, lat, lon, heading }) {
    this.id = id;
    this.routeTag = routeTag;
    this.dirTag = dirTag;
    this.lat = lat;
    this.lon = lon;
    this.heading = heading;
  }
}