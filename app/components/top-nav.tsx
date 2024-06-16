export function TopNav() {
  return (
    <div className="w-full bg-[#E2E2E2]">
      <nav className="flex items-center p-4 justify-between mx-auto max-w-5xl">
        <div className="flex gap-3">
          <a className="hover:underline underline-offset-4" href="">
            Facebook
          </a>
          <a className="hover:underline underline-offset-4" href="">
            LinkedIn
          </a>
          <a className="hover:underline underline-offset-4" href="">
            Instagram
          </a>
          <a className="hover:underline underline-offset-4" href="">
            Twitter
          </a>
        </div>
        <div>
          <a className="hover:underline underline-offset-4" href="">
            Contatos de Emergência
          </a>
        </div>
      </nav>
    </div>
  );
}
