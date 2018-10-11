import Link from 'next/link';

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
      <ul>
        <ProcedureList>
          {({ data }: IProcedureListProps) => {
            return data.procedures.map(({ title }) => {
              return <li>{title}</li>;
            });
            return <div>Hallo</div>;
          }}
        </ProcedureList>
      </ul>
    </li>
  </ul>
);
