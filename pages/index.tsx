import Link from "next/link";

const IndexPage = () => (
  <>
    <h1>Home</h1>
    <p>
      <Link href="/sample-1-basic-layout">
        <a>Basic Layout</a>
      </Link>
    </p>
  </>
);

export default IndexPage;
