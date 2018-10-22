import gql from 'graphql-tag';
import http from 'http';
import * as React from 'react';
import { Query } from 'react-apollo';
import { List } from 'semantic-ui-react';

import { ProceduresList, ProceduresList_procedures } from '../schemaTypes';

const proceduresListQuery = gql`
  query ProceduresList($listTypes: [ProcedureType!]) {
    procedures(listTypes: $listTypes) {
      title
      procedureId
    }
  }
`;

export interface IProcedureListProps {
  data: { procedures: ProceduresList_procedures[] };
  loading: boolean;
  error: any;
}

interface IProps {
  // children: any;
  listTypes: any;
}

const postHC = ({ procedureId }: { procedureId: string }) => () => {
  console.log({ procedureId });

  http.get(
    `http://localhost:3000/webhooks/human-connection/contribute?procedureId=${procedureId}`,
    resp => {
      console.log(resp);
    },
  );
};

class ProcedureListQuery extends Query<ProceduresList> {}

export const ProcedureList: React.SFC<IProps> = props => (
  <List>
    <ProcedureListQuery
      query={proceduresListQuery}
      variables={{ listTypes: props.listTypes }}
    >
      {({ data }: IProcedureListProps) => {
        return !data || !data.procedures
          ? null
          : data.procedures.map(({ title, procedureId }) => {
              return (
                <List.Item key={procedureId}>
                  <p>{title}</p>
                  <button onClick={postHC({ procedureId })}>Post to HC</button>
                </List.Item>
              );
            });
      }}
    </ProcedureListQuery>
  </List>
);
