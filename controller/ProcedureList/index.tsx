import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

import { ProceduresList, ProceduresList_procedures } from '../schemaTypes';

const proceduresListQuery = gql`
  query ProceduresList {
    procedures(listTypes: IN_VOTE) {
      title
    }
  }
`;

export interface IProcedureListProps {
  data: { procedures: ProceduresList_procedures[] };
  loading: boolean;
  error: any;
}

interface IProps {
  children: any;
}

class ProcedureListQuery extends Query<ProceduresList> {}

export const ProcedureList: React.SFC<IProps> = props => (
  <ProcedureListQuery query={proceduresListQuery}>
    {props.children}
  </ProcedureListQuery>
);
