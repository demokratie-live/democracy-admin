import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';

export default () => (
  <ul>
    <li>
      <Link href="/list?listTypes=IN_VOTE" as="/in-vote">
        <a>In Abstimmung</a>
      </Link>
    </li>
    <li>
      <Link href="//list?listTypes=PAST" as="/past">
        <a>Vergangen</a>
      </Link>
    </li>
    <li>
      <Link href="//list?listTypes=PREPARATION" as="/preparation">
        <a>In Vorbereitung</a>
      </Link>
    </li>
    <li>
      <Link href="//list?listTypes=HOT" as="/hot">
        <a>What's Hot</a>
      </Link>
    </li>
  </ul>
);
