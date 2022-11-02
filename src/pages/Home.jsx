export default function Home({ categories }) {
  return (
    <>
      {categories.map((cat) => (
        <div>{cat}</div>
      ))}
    </>
  );
}
