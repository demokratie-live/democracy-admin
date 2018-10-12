import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';

export default () => (
  <ul>
    <li>
      <Link href="/IN_VOTE" as="/IN_VOTE">
        <a>IN_VOTE</a>
      </Link>
    </li>
    <li>
      <Link href="/HOT" as="/HOT">
        <a>HOT</a>
      </Link>
    </li>
    <li>
      <Link href="/PAST" as="/PAST">
        <a>PAST</a>
      </Link>
    </li>
    <li>
      <Link href="/PREPARATION" as="/PREPARATION">
        <a>PREPARATION</a>
      </Link>
    </li>
  </ul>
);
