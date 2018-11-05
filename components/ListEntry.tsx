import http from 'http';
import { Button, List } from 'semantic-ui-react';

interface IProps {
  procedureId: string;
  title: string;
}

const postHC = ({ procedureId }: { procedureId: string }) => () => {
  http.get(
    `http://localhost:3000/webhooks/human-connection/contribute?procedureId=${procedureId}`,
  );
};

const ListEntry: React.SFC<IProps> = props => {
  const { procedureId, title } = props;
  return (
    <List.Item key={procedureId}>
      <p>{title}</p>
      <Button onClick={postHC({ procedureId })}>Post to HC</Button>
    </List.Item>
  );
};

export default ListEntry;
