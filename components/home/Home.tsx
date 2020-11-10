import Link from 'next/link';
import { IClassNameProps } from '../../interfaces';

export const Home = ({ className }: IClassNameProps) => (
  <div className={className}>
    <h1 className="title">Home</h1>

    <div className="grid-container">
      <p className="content">
        <div className="emphasis">
          <span className="emphasis-sign">✱</span>
          <Link href="/sample/1/basic-layout">
            <a>Basic Layout</a>
          </Link>
        </div>
        <img className="img" src="/images/basic-layout.jpg" alt="" />
      </p>
      <p className="content">
        <Link href="/sample/2/gap-layout">
          <a>Gap</a>
        </Link>
        <img className="img" src="/images/gap-layout.jpg" alt="" />
      </p>
      <p className="content">
        <Link href="/sample/3/inner-grid-layout">
          <a>Inner Grid</a>
        </Link>
        <img className="img" src="/images/inner-grid-layout.jpg" alt="" />
      </p>
      <p className="content">
        <Link href="/sample/4/justify-content">
          <a>Justify Content</a>
        </Link>
        <img className="img" src="/images/justify-content.jpg" alt="" />
      </p>
      <p className="content">
        <Link href="/sample/5/align-content">
          <a>Align Content</a>
        </Link>
        <img className="img" src="/images/align-content.jpg" alt="" />
      </p>
      <p className="content">
        <Link href="/sample/6/specific-span">
          <a>Specific span</a>
        </Link>
        <img className="img" src="/images/align-content.jpg" alt="" />
      </p>
      <p className="content">
        <Link href="/sample/7/standard-layout">
          <a>Standard Layout</a>
        </Link>
        <img className="img" src="/images/standard-layout.jpg" alt="" />
      </p>
      <p className="content">
        <div className="emphasis">
          <span className="emphasis-sign">✱</span>
          <Link href="/sample/8/wrap-panel-fill">
            <a>Wrap Panel (auto-fill)</a>
          </Link>
        </div>
        <img className="img" src="/images/wrap-panel.jpg" alt="" />
      </p>
      <p className="content">
        <div className="emphasis">
          <span className="emphasis-sign">✱</span>
          <Link href="/sample/9/wrap-panel-fit">
            <a>Wrap Panel (auto-fit)</a>
          </Link>
        </div>
        <img className="img" src="/images/wrap-panel.jpg" alt="" />
      </p>
    </div>
  </div>
);
