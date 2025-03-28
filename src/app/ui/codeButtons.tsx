export default function CodeButtons() {
  return (
    <div className="flex gap-3">
    <button className="code-button cpp">
      <img className="h-[53px] w-[53px]" src="/img/cpp.svg" alt="Code" />
    </button>

    <button className="code-button csharp">
      <img className="h-[53px] w-[53px]" src="/img/csharp.svg" alt="Code" />
    </button>

    <button className="code-button go">
      <img className="h-[53px] w-[53px]" src="/img/go.svg" alt="Code" />
    </button>

    <button className="code-button java">
      <img className="h-[53px] w-[53px]" src="/img/java.svg" alt="Code" />
    </button>

    <button className="code-button php">
      <img className="h-[53px] w-[53px]" src="/img/php.svg" alt="Code" />
    </button>

    <button className="code-button python">
      <img className="h-[53px] w-[53px]" src="/img/python.svg" alt="Code" />
    </button>

    <button className="code-button ruby">
      <img className="h-[53px] w-[53px]" src="/img/ruby.svg" alt="Code" />
    </button>

    <button className="code-button rust">
      <img className="h-[53px] w-[53px]" src="/img/rust.svg" alt="Code" />
    </button>

    <button className="code-button typescript code-button--active">
      <img className="h-[53px] w-[53px]" src="/img/typescript.svg" alt="Code" />
    </button>
  </div>
  )
}