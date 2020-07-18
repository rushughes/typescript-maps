import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const customMap = new CustomMap('map');
const company = new Company();
const user = new User();

console.log(company);
console.log(user);
console.log(customMap);

customMap.addMarker(user);
customMap.addMarker(company);
