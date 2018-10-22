import { SingletonRouter, withRouter } from 'next/router';
import { List } from 'semantic-ui-react';

import ListEntry from '../components/ListEntry';

import {
  IProcedureListProps,
  ProcedureList,
} from '../controller/ProcedureList';

const ProcedureListByType: React.SFC<SingletonRouter> = props => (
  <ProcedureList
    listTypes={
      props.router && props.router.query
        ? props.router.query.listTypes
        : 'IN_VOTE'
    }
  >
    {({ data }: IProcedureListProps) => (
      <List>
        {data.procedures.map(({ title, procedureId }) => (
          <ListEntry
            key={procedureId}
            procedureId={procedureId}
            title={title}
          />
        ))}
      </List>
    )}
  </ProcedureList>
);

export default withRouter(ProcedureListByType as any);
