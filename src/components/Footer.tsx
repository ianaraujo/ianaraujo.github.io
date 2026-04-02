export function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-24 mb-10 flex justify-center">
      <span>&copy; {year} Ian Vaz Araujo</span>
    </div>
  );
}
