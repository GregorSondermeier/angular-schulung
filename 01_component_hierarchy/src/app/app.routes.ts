import { GscHome } from "./home/home.component";
import { GscPersonCreate } from "./person/create/person-create.component";
import { GscFoo } from "./foo/foo.component";
import { GscPersonList } from "./person/list/person-list.component";
import { GscPerson } from "./person/person.component";
import { GscPersonEdit } from "./person/edit/person-edit.component";

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
    component: GscPerson,
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
  },
  {
    name: 'person.edit',
    url: '/{pid}',
    component: GscPersonEdit
  }
];
