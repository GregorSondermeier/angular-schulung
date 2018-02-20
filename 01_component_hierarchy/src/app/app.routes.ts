import { GscHome } from "./home/home.component";
import { GscPersonCreate } from "./person/create/person-create.component";
import { GscFoo } from "./foo/foo.component";
import { GscPersonList } from "./person/list/person-list.component";

export const routes = [
  {
    name: 'home',
    url: '',
    component: GscHome
  },
  {
    name: 'foo',
    url: '/foo',
    component: GscFoo
  },
  {
    name: 'person',
    url: '/person',
    redirectTo: 'person.list'
  },
  {
    name: 'person.list',
    url: '/list',
    component: GscPersonList
  },
  {
    name: 'person.create',
    url: '/create',
    component: GscPersonCreate
  }
];
