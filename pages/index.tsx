import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import { List } from 'semantic-ui-react';

// Controllers
import {
  IProcedureListProps,
  ProcedureList,
} from '../controller/ProcedureList';

export default () => (
  <ul>
    <li>
      <Link href="/a" as="/a">
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href="/b" as="/b">
        <a>b</a>
      </Link>
    </li>
    <li>
      <List>
        <ProcedureList>
          {({ data }: IProcedureListProps) => {
            return data.procedures.map(({ title }) => {
              return <List.Item>{title}</List.Item>;
            });
          }}
        </ProcedureList>
      </List>
    </li>
  </ul>
);
