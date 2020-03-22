import Link from 'next/link';
import { IClassNameProps } from '../../interfaces';

export const Home = ({ className }: IClassNameProps) => (
  <div className={className}>
    <h1 className="title">Home</h1>

    <div className="grid-container">
      <p className="content">
        <Link href="/sample-1-basic-layout">
          <a>Basic Layout</a>
        </Link>
      </p>
      <p className="content">
        <Link href="/sample-2-gap-layout">
          <a>Gap</a>
        </Link>
      </p>
      <p className="content">
        <Link href="/sample-3-inner-grid-layout">
          <a>Inner Grid</a>
        </Link>
      </p>
      <p className="content">
        <Link href="/sample-4-justify-content">
          <a>Justify Content</a>
        </Link>
      </p>
      <p className="content">
        <Link href="/sample-5-align-content">
          <a>Align Content</a>
        </Link>
      </p>
      <p className="content">
        <Link href="/sample-6-specific-span">
          <a>Specific span</a>
        </Link>
      </p>
      <p className="content">
        <Link href="/sample-7-standard-layout">
          <a>Standard Layout</a>
        </Link>
      </p>
    </div>
  </div>
);
