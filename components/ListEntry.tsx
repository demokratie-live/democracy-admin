import http from 'http';
import { List } from 'semantic-ui-react';

interface IProps {
  procedureId: string;
  title: string;
}

const postHC = ({ procedureId }: { procedureId: string }) => () => {
  http.get(
    `http://localhost:3000/webhooks/human-connection/contribute?procedureId=${procedureId}`,
    resp => {
      console.log(resp);
    },
  );
};

const ListEntry: React.SFC<IProps> = props => {
  const { procedureId, title } = props;
  return (
    <List.Item key={procedureId}>
      <p>{title}</p>
      <button onClick={postHC({ procedureId })}>Post to HC</button>
    </List.Item>
  );
};

export default ListEntry;
