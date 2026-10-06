import { StartBackground } from "../compoents/StartBackground";

export const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center bg-background px-4 text-foreground">
      <StartBackground />
      <div className="ide-panel relative z-10 mx-auto w-full max-w-xl">
        <div className="ide-bar">
          <span className="ide-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>~/portfolio — zsh</span>
        </div>
        <div className="px-5 py-6">
          <p className="text-[12px]">
            <span className="prompt-user">jayanga</span>
            <span className="prompt-path">@portfolio:~$</span> open page
          </p>
          <h1 className="mt-4 text-2xl">404 — path not found</h1>
          <p className="copy mt-3 text-sm text-muted-foreground">
            That address is not in this workspace.
          </p>
          <a href="/" className="btn-cmd mt-6">
            cd ~
          </a>
        </div>
      </div>
    </div>
  );
};
