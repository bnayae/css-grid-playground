import Link from "next/link";
import { IClassNameProps } from "../../interfaces";

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
          <a>Gap Layout</a>
        </Link>
      </p>
    </div>
  </div>
);
